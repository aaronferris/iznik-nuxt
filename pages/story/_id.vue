<template>
  <div>
    <b-row v-if="story" class="m-0">
      <b-col cols="0" md="3" class="d-none d-md-block" />
      <b-col cols="12" md="6" class="p-0">
        <div>
          <p>
            We love to hear why people Freegle - it keeps our volunteers volunteering, and it helps show new freeglers what it's all about.
          </p>
          <p>
            So please tell us your story!
          </p>
          <b-btn variant="success" @click="showAddModal">
            <v-icon name="book-open" /> Tell us your story!
          </b-btn>
        </div>
        <Story :id="story.id" class="mt-2" />
        <b-btn variant="white" to="/stories" class="mt-2">
          View more stories
        </b-btn>
      </b-col>
      <b-col cols="0" md="3" class="d-none d-md-block" />
    </b-row>
    <StoriesAddModal ref="addmodal" />
  </div>
</template>
<style scoped>
</style>
<script>
// TODO MINOR Add infinite scroll
// TODO MINOR Error handling for invalid story id.
import loginOptional from '@/mixins/loginOptional.js'
const StoriesAddModal = () => import('~/components/StoriesAddModal')
const Story = () => import('~/components/Story')

export default {
  components: {
    StoriesAddModal,
    Story
  },
  mixins: [loginOptional],
  data: function() {
    return {
      id: null
    }
  },
  computed: {
    story() {
      return this.$store.getters['stories/get'](this.id)
    }
  },
  created() {
    this.id = this.$route.params.id
  },
  async mounted() {
    await this.$store.dispatch('stories/fetch', {
      id: this.id
    })
  },
  methods: {
    showAddModal() {
      this.$refs.addmodal.show()
    }
  }
}
</script>
