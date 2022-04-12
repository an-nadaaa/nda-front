<template>
  <section class="w-full p-6 mx-auto my-12 lg:max-w-2xl">
    <h1 class="text-4xl text-center">Direct Transfer</h1>
    <p class="mb-4 text-center text-gray-500">For direct transfer please refer to the information below.</p>

    <div class="p-4 mb-24 border-l-4 border-primary-400 bg-primary-50">
      <div class="flex">
        <div class="flex-shrink-0">
          <InfoCircleIcon class="w-5 h-5 text-primary-400" aria-hidden="true" />
        </div>
        <div class="ml-3">
          <p class="text-primary-700">
            When doing a direct transfer we need our donors to send us an email detailing the purpose of the donation
            and a proof of transfer especially if it's for Zakat purpose.
            {{ ' ' }}
            <NuxtLink :to="localePath('/contact')" class="font-medium underline text-primary-700 hover:text-primary-600"
              >Contact information can be found here
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>

    <div>
      <h2 class="text-2xl font-medium leading-6 text-gray-900">Nigeria Dollar Account</h2>
      <p class="mt-1 text-sm text-gray-500">You can transfer funds directly to our bank account in Nigeria (USD).</p>
      <fieldset class="mt-2">
        <legend class="sr-only">Bank account</legend>
        <div class="divide-y divide-gray-200">
          <div v-for="(info, i) in nigeria" :key="i" class="relative flex items-start py-4">
            <div class="flex-1 min-w-0 text-sm">
              <label :for="`account-${info.id}`" class="text-base font-medium text-gray-700">{{ info.name }}</label>
              <p :id="`account-${info.id}-description`" class="font-mono text-base text-gray-500 slashed-zero">
                {{ info.description }}
              </p>
            </div>
          </div>
        </div>
      </fieldset>
    </div>

    <div class="mt-2">
      <h2 class="text-2xl font-medium leading-6 text-gray-900">Malaysian Ringgit Account</h2>
      <p class="mt-1 text-sm text-gray-500">You can transfer funds directly to our bank account in Malaysia (MYR).</p>
      <fieldset class="mt-2">
        <legend class="sr-only">Bank account</legend>
        <div class="divide-y divide-gray-200">
          <div v-for="(info, i) in malaysia" :key="i" class="relative flex items-start py-4">
            <div class="flex-1 min-w-0 text-sm">
              <label :for="`account-${info.id}`" class="text-base font-medium text-gray-700">{{ info.name }}</label>
              <p :id="`account-${info.id}-description`" class="font-mono text-base text-gray-500 slashed-zero">
                {{ info.description }}
              </p>
            </div>
          </div>
        </div>
      </fieldset>
    </div>

    <div>
      <p class="italic">
        For any inquiries or further information
        <NuxtLink class="text-primary-500" :to="localePath('/contact')">contact us</NuxtLink>
      </p>
    </div>
  </section>
</template>

<script>
import { InfoCircleIcon } from 'vue-tabler-icons'

export default {
  components: {
    InfoCircleIcon,
  },
  data() {
    return {
      nigeria: [
        { id: 'bank', name: 'Bank', description: 'Bank Guaranty Trust Bank' },
        { id: 'account-number', name: 'Acct. No', description: '0230787884' },
        { id: 'name', name: 'Name', description: 'ANNADAA Educational Foundation' },
        { id: 'swift-code', name: 'SWIFT Code', description: 'GTBINGLA XXX' },
        { id: 'sort-code', name: 'Sort Code', description: '058118119' },
      ],
      malaysia: [
        { id: 'bank', name: 'Bank', description: 'Maybank' },
        { id: 'account-number', name: 'Acct. No', description: '562263544473' },
        { id: 'name', name: 'Name', description: 'Pertubuhan An-Nadaa Malaysia' },
        { id: 'swift-code', name: 'SWIFT Code', description: 'MBBEMYKL' },
      ],
    }
  },
  mounted() {
    this.$segment.page('Direct Transfer')
  },
}
</script>
