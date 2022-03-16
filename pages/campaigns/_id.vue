<template>
  <main>
    <section v-if="campaign">
      <nav class="mb-8" aria-label="go back">
        <router-back class="block" />
      </nav>

      <article>
        <img v-if="campaign.cover" class="aspect-video" :src="campaign.cover" />
        <!-- <h6 class="inline px-2 py-1 mr-1 text-sm font-medium text-white rounded-sm bg-gray">{{ post.category }}</h6> -->
        <h1 class="">{{ campaign.title }}</h1>
        <section>
          <div class="product">
            <div class="description">
              <h3>Stubborn Attachments</h3>
              <h5>$20.00</h5>
            </div>
          </div>
          <form action="/create-checkout-session" method="POST">
            <button type="submit" id="checkout-button">Donate</button>
          </form>
        </section>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ app, $content, params, error }) {
    // usally the params is like this:
    // campaigns-[the slug]___[the locale]

    // get the last two characters
    const campaign = await $content('campaigns', app.i18n.locale)
      .where({ slug: params.slug })
      .fetch()
      .then((r) => r[0])
      .catch((err) => {
        error({ statusCode: 404, message: 'Campaign not found' })
      })
    return { campaign }
  },
  mounted() {
    console.log(this.campaign)
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    },
  },
}
</script>
