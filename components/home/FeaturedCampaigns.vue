<template>
  <div class="mx-24 mb-24">
    <h2 class="w-1/2 px-8 mt-24 text-6xl font-headers">We help build sustainable Islamic communities</h2>
    <div v-if="!loading" class="grid w-full grid-cols-2 grid-rows-2 gap-6 p-8">
      <div class="row-span-2">
        <CampaignCard :campaign="featuredCampaigns[0]" />
      </div>
      <div>
        <CampaignCard :campaign="featuredCampaigns[1]" />
      </div>
      <div>
        <CampaignCard :campaign="featuredCampaigns[2]" />
      </div>
    </div>
  </div>
</template>

<script>
import CampaignCard from '../campaigns/CampaignCard.vue'

export default {
  components: { CampaignCard },
  data() {
    return {
      loading: true,
      featuredCampaigns: [],
      amount: 3,
      sortBy: {
        key: 'date',
        direction: 'dec',
      },
    }
  },
  async mounted() {
    this.loading = true
    this.featuredCampaigns = await this.fetchFeaturedCampaigns()
    this.loading = false
  },
  methods: {
    async fetchFeaturedCampaigns(amount = this.amount, sortBy = this.sortBy) {
      return this.$content('campaigns', this.$i18n.locale)
        .where({ featured: true })
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
