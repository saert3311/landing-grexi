<template>
  <section class="p-6 sm:p-20 sm:-mt-32 font-poppins">
    <div class="bg-[#EFE9DD] rounded-tl-[10rem] rounded-lg relative">
      <MailSVG />
      <div class="flex flex-wrap pb-10">
        <div class="w-full flex flex-col justify-center align-middle px-4 lg:w-7/12 mt-12">
            <p class="text-text font-semibold text-xl sm:text-3xl text-center">
              Registrate y comienza a transformar tu mente
            </p>
            <p class="text-text text-center mt-4">
                Datos de fecha de inicio y forma de conexion
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
