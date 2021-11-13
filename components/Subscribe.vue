<template>
  <div class="w-full px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
    <div class="px-6 py-10 bg-primary-800 rounded-3xl sm:py-16 sm:px-12 lg:p-20 lg:flex lg:items-center">
      <div class="lg:w-0 lg:flex-1">
        <h2 class="text-3xl tracking-tight text-white font-headers">Join our newsletter</h2>
        <p class="max-w-3xl mt-4 text-lg text-primary-200">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet
          fugiat.
        </p>
      </div>
      <div class="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
        <form class="sm:flex">
          <label for="email-address" class="sr-only">Email address</label>
          <input
            id="email-address"
            name="email-address"
            type="email"
            autocomplete="email"
            required
            class="w-full px-5 py-3 placeholder-gray-500 border-white rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            class="flex items-center justify-center w-full px-5 py-3 mt-3 text-base font-medium text-white border border-transparent rounded-md  bg-primary-600 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
          >
            Subscribe
          </button>
        </form>
        <p class="mt-3 text-sm text-primary-200">
          We care about the protection of your data. Read our
          <a href="#" class="font-medium underline"> Privacy Policy. </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script></script>
