<template>
  <div>
    <b-row class="pb-1">
      <b-col>
        <div v-if="chatmessage.userid != $store.state.auth.user.id" class="media float-left">
          <div class="media-left">
            <div class="media-object">
              <b-img-lazy
                v-if="othericon"
                rounded="circle"
                thumbnail
                class="profilesm p-0 mb-1 inline mr-1 mt-1"
                alt="Profile picture"
                title="Profile"
                :src="othericon"
                @error.native="brokenImage"
              />
            </div>
          </div>
          <div :class="emessage ? 'media-body chatMessage theirs' : 'media-body'">
            <span>
              <span v-if="(chatmessage.secondsago < 60) || (chatmessage.id > chat.lastmsgseen)" class="prewrap"><b>{{ emessage }}</b></span>
              <span v-else class="prewrap forcebreak">{{ emessage }}</span>
              <b-img v-if="chatmessage.image" fluid :src="chatmessage.image.path" lazy rounded />
            </span>
          </div>
        </div>
        <div v-else class="media float-right">
          <div :class="emessage ? 'media-body chatMessage mine' : 'media-body'">
            <span>
              <span v-if="(chatmessage.secondsago < 60) || (chatmessage.id > chat.lastmsgseen)" class="prewrap"><b>{{ emessage }}</b></span>
              <span v-else class="prewrap forcebreak">{{ emessage }}</span>
              <b-img v-if="chatmessage.image" fluid :src="chatmessage.image.path" lazy rounded />
            </span>
          </div>
          <div class="media-right">
            <div class="media-object">
              <b-img-lazy
                rounded="circle"
                thumbnail
                class="profilesm p-0 ml-1 mb-1 inline mt-1"
                alt="Profile picture"
                title="Profile"
                :src="me.profile.turl"
                @error.native="brokenImage"
              />
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped lang="scss">
@import 'color-vars';

.chatMessage {
  border: 1px solid $color-gray--light;
  border-radius: 10px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 4px;
  padding-right: 4px;
  word-wrap: break-word;
  line-height: 1.75;
}

.theirs {
  background-color: $color-white;
}

.mine {
  background-color: $color-green--light;
}
</style>

<script>
import ChatBase from '~/components/ChatBase'

export default {
  extends: ChatBase
}
</script>
