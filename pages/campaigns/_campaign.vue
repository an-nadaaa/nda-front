<template>
  <main>
    <section v-if="campaign">
      <nav class="mb-8" aria-label="go back">
        <router-back class="block" />
      </nav>

      <article>
        <img v-if="campaign.cover" class="cover-image" :src="campaign.cover" />
        <!-- <h6 class="inline py-1 px-2 mr-1 bg-gray text-white text-sm font-medium rounded-sm">{{ post.category }}</h6> -->
        <h1 class="">{{ campaign.title }}</h1>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let campaign
    try {
      campaign = await $content('campaigns', params.campaign).fetch()
    } catch (e) {
      error({ message: 'campaign not found' })
    }
    return { campaign }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    }
  }
}
</script>
