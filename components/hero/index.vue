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
        <p class="uppercase font-poppins text-sm text-secondary font-bold">
          Taller terapéutico
        </p>
        <div
          class="font-volkhov font-bold text-5xl md:text-6xl lg:text-5xl text-brown"
        >
          <div class="flex flex-wrap space-x-3 mb-5">
            <div>Padres conectados, </div>
            <div class="relative">
              hijos libres
              <LineSVG hexColor="#DFC1D0" class="-z-10"/>
            </div>
          </div>
        </div>
        <p class="font-poppins text-gray-500 text-md mb-5">
          🌼 Un taller terapéutico para darte los recursos que necesitas para ser el padre que tus hijos necesitan que seas 💕
        </p>
        <div class="flex items-center space-x-3">
          <NuxtLink to="#registro" external>
          <button type="button" aria-label="Ir al registro"
            class="block bg-transparent  border-2 text-green border-green p-3 text-sm font-poppins rounded-md font-bold rounded-lg"
          >
            QUIERO MI ENTRADA
          </button>
        </NuxtLink>
        </div>
      </div>
      <div class="mt-5 md:mt-0 flex justify-center">
        <div style="position:relative; width:100%; height:0px; padding-bottom:56.604%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/q6lre2?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>
        <BrushSVG hexColor="#e2ebef" />
      </div>
    </section>
  </div>
</template>
