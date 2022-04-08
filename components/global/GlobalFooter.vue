<template>
  <footer class="relative w-full pt-48 bg-gray-800 mt-44 body-font">
    <Subscribe class="absolute inset-x-0 -top-48" />
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="py-12 mx-12 sm:px-6 lg:py-16 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8 xl:col-span-1">
          <img class="h-14" src="~/static/logo-dark.svg" alt="Company name" />
          <p class="text-base text-gray-200">Educate. Empower. Improve</p>
        </div>
        <div class="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold tracking-wider text-gray-400 uppercase">Causes</h3>
              <ul v-for="(cause, i) in causes" :key="i" role="list" class="mt-4 space-y-4">
                <li>
                  <NuxtLink :to="localePath(cause.link)" class="text-base text-gray-200 hover:text-primary-500">
                    {{ cause.title }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-sm font-semibold tracking-wider text-gray-400 uppercase">Support</h3>
              <ul v-for="(sp, i) in support" :key="i" role="list" class="mt-4 space-y-4">
                <li>
                  <a
                    v-if="sp.external"
                    :href="sp.link"
                    target="_blank"
                    class="text-base text-gray-200 hover:text-primary-500">
                    <span>{{ sp.title }} </span><ExternalLinkIcon />
                  </a>
                  <NuxtLink v-else :to="localePath(sp.link)" class="text-base text-gray-200 hover:text-primary-500">
                    {{ sp.title }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold tracking-wider text-gray-400 uppercase">Company</h3>
              <ul v-for="(cp, i) in company" :key="i" role="list" class="mt-4 space-y-4">
                <li>
                  <NuxtLink :to="localePath(cp.link)" class="text-base text-gray-200 hover:text-primary-500">
                    {{ cp.title }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-sm font-semibold tracking-wider text-gray-400 uppercase">Legal</h3>
              <ul v-for="(lg, i) in legal" :key="i" role="list" class="mt-4 space-y-4">
                <li>
                  <NuxtLink :to="localePath(lg.link)" class="text-base text-gray-200 hover:text-primary-500">
                    {{ lg.title }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-gray-400 bg-gray-900">
      <div class="container flex flex-col items-center px-5 py-12 mx-auto 2xl:mx-12 sm:flex-row">
        <p class="mb-3 text-sm sm:mb-0 sm:ml-6 sm:mt-0">© 2021 An-Nadaa. All right reserved.</p>
        <span class="inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
          <a v-for="social in socialIcons" :href="social.link" target="_blank" :key="social.link">
            <Component class="w-6 h-6 mx-3 hover:text-primary-500" :is="social.icon" />
          </a>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
import {
  BrandTwitterIcon,
  BrandLinkedinIcon,
  BrandFacebookIcon,
  BrandYoutubeIcon,
  BrandInstagramIcon,
  BrandTelegramIcon,
  BrandSpotifyIcon,
  ExternalLinkIcon,
} from 'vue-tabler-icons'

export default {
  components: {
    BrandTwitterIcon,
    BrandLinkedinIcon,
    BrandFacebookIcon,
    BrandYoutubeIcon,
    ExternalLinkIcon,
  },
  data() {
    return {
      legal: [
        {
          title: 'Privacy',
          link: '#',
        },
        {
          title: 'Terms',
          link: '#',
        },
        // {
        //   title: 'Licenses',
        //   link: '#',
        // },
      ],
      company: [
        {
          title: 'About',
          link: '/about',
        },
        {
          title: 'Blog',
          link: '#',
        },
        {
          title: 'Press',
          link: '#',
        },
        {
          title: 'Partners',
          link: '#',
        },
      ],
      support: [
        {
          title: 'Contact',
          link: '/contact',
        },
        {
          title: 'FAQs',
          link: '/faq',
        },
        {
          title: 'API Status',
          link: 'https://uptime.api.an-nadaa.com/status/system',
          external: true,
        },
      ],
      causes: [
        {
          title: 'Donate',
          link: '/#donate',
        },
        {
          title: 'Campaigns',
          link: '/causes?s=c',
        },
        {
          title: 'Projects',
          link: '/causes?s=p',
        },
      ],
      socialIcons: [
        {
          icon: BrandTelegramIcon,
          link: 'https://t.me/annadaaedu',
        },
        {
          icon: BrandTwitterIcon,
          link: 'https://twitter.com/annadaaedu',
        },
        {
          icon: BrandFacebookIcon,
          link: 'https://www.facebook.com/annadaaedu',
        },
        {
          icon: BrandSpotifyIcon,
          link: 'https://open.spotify.com/show/50hyHsvHpxSBETB8pQolkN',
        },
        // {
        //   icon: BrandLinkedinIcon,
        //   link: 'https://linkedin.com',
        // },
        {
          icon: BrandYoutubeIcon,
          link: 'https://www.youtube.com/c/annadaaeducationalfoundation',
        },
        {
          icon: BrandInstagramIcon,
          link: 'https://instagram.com/annadaaedu',
        },
      ],
    }
  },
}
</script>
