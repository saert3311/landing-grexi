<script setup>
import Header from "./Header.vue";
import BrushSVG from "../global/svg/BrushSVG.vue";
import message from "../global/message.vue";
</script>

<template>
  <div class="relative">
    <Header />
    <section class="w-full p-5 md:p-10 flex my-32">
      <div class="space-y-3">
        <div
          class="font-volkhov font-bold text-5xl md:text-6xl lg:text-5xl text-brown"
        >
          <div class="flex flex-wrap space-x-3 mb-5">
            <div>Registro Exitoso ✅</div>
          </div>
        </div>
        <p class="font-poppins text-gray-500 text-md mb-5">
          Atento a tu buzon de correo electronico no olvides revisar la bandeja de spam, enviaremos toda la informacion necesaria para que puedas acceder a la conferencia.
        </p>
        <p class="font-poppins text-gray-500 text-md mb-5">
          <icon name="ic:baseline-whatsapp" class="inline-block" color="green" size="24"/>No olvides unirte a nuestro grupo de whatsapp para recibir informacion adicional.
        </p>
        <div class="flex items-center space-x-3">
          <NuxtLink to="https://grexialbornett.com">
          <button type="button" aria-label="Ir al registro"
            class="block bg-transparent  border-2 text-green border-green p-3 text-sm font-poppins rounded-md font-bold rounded-lg"
          >
            PAGINA PRINCIPAL
          </button>
        </NuxtLink>
        </div>
      </div>
    </section>
    <BrushSVG hexColor="#DFC1D0" />
  </div>
</template>
