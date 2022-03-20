<template>
  <NuxtLink
    class="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl"
    :to="localePath(`/campaigns/${campaign.id}`)">
    <div class="flex-shrink-0">
      <img
        class="object-cover w-full h-64"
        v-if="campaign.attributes.cover.data.attributes.url"
        :src="campaign.attributes.cover.data.attributes.url"
        alt="" />
    </div>

    <div class="bottom-0 flex-col justify-between flex-1 w-full p-6 bg-white bg-center bg-cover">
      <div class="flex-1">
        <span
          v-for="(tag, i) in campaign.attributes.tags.data"
          :key="i"
          :class="`inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-primary-100 text-primary-800  ${
            i === 0 ? '' : 'ltr:mr-4 rtl:ml-4 mx-2'
          }`">
          {{ tag.attributes.value }}
        </span>

        <div class="block mt-2">
          <p class="text-xl font-semibold text-gray-900">
            {{ campaign.attributes.title }}
          </p>
          <p class="mt-3 text-base text-gray-500">
            {{ campaign.attributes.description }}
          </p>
        </div>
      </div>

      <div class="h-2 my-3 overflow-hidden bg-gray-200 rounded-full">
        <div class="h-2 bg-yellow-400 rounded-full" :style="`width: ${percentage}%`"></div>
      </div>

      <div class="flex items-center mt-6">
        <!-- <div class="flex-shrink-0">
                <a :href="post.author.href">
                  <span class="sr-only">{{ post.author.name }}</span>
                  <img class="w-10 h-10 rounded-full" :src="post.author.imageUrl" alt="" />
                </a>
              </div> -->
        <div>
          <!-- <p class="text-sm font-medium text-gray-900">
                  <div class="hover:underline">
                    {{ percentage }} %
                  </div>
                </p> -->
          <div class="flex space-x-1 text-base text-gray-500">
            <!-- <time :datetime="post.datetime">
                    {{ post.date }}
                  </time> -->
            <span class="font-semibold">
              {{ currencySymbol }}{{ Intl.NumberFormat().format(campaign.attributes.raised) }}
            </span>
            <span> of </span>
            <span> {{ currencySymbol }}{{ Intl.NumberFormat().format(campaign.attributes.goal) }} Raised </span>
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
    campaign: {
      require: true,
      type: Object,
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
