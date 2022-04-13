<template>
  <!-- TODO: replace with https://tailwindui.com/components/marketing/feedback/404-pages#component-b75a1c59f81ab5a9ab7b17e622d93aef once we have a status page up -->
  <div class="min-h-full px-4 py-16 bg-white sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
    <div class="mx-auto max-w-max">
      <main class="sm:flex">
        <p class="text-4xl font-extrabold text-primary-600 sm:text-6xl">
          {{ error.statusCode === 404 ? '404' : error.statusCode }}
        </p>
        <div class="sm:ml-6">
          <div class="sm:border-l sm:border-gray-200 sm:pl-6">
            <h1 class="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              {{ error.statusCode === 404 ? 'Page not found' : 'An error occurred' }}
            </h1>
            <p class="mt-1 text-base text-gray-500">
              {{ error.statusCode === 404 ? 'Please check the URL in the address bar and try again.' : error.message }}
            </p>
          </div>
          <div class="flex mt-10 space-x-3 sm:border-l sm:border-transparent sm:pl-6">
            <NuxtLink
              :to="localePath('/')"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              Go back home
            </NuxtLink>
            <NuxtLink
              :to="localePath('/contact')"
              class="inline-flex items-center px-4 py-2 text-sm font-medium border border-transparent rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              Contact support
            </NuxtLink>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error',
  props: ['error'],
  mounted() {
    this.$segment.page('Error', {
      error: this.error,
    })
  },
}
</script>
