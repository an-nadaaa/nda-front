import * as SITE_INFO from './content/site/info.json'
import { COLOR_MODE_FALLBACK } from './utils/globals.js'
import { libDirPath } from '@builder.io/partytown/utils'
import { promises as fsp } from 'fs'
import { join } from 'path'
import { cwd } from 'process'
import serveStatic from 'serve-static'

export default async () => {
  const partytownSnippet = await fsp.readFile(join(libDirPath(), 'partytown.js'), 'utf-8')
  return {
    target: 'static',
    generate: {
      exclude: [/^\/causes/],
      fallback: true,
    },
    components: true,
    server: {
      port: 3000, // default is 3000
    },
    // ? The env Property: https://nuxtjs.org/api/configuration-env/
    env: {
      functionBaseUrl:
        process.env.NODE_ENV === 'production'
          ? `${process.env.BASE_URL}/.netlify/functions`
          : 'http://localhost:8888/.netlify/functions',
      lang: SITE_INFO.sitelang || 'en-US',
      STRIPE_PK_DEV: process.env.STRIPE_PK_DEV,
      STRIPE_PK_PROD: process.env.STRIPE_PK_PROD,
      STRAPI_API: process.env.STRAPI_API,
      STRAPI_API_KEY: process.env.STRAPI_API_KEY,
    },
    /*
     ** Headers of the page
     */
    head: {
      title: SITE_INFO.sitename || process.env.npm_package_name || '',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: SITE_INFO.sitedescription || process.env.npm_package_description || '',
        },
      ],
      link: [],
      noscript: [],
      __dangerouslyDisableSanitizers: ['noscript'],
      __dangerouslyDisableSanitizersByTagID: {
        partytown: ['innerHTML'],
        'partytown-config': ['innerHTML'],
      },
      script: [
        {
          hid: 'partytown-config',
          innerHTML: `partytown = {
            debug: ${process.env.NODE_ENV === 'production' ? 'false' : 'true'},
            forward: ['hj', 'hj.q', 'hj.q.push', '_hjSettings'],
          }`,
        },
        { hid: 'partytown', innerHTML: partytownSnippet },
        { text: 'text/partytown', src: 'js/hotjar/hotjar.js' },
      ],
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#526488' },
    /*
     ** Global CSS
     */
    css: ['@/assets/css/tailwind.css', 'hooper/dist/hooper.css'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
      { src: '~/plugins/event-bus.js' },
      { src: '~/plugins/vue-stripe.js', ssr: false },
      { src: '~/plugins/vue-tippy.js', ssr: false },
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
      // 'nuxt-vite',
      '@nuxtjs/color-mode',
      '@nuxt/postcss8',
      '@nuxtjs/svg',
      '@nuxtjs/pwa',
      '@nuxtjs/html-validator',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
      '@nuxt/content',
      '@nuxtjs/axios',
      '@nuxtjs/i18n',
      '@nuxtjs/robots',
      '@dansmaculotte/nuxt-segment',
      [
        'nuxt-social-meta',
        {
          url: 'https://an-nadaa.com/',
          title: 'An-nadaa project, build your hereafter today',
          site_name: 'An-nadaa Educational foundation',
          description:
            'Build for your hereafter today with An-Nadaa. You can change the lives of millions by supporting educational and welfare projects of An-Nadaa that are bringing a huge positive impact to the community.',
          img: 'https://an-nadaa-media.s3.us-west-004.backblazeb2.com/website/photo_2022-03-17_13-50-53.jpg',
          img_size: { width: '1200', height: '630 ' },
          locale: 'en_US',
          twitter: '@annadaaedu',
          twitter_card: 'https://an-nadaa-media.s3.us-west-004.backblazeb2.com/website/photo_2022-03-17_13-50-53.jpg',
          theme_color: '#06b6d4',
        },
      ],
      // always declare sitemap module at the end
      '@nuxtjs/sitemap',
    ],
    /*
     ** https://nuxtjs.org/docs/features/component-discovery/
     */
    components: {
      dirs: [
        '~/components',
        '~/components/about',
        '~/components/global',
        '~/components/contact',
        '~/components/causes',
        '~/components/posts',
        '~/components/home',
      ],
    },

    serverMiddleware:
      process.env.NODE_ENV === 'production'
        ? []
        : [
            {
              path: '/~partytown/',
              handler: serveStatic(libDirPath()),
            },
          ],
    /*
     ** Build configuration
     */
    build: {
      // transpile: ['marked'],
      extractCSS: true,
      postcss: {
        plugins: {
          'tailwindcss/nesting': {},
          tailwindcss: {},
          autoprefixer: {},
        },
      },
      /*
       ** You can extend webpack config here
       */
      extend(config, ctx) {},
    },
    /*
     ** Custom additions configuration
     */
    // ? The content property: https://content.nuxtjs.org/configuration
    content: {
      dir: 'content',
    },
    colorMode: {
      preference: 'system', // default value of $colorMode.preference
      fallback: COLOR_MODE_FALLBACK, // fallback value if not system preference found
      componentName: 'ColorScheme',
      cookie: {
        options: {
          sameSite: 'lax',
        },
      },
    },
    pwa: {
      icon: {
        source: 'static/logo-mini.png',
        filename: 'logo-mini.png',
      },
      manifest: { name: SITE_INFO.sitename || process.env.npm_package_name || '', lang: process.env.lang },
      meta: {
        name: SITE_INFO.sitename || process.env.npm_package_name || '',
        lang: process.env.lang,
        ogHost: process.env.NODE_ENV === 'production' ? process.env.BASE_URL : 'http://localhost:8888',
        ogImage: '/logo-mini.jpg',
      },
    },
    i18n: {
      locales: [
        { code: 'en', iso: 'en-US', file: 'en.js', dir: 'ltr', name: 'English' },
        { code: 'ar', iso: 'ar-SA', file: 'ar.js', dir: 'rtl', name: 'العربية' },
        { code: 'ms', iso: 'ms-MY', file: 'ms.js', dir: 'ltr', name: 'Bahasa Malayu' },
        // we use the NG postfix because sw is ignored in git ignore for being a convention for service workers
        { code: 'sw', iso: 'sw', file: 'sw-NG.js', dir: 'ltr', name: 'Swahili' },
      ],
      defaultLocale: 'en',
      fallbackLocale: 'en',
      defaultDirection: 'ltr',
      lazy: true,
      strategy: 'prefix_except_default',
      langDir: 'translations',
      baseUrl: process.env.NODE_ENV === 'production' ? process.env.BASE_URL : 'http://localhost:8888',
    },
    sitemap: {
      // options
      hostname: 'https://an-nadaa.com',
    },
    // https://github.com/dansmaculotte/nuxt-segment
    segment: {
      writeKey: process.env.SEGMENT_WRITE_KEY,
      disabled: false,
      useRouter: true,
    },
  }
}
