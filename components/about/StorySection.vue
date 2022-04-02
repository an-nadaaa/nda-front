<template>
  <div class="px-4 py-16 overflow-hidden bg-white xl:py-36 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-max lg:max-w-7xl">
      <div class="relative z-10 mb-8 md:mb-2 md:px-6">
        <div class="text-base max-w-prose lg:max-w-none">
          <h2 class="font-semibold leading-6 tracking-wide uppercase text-primary-600">{{ storySection.title }}</h2>
          <h3 class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            {{ storySection.subtitle }}
          </h3>
        </div>
      </div>
      <div class="relative">
        <svg
          class="absolute top-0 right-0 hidden -mt-20 -mr-20 md:block"
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
          aria-hidden="true">
          <defs>
            <pattern
              id="95e8f2de-6d30-4b7e-8159-f791729db21b"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />
        </svg>
        <svg
          class="absolute bottom-0 left-0 hidden -mb-20 -ml-20 md:block"
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
          aria-hidden="true">
          <defs>
            <pattern
              id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
        </svg>
        <div class="relative md:bg-white md:p-6">
          <div class="lg:grid lg:grid-cols-2 lg:gap-6">
            <div class="prose prose-lg text-gray-500 prose-primary lg:max-w-none">
              An-Nadaa started with the renovation of a single school building in 2014, since then it has grown into an
              organisation that has established Awqaaf and executed many projects and is building the community through
              education and welfare causes. An-Nadaa is an officially registered Non-Profit Organisation by the
              Malaysian and Nigerian governments.
            </div>
            <div class="mt-6 prose prose-lg text-gray-500 prose-primary lg:mt-0">
              Our causes aim to build self-sustaining communities in which people who were once in need of support
              transform into someone who supports and uplifts others. Although we started off in Zaria city in Nigeria
              our vision is to cover the whole country and one day reach the whole of Africa.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as STORY_SECTION from '~/content/site/about/story_section.json'

export default {
  data() {
    return {
      storySection: STORY_SECTION.en,
    }
  },
}
</script>
