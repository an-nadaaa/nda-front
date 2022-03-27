<template>
  <section class="bg-contain lg:h-screen" :style="`background-image: url(${bgUrl})`">
    <div v-show="!showPlayer" class="w-full pt-16 pb-20 mx-auto text-center lg:mx-24 max-w-7xl lg:py-48 lg:text-left">
      <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
        <h1 class="text-4xl text-white font-headers sm:text-5xl md:text-6xl xl:text-7xl">
          <span class="block xl:inline">Build your</span>
          <span class="block xl:inline">Hereafter today</span>
        </h1>
        <p class="max-w-md mx-auto mt-3 text-lg text-gray-100 sm:text-xl md:mt-5 md:max-w-3xl">
          You can change the lives of millions by supporting educational and welfare projects of An-Nadaa that are
          bringing a huge positive impact to the community.
        </p>
        <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
          <div class="rounded-md shadow">
            <button
              @click="showPlayer = true"
              class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-gray-700 bg-white border border-transparent rounded-md hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
              <PlayerPlayIcon class="mr-3" />
              Showreel
            </button>
          </div>
          <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <NuxtLink
              :to="localePath('/causes')"
              class="flex items-center justify-center w-full px-8 py-3 text-base text-white border border-transparent rounded-md bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10">
              View Campaigns
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <VideoPlayer v-show="showPlayer" :showPlayer="showPlayer" :videoLocation="videoLocation" />
  </section>
</template>
<script>
import HERO_CONTENT from '~/content/site/home/hero_section.json'
import { PlayerPlayIcon } from 'vue-tabler-icons'

export default {
  components: {
    PlayerPlayIcon,
  },
  data() {
    return {
      bgUrl:
        'https://images.unsplash.com/photo-1500206329404-5057e0aefa48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2352&q=80',
      videoLocation: HERO_CONTENT['en'].location,
      showPlayer: false,
    }
  },
  mounted() {
    this.$bus.$on('player:close', () => {
      this.showPlayer = false
    })
  },
}
</script>
