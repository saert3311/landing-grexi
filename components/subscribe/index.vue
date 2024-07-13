<template>
  <section class="p-6 sm:p-20 sm:-mt-32 font-poppins max-w-7xl mx-auto" id="registro">
    <div class="bg-paleBlue rounded-tl-[10rem] rounded-lg relative">
      <img src="/images/sticker_taller_hijos_conectados.webp" alt="Padres Sanos, Hijos felices - Conferencia gratuita - Grexi Albornett" class="absolute -top-10 md:-top-3 right-4 z-10 w-36" />
      <div class="flex flex-wrap pb-10">
        <div class="w-full flex flex-col justify-center align-middle px-4 lg:w-7/12 mt-12">
            <p class="text-text font-semibold text-xl sm:text-xl text-center mt-5">
              ¿A quienes está dirigido?
            </p>
            <p class="text-text text-center mt-2 mx-5">
              A madres, padres o cualquier persona que desee ejercer una crianza consiente, desde el amor, respeto y conexión.
            </p>
            <p class="text-text font-semibold text-xl sm:text-xl text-center mt-5">
              ¿Cómo y cuando se realizará?
            </p>
            <p class="text-text text-center mt-2">
              Sábado 27 de julio a las 10:00am Hora miami
            </p>
            <p class="text-text text-center mt-2">
              Evento en vivo por Zoom (SI QUEDARA GRABADO por si quieres verlo con posterioridad o no puede asistir el día del evento en vivo)
            </p>
        </div>
        <div class="w-full px-4 lg:w-5/12">
          <linkCard />
        </div>
      </div>
      <CirclesSVG />
      <crossPatternSVG />
    </div>
  </section>
</template>
<script setup>
import CirclesSVG from "../global/svg/CirclesSVG.vue";
import crossPatternSVG from "../global/svg/crossPatternSVG.vue";
import linkCard from "./linkCard.vue";
</script>
