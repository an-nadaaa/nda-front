<template>
  <div class="bg-white">
    <div>
      <!--
      Mobile filter dialog

      Off-canvas filters for mobile, show/hide based on off-canvas filters state.
    -->
      <div v-show="showMenu" class="fixed inset-0 z-40 flex lg:hidden" role="dialog" aria-modal="true">
        <!--
        Off-canvas menu overlay, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
        <div class="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"></div>

        <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "translate-x-full"
      -->
        <div
          class="relative flex flex-col w-full h-full max-w-xs py-4 pb-12 ml-auto overflow-y-auto bg-white shadow-xl">
          <div class="flex items-center justify-between px-4">
            <h1 class="text-lg font-medium text-gray-900">Filters</h1>
            <button
              @click="showMenu = false"
              type="button"
              class="flex items-center justify-center w-10 h-10 p-2 -mr-2 text-gray-400 bg-white rounded-md">
              <span class="sr-only">Close menu</span>
              <!-- Heroicon name: outline/x -->
              <XIcon class="w-6 h-6" />
            </button>
          </div>

          <!-- Filters -->
          <div class="mt-4 border-t border-gray-200">
            <h2 class="sr-only">Categories</h2>
            <ul v-for="(tab, i) in tabs" :key="i" role="list" class="px-2 py-3 font-medium text-gray-900">
              <li
                :class="`rounded-md ${selectedTab(tab) ? 'text-primary-700 bg-primary-100 hover:bg-primary-200' : ''}`">
                <button @click="currentTab = tab" class="block px-2 py-3">{{ tab }}</button>
              </li>
            </ul>

            <div class="px-4 py-6 border-t border-gray-200">
              <h2 class="flow-root -mx-2 -my-3">
                <!-- Expand/collapse section button -->
                <button
                  type="button"
                  class="flex items-center justify-between w-full px-2 py-3 text-gray-400 bg-white hover:text-gray-500"
                  aria-controls="filter-section-mobile-0"
                  aria-expanded="false">
                  <span class="font-medium text-gray-900"> Tags </span>
                  <span class="flex items-center ml-6">
                    <!--
                      Expand icon, show/hide based on section open state.

                      Heroicon name: solid/plus-sm
                    -->
                    <PlusIcon @click="expandTags = true" v-show="!expandTags" class="w-5 h-5" />
                    <!--
                      Collapse icon, show/hide based on section open state.

                      Heroicon name: solid/minus-sm
                    -->
                    <MinusIcon @click="expandTags = false" v-show="expandTags" class="w-5 h-5" />
                  </span>
                </button>
              </h2>
              <!-- Filter section, show/hide based on section state. -->
              <template v-for="(category, i) in categories">
                <div v-if="expandTags" :key="i" class="pt-6" id="filter-section-mobile-0">
                  <div class="space-y-6">
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-color-0"
                        name="color[]"
                        value="white"
                        type="checkbox"
                        class="w-4 h-4 border-gray-300 rounded text-primary-600 focus:ring-primary-500" />
                      <label for="filter-mobile-color-0" class="flex-1 min-w-0 ml-3 text-gray-500">
                        {{ category.attributes.value }}
                      </label>
                    </div>
                  </div>
                </div>
              </template>
            </div>

            <div class="px-4 py-6 border-t border-gray-200">
              <h2 class="flow-root -mx-2 -my-3">
                <!-- Expand/collapse section button -->
                <button
                  type="button"
                  class="flex items-center justify-between w-full px-2 py-3 text-gray-400 bg-white hover:text-gray-500"
                  aria-controls="filter-section-mobile-1"
                  aria-expanded="false">
                  <span class="font-medium text-gray-900"> Category </span>
                  <span class="flex items-center ml-6">
                    <!--
                      Expand icon, show/hide based on section open state.

                      Heroicon name: solid/plus-sm
                    -->
                    <PlusIcon @click="expandCategories = true" v-show="!expandCategories" class="w-5 h-5" />
                    <!--
                      Collapse icon, show/hide based on section open state.

                      Heroicon name: solid/minus-sm
                    -->
                    <MinusIcon @click="expandCategories = false" v-show="expandCategories" class="w-5 h-5" />
                  </span>
                </button>
              </h2>
              <!-- Filter section, show/hide based on section state. -->
              <template v-for="(tag, i) in tags">
                <div v-if="expandCategories" :key="i" class="pt-6" id="filter-section-mobile-1">
                  <div class="space-y-6">
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-category-0"
                        name="category[]"
                        value="new-arrivals"
                        type="checkbox"
                        class="w-4 h-4 border-gray-300 rounded text-primary-600 focus:ring-primary-500" />
                      <label for="filter-mobile-category-0" class="flex-1 min-w-0 ml-3 text-gray-500">
                        {{ tag.attributes.value }}
                      </label>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>

      <main class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="relative flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
          <h1 class="text-4xl font-extrabold tracking-tight text-gray-900">Our Causes</h1>

          <div class="flex items-center">
            <div class="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  class="inline-flex justify-center text-sm font-medium text-gray-700 group hover:text-gray-900"
                  id="menu-button"
                  aria-expanded="false"
                  aria-haspopup="true">
                  <span>Sort</span>
                  <!-- Heroicon name: solid/chevron-down -->
                  <ChevronDownIcon class="flex-shrink-0 w-5 h-5 ml-1 -mr-1 text-gray-400 group-hover:text-gray-500" />
                </button>
              </div>

              <!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
              <div
                class="absolute right-0 w-40 mt-2 origin-top-right bg-white rounded-md shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1">
                <div v-for="(filter, i) in sortFilters" class="py-1" role="none" :key="i">
                  <!--
                  Active: "bg-gray-100", Not Active: ""

                  Selected: "font-medium text-gray-900", Not Selected: "text-gray-500"
                -->
                  <button
                    :class="`block px-4 py-2 text-sm font-medium ${
                      filter === selectedSortFilter ? 'text-gray-900' : 'text-gray-500'
                    }`"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0">
                    {{ filter }}
                  </button>
                </div>
              </div>
            </div>

            <button type="button" class="p-2 ml-5 -m-2 text-gray-400 sm:ml-7 hover:text-gray-500">
              <span class="sr-only">View grid</span>
              <!-- Heroicon name: solid/view-grid -->
              <LayoutGridIcon class="w-5 h-5" />
            </button>
            <button
              @click="showMenu = true"
              type="button"
              class="p-2 ml-4 -m-2 text-gray-400 sm:ml-6 hover:text-gray-500 lg:hidden">
              <span class="sr-only">Filters</span>
              <!-- Heroicon name: solid/filter -->
              <FilterIcon class="w-5 h-5" />
            </button>
          </div>
        </div>

        <section aria-labelledby="products-heading" class="pt-6 pb-24">
          <h2 id="products-heading" class="sr-only">Causes types</h2>

          <div class="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
            <!-- Filters -->
            <div class="hidden lg:block">
              <h2 class="sr-only">Types</h2>
              <ul role="list" class="pb-6 text-sm font-medium text-gray-900 border-b border-gray-200">
                <li
                  :class="`rounded-md p-4 text-lg ${
                    selectedTab(tab) ? 'text-primary-700 bg-primary-100 hover:bg-primary-200' : ''
                  }`"
                  v-for="(tab, i) in tabs"
                  :key="i">
                  <button @click="currentTab = tab">{{ tab }}</button>
                </li>
              </ul>

              <div class="py-6 border-b border-gray-200">
                <h2 class="flow-root -my-3">
                  <!-- Expand/collapse section button -->
                  <button
                    type="button"
                    class="flex items-center justify-between w-full py-3 text-sm text-gray-400 bg-white hover:text-gray-500"
                    aria-controls="filter-section-0"
                    aria-expanded="false">
                    <span class="font-medium text-gray-900"> Tag </span>
                    <span class="flex items-center ml-6">
                      <!--
                      Expand icon, show/hide based on section open state.

                      Heroicon name: solid/plus-sm
                    -->
                      <PlusIcon @click="expandTags = true" v-show="!expandTags" class="w-5 h-5" />
                      <!--
                      Collapse icon, show/hide based on section open state.

                      Heroicon name: solid/minus-sm
                    -->
                      <MinusIcon @click="expandTags = false" v-show="expandTags" class="w-5 h-5" />
                    </span>
                  </button>
                </h2>
                <!-- Filter section, show/hide based on section state. -->
                <template v-for="tag in tags">
                  <div v-if="expandTags" :key="tag.id" class="pt-6" id="filter-section-0">
                    <div class="space-y-4">
                      <div class="flex items-center">
                        <input
                          :id="`filter-tag-${tag.id}`"
                          name="tag[]"
                          value="white"
                          type="checkbox"
                          class="w-4 h-4 border-gray-300 rounded text-primary-600 focus:ring-primary-500" />
                        <label :for="`filter-tag-${tag.id}`" class="ml-3 text-sm text-gray-600">
                          {{ tag.attributes.value }}
                        </label>
                      </div>
                    </div>
                  </div>
                </template>
              </div>

              <div class="py-6 border-b border-gray-200">
                <h2 class="flow-root -my-3">
                  <!-- Expand/collapse section button -->
                  <button
                    type="button"
                    class="flex items-center justify-between w-full py-3 text-sm text-gray-400 bg-white hover:text-gray-500"
                    aria-controls="filter-section-1"
                    aria-expanded="false">
                    <span class="font-medium text-gray-900"> Category </span>
                    <span class="flex items-center ml-6">
                      <!--
                      Expand icon, show/hide based on section open state.

                      Heroicon name: solid/plus-sm
                    -->
                      <PlusIcon @click="expandCategories = true" v-show="!expandCategories" class="w-5 h-5" />
                      <!--
                      Collapse icon, show/hide based on section open state.

                      Heroicon name: solid/minus-sm
                    -->
                      <MinusIcon @click="expandCategories = false" v-show="expandCategories" class="w-5 h-5" />
                    </span>
                  </button>
                </h2>
                <!-- Filter section, show/hide based on section state. -->
                <template v-for="category in categories">
                  <div v-if="expandCategories" :key="category.id" class="pt-6" id="filter-section-1">
                    <div class="space-y-4">
                      <div class="flex items-center">
                        <input
                          :id="`filter-category-${category.id}`"
                          name="category[]"
                          value="new-arrivals"
                          type="checkbox"
                          class="w-4 h-4 border-gray-300 rounded text-primary-600 focus:ring-primary-500" />
                        <label :for="`filter-category-${category.id}`" class="ml-3 text-sm text-gray-600">
                          {{ category.attributes.value }}
                        </label>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </div>

            <!-- Product grid -->
            <div class="lg:col-span-3">
              <!-- Replace with your content -->
              <div class="border-4 border-gray-200 border-dashed rounded-lg h-96 lg:h-full"></div>
              <!-- /End replace -->
            </div>
          </div>
        </section>

        <!-- Pagination -->
        <!-- This example requires Tailwind CSS v2.0+ -->
        <nav
          class="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6"
          aria-label="Pagination">
          <div class="hidden sm:block">
            <p class="text-sm text-gray-700">
              Showing
              <span class="font-medium">1</span>
              to
              <span class="font-medium">10</span>
              of
              <span class="font-medium">20</span>
              results
            </p>
          </div>
          <div class="flex justify-between flex-1 sm:justify-end">
            <a
              href="#"
              class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              Previous
            </a>
            <a
              href="#"
              class="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              Next
            </a>
          </div>
        </nav>
      </main>
    </div>
  </div>
</template>

<script>
import { XIcon, ChevronDownIcon, PlusIcon, MinusIcon, LayoutGridIcon, FilterIcon } from 'vue-tabler-icons'

export default {
  components: {
    XIcon,
    ChevronDownIcon,
    PlusIcon,
    MinusIcon,
    LayoutGridIcon,
    FilterIcon,
  },
  props: ['tags', 'categories', 'initialCampaigns', 'initialProjects'],
  data() {
    return {
      tabs: ['All', 'Campaigns', 'Projects'],
      currentTab: 'All',
      sortFilters: ['Featured', 'Newest', 'Impact', 'Minimum Donation'],
      selectedSortFilter: 'Featured',
      expandTags: false,
      expandCategories: false,
      showMenu: false,
    }
  },
  methods: {
    selectedTab(tab) {
      return this.currentTab === tab
    },
  },
}
</script>
