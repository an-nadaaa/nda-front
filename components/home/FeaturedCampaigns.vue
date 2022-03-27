<template>
  <div v-if="featuredCauses[0]" class="mb-24 lg:mx-24">
    <h2 class="px-8 mt-24 text-4xl lg:w-3/4 md:text-5xl lg:text-6xl font-headers">
      We help build sustainable Islamic communities
    </h2>
    <div class="grid grid-cols-1 grid-rows-2 gap-6 p-6 xl:p-0 xl:grid-cols-2">
      <FeaturedCauseCard
        :class="`${i === 0 ? 'lg:row-span-2' : ''}`"
        v-for="(cause, i) in featuredCauses"
        :key="i"
        :index="i"
        :cause="cause" />
    </div>
  </div>
  <div v-else class="flex justify-center p-6 mx-auto my-6 font-mono text-xl text-center">
    No Featured campaigns. Create or feature campaigns from the control panel
  </div>
</template>

<script>
import FeaturedCampaignCard from '../campaigns/FeaturedCampaignCard.vue'

export default {
  components: { FeaturedCampaignCard },
  props: ['featuredCauses'],
}
</script>
