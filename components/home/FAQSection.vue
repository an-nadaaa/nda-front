<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div>
    <div class="px-4 py-12 mx-auto max-w-7xl sm:py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <h2 class="text-3xl text-center text-gray-900 sm:text-4xl">Frequently asked questions</h2>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200">
          <div class="pt-6" v-for="(question, i) in faqs" :key="i">
            <dt class="text-lg">
              <!-- Expand/collapse question button -->
              <button
                type="button"
                class="flex items-start justify-between w-full text-left text-gray-400"
                :aria-controls="`faq-${i}`"
                aria-expanded="false"
                @click="current = i"
              >
                <span class="font-medium text-gray-900"> {{ question.question }} </span>
                <span class="flex items-center ml-6 h-7">
                  <Component
                    :is="currentIndex(i) ? 'CircleMinusIcon' : 'CirclePlusIcon'"
                    class="w-6 h-6 text-primary-600"
                  />
                </span>
              </button>
            </dt>
            <dd v-show="currentIndex(i)" class="pr-12 mt-2" id="faq-0">
              <p class="text-base text-gray-500">
                {{ question.answer }}
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { CirclePlusIcon, CircleMinusIcon } from 'vue-tabler-icons'

export default {
  components: {
    CirclePlusIcon,
    CircleMinusIcon,
  },
  props: ['faqs'],
  data() {
    return {
      current: 0,
    }
  },
  methods: {
    currentIndex(i) {
      return i === this.current
    },
  },
}
</script>
