<template>
  <div v-if="story">
    <b-modal
      :id="'storiesShareModal-' + story.id"
      :title="'Share &quot;' + story.headline + '&quot;'"
      size="lg"
      no-stacking
    >
      <template slot="default">
        <p><a target="_blank" :href="story.url">{{ story.url }}</a></p>
        <social-sharing
          :url="story.url"
          :title="'Sharing ' + story.headline"
          :description="story.story"
          hashtags="freegle,free,reuse"
          inline-template
        >
          <div>
            <p>You can share using these buttons:</p>
            <b-list-group horizontal class="flex-wrap">
              <b-list-group-item>
                <network network="facebook">
                  <b-btn variant="white">
                    <v-icon name="brands/facebook" /> Facebook
                  </b-btn>
                </network>
              </b-list-group-item>
              <b-list-group-item>
                <network network="twitter">
                  <b-btn variant="white">
                    <v-icon name="brands/twitter" /> Twitter
                  </b-btn>
                </network>
              </b-list-group-item>
              <b-list-group-item>
                <network network="whatsapp">
                  <b-btn variant="white">
                    <v-icon name="brands/whatsapp" /> Whatsapp
                  </b-btn>
                </network>
              </b-list-group-item>
              <b-list-group-item>
                <network network="pinterest">
                  <b-btn variant="white">
                    <v-icon name="brands/pinterest" /> Pinterest
                  </b-btn>
                </network>
              </b-list-group-item>
              <b-list-group-item>
                <network network="telegram">
                  <b-btn variant="white">
                    <v-icon name="brands/telegram" /> Telegram
                  </b-btn>
                </network>
              </b-list-group-item>
              <b-list-group-item>
                <network network="sms">
                  <b-btn variant="white">
                    <v-icon name="comment" /> SMS
                  </b-btn>
                </network>
              </b-list-group-item>
              <b-list-group-item>
                <network network="email">
                  <b-btn variant="white">
                    <v-icon name="envelope" /> Email
                  </b-btn>
                </network>
              </b-list-group-item>
              <b-list-group-item>
                <network network="skype">
                  <b-btn variant="white">
                    <v-icon name="brands/skype" /> Skype
                  </b-btn>
                </network>
              </b-list-group-item>
              <b-list-group-item>
                <network network="googleplus">
                  <b-btn variant="white">
                    <v-icon name="brands/google-plus" /> Google+
                  </b-btn>
                </network>
              </b-list-group-item>
            </b-list-group>
          </div>
        </social-sharing>
      </template>
      <template slot="modal-footer" slot-scope="{ ok, cancel }">
        <b-button variant="white" @click="cancel">
          Close
        </b-button>
      </template>
    </b-modal>
  </div>
</template>
<script>
export default {
  props: {
    story: {
      type: Object,
      required: true
    }
  }
}
</script>
