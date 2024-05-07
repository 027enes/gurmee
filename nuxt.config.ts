// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-icons',
    'nuxt-swiper',
  ],
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },

  app: {
    head: {
      title: 'Restaurant Reviews',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Restaurant Reviews',
        },
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
    '~/assets/css/reset.css',
    '~/assets/css/restaurant.css',  
    '~/assets/css/light.css',
    '~/assets/css/custom.css',
  ],

})
