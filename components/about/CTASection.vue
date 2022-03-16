<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div>
    <div class="max-w-2xl px-4 py-16 mx-auto text-center sm:py-20 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold sm:text-4xl">
        <span class="block">Starting changing lives Today.</span>
        <span class="block">Make a lasting impact.</span>
      </h2>
      <p class="mt-4 text-lg leading-6 text-gray-700">We have many causes that are always open to contributions.</p>
      <NuxtLink
        :to="localePath('/causes')"
        class="inline-flex items-center justify-center w-full px-5 py-3 mt-8 text-base font-medium text-white border border-transparent rounded-md  bg-primary-600 hover:bg-primary-700 sm:w-auto">
        Explore more
      </NuxtLink>
    </div>
  </div>
</template>
