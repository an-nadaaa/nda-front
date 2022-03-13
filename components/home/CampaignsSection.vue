<template>
  <div v-if="campaigns[0]" class="mx-24 mb-24">
    <div class="grid grid-cols-3 gap-6">
      <CampaignCard v-for="(campaign, i) in campaigns" :campaign="campaign" :key="i"></CampaignCard>
    </div>
  </div>
  <div v-else class="flex justify-center p-6 mx-auto my-6 font-mono text-xl text-center">
    No campaigns. Create campaigns from the control panel
  </div>
</template>

<script>
import CampaignCard from '../campaigns/CampaignCard.vue'

export default {
  components: { CampaignCard },
  props: ['campaigns'],
}
</script>
