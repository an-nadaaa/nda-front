<template>
  <NuxtLink
    class="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl"
    :to="localePath(`/causes/${cause.id}`)">
    <div class="flex-shrink-0">
      <img
        class="object-cover w-full h-64"
        v-if="cause.attributes.cover.data.attributes.url"
        :src="cause.attributes.cover.data.attributes.url"
        alt="Cover image" />
    </div>

    <div class="bottom-0 flex-col justify-between flex-1 w-full p-6 bg-white bg-center bg-cover">
      <div class="flex-1">
        <span
          v-for="(tag, i) in cause.attributes.tags.data"
          :key="i"
          :class="`inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-primary-100 text-primary-800  ${
            i === 0 ? '' : 'ltr:mr-4 rtl:ml-4 mx-2'
          }`">
          {{ tag.attributes.value }}
        </span>

        <div class="block mt-2">
          <p class="text-xl font-semibold text-gray-900">
            {{ cause.attributes.base.title }}
          </p>
          <p class="mt-3 text-base text-gray-500">
            {{ cause.attributes.base.description }}
          </p>
        </div>
      </div>

      <div
        v-if="cause.attributes.dynamicZone[0].goal && cause.attributes.dynamicZone[0].goal !== 0"
        class="h-2 my-3 overflow-hidden bg-gray-200 rounded-full">
        <div class="h-2 bg-yellow-400 rounded-full" :style="`width: ${percentage}%`"></div>
      </div>

      <div class="flex items-center mt-6">
        <div>
          <div
            v-if="cause.attributes.dynamicZone[0].goal && cause.attributes.dynamicZone[0].goal !== 0"
            class="flex space-x-1 text-base text-gray-500">
            <span class="font-semibold">
              {{ currencySymbol }}{{ Intl.NumberFormat().format(cause.attributes.dynamicZone[0].raised) }}
            </span>
            <span> of </span>
            <span>
              {{ currencySymbol }}{{ Intl.NumberFormat().format(cause.attributes.dynamicZone[0].goal) }} Raised
            </span>
          </div>
          <div v-else class="flex space-x-1 text-base text-gray-500">
            Cost of {{ cause.attributes.dynamicZone[0].donation.action }}
            {{ cause.attributes.dynamicZone[0].donation.value }} {{ cause.attributes.dynamicZone[0].donation.subject }}:
            {{ cause.attributes.dynamicZone[0].donation.cost }}
          </div>
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
