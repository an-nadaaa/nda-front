<template>
  <div class="overflow-hidden bg-white">
    <div class="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="absolute top-0 bottom-0 hidden w-screen lg:block bg-gray-50 left-3/4" />
      <div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
        <div>
          <h2 class="text-base font-semibold tracking-wide uppercase text-primary-600">
            {{ shaykhSection.title }}
          </h2>
          <h3 class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            {{ shaykhSection.subtitle }}
          </h3>
        </div>
      </div>
      <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="relative lg:row-start-1 lg:col-start-2">
          <svg
            class="absolute top-0 right-0 hidden -mt-20 -mr-20 lg:block"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true">
            <defs>
              <pattern
                id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
          </svg>
          <div class="relative mx-auto text-base max-w-prose lg:max-w-none">
            <figure>
              <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
                <img
                  class="object-cover object-center rounded-lg shadow-lg"
                  :src="shaykhSection.imageUrl"
                  alt="Shaykh giving a talk"
                  width="1184"
                  height="1376" />
              </div>
              <!-- <figcaption class="flex mt-3 text-sm text-gray-500">
                <CameraIcon class="flex-none w-5 h-5 text-gray-400" aria-hidden="true" />
                <span class="ml-2">Photograph by ?</span>
              </figcaption> -->
            </figure>
          </div>
        </div>
        <div class="mt-8 lg:mt-0" v-html="shaykhSection.description">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CameraIcon } from 'vue-tabler-icons'
import * as SHAYKH_SECTION from '~/content/site/about/shaykh_section.json'

export default {
  components: {
    CameraIcon,
  },
  data() {
    return {
      shaykhSection: SHAYKH_SECTION.en,
    }
  },
}
</script>
