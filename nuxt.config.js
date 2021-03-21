import * as SITE_INFO from './content/site/info.json'
import { COLOR_MODE_FALLBACK } from './utils/globals.js'

export default {
  target: 'static',
  components: true,
  server: {
    port: 8000 // default is 3000
  },
  // ? The env Property: https://nuxtjs.org/api/configuration-env/
  env: {
    url:
      process.env.NODE_ENV === 'production'
        ? process.env.URL || 'http://createADotEnvFileAndSetURL'
        : 'http://localhost:8000',
    lang: SITE_INFO.sitelang || 'en-US'
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
        content: SITE_INFO.sitedescription || process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true
      },
      {
        rel: 'preload',
        as: 'style',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
        media: 'print',
        onload: `this.media='all'`
      }
    ], // ? Imports the font 'Inter', can be optimized by the netlify plugin 'Subfont' by uncommenting it in `netlify.toml`
    noscript: [
      {
        innerHTML:
          '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap">'
      }
    ],
    __dangerouslyDisableSanitizers: ['noscript']
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#526488' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // 'nuxt-vite',
    '@nuxtjs/color-mode',
    'nuxt-windicss',
    '@nuxtjs/svg',
    '@nuxtjs/pwa'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxt/content', '@nuxtjs/axios', 'nuxt-i18n'],
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    // postcss: {
    //   plugins: {
    //     'postcss-import': postcssImport,
    //     // tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
    //     'postcss-nesting': postcssNesting,
    //     'postcss-preset-env': postcssPresetEnv({
    //       stage: 1,
    //       features: {
    //         'nesting-rules': false
    //       }
    //     }),
    //     'postcss-easing-gradients': postcssEasingGradients
    //   }
    // },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  /*
   ** Custom additions configuration
   */
  // ? The content property: https://content.nuxtjs.org/configuration
  content: {
    dir: 'content'
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: COLOR_MODE_FALLBACK, // fallback value if not system preference found
    componentName: 'ColorScheme',
    cookie: {
      options: {
        sameSite: 'lax'
      }
    }
  },
  pwa: {
    icon: {
      source: 'static/logo-mini.png',
      filename: 'logo-mini.png'
    },
    manifest: { name: SITE_INFO.sitename || process.env.npm_package_name || '', lang: process.env.lang },
    meta: {
      name: SITE_INFO.sitename || process.env.npm_package_name || '',
      lang: process.env.lang,
      ogHost: process.env.URL,
      ogImage: '/logo-mini.jpg'
    }
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.js', dir: 'ltr', name: 'English' },
      { code: 'ar', iso: 'ar-SA', file: 'ar.js', dir: 'rtl', name: 'العربية' },
      { code: 'ms', iso: 'ms-MY', file: 'ms.js', dir: 'ltr', name: 'Bahasa Malayu' },
      { code: 'sw', iso: 'sw', file: 'sw.js', dir: 'ltr', name: 'Swahili' }
    ],
    defaultLocale: 'en',
    fallbackLocale: 'en',
    defaultDirection: 'ltr',
    lazy: true,
    strategy: 'prefix_except_default',
    langDir: 'translations',
    baseUrl: process.env.URL
  }
}
