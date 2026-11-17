export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: false,

  nitro: {
    preset: "cloudflare-pages"
  },

  css: ["assets/css/tailwind.css"],
  modules: [
    'nitro-cloudflare-dev',
    '@nuxt/ui',
    '@vueuse/nuxt'
  ],

  runtimeConfig: {
    public: {
      baseUrl: `${process.env.BASE_URL || 'http://localhost:8080'}/lyrics`,
      wsUrl: `${process.env.WS_URL || 'ws://localhost:8080'}/lyrics`,
      apiKey: process.env.API_KEY || ''
    }
  }
})
