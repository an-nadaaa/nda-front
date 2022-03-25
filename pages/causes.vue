<template>
  <CausesLayout :tags="tags" :categories="categories" :initialCampaigns="campaigns" :initialProjects="projects" />
</template>

<script>
import qs from 'qs'

export default {
  layout: 'cause',
  async asyncData({ $axios, error, app }) {
    const STRAPI_API = process.env.NODE_ENV === 'production' ? process.env.STRAPI_API : 'http://localhost:5000/api'
    const PAGINATION_SIZE = 12
    const campaignQuery = qs.stringify(
      {
        populate: {
          cover: {
            fields: ['url'],
          },
          tags: {
            fields: ['value'],
          },
          natures: {
            fields: ['value'],
          },
        },
        filters: {
          environment: {
            $eq: process.env.NODE_ENV,
          },
        },
        sort: ['createdAt:desc'],
        pagination: {
          page: 1,
          pageSize: PAGINATION_SIZE,
          withCount: true,
        },
      },
      {
        encodeValuesOnly: true,
      }
    )

    const tags = await $axios
      .$get(`${STRAPI_API}/tags?locale=${app.i18n.locale}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
        },
      })
      .then(({ data }) => data)
      .catch((err) => {
        error({
          statusCode: 404,
          message: 'Error fetching Tags',
        })
      })

    const categories = await $axios
      .$get(`${STRAPI_API}/natures?locale=${app.i18n.locale}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
        },
      })
      .then(({ data }) => data)
      .catch((err) => {
        error({
          statusCode: 404,
          message: 'Error fetching Categories',
        })
      })

    const campaigns = await $axios
      .$get(`${STRAPI_API}/campaigns?locale=${app.i18n.locale}&${campaignQuery}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
        },
      })
      .then(({ data }) => data)
      .catch((err) => {
        error({
          statusCode: 404,
          message: 'No campaigns found',
        })
      })
    console.log({ campaigns })
    const projects = []

    return { tags, categories, campaigns, projects }
  },
}
</script>
