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
        class="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-5"
      >
        <div>
          <h2
            class="text-3xl font-bold leading-tight text-brown sm:text-4xl lg:text-5xl"
          >
            Que haremos en esta conferencia
          </h2>
          <p class="my-4 text-base leading-relaxed text-gray-600">
            Sanar y reprogramar una herida en tu infancia que te condiciona a ser el padre o madre que no quieres, ese que de manera inconsciente esta gestando heridas en sus propios hijos, por desconocimiento o porque también lucha diariamente con sus heridas internas gestadas en su infancia por sus propios padres.
          </p>
          <p class="text-base leading-relaxed text-gray-600">
            Recuerda que esto no es tu culpa, solo no tienes las herramientas adecuadas para trascender y yo quiero brindártelas en esta ocasión. No dejes que los conflictos familiares afecten la salud emocional de tus hijos.
          </p>
        </div>

        <div class="relative pl-20 pr-6 sm:pl-6 md:px-0">
          <div class="relative w-full max-w-xs mt-4 mb-10 ml-auto">
            <img
              class="ml-auto"
              src="/images/padres_grexi_principal.webp"
              alt="Grexi Albornett"
            />

            <img
              class="absolute -top-4 -left-12"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/wavey-lines.svg"
              alt=""
            />

            <div class="absolute -bottom-10 -left-16">
              <div class="bg-yellow-300">
                <div class="px-8 py-10 bg-primary">
                  <span class="block text-4xl font-bold text-brown lg:text-5xl">
                    2
                  </span>
                  <span class="block mt-2 text-base leading-tight text-brown">
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
// objecto admite la propiedad title se renderizara en negrita
const steps_content = [
  {
    text: "En esta conferencia, yo como Hipnoterapeuta clínica y experta en constelaciones familiares, te ayudare a entender de primera mano cuales heridas emocionales se gestan en tus hijos a raíz de los conflictos familiares.",
  },
  {
    text: "Haremos juntos un viaje a tu propia infancia para que puedas concientizar cuales actuares de tus padres te causaron daño para que así cortes con los patrones que afectan a tus hijos.",
  },
  {
    text: "Te brindare Herramientas y estrategias para ayudar a tus hijos a enfrentar y superar las emociones negativas causadas por conflictos en el hogar.",
  },
  {
    text: "Aprenderás a reconocer los signos de estrés, ansiedad y depresión en los niños, y cómo intervenir de manera adecuada.",
  }
];
</script>
