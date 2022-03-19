<template>
  <div class="relative py-16 bg-white sm:py-24">
    <div class="mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
      <div class="relative h-full sm:py-16 lg:py-0">
        <div aria-hidden="true" class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
          <div class="absolute inset-y-0 w-full right-1/2 bg-gray-50 rounded-r-3xl lg:right-72" />
          <svg
            class="absolute -ml-3 top-8 left-1/2 lg:-right-8 lg:left-auto lg:top-12"
            width="404"
            height="392"
            fill="none"
            viewBox="0 0 404 392">
            <defs>
              <pattern
                id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
          </svg>
        </div>
        <div class="relative h-full max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
          <!-- Testimonial card-->
          <div class="relative h-full pt-64 pb-10 overflow-hidden shadow-xl rounded-2xl">
            <img class="absolute inset-0 object-cover w-full h-full" :src="images[0].url" alt="" />
            <div class="absolute inset-0 bg-primary-100 mix-blend-multiply" />
            <div class="absolute inset-0 bg-gradient-to-t from-primary-700 opacity-90" />
            <!-- <div class="relative px-8">
              <div>
                <img class="h-48" src="https://tailwindui.com/img/logos/workcation.svg?color=white" alt="Workcation" />
              </div>
              <blockquote class="mt-8">
                <div class="relative text-lg font-medium text-white md:flex-grow">
                  <svg
                    class="absolute top-0 left-0 w-8 h-8 transform -translate-x-3 -translate-y-2 text-primary-400"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true">
                    <path
                      d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p class="relative">
                    Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam.
                    Montes, magna cursus nulla feugiat dignissim id lobortis amet.
                  </p>
                </div>

                <footer class="mt-4">
                  <p class="text-base font-semibold text-primary-200">Sarah Williams, CEO at Workcation</p>
                </footer>
              </blockquote>
            </div> -->
          </div>
        </div>
      </div>

      <div class="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0">
        <!-- Content area -->
        <div class="pt-12 sm:pt-16 lg:pt-20">
          <h2 class="tracking-tight text-gray-900 text-7xl sm:text-4xl">
            An-Nadaa is bringing a huge positive impact for the underprivileged communities in Nigeria.
          </h2>
          <div class="mt-6 space-y-6 text-gray-500">
            <p class="text-lg">
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
              pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel
              porttitor vitae ut. Amet vitae fames senectus vitae.
            </p>
            <p class="text-base leading-7">
              Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium
              arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna. Sollicitudin tristique eros erat
              odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec
              ut volutpat donec laoreet quam urna.
            </p>
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
