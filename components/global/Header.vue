<template>
  <header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap px-6 flex-col md:flex-row items-center">
      <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
        <nuxt-link v-for="(link, i) in links" class="mr-5 hover:text-gray-900" :to="localePath(link.path)" :key="i">{{
          $t(`LAYOUT.navbar['${link.name}']`)
        }}</nuxt-link>
      </nav>
      <a
        class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
      >
        <img class="w-20 h-20" src="~/static/logo-mini.png" alt="logo" />
      </a>
      <div class="lg:w-2/5 ml-5 lg:ml-0 flex flex-col lg:justify-end items-end">
        <button
          @click="showLanguages = !showLanguages"
          class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          {{ currentLocaleName }}
        </button>
        <div class="flex flex-col absolute top-20 bg-white pb-3">
          <nuxt-link
            v-show="showLanguages"
            class="text-center py-1 px-2 hover:bg-gray-100"
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
            @click="showLanguages = false"
            >{{ locale.name }}</nuxt-link
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      showLanguages: false,
      links: [
        { path: '/', name: 'home' },
        { path: '/about', name: 'about' },
        { path: '/campaigns', name: 'campaigns' },
        { path: '/blog', name: 'blog' },
        { path: '/contact', name: 'contact' }
      ]
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
    currentLocaleName() {
      return this.$i18n.locales.filter(l => l.code === this.$i18n.locale)[0].name
    }
  }
}
</script>

<style lang="postcss" scoped>
.nuxt-link-exact-active {
  @apply cursor-default;
}
</style>
