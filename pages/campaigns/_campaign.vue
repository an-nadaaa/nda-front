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
        <div class="w-full">
          <button class="mx-auto bg-yellow-300 text-orange-600 border border-orange-600 px-5 py-2">Donate</button>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    // usally the params is like this:
    // campaigns-[the slug]___[the locale]

    // get the last two crachters
    const locale = params.campaign.slice(-2)
    const slug = params.campaign.slice(10, -5)
    const path = `campaigns/${locale}/${slug}`
    let campaign
    try {
      campaign = await $content(path).fetch()
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
