<template>
  <main>
    <HeroSection />
    <LogoCloud />
    <StatsSection />
    <FAQSection />
  </main>
</template>

<script>
import FAQSection from '~/components/home/FAQSection.vue'
import LogoCloud from '~/components/home/LogoCloud.vue'
import HeroSection from '~/components/home/HeroSection.vue'
import StatsSection from '~/components/home/StatsSection.vue'
// https://www.netlifycms.org/docs/nuxt/#authenticating-with-netlify-identity
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    }
  },
  components: { FAQSection, LogoCloud, HeroSection, StatsSection },
}
</script>
