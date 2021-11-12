<template>
  <section class="h-screen bg-contain" :style="`background-image: url(${bgUrl})`">
    <div class="w-full pt-16 pb-20 mx-24 text-center max-w-7xl lg:py-48 lg:text-left">
      <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          <span class="block xl:inline">Build your</span>
          <span class="block xl:inline">Hearafter today!</span>
        </h1>
        <p class="max-w-md mx-auto mt-3 text-lg text-gray-100 sm:text-xl md:mt-5 md:max-w-3xl">
          An-Nadaa is bringing a huge positive impact for the underprivileged communities in Nigeria through our
          projects.
        </p>
        <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
          <div class="rounded-md shadow">
            <a
              href="#"
              class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-gray-700 bg-white border border-transparent rounded-md  hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
            >
              <PlayerPlayIcon class="mr-3" />
              Showreel
            </a>
          </div>
          <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a
              href="#"
              class="flex items-center justify-center w-full px-8 py-3 text-base text-white border border-transparent rounded-md  bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
      <img
        class="absolute inset-0 object-cover w-full h-full"
        src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
        alt=""
      />
    </div> -->
  </section>
</template>

<script>
import { PlayerPlayIcon } from 'vue-tabler-icons'

export default {
  components: {
    PlayerPlayIcon,
  },
  data() {
    return {
      bgUrl:
        'https://images.unsplash.com/photo-1500206329404-5057e0aefa48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2352&q=80',
    }
  },
}
</script>
