<template>
  <main>
    <HeroSection />
    <LogoCloud />
    <HomeStorySection />
    <StatsSection :metrics="metrics" />
    <FeaturedCampaigns :featured-causes="featuredCauses" />
    <CampaignsSection :causes="causes" />
    <DonateSection />
    <TestimonialsSection :testimonials="testimonials" />
    <FAQSection :faqs="faqs" />
  </main>
</template>

<script>
import qs from 'qs'
// https://www.netlifycms.org/docs/nuxt/#authenticating-with-netlify-identity
export default {
  async asyncData({ $axios, $content, error, app }) {
    const STRAPI_API = process.env.NODE_ENV === 'production' ? process.env.STRAPI_API : 'http://localhost:5000/api'
    const sortBy = {
      key: 'date',
      direction: 'dec',
    }
    const FEATURED_COUNT = 3
    const CAMPAIGN_COUNT = 5
    let causes,
      featuredCauses,
      faqs,
      metrics,
      testimonials = []
    const causeQuery = qs.stringify(
      {
        populate: {
          base: {
            populate: '*',
          },
          dynamicZone: {
            populate: '*',
          },
          cover: {
            fields: ['url'],
          },
          tags: {
            fields: ['value'],
          },
          category: {
            fields: ['value'],
          },
        },
        filters: {
          base: {
            featured: {
              $eq: false,
            },
          },
          private: {
            $eq: false,
          },
          environment: {
            $eq: process.env.NODE_ENV,
          },
        },
        sort: ['createdAt:desc'],
        pagination: {
          start: 0,
          limit: CAMPAIGN_COUNT,
        },
      },
      {
        encodeValuesOnly: true,
      }
    )
    const featuredQuery = qs.stringify(
      {
        populate: {
          base: {
            populate: '*',
          },
          dynamicZone: {
            populate: '*',
          },
          cover: {
            fields: ['url'],
          },
          tags: {
            fields: ['value'],
          },
          category: {
            fields: ['value'],
          },
        },
        filters: {
          base: {
            featured: {
              $eq: true,
            },
          },
          private: {
            $eq: false,
          },
          environment: {
            $eq: process.env.NODE_ENV,
          },
        },
        sort: ['createdAt:desc'],
        pagination: {
          start: 0,
          limit: FEATURED_COUNT,
        },
      },
      {
        encodeValuesOnly: true,
      }
    )
    causes = await $axios
      .$get(`${STRAPI_API}/causes?locale=${app.i18n.locale}&${causeQuery}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
        },
      })
      .then(({ data }) => data)
      .catch((err) => {
        error({
          statusCode: 404,
          message: FEATURED_COUNT > 1 ? 'No Featured Campaigns to display' : 'Campaign not found',
        })
      })
    featuredCauses = await $axios
      .$get(`${STRAPI_API}/causes?locale=${app.i18n.locale}&${featuredQuery}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
        },
      })
      .then(({ data }) => data)
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
    return { causes, featuredCauses, faqs, metrics, testimonials }
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    }
  },
}
</script>
