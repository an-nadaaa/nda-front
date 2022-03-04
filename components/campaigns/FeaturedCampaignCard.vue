<template>
  <NuxtLink
    :class="`h-full overflow-hidden ${index !== 0 ? 'flex' : ''}`"
    :to="localePath(`/campaigns/${campaign.id}`)"
  >
    <div :class="`${index !== 0 ? 'grow w-1/2' : ''}`">
      <img
        class="object-cover w-full mb-6 aspect-video h-96"
        v-if="campaign.attributes.cover.data.attributes.url"
        :src="campaign.attributes.cover.data.attributes.url"
        alt="cover"
      />

      <div class="flex flex-col">
        <div class="h-2 my-3 bg-gray-300">
          <div class="h-2 bg-yellow-400" :style="`width: ${percentage}%`"></div>
        </div>
        <div class="self-end text-gray-400 slashed-zero">
          Goal: {{ currencySymbol }} {{ Intl.NumberFormat().format(campaign.attributes.goal) }}
        </div>
      </div>
    </div>
    <div :class="`${index !== 0 ? 'mx-6 w-1/2' : ''}`">
      <h1 class="mb-3 text-2xl font-medium text-gray-900 font-texts">{{ campaign.attributes.title }}</h1>
      <p class="mb-6 leading-relaxed text-gray-500 line-clamp-3">
        {{ campaign.attributes.description }}
      </p>
      <span
        v-for="(tag, i) in campaign.attributes.tags.tags"
        :key="i"
        :class="`inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-primary-100 text-primary-800 mx-2 ${
          i === 0 ? '' : 'ltr:mr-4 rtl:ml-4'
        }`"
      >
        {{ tag }}
      </span>
    </div>
  </NuxtLink>
</template>

<script>
import { CURRENCY_SYMBOL } from '@/config/config.ts'

export default {
  props: {
    campaign: {
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
      return (this.campaign.attributes.raised * 100) / this.campaign.attributes.goal
    },
    currencySymbol() {
      return CURRENCY_SYMBOL
    },
  },
}
</script>
