<template>
  <NuxtLink :to="localePath(`/causes/${cause.id}`)" :class="`relative bg-white ${index !== 2 ? 'pt-16' : ''}`">
    <div
      v-if="index !== 2"
      aria-hidden="true"
      :class="`hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen pointer-events-none`">
      <svg
        class="absolute -ml-3 top-8 left-1/2 lg:-right-8 lg:left-auto lg:top-12"
        width="404"
        height="392"
        fill="none"
        viewBox="0 0 404 392">
        <defs>
          <pattern
            id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
      </svg>
    </div>
    <div :class="`relative mx-auto lg:max-w-none h-full ${index !== 2 ? 'lg:pt-20' : ''}`">
      <!-- Testimonial card-->
      <div class="relative flex flex-col justify-end h-full pt-64 pb-10 overflow-hidden shadow-xl rounded-2xl">
        <img
          class="absolute inset-0 object-cover w-full h-full"
          v-if="cause.attributes.cover.data.attributes.url"
          :src="cause.attributes.cover.data.attributes.url"
          alt="Cover image" />
        <div class="absolute inset-0 bg-primary-600 opacity-20 mix-blend-multiply" />
        <div class="absolute inset-0 opacity-60 bg-gradient-to-t from-primary-700 via-primary-700" />
        <div class="relative px-8 pb-10">
          <div>
            <span
              v-for="(tag, i) in cause.attributes.tags.data"
              :key="i"
              :class="`inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-primary-100 text-primary-800  ${
                i === 0 ? '' : 'ltr:mr-4 rtl:ml-4 mx-2'
              }`">
              {{ tag.attributes.value }}
            </span>
          </div>
          <div :class="`mt-3 text-xl font-semibold text-white  ${index === 0 ? 'lg:text-5xl' : 'lg:text-3xl'}`">
            {{ cause.attributes.title }}
          </div>
          <section class="mt-8">
            <div
              v-if="cause.attributes.dynamicZone[0].goal && cause.attributes.dynamicZone[0].goal !== 0"
              class="h-2 my-3 overflow-hidden bg-gray-200 rounded-full">
              <div class="h-2 bg-yellow-400 rounded-full" :style="`width: ${percentage}%`"></div>
            </div>

            <div class="relative text-lg font-medium text-white md:flex-grow">
              <p class="relative line-clamp-4">
                {{ cause.attributes.description }}
              </p>
            </div>

            <footer class="mt-4">
              <p
                v-if="cause.attributes.dynamicZone[0].goal && cause.attributes.dynamicZone[0].goal !== 0"
                class="text-base text-primary-200">
                <span class="font-semibold text-primary-50">
                  {{ currencySymbol }}{{ Intl.NumberFormat().format(cause.attributes.dynamicZone[0].raised) }}
                </span>
                <span> of </span>
                <span>
                  {{ currencySymbol }}{{ Intl.NumberFormat().format(cause.attributes.dynamicZone[0].goal) }} Raised
                </span>
              </p>
              <div v-else class="font-semibold text-primary-50">
                Cost of {{ cause.attributes.dynamicZone[0].donation.action }}
                {{ cause.attributes.dynamicZone[0].donation.value }}
                {{ cause.attributes.dynamicZone[0].donation.subject }}:
                {{ cause.attributes.dynamicZone[0].donation.cost }}
              </div>
            </footer>
          </section>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
import { CURRENCY_SYMBOL } from '@/config/config'

export default {
  props: {
    cause: {
      require: true,
      type: Object,
    },
    index: {
      require: true,
      type: Number,
    },
  },
  computed: {
    percentage() {
      return this.cause.attributes.dynamicZone[0].goal
        ? (this.cause.attributes.dynamicZone[0].raised * 100) / this.cause.attributes.dynamicZone[0].goal
        : 0
    },
    currencySymbol() {
      return CURRENCY_SYMBOL
    },
  },
}
</script>
