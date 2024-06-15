<script setup>
import Header from "./Header.vue";
import LineSVG from "../global/svg/LineSVG.vue";
import BrushSVG from "../global/svg/BrushSVG.vue";
</script>

<template>
  <div class="relative">
    <Header />
    <section class="w-full grid grid-cols-1 md:grid-cols-2 items-center p-5 sm:px-20 sm:py-5 my-2 gap-10">
      <div class="space-y-3">
        <p class="uppercase font-poppins text-sm text-primary font-bold">
          Conferencia gratuita
        </p>
        <div
          class="font-volkhov font-bold text-5xl md:text-6xl lg:text-5xl text-[#181E4B]"
        >
          <div class="flex flex-wrap space-x-3 mb-5">
            <div>Padres sanos, </div>
            <div class="relative">
              hijos felices
              <LineSVG hexColor="#DFC1D0" class="-z-10"/>
            </div>
          </div>
        </div>
        <p class="font-poppins text-gray-500 text-md mb-5">
          ¡Atención papás! ¿Te preocupa cómo los conflictos familiares afectan la salud emocional y mental de tus hijos? No te pierdas mi conferencia GRATUITA de Afectaciones emocionales y mentales en los niños por los conflictos familiares.
        </p>
        <div class="flex items-center space-x-3">
          <NuxtLink to="#registro">
          <button type="button" aria-label="Ir al registro"
            class="block bg-primary text-white p-3 text-sm font-poppins rounded-md"
          >
            QUIERO MI ENTRADA
          </button>
        </NuxtLink>
        </div>
      </div>
      <div class="mt-5 md:mt-0 flex justify-center">
        <div style="position:relative; width:100%; height:0px; padding-bottom:56.250%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/xyb52n?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>
        <BrushSVG hexColor="#DFC1D0"/>
      </div>
    </section>
  </div>
</template>
