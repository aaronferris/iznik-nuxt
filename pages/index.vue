<template>
  <div v-if="!me" class="text-center">
    <b-row class="m-0">
      <b-col cols="12" lg="6" offset-lg="3">
        <h1 class="largest">
          Welcome to Freegle
        </h1>
        <h2>
          Don't throw it away, give it away!
        </h2>
        <h5>
          Got stuff you don't need? We'll find someone to come and take it.
        </h5>
        <h5>
          Looking for something? We'll pair you with someone giving it away.
        </h5>
        <h5>
          All completely free. Freegle: it's like online dating for stuff.
        </h5>
        <b-row class="mt-4">
          <b-col class="half-pad-col-right" cols="6" md="5">
            <nuxt-link to="/give">
              <b-btn block variant="success" class="float-left" size="lg">
                <v-icon name="gift" />&nbsp;Give Stuff
              </b-btn>
            </nuxt-link>
          </b-col>
          <b-col class="half-pad-col-left" offset="0" offset-md="2" cols="6" md="5">
            <nuxt-link to="/find">
              <b-btn block variant="primary" class="float-right" size="lg">
                <v-icon name="search" />&nbsp;Find Stuff
              </b-btn>
            </nuxt-link>
          </b-col>
        </b-row>
        <b-row class="mt-4">
          <b-col cols="12" xl="8" offset-xl="2">
            <b-btn block variant="white" size="lg" to="/explore">
              <v-icon name="eye" />&nbsp;Or just click here to Explore Freegle!
            </b-btn>
          </b-col>
        </b-row>
        <b-row class="mt-4">
          <b-col>
            <b-embed
              type="iframe"
              src="https://www.youtube.com/embed/Gw_wpkbNQY8"
              allowfullscreen
            />
          </b-col>
        </b-row>
        <StoriesLanding class="mt-4" />
        <div style="height:80px" />
      </b-col>
      <b-col cols="0" lg="3">
        <b-row class="d-none d-lg-block">
          <b-col>
            <a href="https://play.google.com/store/apps/details?id=org.ilovefreegle.direct" class="float-right mt-2" alt="Android app" target="_blank">
              <img alt="Freegle Android app on Google Play" title="Freegle Android app on Google Play" class="img-responsive" src="/en-play-badge.png">
            </a>
          </b-col>
        </b-row>
        <b-row class="d-none d-lg-block">
          <b-col>
            <a href="https://itunes.apple.com/gb/app/freegle/id970045029?ls=1&amp;mt=8" class="float-right mt-2" alt="iOS app" target="_blank">
              <img alt="Freegle app for iPhone, iPad, and iPod touch" title="Freegle app for iPhone, iPad, and iPod Touch" class="img-responsive" src="/app-store-black-sm.png">
            </a>
          </b-col>
        </b-row>
        <b-row class="d-none d-sm-block d-lg-none">
          <b-col>
            <a href="https://play.google.com/store/apps/details?id=org.ilovefreegle.direct" class="float-left" alt="Android app" target="_blank">
              <img alt="Freegle Android app on Google Play" title="Freegle Android app on Google Play" class="img-responsive" src="/en-play-badge.png">
            </a>
            <a href="https://itunes.apple.com/gb/app/freegle/id970045029?ls=1&amp;mt=8" class="float-right" alt="iOS app" target="_blank">
              <img alt="Freegle app for iPhone, iPad, and iPod touch" title="Freegle app for iPhone, iPad, and iPod Touch" class="img-responsive" src="/app-store-black-sm.png">
            </a>
          </b-col>
        </b-row>
        <b-row class="d-block d-sm-none">
          <b-col cols="12">
            <a href="https://play.google.com/store/apps/details?id=org.ilovefreegle.direct" alt="Android app" target="_blank">
              <img alt="Freegle Android app on Google Play" title="Freegle Android app on Google Play" class="img-responsive" src="/en-play-badge.png">
            </a>
          </b-col>
          <b-col cols="12">
            <a href="https://itunes.apple.com/gb/app/freegle/id970045029?ls=1&amp;mt=8" alt="iOS app" target="_blank">
              <img alt="Freegle app for iPhone, iPad, and iPod touch" title="Freegle app for iPhone, iPad, and iPod Touch" class="img-responsive" src="/app-store-black-sm.png">
            </a>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <main-footer />
  </div>
</template>

<style scoped lang="scss">
@import 'color-vars';

.half-pad-col-right {
  padding-right: 7.5px;
}

.half-pad-col-left {
  padding-left: 7.5px;
}
</style>

<script>
const StoriesLanding = () => import('~/components/StoriesLanding.vue')
const MainFooter = () => import('~/components/MainFooter.vue')
// TODO MINOR That thing where you prompt people on mobile to install the app.

export default {
  components: {
    StoriesLanding,
    MainFooter
  },

  data: function() {
    return {
      userWatch: null
    }
  },

  computed: {
    me() {
      const user = this.$store.getters['auth/user']
      return user
    }
  },

  mounted() {
    if (process.browser) {
      const user = this.$store.getters['auth/user']

      if (user) {
        this.goHome()
      } else {
        // Set up a watch on the store.  We do this because initially the store hasn't yet been reloaded from local
        // storage, so we don't know if we're logged in. When it does get loaded, this watch will fire.
        this.userWatch = this.$store.watch(
          (state, getters) => {
            const user = this.$store.getters['auth/user']
            return user
          },
          (newValue, oldValue) => {
            if (newValue) {
              if (this.$nuxt.path === '/' || !this.$nuxt.path) {
                this.goHome()
              }
            }
          }
        )
      }
    }
  },
  beforeDestroy() {
    if (this.userWatch) {
      this.userWatch()
    }
  },
  methods: {
    goHome() {
      let route = '/chitchat'

      // Logged in homepage - on client side we want to load the last page, for logged in users.
      try {
        const lastRoute = localStorage.getItem('Iznik>lasthomepage')

        if (!lastRoute || lastRoute === 'news') {
          route = '/chitchat'
        } else {
          route = '/communities'
        }

        if (this.$nuxt.path !== route) {
          this.$router.push(route)
        }
      } catch (e) {
        console.log('Exception', e)
      }
    }
  }
}
</script>
