<template>
  <main>
    <HeroSection />
    <LogoCloud />
    <StorySection />
    <StatsSection :metrics="metrics" />
    <FeaturedCampaigns :featured-campaigns="featuredCampaigns" />
    <CampaignsSection :campaigns="campaigns" />
    <DonateSection />
    <TestimonialsSection :testimonials="testimonials" />
    <FAQSection :faqs="faqs" />
  </main>
</template>

<script>
import FAQSection from '~/components/home/FAQSection.vue'
import LogoCloud from '~/components/home/LogoCloud.vue'
import HeroSection from '~/components/home/HeroSection.vue'
import StatsSection from '~/components/home/StatsSection.vue'
import FeaturedCampaigns from '~/components/home/FeaturedCampaigns.vue'
import CampaignsSection from '~/components/home/CampaignsSection.vue'
import StorySection from '~/components/home/StorySection.vue'
import DonateSection from '~/components/home/DonateSection.vue'
import TestimonialsSection from '~/components/home/TestimonialsSection.vue'
// https://www.netlifycms.org/docs/nuxt/#authenticating-with-netlify-identity
export default {
  async asyncData({ $content, error, app }) {
    const sortBy = {
      key: 'date',
      direction: 'dec',
    }
    const FEATURED_COUNT = 3
    const CAMPAIGN_COUNT = 6
    let campaigns,
      featuredCampaigns,
      faqs,
      metrics,
      testimonials = await $content('testimonials', app.i18n.locale)
        .fetch()
        .catch((err) => {
          error({ statusCode: 404, message: 'No testimonials to display' })
        })
    campaigns = await $content('campaigns', app.i18n.locale)
      .where({ featured: false })
      .sortBy(sortBy.key, sortBy.direction)
      .limit(CAMPAIGN_COUNT)
      .fetch()
      .catch((err) => {
        error({
          statusCode: 404,
          message: FEATURED_COUNT > 1 ? 'No Featured Campaigns to display' : 'Campaign not found',
        })
      })
    featuredCampaigns = await $content('campaigns', app.i18n.locale)
      .where({ featured: true })
      .sortBy(sortBy.key, sortBy.direction)
      .limit(FEATURED_COUNT)
      .fetch()
      .catch((err) => {
        error({
          statusCode: 404,
          message: FEATURED_COUNT > 1 ? 'No Campaigns to display' : 'Campaign not found',
        })
      })
    faqs = await $content('faq', app.i18n.locale)
      .sortBy(sortBy.key, sortBy.direction)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: 'No FAQs to display' })
      })
    metrics = await $content('metrics', app.i18n.locale)
      .sortBy(sortBy.key, sortBy.direction)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: 'No Metrics to display' })
      })
    testimonials = await $content('testimonials', app.i18n.locale)
      .sortBy(sortBy.key, sortBy.direction)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: 'No Testimonials to display' })
      })
    return { campaigns, featuredCampaigns, faqs, metrics, testimonials }
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    }
  },
  components: {
    FAQSection,
    LogoCloud,
    HeroSection,
    StatsSection,
    StorySection,
    DonateSection,
    TestimonialsSection,
    FeaturedCampaigns,
    CampaignsSection,
  },
}
</script>
