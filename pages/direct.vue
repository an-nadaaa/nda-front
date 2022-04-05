<template>
  <section class="w-full mx-auto my-12 lg:max-w-2xl">
    <h1 class="text-4xl text-center">Direct Transfer</h1>
    <p class="mb-24 text-center text-gray-500">For direct transfer please refer to the information below.</p>
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

    <div class="w-full mx-auto my-12 lg:max-w-2xl">
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
export default {
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
}
</script>
