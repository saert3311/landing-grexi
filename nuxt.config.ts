// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-icon", "@nuxtjs/tailwindcss", "nuxt-headlessui", "@nuxt/image", 'nuxt3-meta-pixel', '@nuxtjs/turnstile'],
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
  turnstile: {
    siteKey: '0x4AAAAAAAcrueF6tbkYarfr',
  },
  ssr: true,
  runtimeConfig: {
    public: {
      gtmContainerId: process.env.GTM_CONTAINER_ID,
    },
    turnstile: {
      secretKey: process.env.TURNSTILE_SECRET_KEY,
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