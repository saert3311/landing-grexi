<script setup>
import Card from "~/components/category/Card.vue";

const services = [
  {
    title: "Hipnosis de anclaje",
    description: "Utiliza el estado relajado de la mente, trabajaremos en patrones de pensamiento, hábitos, comportamientos y emociones.",
    image: 'https://grexialbornett.com/wp-content/uploads/2023/05/Esfera-7.webp'
  },
  {
    title: "Regresión",
    description: "Repasar acontecimientos pasados para comprender las razones o motivos y analizarlos desde una nueva perspectiva.",
    image: 'https://grexialbornett.com/wp-content/uploads/2023/05/Esfera-3.webp'
  },
]
</script>

<template>
  <section class="p-6 sm:px-20 sm:py-5 max-w-7xl mx-auto">
    <div class="text-center space-y-3 relative">
      <p class="uppercase font-semibold text-gray-600">Reprogramar y comprender</p>
      <h2 class="text-[#14183E] font-bold text-4xl sm:text-5xl font-volkhov">Técnicas a Utilizar</h2>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 p-8 sm:p-0 gap-8 sm:gap-16 items-center my-4 sm:my-12 text-center">
      <Card v-for="service in services" :key="service.title" :title="service.title" :image="service.image" :description="service.description"/>
    </div>
  </section>
</template>
