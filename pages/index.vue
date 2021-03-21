<template>
  <main>
    <section class="self-center flex flex-col flex-1 items-center justify-center">
      <h1 class="title text-cente bg-blue-500">An-Nadaa website</h1>
      <img src="~/static/logo.png" />
      <h2 class="subtitle text-center">Work in progress</h2>
    </section>

    <section class="mt-8">
      <h3 class="text-primary-600 dark:text-primary-400 max-w-5xl mx-auto">Active Projects</h3>
      <posts post-type="blog" :amount="1" />
    </section>
    <section class="mt-8">
      <h3 class="text-primary-600 dark:text-primary-400 max-w-5xl mx-auto">Recent Achievements</h3>
      <posts post-type="blog" :amount="1" />
    </section>
  </main>
</template>

<script>
// https://www.netlifycms.org/docs/nuxt/#authenticating-with-netlify-identity
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>
