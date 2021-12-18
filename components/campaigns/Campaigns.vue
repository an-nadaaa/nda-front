<template>
  <ul v-if="campaigns.length > 0" class="cards">
    <li v-for="(campaign, index) in campaigns" :key="index">
      <nuxt-link :to="`campaigns/campaigns-${campaign.slug}___${$i18n.locale}`">
        <campaign-card :campaign="campaign"></campaign-card>
      </nuxt-link>
    </li>
  </ul>
  <p v-else class="max-w-5xl mx-auto">
    {{ amount > 1 ? 'Posts not found' : 'Post not found' }}
  </p>
</template>

<script>
import CampaignCard from './CampaignCard.vue'

export default {
  components: { CampaignCard },
  name: 'Campaigns',
  props: {
    amount: {
      // ? https://content.nuxtjs.org/fetching#limitn
      type: Number,
      default: 10,
      validator: (val) => val >= 0 && val < 100,
    },
    sortBy: {
      // ? https://content.nuxtjs.org/fetching#sortbykey-direction
      type: Object,
      default: () => ({
        key: 'slug',
        direction: 'asc', // you probably want 'asc' here
      }),
      validator: (obj) => typeof obj.key === 'string' && typeof obj.direction === 'string',
    },
  },
  data() {
    return {
      campaigns: [],
    }
  },
  async mounted() {
    this.campaigns = await this.fetchCampaigns()
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    },
    async fetchCampaigns(amount = this.amount, sortBy = this.sortBy) {
      return this.$content('campaigns', this.$i18n.locale)
        .sortBy(sortBy.key, sortBy.direction)
        .limit(amount)
        .fetch()
        .catch((err) => {
          error({ statusCode: 404, message: amount > 1 ? 'No Campaigns to display' : 'Campaign not found' })
        })
    },
  },
}
</script>
