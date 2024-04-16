<script setup>
import SatelightSVG from "~/components/global/svg/SatelightSVG.vue";
import AeroplaneSVG from "~/components/global/svg/AeroplaneSVG.vue";
import MicrophoneSVG from "~/components/global/svg/MicrophoneSVG.vue";
import CogSVG from "~/components/global/svg/CogSVG.vue";
import Card from "~/components/category/Card.vue";

const services = [
  {
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    title: "Local Events",
    description: "Barton vanity itself do in it. Preferd to"
  }
]
</script>

<template>
  <section class="p-6 sm:px-20 sm:py-5">
    <div class="text-center space-y-3 relative">
      <p class="uppercase font-semibold text-gray-600">Category</p>
      <h2 class="text-[#14183E] font-bold text-4xl sm:text-5xl font-volkhov">Tecnicas a Utilizar</h2>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-8 sm:p-0 gap-8 sm:gap-16 items-center my-4 sm:my-12 text-center">
      <Card v-for="service in services" :key="service.title" :title="service.title" :image="service.image" :description="service.description"/>
    </div>
  </section>
</template>
