export default defineNuxtConfig({
  compatibilityDate: '2026-03-10',
  future: { compatibilityVersion: 4 },
  modules: ['@pinia/nuxt'],
  typescript: { strict: true },
  css: ['~/assets/styles/main.scss'],
})