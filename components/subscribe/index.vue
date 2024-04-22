<template>
  <section class="p-6 sm:p-20 sm:-mt-32 font-poppins max-w-7xl mx-auto" id="registro">
    <div class="bg-[#EFE9DD] rounded-tl-[10rem] rounded-lg relative">
      <MailSVG />
      <div class="flex flex-wrap pb-10">
        <div class="w-full flex flex-col justify-center align-middle px-4 lg:w-7/12 mt-12">
            <p class="text-text font-semibold text-xl sm:text-xl text-center">
              A quienes esta dirigido
            </p>
            <p class="text-text text-center mt-2">
                Emprendedores<br>
                Comerciantes<br>
                Trabajadores<br>
                Amas de casa<br>
                Todo aquel que desee aumentar su poder adquisitivo e ingresos economicos
            </p>
            <p class="text-text font-semibold text-xl sm:text-xl text-center mt-5">
              Como y cuando se realizara
            </p>
            <p class="text-text text-center mt-2">
                Hora y fecha<br>
                A traves de la plataforma zoom<br>
                Duracion de 3-4  hora aprox<br>
                Totalmente gratuito
            </p>
        </div>
        <div class="w-full px-4 lg:w-5/12">
          <card />
        </div>
      </div>
      <CirclesSVG />
      <crossPatternSVG />
    </div>
  </section>
</template>
<script setup>
import MailSVG from "~/components/global/svg/MailSVG.vue";
import emailIconSVG from "~/components/global/svg/emailIconSVG.vue";
import CirclesSVG from "../global/svg/CirclesSVG.vue";
import crossPatternSVG from "../global/svg/crossPatternSVG.vue";
import card from "./card.vue";
</script>
