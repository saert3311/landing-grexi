// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-icon", "@nuxtjs/tailwindcss", "nuxt-headlessui", "@nuxt/image", 'nuxt3-meta-pixel'],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    config: {
      theme: {
        fontFamily: {
          'poppins': ['Poppins', 'sans-serif'],
          'volkhov': ['Volkhov', 'serif']
        }
      },
      plugins: [
        require('tailwind-scrollbar-hide')
      ]
    }
  },
  ssr: true,
  runtimeConfig: {
    public: {
      gtmContainerId: process.env.GTM_CONTAINER_ID,
    }
  },
  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: process.env.META_PIXEL_ID,
    autoPageView: true,
    disabled: false,
  },
});