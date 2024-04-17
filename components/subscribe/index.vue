<template>
  <section class="p-6 sm:p-20 sm:-mt-32 font-poppins">
    <div class="bg-[#EFE9DD] rounded-tl-[10rem] rounded-lg relative">
      <MailSVG />
      
      <div class="space-y-12 px-12 py-28 sm:p-28">
        <p class="text-text font-semibold text-xl sm:text-3xl text-center">
          Registrate y comienza a transformar tu mente
        </p>
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4 z-20"
        >

        </div>
      </div>
      <card />
      <CirclesSVG />
      <crossPatternSVG />
    </div>
  </section>
</template>
<script setup>
import MailSVG  from '~/components/global/svg/MailSVG.vue'
import emailIconSVG from '~/components/global/svg/emailIconSVG.vue'
import CirclesSVG from '../global/svg/CirclesSVG.vue';
import crossPatternSVG from '../global/svg/crossPatternSVG.vue';
import card from './card.vue';
</script>