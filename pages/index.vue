<template>
  <main>
    <FAQSection />
  </main>
</template>

<script>
import FAQSection from '~/components/home/FAQSection.vue'
// https://www.netlifycms.org/docs/nuxt/#authenticating-with-netlify-identity
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    }
  },
  components: { FAQSection },
}
</script>
