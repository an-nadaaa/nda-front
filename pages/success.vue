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
          <h1 class="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Thank you!</h1>
          <p class="mt-2 text-base text-gray-500">Your donation have been well received Jazakoum Allahu khayran.</p>
          <div class="mt-6">
            <NuxtLink :to="localePath('/causes')" class="text-base font-medium text-primary-600 hover:text-primary-500"
              >Explore more causes<span aria-hidden="true"> &rarr;</span></NuxtLink
            >
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
