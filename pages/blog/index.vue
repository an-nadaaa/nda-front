<template>
  <main>
    <section v-if="posts" class="w-full max-w-5xl mx-auto">
      <h1 class="title">Blog</h1>
      <posts post-type="blog" :amount="10" />
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let posts
    try {
      posts = await $content('blog').fetch()
    } catch (e) {
      error({ message: 'Blog posts not found' })
    }
    return { posts }
  },
  head() {
    return {
      title: 'Blog | An-nadaa education foundation',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Check our blog posts about charity, education, your donations positive impact and more !',
        },
      ],
    }
  },
}
</script>
