<template>
  <main>
    <section v-if="campaigns" class="w-full max-w-5xl mx-auto">
      <h1 class="title">Our Campaigns</h1>
      <campaigns :amount="10" />
    </section>
    <p v-else class="max-w-5xl mx-auto">
      {{ amount > 1 ? 'Campaigns not found' : 'Campaign not found' }}
    </p>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let campaigns
    try {
      campaigns = await $content('campaigns').fetch()
    } catch (e) {
      error({ message: 'Campaigns not found' })
    }
    return { campaigns }
  }
}
</script>
