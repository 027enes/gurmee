// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-icons',
    'nuxt-swiper',
    '@nuxt/image',
  ],
  proxy: {
    '/api/': {
      target: 'https://dev.gurmenu.com',
      pathRewrite: { '^/api/': '' },
      changeOrigin: true,
    },
  },
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        {
          rel: 'stylesheet',
        }
      ],
    },
  },
  css: [
    /*'~/assets/css/reset.css',
    '~/assets/css/restaurant.css',  
    '~/assets/css/light.css',*/
    '~/assets/css/custom.css',
    '~/assets/css/style.css',
  ],
  experimental: {
    defaults: {
      nuxtLink: {
        componentName: 'NuxtLink',
        externalRelAttribute: 'noopener noreferrer',
        activeClass: 'router-link-active',
        exactActiveClass: 'router-link-exact-active',
        prefetchedClass: undefined, // can be any valid string class name
        trailingSlash: undefined // can be 'append' or 'remove'
      }
    }
  }
})
