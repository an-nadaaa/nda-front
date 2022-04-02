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
  head() {
    return {
      title: 'Contact us | An-nadaa educational foundation',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Get in touch with us for any inquiries, we will repond as fast as possible, email: contact@an-nadaa.com, Phone number:+234 706-244 4989',
        },
      ],
    }
  },
}
</script>
