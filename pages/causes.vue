<template>
  <CausesLayout :tags="tags" :categories="categories"></CausesLayout>
</template>

<script>
export default {
  async asyncData({ $axios, error, app }) {
    const STRAPI_API = process.env.NODE_ENV === 'production' ? process.env.STRAPI_API : 'http://localhost:5000/api'

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

    return { tags, categories }
  },
}
</script>
