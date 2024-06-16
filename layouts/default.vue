<script setup>
import Footer from "~/components/global/Footer.vue";
useHead({
  htmlAttrs: {
    lang: "es",
  },
  meta: [
    {
      property: "og:title",
      content: `Transforma tu mente al exito financiero - Grexi Albornett`,
    },
    {
      name: "description",
      content:
        "Comprender de donde vienen los bloqueos y todo aquello que condiciona tu mente para no generar ingresos ni ser éxitoso",
    },
    {
      property: "og:description",
      content:
        "Reprogramación de la mente inconsciente para eliminar las barreras de poder adquirir grandes cantidades de dinero",
    },
    { property: "og:url", content: "https://conferencia-grexi.pages.dev/" },
    {
      property: "og:image",
      content: "https://conferencia-grexi.pages.dev/images/exito_grexi.webp",
    },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "es_ES" },
    { property: "og:site_name", content: "Transforma tu mente al exito financiero - Grexi Albornett" },
    { property: "og:locale", content: "es_ES" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:image",
      content: "https://conferencia-grexi.pages.dev/images/exito_grexi.webp",
    },
    {
      name: "twitter:image:alt",
      content: "Transforma tu mente al exito financiero - Grexi Albornett",
    },	
  ],
  title: `Transforma tu mente al exito financiero - Grexi Albornett`,
});
</script>

<template>
  <Head />
  <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <Head />
  <main class="max-w-8xl">
    <slot />
    <Footer />
  </main>
</template>
<style>
body {
background-color: #F5F1EB;
}
</style>
