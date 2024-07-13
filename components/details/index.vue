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
            ¿Que voy a aprender con esta conferencia
          </h2>
          <p class="my-4 text-base leading-relaxed text-gray-600">
            En esta conferencia vas aprender a ser el padre que tus hijos necesitan que seas, conectando directamente con sus necesidades tantos emocionales, psicológicas y físicas. Permitiéndose a ambos tener una dinámica sana donde tanto el hijo como el padre puedan crecer conscientemente sanos en armonía, superando la sobre exigencia de la sociedad actual y tomando consciencia sobre lo que daña a tu hijo para no repetirlo.           </p>
          <p class="text-base leading-relaxed text-gray-600">
            Descubre cómo ser un mejor padre a través del autoconocimiento. Aprende a gestionar tus emociones, mejorar tu comunicación con tus hijos y fortalecer los lazos familiares. No te pierdas esta oportunidad de crecer como padre y como persona, tus hijos necesitan un padre o madre feliz que les pueda brindar una crianza consciente.           </p>
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
                  <!--<span class="block text-4xl font-bold text-brown lg:text-5xl">
                    2
                  </span>-->
                  <span class="block mt-2 text-base leading-tight text-brown font-bold text-xl">
                    TOTALMENTE<br />EN VIVO
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
    text: "El padre que soy desde el individuo que soy",
  },
  {
    text: "Mi hijo es un espejo de mí y de mi relación con mi pareja.",
  },
  {
    text: "Traumas que me condicionan a ser el padre que soy.",
  },
  {
    text: "Toma de conciencia sobre la maternidad o paternidad que ejerzo.",
  },
  {
    text: "Lo sobre exigencia social, personal e infantil.",
  }
];
</script>
