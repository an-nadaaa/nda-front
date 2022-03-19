<template>
  <div>
    <Header />
    <nuxt />
    <GlobalFooter />
    <MobileBar class="sm:hidden" />
  </div>
</template>

<script>
export default {
  mounted() {
    document.getElementsByTagName('html')[0].setAttribute('dir', this.$i18n.localeProperties.dir)
  },
}
</script>

<style>
html,
body {
  @apply font-texts;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-headers;
}
</style>
