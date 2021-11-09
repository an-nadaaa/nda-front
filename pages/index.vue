<template>
  <main>
    <HeroSection />
    <LogoCloud />
    <StorySection />
    <StatsSection />
    <DonateSection />
    <FAQSection />
  </main>
</template>

<script>
import FAQSection from '~/components/home/FAQSection.vue'
import LogoCloud from '~/components/home/LogoCloud.vue'
import HeroSection from '~/components/home/HeroSection.vue'
import StatsSection from '~/components/home/StatsSection.vue'
import StorySection from '~/components/home/StorySection.vue'
import DonateSection from '~/components/home/DonateSection.vue'
// https://www.netlifycms.org/docs/nuxt/#authenticating-with-netlify-identity
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    }
  },
  components: { FAQSection, LogoCloud, HeroSection, StatsSection, StorySection, DonateSection },
}
</script>
