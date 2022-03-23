<template>
  <div class="w-full mx-auto">
    <ClientOnly>
      <XIcon
        @click="closePlayer"
        class="absolute right-0 z-50 w-10 h-10 m-3 text-gray-400 cursor-pointer hover:text-gray-500" />
      <Player playsinline ref="player" @vmPlaybackEnded="closePlayer" controls autoplay :style="styles">
        <!-- Provider component is placed here. -->
        <Component :is="provider" :videoId="videoID">
          <source v-if="provider === 'Video'" :data-src="videoLocation" type="video/mp4" />
          <!-- <track
            default
            kind="subtitles"
            src="/media/subs/en.vtt"
            srclang="en"
            label="English"
          />
          <track
            kind="captions"
            src="/media/caps/es.vtt"
            srclang="es"
            label="Spanish"
          /> -->
        </Component>
        <DefaultUi />
      </Player>
    </ClientOnly>
  </div>
</template>

<script>
import { PRIMARY_COLOR } from '~/config/config'
import { XIcon } from 'vue-tabler-icons'
import { Player, DefaultUi, Video, Youtube, Vimeo } from '@vime/vue'

// Default theme. ~960B
import '@vime/core/themes/default.css'
// Optional light theme (extends default). ~400B
import '@vime/core/themes/light.css'

export default {
  components: {
    Player,
    DefaultUi,
    Video,
    Youtube,
    Vimeo,
    XIcon,
  },
  props: ['showPlayer', 'videoLocation'],
  data() {
    return {
      videoID: '',
      iframSrc: '',
      provider: 'Video',
    }
  },
  beforeMount() {
    // detect what provider to use
    const videoRegex = /\/media\/video\/.+\.mp4/
    // regex to detect youtube urls
    const youtubeRegex =
      /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/
    // regex to detect vimeo urls
    const vimeoRegex =
      /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/

    if (videoRegex.test(this.videoLocation)) {
      this.provider = 'Video'
    } else if (youtubeRegex.test(this.videoLocation)) {
      this.provider = 'Youtube'
      // capture the video id from the regex
      this.videoID = this.videoLocation.match(youtubeRegex)[6]
    } else if (vimeoRegex.test(this.videoLocation)) {
      this.provider = 'Vimeo'
      // capture the video id from the regex
      this.videoID = this.videoLocation.match(vimeoRegex)[3]
    }
  },
  methods: {
    closePlayer() {
      // hide when event is fired
      this.player.pause()
      this.$bus.$emit('player:close')
    },
  },
  watch: {
    async showPlayer(val) {
      if (val) {
        const canAutoplay = await this.player.canAutoplay()
        if (!canAutoplay) {
          this.player.play()
        }
      }
    },
  },
  computed: {
    player() {
      return this.$refs.player
    },
    styles() {
      // return the primary color from tailwind config injected :style="`--vm-player-theme: #${primaryColor};`"
      return {
        '--vm-player-theme': PRIMARY_COLOR[500],
      }
    },
  },
}
</script>
