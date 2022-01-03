<template>
  <div class="mx-24 mb-24">
    <h2 class="w-1/2 px-8 mt-24 text-6xl font-headers">We help build sustainable Islamic communities</h2>
    <div class="grid w-full grid-cols-2 grid-rows-2 gap-6 p-8">
      <div class="row-span-2">
        <FeaturedCampaignCard :campaign="featuredCampaigns[0]" :index="0" />
      </div>
      <div>
        <FeaturedCampaignCard :campaign="featuredCampaigns[1]" :index="1" />
      </div>
      <div>
        <FeaturedCampaignCard :campaign="featuredCampaigns[2]" :index="2" />
      </div>
    </div>
  </div>
</template>

<script>
import FeaturedCampaignCard from '../campaigns/FeaturedCampaignCard.vue'

export default {
  components: { FeaturedCampaignCard },
  props: ['featuredCampaigns'],
}
</script>
