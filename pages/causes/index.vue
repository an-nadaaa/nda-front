<template>
  <CausesLayout :tags="tags" :categories="categories" :initialCauses="causes" :initialPaginationData="pagination" />
</template>

<script>
import qs from 'qs'

export default {
  layout: 'cause',
  async asyncData({ $axios, error, app, query }) {
    const STRAPI_API = process.env.NODE_ENV === 'production' ? process.env.STRAPI_API : 'http://localhost:5000/api'
    const PAGINATION_SIZE = 12

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
    let causesQuery = ''
    switch (query.s) {
      case 'c':
        // query campaigns
        causesQuery = qs.stringify(
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
              environment: {
                $eq: process.env.NODE_ENV,
              },
              dynamicZone: {
                __component: {
                  $eq: 'causes.campaign',
                },
              },
            },
            sort: ['base.featured:desc', 'createdAt:desc'],
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
        break
      case 'p':
        // query projects
        causesQuery = qs.stringify(
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
              environment: {
                $eq: process.env.NODE_ENV,
              },
              dynamicZone: {
                __component: {
                  $eq: 'causes.project',
                },
              },
            },
            sort: ['base.featured:desc', 'createdAt:desc'],
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
        break
      default:
        // query all
        causesQuery = qs.stringify(
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
              environment: {
                $eq: process.env.NODE_ENV,
              },
            },
            sort: ['base.featured:desc', 'createdAt:desc'],
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
        break
    }
    let causes = []
    let pagination = {}
    await $axios
      .$get(`${STRAPI_API}/causes?locale=${app.i18n.locale}&${causesQuery}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
        },
      })
      .then(({ data, meta }) => {
        causes = data
        pagination = meta
      })
      .catch((err) => {
        error({
          statusCode: 404,
          message: 'No causes found',
        })
      })
    console.log(causes)
    return { tags, categories, causes, pagination }
  },
}
</script>
