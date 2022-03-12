<template>
  <div v-if="campaigns[0]" class="mx-24 mb-24">
    <div class="grid grid-cols-3 gap-6">
      <CampaignCard v-for="(campaign, i) in campaigns" :campaign="campaign" :key="i"></CampaignCard>
    </div>
  </div>
  <div v-else>No campaigns. Create campaigns from the control panel</div>
</template>

<script>
import CampaignCard from '../campaigns/CampaignCard.vue'

export default {
  components: { CampaignCard },
  props: ['campaigns'],
}
</script>
