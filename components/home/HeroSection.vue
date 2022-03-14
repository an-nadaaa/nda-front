<template>
  <section class="h-screen bg-contain" :style="`background-image: url(${bgUrl})`">
    <div v-show="!showPlayer" class="w-full pt-16 pb-20 mx-24 text-center max-w-7xl lg:py-48 lg:text-left">
      <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
        <h1 class="text-4xl tracking-tight text-white font-headers sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          <span class="block xl:inline">Build your</span>
          <span class="block xl:inline">Hearafter today!</span>
        </h1>
        <p class="max-w-md mx-auto mt-3 text-lg text-gray-100 sm:text-xl md:mt-5 md:max-w-3xl">
          An-Nadaa is bringing a huge positive impact for the underprivileged communities in Nigeria through our
          projects.
        </p>
        <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
          <div class="rounded-md shadow">
            <button
              @click="openPlayer"
              class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-gray-700 bg-white border border-transparent rounded-md  hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
            >
              <PlayerPlayIcon class="mr-3" />
              Showreel
            </button>
          </div>
          <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <NuxtLink
              :to="localePath('/causes')"
              class="flex items-center justify-center w-full px-8 py-3 text-base text-white border border-transparent rounded-md  bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
            >
              View Campaigns
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div v-show="showPlayer" class="w-full mx-auto">
      <ClientOnly>
        <XIcon
          @click="closePlayer"
          class="absolute right-0 z-10 w-10 h-10 m-3 text-gray-400 cursor-pointer hover:text-gray-500"
        />
        <Player playsinline ref="player" @vmPlaybackEnded="closePlayer" controls autoplay>
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
          <Ui>
            <!-- UI components are placed here. -->
          </Ui>
        </Player>
      </ClientOnly>
    </div>
  </section>
</template>

<script>
import * as HERO_CONTENT from '~/content/site/home/hero_section.json'
import { PlayerPlayIcon, XIcon } from 'vue-tabler-icons'
import { Player, Ui, Video, Youtube, Vimeo } from '@vime/vue'
// Default theme. ~960B
import '@vime/core/themes/default.css'
// Optional light theme (extends default). ~400B
import '@vime/core/themes/light.css'

export default {
  components: {
    Player,
    Ui,
    Video,
    Youtube,
    Vimeo,
    PlayerPlayIcon,
    XIcon,
  },
  data() {
    return {
      bgUrl:
        'https://images.unsplash.com/photo-1500206329404-5057e0aefa48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2352&q=80',
      // videoLocation: HERO_CONTENT.location,
      videoID: '',
      provider: 'Video',
      showPlayer: false,
      videoLocation: 'https://www.youtube.com/watch?v=MT01KVgr5us',
    }
  },
  beforeCreate() {
    // detect what provider to use
    const videoRegex = /\/media\/video\/.+\.mp4/
    // regex to detect youtube urls
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i
    // regex to detect vimeo urls
    const vimeoRegex =
      /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/

    if (videoRegex.test(this.videoLocation)) {
      this.provider = 'Video'
    } else if (youtubeRegex.test(this.videoLocation)) {
      this.provider = 'YouTube'
      // capture the video id from the regex
      this.videoID = this.videoLocation.match(youtubeRegex)[1]
    } else if (vimeoRegex.test(this.videoLocation)) {
      this.provider = 'Vimeo'
      // capture the video id from the regex
      this.videoID = this.videoLocation.match(vimeoRegex)[3]
    }
  },
  methods: {
    async openPlayer() {
      this.showPlayer = true
      const canAutoplay = await this.player.canAutoplay()
      if (!canAutoplay) {
        this.player.play()
      }
    },
    closePlayer() {
      // hide when event is fired
      this.player.pause()
      this.showPlayer = false
    },
  },
  computed: {
    player() {
      return this.$refs.player
    },
  },
}
</script>
