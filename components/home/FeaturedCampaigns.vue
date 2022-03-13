<template>
  <div v-if="featuredCampaigns[0]" class="mx-24 mb-24">
    <h2 class="w-1/2 px-8 mt-24 text-6xl font-headers">We help build sustainable Islamic communities</h2>
    <div class="grid w-full grid-cols-2 grid-rows-2 gap-6 p-8">
      <div v-for="(campaign, i) in featuredCampaigns" :key="i" :class="`${i === 0 ? 'row-span-2' : ''}`">
        <FeaturedCampaignCard :campaign="campaign" :index="i" />
      </div>
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
  props: ['featuredCampaigns'],
}
</script>
