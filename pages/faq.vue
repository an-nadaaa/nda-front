<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <section aria-labelledby="faq-heading" class="mx-auto bg-white">
    <div class="px-4 py-16 mx-auto max-2xl sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="max-w-xl">
        <h2 id="faq-heading" class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Frequently asked questions
        </h2>
        <p class="mt-4 text-base text-gray-500">
          These are the most frequently questions we get asked. If you can't find what you're looking for, you can
          always
          <a href="/contact" class="font-medium text-primary-600 hover:text-primary-500">Contact us</a> with your
          enquiry.
        </p>
      </div>

      <dl class="grid grid-cols-1 mt-12 gap-y-10 sm:mt-16 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
        <div v-for="(faq, i) in faqs" :key="i">
          <dt class="text-base font-medium text-gray-900">
            {{ faq.question }}
          </dt>
          <dd class="mt-3 text-sm prose text-gray-500" v-html="answer(i)"></dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script>
import { marked } from 'marked'
import sanitizeHtml from 'sanitize-html'

export default {
  async asyncData({ $content, error, app }) {
    const sortBy = {
      key: 'date',
      direction: 'dec',
    }

    const faqs = await $content('faq', app.i18n.locale)
      .sortBy(sortBy.key, sortBy.direction)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: 'No FAQs to display' })
      })

    return { faqs }
  },
  mounted() {
    this.$segment.page('FAQ')
  },
  methods: {
    answer(i) {
      return sanitizeHtml(marked(this.faqs[i].answer))
    },
  },
  // addresses the most common questions
  head() {
    return {
      title: 'Frequently asked questions | An-nadaa educational foundation',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Frequently asked questions addresses the most common questions asked for our educational foundation',
        },
      ],
    }
  },
}
</script>
