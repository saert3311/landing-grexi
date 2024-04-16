<script setup>
import Header from "./Header.vue";
import LineSVG from "../global/svg/LineSVG.vue";
import BrushSVG from "../global/svg/BrushSVG.vue";
</script>

<template>
  <div class="relative">
    <Header />
    <section class="w-full grid grid-cols-1 md:grid-cols-2 items-center p-5 sm:p-20 my-2">
      <div class="space-y-3">
        <p class="uppercase font-poppins text-sm text-[#DF6951] font-bold">
          EN SOLO 2 - 3 HORAS
        </p>
        <div
          class="font-volkhov font-bold text-5xl md:text-6xl lg:text-5xl text-[#181E4B]"
        >
          <div class="flex space-x-3 mb-3">
            <div>Conferencia de </div>
            <div class="relative">
              Sanación
              <LineSVG />
            </div>
          </div>
          <div class="leading-15">Transforma tu mente al exito financiero</div>
        </div>
        <p class="font-poppins text-gray-500 text-md">
          Comprende de donde vienen los bloqueos y todo aquello que condiciona tu mente para no generar ingresos ni ser éxitoso
        </p>
        <div class="flex items-center space-x-3">
          <button type="button" aria-label="Find out more"
            class="block bg-[#F1A501] text-white p-3 text-sm font-poppins rounded-md"
          >
            Inicia tu transformación
          </button>
        </div>
      </div>
      <div class="mt-5 md:mt-0">
        <nuxt-picture
          src="/images/main_success.webp"
          width="765"
          height="764"
          alt="Success Image"
          sizes="sm:100vw md:50vw lg:400px"
        />
        <BrushSVG />
      </div>
    </section>
  </div>
</template>
