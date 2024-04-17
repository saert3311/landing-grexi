<script setup>
import Footer from "~/components/global/Footer.vue";
useHead({
  htmlAttrs: {
    lang: "es",
  },
  meta: [
    {
      property: "og:title",
      content: `Transforma tu mente al exito financiero`,
    },
    {
      name: "description",
      content:
        "Comprender de donde vienen los bloqueos y todo aquello que condiciona tu mente para no generar ingresos ni ser éxitoso",
    },
    {
      property: "og:description",
      content:
        "reprogramación de la mente inconsciente para eliminar las barreras de poder adquirir grandes cantidades de dinero",
    },
    { property: "og:url", content: "" },
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
