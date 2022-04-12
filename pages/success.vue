<template>
  <div class="flex flex-col min-h-full pt-16 pb-12 bg-white">
    <main class="flex flex-col justify-center flex-grow w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex justify-center flex-shrink-0">
        <a href="/" class="inline-flex">
          <span class="sr-only">An-Nadaa</span>
          <img class="w-auto h-32" src="/logo-mini.png" alt="logo" />
        </a>
      </div>
      <div class="py-16">
        <div class="text-center">
          <p class="text-sm font-semibold tracking-wide uppercase text-primary-600">Success</p>
          <h1 class="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Jazakoum Allahu khayran.
          </h1>
          <div class="mt-2 text-base text-gray-500">
            <p>May Allah accept and increase you in goodness.</p>
            <p>Please share with your friends and family and make du'aa for the success of this project.</p>
          </div>
          <div class="mt-6">
            <NuxtLink :to="localePath('/causes')" class="text-base font-medium text-primary-600 hover:text-primary-500">
              Explore more causes<span aria-hidden="true"> &rarr;</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$segment.track('Donation Complete')
    this.$segment.page('Jazakoum Allahou Khayran')
  },
}
</script>
