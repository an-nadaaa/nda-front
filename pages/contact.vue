<template>
  <section class="relative w-full text-gray-600 body-font">
    <ContactForm />
    <AddressSection />
  </section>
</template>

<script>
import * as SITE_INFO from '~/content/site/info.json'
import ContactForm from '~/components/contact/ContactForm.vue'
import AddressSection from '~/components/contact/AddressSection.vue'

export default {
  data() {
    return {
      email: SITE_INFO.contact,
    }
  },
  components: { ContactForm, AddressSection },
}
</script>
