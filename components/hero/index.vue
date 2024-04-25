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
        <p class="uppercase font-poppins text-sm text-gold font-bold">
          EN SOLO 2 HORAS
        </p>
        <div
          class="font-volkhov font-bold text-5xl md:text-6xl lg:text-5xl text-[#181E4B]"
        >
          <div class="flex flex-wrap space-x-3 mb-3">
            <div>Conferencia de </div>
            <div class="relative">
              Sanación
              <LineSVG />
            </div>
          </div>
          <div class="leading-15">Transforma tu mente al éxito financiero</div>
        </div>
        <p class="font-poppins text-gray-500 text-md">
          Comprende de donde vienen los bloqueos y todo aquello que condiciona tu mente para que empieces a generar ingresos y disfrutar del éxito
        </p>
        <div class="flex items-center space-x-3">
          <NuxtLink to="#registro">
          <button type="button" aria-label="Ir al registro"
            class="block bg-gold text-white p-3 text-sm font-poppins rounded-md"
          >
            QUIERO MI ENTRADA
          </button>
        </NuxtLink>
        </div>
      </div>
      <div class="mt-5 md:mt-0 flex justify-center">
        <div style="position:relative; width:100%; height:0px; padding-bottom:56.250%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/xyb52n?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>
        <BrushSVG />
      </div>
    </section>
  </div>
</template>
