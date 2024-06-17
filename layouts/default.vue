<script setup>
import Footer from "~/components/global/Footer.vue";
useHead({
  htmlAttrs: {
    lang: "es",
  },
  meta: [
    {
      property: "og:title",
      content: `Padres Sanos, Hijos felices - Conferencia gratuita - Grexi Albornett`,
    },
    {
      name: "description",
      content:
        "Sana y reprograma las heridas de tu infancia que te condiciona a ser el padre o madre que no quieres. No dejes que los conflictos familiares afecten la salud emocional de tus hijos. ",
    },
    {
      property: "og:description",
      content:
        "Sana y reprograma las heridas de tu infancia que te condiciona a ser el padre o madre que no quieres.",
    },
    { property: "og:url", content: "https://conferencia.grexialbornett.com" },
    {
      property: "og:image",
      content: "https://conferencia-grexi.pages.dev/images/padres_grexi.webp",
    },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "es_ES" },
    { property: "og:site_name", content: "Padres Sanos, Hijos felices - Conferencia gratuita - Grexi Albornett" },
    { property: "og:locale", content: "es_ES" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:image",
      content: "https://conferencia-grexi.pages.dev/images/padres_grexi.webp",
    },
    {
      name: "twitter:image:alt",
      content: "Padres Sanos, Hijos felices - Conferencia gratuita - Grexi Albornett",
    },	
  ],
  title: `Padres Sanos, Hijos felices - Conferencia gratuita - Grexi Albornett`,
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
