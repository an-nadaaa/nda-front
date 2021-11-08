<template>
  <div class="relative overflow-hidden">
    <div class="absolute inset-0 z-10 bg-gradient-to-l from-white via-transparent to-transparent" />
    <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
      <div class="relative px-4 mx-24 max-w-7xl sm:px-6 lg:px-8 sm:static">
        <div class="sm:max-w-lg">
          <h1 class="mb-4 text-4xl text-gray-900 sm:text-6xl">
            An-Nadaa is bringing a huge positive impact for the underprivileged communities in Nigeria.
          </h1>
          <p class="mt-4 text-gray-500">
            This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
            if you live or die.
          </p>
        </div>
        <div>
          <div class="mt-10">
            <!-- Decorative image grid -->
            <div aria-hidden="true" class="pointer-events-none lg:max-w-7xl lg:mx-auto lg:w-full">
              <div
                class="absolute transform  sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8"
              >
                <div class="flex items-center space-x-6 lg:space-x-8">
                  <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="h-64 overflow-hidden rounded-lg w-44 sm:opacity-0 lg:opacity-100">
                      <img :src="images[0].url" :alt="images[0].alt" class="object-cover object-center w-full h-full" />
                    </div>
                    <div class="h-64 overflow-hidden rounded-lg w-44">
                      <img :src="images[1].url" :alt="images[1].alt" class="object-cover object-center w-full h-full" />
                    </div>
                  </div>
                  <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="h-64 overflow-hidden rounded-lg w-44">
                      <img :src="images[2].url" :alt="images[2].alt" class="object-cover object-center w-full h-full" />
                    </div>
                    <div class="h-64 overflow-hidden rounded-lg w-44">
                      <img :src="images[3].url" :alt="images[3].alt" class="object-cover object-center w-full h-full" />
                    </div>
                    <div class="h-64 overflow-hidden rounded-lg w-44">
                      <img :src="images[4].url" :alt="images[4].alt" class="object-cover object-center w-full h-full" />
                    </div>
                  </div>
                  <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="h-64 overflow-hidden rounded-lg w-44">
                      <img :src="images[5].url" :alt="images[5].alt" class="object-cover object-center w-full h-full" />
                    </div>
                    <div class="h-64 overflow-hidden rounded-lg w-44">
                      <img :src="images[6].url" :alt="images[6].alt" class="object-cover object-center w-full h-full" />
                    </div>
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
export default {
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
}
</script>
