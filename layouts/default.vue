<script setup>
import Footer from "~/components/global/Footer.vue";
useHead({
  htmlAttrs: {
    lang: "es",
  },
  meta: [
    {
      property: "og:title",
      content: `Padres Conectados, Hijos Libres - Conferencia online - Grexi Albornett`,
    },
    {
      name: "description",
      content:
        "Un taller terapéutico para darte los recursos que necesitas para ser el padre que tus hijos necesitan que seas.",
    },
    {
      property: "og:description",
      content:
        "Un taller terapéutico para darte los recursos que necesitas para ser el padre que tus hijos necesitan que seas.",
    },
    { property: "og:url", content: "https://conferencia.grexialbornett.com" },
    {
      property: "og:image",
      content: "https://conferencia-grexi.pages.dev/images/sticker_taller_hijos_conectados.webp",
    },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "es_ES" },
    { property: "og:site_name", content: "Padres Conectados, Hijos Libres - Conferencia online - Grexi Albornett" },
    { property: "og:locale", content: "es_ES" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:image",
      content: "https://conferencia-grexi.pages.dev/images/sticker_taller_hijos_conectados.webp",
    },
    {
      name: "twitter:image:alt",
      content: "Padres Conectados, Hijos Libres - Conferencia online - Grexi Albornett",
    },	
  ],
  title: `Padres Conectados, Hijos Libres - Conferencia online - Grexi Albornett`,
});
</script>

<template>
  <main class="max-w-8xl">
    <NuxtLoadingIndicator />
    <Head />
    <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <Head />
    <slot />
    <Footer />
  </main>
</template>
<style>
body {
background-color: #F5F1EB;
}
</style>
