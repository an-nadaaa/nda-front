<template>
  <div class="h-full p-4 overflow-hidden rounded cursor-pointer hover:shadow-md">
    <img
      class="object-cover object-center w-full lg:h-48 md:h-36"
      v-if="campaign.cover"
      :src="campaign.cover"
      alt="cover"
    />
    <div class="flex flex-col">
      <div class="h-2 my-3 bg-gray-300">
        <div class="h-2 bg-yellow-400" :style="`width: ${percentage}%`"></div>
      </div>
      <div class="self-end text-gray-400 slashed-zero">
        Goal: {{ currencySymbol }} {{ Intl.NumberFormat().format(campaign.goal) }}
      </div>
    </div>
    <div>
      <h1 class="mb-3 text-2xl font-medium text-gray-900 font-texts">{{ campaign.title }}</h1>
      <p class="mb-6 leading-relaxed text-gray-500">
        {{ campaign.description }}
      </p>
      <span
        v-for="(tag, i) in campaign.tags"
        :key="i"
        :class="`inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-primary-100 text-primary-800 mx-2 ${
          i === 0 ? '' : 'ltr:mr-4 rtl:ml-4'
        }`"
      >
        {{ tag }}
      </span>

      <!-- <div class="flex flex-wrap items-center">
        <a class="inline-flex items-center text-blue-500 md:mb-2 lg:mb-0"
          >Learn More
          <svg
            class="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
        <span
          class="inline-flex items-center py-1 pr-3 ml-auto mr-3 text-sm leading-none text-gray-400 border-r-2 border-gray-200 lg:ml-auto md:ml-0"
        >
          <svg
            class="w-4 h-4 mr-1"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle></svg
          >1.2K
        </span>
        <span class="inline-flex items-center text-sm leading-none text-gray-400">
          <svg
            class="w-4 h-4 mr-1"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
          >
            <path
              d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
            ></path></svg
          >6
        </span>
      </div> -->
    </div>
  </div>
</template>

<script>
import { CURRENCY_SYMBOL } from '@/config/config.ts'

export default {
  props: {
    campaign: {
      require: true,
      type: Object,
    },
  },
  computed: {
    percentage() {
      return (this.campaign.raised * 100) / this.campaign.goal
    },
    currencySymbol() {
      return CURRENCY_SYMBOL
    },
  },
}
</script>
