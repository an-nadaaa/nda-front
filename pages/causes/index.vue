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
              private: {
                $eq: false,
              },
              // dynamicZone: {
              //   __component: {
              //     $eq: 'causes.campaign',
              //   },
              // },
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
        break
      case 'p':
        // query projects
        causesQuery = qs.stringify(
          {
            populate: {
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
              private: {
                $eq: false,
              },
              // dynamicZone: {
              //   __component: {
              //     $eq: 'causes.project',
              //   },
              // },
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
        break
      default:
        // query all
        causesQuery = qs.stringify(
          {
            populate: {
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
              private: {
                $eq: false,
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
        pagination = meta.pagination
      })
      .catch((err) => {
        error({
          statusCode: 404,
          message: 'No causes found',
        })
      })
    return { tags, categories, causes, pagination }
  },
  mounted() {
    this.$segment.page('Causes')
  },
  // addresses the most common questions
  head() {
    return {
      title: 'Campaigns | An-nadaa educational foundation',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Donate to change the lives of millions of underprivilged muslims in Nigeria, by supporting educational and welfare projects of An-Nadaa',
        },
      ],
    }
  },
}
</script>
