<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative mx-12">
    <div class="flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
      <div class="cursor-pointer">
        <NuxtLink :to="localePath('/')" class="flex">
          <span class="sr-only">An-Nadaa</span>
          <img class="w-auto h-8 sm:h-10" src="~/static/logo.svg" alt="logo" />
        </NuxtLink>
      </div>
      <div class="-my-2 -mr-2 md:hidden">
        <button
          type="button"
          class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md  hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
          aria-expanded="false"
        >
          <span class="sr-only">Open menu</span>
          <!-- Heroicon name: outline/menu -->
          <Menu2Icon class="w-6 h-6" />
        </button>
      </div>
      <div class="hidden md:flex-1 md:flex md:items-center md:justify-between">
        <nav class="flex space-x-10">
          <NuxtLink :to="localePath('/about')" class="text-base font-medium text-gray-500 hover:text-gray-900">
            About
          </NuxtLink>

          <div class="relative" v-click-outside="clickOutsideCauses">
            <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
            <button
              type="button"
              class="inline-flex items-center text-base font-medium text-gray-500 bg-white rounded-md  group hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              aria-expanded="false"
              @click="showCauses = !showCauses"
            >
              <span>Causes</span>
              <!--
              Heroicon name: solid/chevron-down

              Item active: "text-gray-600", Item inactive: "text-gray-400"
            -->
              <ChevronDownIcon
                :class="`w-5 h-5 ml-2 group-hover:text-gray-500 ${showCauses ? 'text-gray-600' : 'text-gray-400'}`"
              />
            </button>

            <!--
            'Solutions' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          -->
            <transition
              enter-class="transition duration-200 ease-out"
              enter-active-class="translate-y-1 opacity-0"
              enter-to-class="translate-y-0 opacity-100"
              leave-class="transition duration-150 ease-in"
              leave-active-class="translate-y-0 opacity-100"
              leave-to-class="translate-y-1 opacity-0"
            >
              <div v-show="showCauses" class="absolute z-10 w-screen max-w-md mt-3 -ml-4 transform lg:max-w-3xl">
                <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div class="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8 lg:grid-cols-2">
                    <a href="#" class="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                      <div
                        class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md  bg-primary-500 sm:h-12 sm:w-12"
                      >
                        <!-- Heroicon name: outline/chart-bar -->
                        <svg
                          class="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </div>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">Campaigns</p>
                        <p class="mt-1 text-sm text-gray-500">
                          Get a better understanding of where your traffic is coming from.
                        </p>
                      </div>
                    </a>

                    <a href="#" class="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                      <div
                        class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md  bg-primary-500 sm:h-12 sm:w-12"
                      >
                        <!-- Heroicon name: outline/cursor-click -->
                        <svg
                          class="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                          />
                        </svg>
                      </div>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">Projects</p>
                        <p class="mt-1 text-sm text-gray-500">
                          Speak directly to your customers in a more meaningful way.
                        </p>
                      </div>
                    </a>

                    <!-- <a href="#" class="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                      <div
                        class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-primary-500 sm:h-12 sm:w-12"
                      >
                        
                        <svg
                          class="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">Security</p>
                        <p class="mt-1 text-sm text-gray-500">Your customers&#039; data will be safe and secure.</p>
                      </div>
                    </a> -->

                    <!-- <a href="#" class="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                      <div
                        class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-primary-500 sm:h-12 sm:w-12"
                      >
                        
                        <svg
                          class="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                          />
                        </svg>
                      </div>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">Integrations</p>
                        <p class="mt-1 text-sm text-gray-500">
                          Connect with third-party tools that you&#039;re already using.
                        </p>
                      </div>
                    </a> -->

                    <!-- <a href="#" class="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                      <div
                        class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-primary-500 sm:h-12 sm:w-12"
                      >
                        
                        <svg
                          class="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                      </div>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">Automations</p>
                        <p class="mt-1 text-sm text-gray-500">
                          Build strategic funnels that will drive your customers to convert
                        </p>
                      </div>
                    </a> -->

                    <!-- <a href="#" class="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                      <div
                        class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-primary-500 sm:h-12 sm:w-12"
                      >
                        
                        <svg
                          class="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">Reports</p>
                        <p class="mt-1 text-sm text-gray-500">
                          Get detailed reports that will help you make more informed decisions
                        </p>
                      </div>
                    </a> -->
                  </div>
                  <div class="p-5 bg-gray-50 sm:p-8">
                    <a href="#" class="flow-root p-3 -m-3 rounded-md hover:bg-gray-100">
                      <div class="flex items-center">
                        <div class="text-base font-medium text-gray-900">Case studies</div>
                        <span
                          class="
                            ml-3
                            inline-flex
                            items-center
                            px-3
                            py-0.5
                            rounded-full
                            text-xs
                            font-medium
                            leading-5
                            bg-primary-100
                            text-primary-800
                          "
                        >
                          New
                        </span>
                      </div>
                      <p class="mt-1 text-sm text-gray-500">Empower your entire team with even more advanced tools.</p>
                    </a>
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <div class="relative" v-click-outside="clickOutsideLearn">
            <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
            <button
              type="button"
              class="inline-flex items-center text-base font-medium text-gray-500 bg-white rounded-md  group hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              aria-expanded="false"
              @click="showLearn = !showLearn"
            >
              <span>Learn</span>
              <!--
              Heroicon name: solid/chevron-down

              Item active: "text-gray-600", Item inactive: "text-gray-400"
            -->
              <ChevronDownIcon
                :class="`w-5 h-5 ml-2 group-hover:text-gray-500 ${showLearn ? 'text-gray-600' : 'text-gray-400'}`"
              />
            </button>

            <!--
            'More' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          -->
            <transition
              enter-class="transition duration-200 ease-out"
              enter-active-class="translate-y-1 opacity-0"
              enter-to-class="translate-y-0 opacity-100"
              leave-class="transition duration-150 ease-in"
              leave-active-class="translate-y-0 opacity-100"
              leave-to-class="translate-y-1 opacity-0"
            >
              <div
                v-show="showLearn"
                class="absolute z-10 w-screen max-w-xs px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0"
              >
                <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div class="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                    <a href="#" class="block p-3 -m-3 rounded-md hover:bg-gray-50">
                      <p class="text-base font-medium text-gray-900">Help Center</p>
                      <p class="mt-1 text-sm text-gray-500">
                        Get all of your questions answered in our forums or contact support.
                      </p>
                    </a>

                    <a href="#" class="block p-3 -m-3 rounded-md hover:bg-gray-50">
                      <p class="text-base font-medium text-gray-900">Guides</p>
                      <p class="mt-1 text-sm text-gray-500">
                        Learn how to maximize our platform to get the most out of it.
                      </p>
                    </a>

                    <a href="#" class="block p-3 -m-3 rounded-md hover:bg-gray-50">
                      <p class="text-base font-medium text-gray-900">Events</p>
                      <p class="mt-1 text-sm text-gray-500">
                        See what meet-ups and other events we might be planning near you.
                      </p>
                    </a>

                    <a href="#" class="block p-3 -m-3 rounded-md hover:bg-gray-50">
                      <p class="text-base font-medium text-gray-900">Security</p>
                      <p class="mt-1 text-sm text-gray-500">Understand how we take your privacy seriously.</p>
                    </a>
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <NuxtLink :to="localePath('/faq')" class="text-base font-medium text-gray-500 hover:text-gray-900">
            FAQ
          </NuxtLink>
        </nav>
        <div class="flex items-center md:ml-12">
          <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Log in </a>
          <a
            href="#"
            class="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white border border-transparent rounded-md shadow-sm  bg-primary-600 hover:bg-primary-700"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>

    <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
    <div class="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden">
      <div class="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
        <div class="px-5 pt-5 pb-6">
          <div class="flex items-center justify-between">
            <div>
              <img
                class="w-auto h-8"
                src="https://tailwindui.com/img/logos/workflow-mark-primary-600.svg"
                alt="Workflow"
              />
            </div>
            <div class="-mr-2">
              <button
                type="button"
                class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md  hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              >
                <span class="sr-only">Close menu</span>
                <!-- Heroicon name: outline/x -->
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-6">
            <nav class="grid gap-6">
              <a href="#" class="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50">
                <div
                  class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-primary-500"
                >
                  <!-- Heroicon name: outline/chart-bar -->
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div class="ml-4 text-base font-medium text-gray-900">Analytics</div>
              </a>

              <a href="#" class="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50">
                <div
                  class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-primary-500"
                >
                  <!-- Heroicon name: outline/cursor-click -->
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                </div>
                <div class="ml-4 text-base font-medium text-gray-900">Engagement</div>
              </a>

              <a href="#" class="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50">
                <div
                  class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-primary-500"
                >
                  <!-- Heroicon name: outline/shield-check -->
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div class="ml-4 text-base font-medium text-gray-900">Security</div>
              </a>

              <a href="#" class="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50">
                <div
                  class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-primary-500"
                >
                  <!-- Heroicon name: outline/view-grid -->
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </div>
                <div class="ml-4 text-base font-medium text-gray-900">Integrations</div>
              </a>

              <a href="#" class="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50">
                <div
                  class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-primary-500"
                >
                  <!-- Heroicon name: outline/refresh -->
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <div class="ml-4 text-base font-medium text-gray-900">Automations</div>
              </a>

              <a href="#" class="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50">
                <div
                  class="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-primary-500"
                >
                  <!-- Heroicon name: outline/document-report -->
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div class="ml-4 text-base font-medium text-gray-900">Reports</div>
              </a>
            </nav>
          </div>
        </div>
        <div class="px-5 py-6">
          <div class="grid grid-cols-2 gap-4">
            <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Pricing </a>

            <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Docs </a>

            <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Enterprise </a>

            <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Help Center </a>

            <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Guides </a>

            <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Events </a>

            <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Security </a>
          </div>
          <div class="mt-6">
            <a
              href="#"
              class="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm  bg-primary-600 hover:bg-primary-700"
            >
              Sign up
            </a>
            <p class="mt-6 text-base font-medium text-center text-gray-500">
              Have an account?
              <a href="#" class="text-primary-600 hover:text-primary-500"> Sign in </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronDownIcon, Menu2Icon } from 'vue-tabler-icons'
import vClickOutside from 'v-click-outside'

export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },
  components: {
    ChevronDownIcon,
    Menu2Icon,
  },
  name: 'Header',
  data() {
    return {
      showCauses: false,
      showLearn: false,
      showLanguages: false,
      links: [
        { path: '/', name: 'home' },
        { path: '/about', name: 'about' },
        { path: '/campaigns', name: 'campaigns' },
        { path: '/blog', name: 'blog' },
        { path: '/contact', name: 'contact' },
      ],
    }
  },
  methods: {
    clickOutsideLearn(e) {
      this.showLearn = false
    },
    clickOutsideCauses(e) {
      this.showCauses = false
    },
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
    currentLocaleName() {
      return this.$i18n.locales.filter((l) => l.code === this.$i18n.locale)[0].name
    },
  },
}
</script>

<style lang="postcss" scoped>
.nuxt-link-exact-active {
  @apply cursor-default;
}
</style>
