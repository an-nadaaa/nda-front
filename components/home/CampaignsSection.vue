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
  data() {
    return {
      campaigns: [],
      loading: true,
      amount: 6,
      sortBy: {
        key: 'date',
        direction: 'dec',
      },
    }
  },
  async mounted() {
    this.loading = true
    this.campaigns = await this.fetchCampaigns()
    this.loading = false
  },
  methods: {
    async fetchCampaigns(amount = this.amount, sortBy = this.sortBy) {
      return this.$content('campaigns', this.$i18n.locale)
        .where({ featured: false })
        .sortBy(sortBy.key, sortBy.direction)
        .limit(amount)
        .fetch()
        .catch((err) => {
          error({ statusCode: 404, message: amount > 1 ? 'No Featured Campaigns to display' : 'Campaign not found' })
        })
    },
  },
}
</script>
