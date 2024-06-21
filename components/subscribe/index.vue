<template>
  <section class="p-6 sm:p-20 sm:-mt-32 font-poppins max-w-7xl mx-auto" id="registro">
    <div class="bg-primary rounded-tl-[10rem] rounded-lg relative">
      <img src="/images/sello_padres.webp" alt="Padres Sanos, Hijos felices - Conferencia gratuita - Grexi Albornett" class="absolute -top-10 md:-top-3 right-4 z-10 w-36" />
      <div class="flex flex-wrap pb-10">
        <div class="w-full flex flex-col justify-center align-middle px-4 lg:w-7/12 mt-12">
            <p class="text-text font-semibold text-xl sm:text-xl text-center mt-5">
              ¿A quienes está dirigido?
            </p>
            <p class="text-text text-center mt-2 mx-5">
              A madres y padres de familia que deseen mejorar su relación con sus hijos, a manejar las situaciones de estrés y a comprender que es lo mejor para si mismo y para su familia. 
            </p>
            <p class="text-text text-center mt-2 mx-5">
              Cualquier persona que este deseando o planificando ser madre o padre consciente y brindarle una vida sana y plena a sus hijos.             </p>
            <p class="text-text font-semibold text-xl sm:text-xl text-center mt-5">
              ¿Cómo y cuando se realizará?
            </p>
            <p class="text-text text-center mt-2">
              Sábado 13 de julio a las 10:00am Hora miami
            </p>
            <p class="text-text text-center mt-2">
              UNICAMENTE EN VIVO por Zoom y YouTube (Si tienes una zona horaria distinta verifícala para que no te pierdas la conferencia)
            </p>
            <p class="text-text font-semibold text-xl sm:text-xl text-center mt-5">
              Esta conferencia es gratuita
            </p>
        </div>
        <div class="w-full px-4 lg:w-5/12">
          <registerCard />
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
import registerCard from "./registerCard.vue";
</script>
