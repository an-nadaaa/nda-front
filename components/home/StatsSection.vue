<template>
  <div class="flex bg-gray-800 justify-arround">
    <div class="flex items-center justify-center w-1/2">
      <img class="object-cover p-24" :src="metricsUrl" alt="People working on laptops" />
    </div>
    <div class="flex items-center justify-center max-w-4xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
        <h2 class="text-sm font-semibold tracking-wide text-indigo-300 uppercase font-texts">Valuable Metrics</h2>
        <p class="mt-3 text-4xl text-white font-headers xl:w-2/3">
          Get actionable data that will help grow your business
        </p>
        <!-- <p class="mt-5 text-lg text-gray-300">
          Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra tristique sem. Ornare
          feugiat viverra eleifend fusce orci in quis amet. Sit in et vitae tortor, massa. Dapibus laoreet amet lacus
          nibh integer quis. Eu vulputate diam sit tellus quis at.
        </p> -->
        <div class="grid grid-cols-1 mt-12 gap-y-12 gap-x-6 sm:grid-cols-2">
          <p v-for="item in metrics" :key="item.id">
            <span class="block font-bold text-white text-7xl">{{ item.stat }}</span>
            <span class="block mt-1 text-base text-gray-300"
              ><span class="font-medium text-white">{{ item.emphasis }}</span> {{ item.rest }}</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      metricsUrl:
        'https://images.unsplash.com/photo-1489573280374-2e193c63726c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80',
      metrics: [
        { id: 1, stat: '33', emphasis: 'Masjids', rest: 'built.' },
        { id: 2, stat: '112', emphasis: 'Widows', rest: 'supported.' },
        { id: 3, stat: '52', emphasis: 'Wells', rest: 'built.' },
        { id: 4, stat: '63', emphasis: 'Orphans', rest: 'supported.' },
      ],
    }
  },
}
</script>
