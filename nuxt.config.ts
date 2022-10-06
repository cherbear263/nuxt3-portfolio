// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

  pageTransition: ['fade'],
  modules: ['@nuxtjs/tailwindcss'
],
  tailwindcss: {
  cssPath: '~/assets/css/tailwind.css'
  },

})
