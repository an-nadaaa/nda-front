<template>
  <div class="relative py-16 bg-white sm:py-24 lg:py-32">
    <div class="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-base font-semibold tracking-wider uppercase text-primary-600">Our Values</h2>
      <h3 class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        What we stand for and believe in
      </h3>
      <p class="mx-auto mt-5 text-xl text-gray-500 max-w-prose">
        Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
        malesuada. Eleifend condimentum id viverra nulla.
      </p>
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="pt-6">
            <div class="flow-root px-6 pb-8 rounded-lg bg-gray-50">
              <div class="-mt-6">
                <div>
                  <span
                    class="inline-flex items-center justify-center p-3 rounded-md shadow-lg  text-primary-500 bg-primary-100">
                    <component :is="feature.icon" class="w-6 h-6" aria-hidden="true" />
                  </span>
                </div>
                <h3 class="mt-8 text-lg font-medium tracking-tight text-gray-900">{{ feature.name }}</h3>
                <p class="mt-5 text-base text-gray-500">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ListSearchIcon, LockAccessIcon, MedalIcon } from 'vue-tabler-icons'

// needs to be pulled from our CMS
const features = [
  {
    name: 'Excellence',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: MedalIcon,
  },
  {
    name: 'Amanah',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: LockAccessIcon, // lock
  },
  {
    name: 'Transparency',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ListSearchIcon, // magnet
  },
  //   {
  //     name: 'Advanced Security',
  //     description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  //     icon: ShieldCheckIcon,
  //   },
  //   {
  //     name: 'Powerful API',
  //     description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  //     icon: CogIcon,
  //   },
  //   {
  //     name: 'Database Backups',
  //     description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  //     icon: ServerIcon,
  //   },
]

export default {
  components: {
    ListSearchIcon,
    LockAccessIcon,
    MedalIcon,
  },
  data() {
    return {
      features,
    }
  },
}
</script>
