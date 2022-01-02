<template>
  <div class="mx-24 mb-24">
    <div v-if="!loading" class="grid grid-cols-3 gap-6">
      <CampaignCard v-for="(campaign, i) in campaigns" :campaign="campaign" :key="i"></CampaignCard>
    </div>
  </div>
</template>

<script>
import CampaignCard from '../campaigns/CampaignCard.vue'

export default {
  components: { CampaignCard },
  props: ['campaigns'],
}
</script>
