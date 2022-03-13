<template>
  <div class="px-4 py-16 overflow-hidden bg-white sm:px-6 lg:px-8 lg:py-24">
    <div class="relative max-w-xl mx-auto">
      <svg
        class="absolute transform translate-x-1/2 left-full"
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="85737c0e-0916-41d7-917f-596dc7edfa27"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
      </svg>
      <svg
        class="absolute bottom-0 transform -translate-x-1/2 right-full"
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="85737c0e-0916-41d7-917f-596dc7edfa27"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
      </svg>
      <div class="text-center">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
        <p class="mt-4 text-lg leading-6 text-gray-500">We will get back to you as soon as we can.</p>
      </div>
      <div class="mt-12">
        <form
          :action="`https://formsubmit.co/${email}`"
          method="POST"
          class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        >
          <div>
            <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
            <div class="mt-1">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                class="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm  focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div>
            <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
            <div class="mt-1">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autocomplete="family-name"
                class="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm  focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="company" class="block text-sm font-medium text-gray-700">Company</label>
            <div class="mt-1">
              <input
                type="text"
                name="company"
                id="company"
                autocomplete="organization"
                class="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm  focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <div class="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                class="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm  focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="phone-number" class="block text-sm font-medium text-gray-700">Phone Number</label>
            <div class="mt-1">
              <input
                id="phone"
                name="phone"
                type="tel"
                autocomplete="tel"
                class="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm  focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
            <div class="mt-1">
              <textarea
                id="message"
                name="message"
                rows="4"
                class="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm  focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>
          </div>
          <div class="sm:col-span-2">
            <!-- <div class="flex items-start">
              <div class="flex-shrink-0"> -->
            <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
            <!-- <button
                  type="button"
                  class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out bg-gray-200 border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  role="switch"
                  aria-checked="false"
                >
                  <span class="sr-only">Agree to policies</span> -->
            <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
            <!-- <span
                    aria-hidden="true"
                    class="inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow ring-0"
                  ></span>
                </button>
              </div>
              <div class="ml-3"> -->
            <!-- TODO: add thing when we Privacy policy -->
            <!-- <p class="text-base text-gray-500">
                  By selecting this, you agree to the
                  <a href="#" class="font-medium text-gray-700 underline">Privacy Policy</a>
                  and
                  <a href="#" class="font-medium text-gray-700 underline">Cookie Policy</a>.
                </p> -->
            <!-- </div>
            </div> -->
          </div>
          <div class="sm:col-span-2">
            <input type="text" name="_honey" style="display: none" />
            <input type="hidden" name="_template" value="box" />
            <button
              type="submit"
              class="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm  bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import * as SITE_INFO from '~/content/site/info.json'
const email = process.env.NODE_ENV === 'production' ? SITE_INFO.contact : 'amine@an-nadaa.com'

export default {
  data() {
    return {
      email: email,
    }
  },
}
</script>
