<template>
  <section class="py-5 bg-gray-50 mb-10">
    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">

      <div class="text-center space-y-3 relative my-5">
        <h2 class="text-text font-bold text-2xl sm:text-3xl font-volkhov">
          Puntos a Tratar
        </h2>
      </div>
      <div class="flex flex-wrap items-center justify-between">
        <div class="w-full px-4">
          <StepsSubtitled
            v-for="(step, index) in steps_content"
            :key="index"
            :item="step"
            v-bind="{ last: index == steps_content.length - 1 ? true : false }"
          />
        </div>
      </div>
      <div
        class="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20"
      >
        <div class="">
          <h2
            class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl"
          >
            Que haremos en esta conferencia
          </h2>
          <p class="mt-4 text-base leading-relaxed text-gray-600">
            Sanar y reprogramar el origen de los escasez en sus vidas para
            lograr desbloquear la abundancia económica.<br />
            Esta regresión grupal tiene la misma efectividad que la regresión
            personal y presencial. Es una inducción terapéutica que te lleva a
            la mente profunda para instaurar información positiva que te permita
            el logro de tus objetivos para llevarte al éxito
          </p>
        </div>

        <div class="relative pl-20 pr-6 sm:pl-6 md:px-0">
          <div class="relative w-full max-w-xs mt-4 mb-10 ml-auto">
            <img
              class="ml-auto"
              src="/images/grexi_description.webp"
              alt="Grexi Albornett"
            />

            <img
              class="absolute -top-4 -left-12"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/wavey-lines.svg"
              alt=""
            />

            <div class="absolute -bottom-10 -left-16">
              <div class="bg-yellow-300">
                <div class="px-8 py-10 bg-gold">
                  <span class="block text-4xl font-bold text-white lg:text-5xl">
                    2
                  </span>
                  <span class="block mt-2 text-base leading-tight text-white">
                    Horas de<br />Contenido
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import StepsSubtitled from "./stepsSubtitled.vue";

const steps_content = [
  {
    title: "Dificultades financieras",
    text: "Falta de recursos financieros que impiden cubrir necesidades básicas, deseos y objetivos.",
  },
  {
    title: "Falta de progreso",
    text: "Incapacidad para avanzar en proyectos personales o profesionales.",
  },
  {
    title: "Incapacidad para satisfacer necesidades",
    text: "Imposibilidad de cubrir necesidades básicas o deseos debido a la falta de recursos financieros.",
  },
  {
    title: "Imposibilidad de compartir la abundancia",
    text: "Incapacidad de compartir la abundancia o ayudar a los demás debido a la falta de recursos financieros.",
  },
  {
    title: "Mala gestión financiera",
    text: "Dificultad para administrar el dinero de manera efectiva.",
  },
  {
    title: "Perspectiva financiera",
    text: "Cómo se ve el dinero y cómo se ve uno mismo en la prosperidad.",
  },
];
</script>
