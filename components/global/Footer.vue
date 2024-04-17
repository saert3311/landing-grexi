<template>
  <footer class="p-5 sm:px-16 sm:py-6 mt-12">
    <div
      class="w-full text-center space-y-4 sm:space-y-0 sm:grid sm:grid-cols-10 gap-20 md:gap-12 lg:gap-20"
    >
      <div class="col-start-2 col-span-2 space-y-3">
        <NuxtLink to="/">
          <img
            src="https://grexialbornett.com/wp-content/uploads/2023/06/Grexi-Albornett-Logo.svg"
            alt="Grexi Albornett Logo"
            class="mx-auto"
            width="250px"
        /></NuxtLink>
      </div>
      <div class="col-span-4 grid grid-cols-1 sm:grid-cols-4">
        <div class="col-span-2 space-y-4">
          <p class="font-bold text-lg">Enlaces de Interes</p>
          <div class="space-y-2">
            <NuxtLink
              to="https://grexialbornett.com/conoceme/"
              class="block text-[#5E6282]"
              target="_blank"
              >Conoceme</NuxtLink
            >
            <NuxtLink
              to="https://grexialbornett.com/nuestro-blog/"
              class="block text-[#5E6282]"
              target="_blank"
              >Blog</NuxtLink
            >
            <NuxtLink
              to="https://grexialbornett.simplybook.me/v2/?_ga=2.72224211.1546639574.1713224134-240460469.1690348041#book"
              class="block text-[#5E6282]"
              target="_blank"
              >Agendar</NuxtLink
            >
          </div>
        </div>
        <div class="col-span-2 space-y-4">
          <p class="font-bold text-lg">Contactos</p>
          <div class="space-y-2">
            <NuxtLink
              to="tel:17869560739"
              class="block text-[#5E6282]"
              target="_blank"
              >Telefono</NuxtLink
            >
            <NuxtLink
              to="https://api.whatsapp.com/send?phone=5216143978656"
              class="block text-[#5E6282]"
              target="_blank"
              >Whatsapp</NuxtLink
            >
            <NuxtLink
              to="mailto:consultas@grexialbornett.com"
              class="block text-[#5E6282]"
              target="_blank"
              >Correo</NuxtLink
            >
          </div>
        </div>
      </div>
      <div class="col-span-2 mt-4 md:mt-0">
        <div class="space-y-3 md:space-y-0 lg:space-y-3">
          <div class="flex items-center justify-center sm:justify-right">
            <SocialButton
              href="https://www.facebook.com/grexialbornett/"
              class="mx-3"
            >
              <FacebookIconSVG />
            </SocialButton>
            <SocialButton
              href="https://www.instagram.com/grexi_albornett/"
              class="mx-3"
            >
              <InstaIconSVG />
            </SocialButton>
            <SocialButton
              href="https://www.youtube.com/@GrexiAlbornett"
              class="mx-3"
            >
              <YoutubeIconSVG />
            </SocialButton>
          </div>
        </div>
      </div>
    </div>
    <p class="text-center text-xs text-[#5E6282] mb-8 mt-12 sm:mt-8">
      Hecho con amor 🥰🤗,
      <NuxtLink to="https://grexialbornett.com" class="text-indigo-600"
        >Grexi Albornett</NuxtLink
      >
      {{ new Date().getFullYear() }}
    </p>
  </footer>
</template>
<script setup>
import SocialButton from "./SocialButton.vue";
import FacebookIconSVG from "./svg/FacebookIconSVG.vue";
import InstaIconSVG from "./svg/InstaIconSVG.vue";
import YoutubeIconSVG from "./svg/YoutubeIconSVG.vue";
</script>
