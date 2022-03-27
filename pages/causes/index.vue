<template>
  <CausesLayout
    :tags="tags"
    :categories="categories"
    :initialCampaigns="campaigns"
    :initialProjects="projects"
    :initialCampaignsPagination="campaignsPagination"
    :initialProjectsPagination="projectsPagination" />
</template>

<script>
import qs from 'qs'

export default {
  layout: 'cause',
  async asyncData({ $axios, error, app, query }) {
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
        sort: ['featured:desc', 'createdAt:desc'],
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
    switch (query.s) {
      case 'c':
        // query campaigns
        break
      case 'p':
        // query projects
        break
      default:
        // query all
        break
    }
    let campaigns = []
    let campaignsPagination = {}
    let projects = []
    let projectsPagination = {}
    await $axios
      .$get(`${STRAPI_API}/campaigns?locale=${app.i18n.locale}&${campaignQuery}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
        },
      })
      .then(({ data, meta }) => {
        campaigns = data
        campaignsPagination = meta
      })
      .catch((err) => {
        error({
          statusCode: 404,
          message: 'No campaigns found',
        })
      })
    // TODO: add projects query
    return { tags, categories, campaigns, projects, campaignsPagination, projectsPagination }
  },
}
</script>
