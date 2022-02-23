<template>
  <div class="mt-12">
    <div class="overflow-hidden sm:pt-60 pt-14">
      <div class="bg-gray-800">
        <div class="mx-24 max-w-7xl sm:px-6 lg:px-8">
          <div class="relative pt-16 pb-16 sm:pb-24">
            <div class="w-1/2">
              <blockquote>
                <div>
                  <svg
                    class="w-12 h-12 text-white opacity-25"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path
                      d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                    />
                  </svg>
                  <p class="mt-6 text-2xl font-medium text-white">
                    <!-- Create a v-for and loop on all the testimonials -->
                    {{ testimonials }}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet
                    feugiat est integer dolor auctor adipiscing nunc urna, sit.
                  </p>
                </div>
                <footer class="mt-6">
                  <p class="text-base font-medium text-primary-500">Judith Black</p>
                  <p class="text-base font-medium text-indigo-100">CEO at PureInsights</p>
                </footer>
              </blockquote>
            </div>

            <div class="absolute transform -translate-x-1/2 sm:-top-40 left-1/2 top-6 sm:translate-x-0">
              <div class="flex ml-24 space-x-6 min-w-max sm:ml-3 lg:space-x-8">
                <div class="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                  <div class="flex-shrink-0">
                    <img
                      class="object-cover w-64 h-64 rounded-lg md:h-72 md:w-72"
                      :src="images[0].url"
                      :alt="images[0].alt"
                    />
                  </div>

                  <div class="flex-shrink-0 mt-6 sm:mt-0">
                    <img
                      class="object-cover w-64 h-64 rounded-lg md:h-72 md:w-72"
                      :src="images[1].url"
                      :alt="images[1].alt"
                    />
                  </div>
                </div>
                <div class="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                  <div class="flex-shrink-0">
                    <img
                      class="object-cover w-64 h-64 rounded-lg md:h-72 md:w-72"
                      :src="images[2].url"
                      :alt="images[2].alt"
                    />
                  </div>

                  <div class="flex-shrink-0 mt-6 sm:mt-0">
                    <img
                      class="object-cover w-64 h-64 rounded-lg md:h-72 md:w-72"
                      :src="images[3].url"
                      :alt="images[3].alt"
                    />
                  </div>
                </div>
                <div class="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                  <div class="flex-shrink-0">
                    <img
                      class="object-cover w-64 h-64 rounded-lg md:h-72 md:w-72"
                      :src="images[4].url"
                      :alt="images[4].alt"
                    />
                  </div>

                  <div class="flex-shrink-0 mt-6 sm:mt-0">
                    <img
                      class="object-cover w-64 h-64 rounded-lg md:h-72 md:w-72"
                      :src="images[5].url"
                      :alt="images[5].alt"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Swiper from 'swiper'
// // import Swiper styles
// import 'swiper/css'

export default {
  props: ['testimonials'],
  data() {
    return {
      images: [
        {
          url: 'https://images.unsplash.com/photo-1602938922928-5bede7cc98cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5pZ2VyaWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
          alt: '',
        },
        {
          url: 'https://images.unsplash.com/photo-1596788068873-9ffd5cacd4c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fG5pZ2VyaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
          alt: '',
        },
        {
          url: 'https://images.unsplash.com/photo-1600383962708-4f28dcbce116?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1335&q=80',
          alt: '',
        },
        {
          url: 'https://images.unsplash.com/photo-1579552905294-f538096bf873?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk1fHxuaWdlcmlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
          alt: '',
        },
        {
          url: 'https://images.unsplash.com/photo-1543335547-334c05de28c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGFmcmljYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
          alt: '',
        },
        {
          url: 'https://images.unsplash.com/photo-1582125701129-8ada9192f824?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2144&q=80',
          alt: '',
        },
        {
          url: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80',
          alt: '',
        },
      ],
    }
  },
  mounted() {
    // const swiper = new Swiper()
  },
}
</script>
