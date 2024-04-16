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
          Best Destinations around the world
        </p>
        <div
          class="font-volkhov font-bold text-5xl md:text-6xl lg:text-8xl text-[#181E4B]"
        >
          <div class="flex space-x-3">
            <div>Travel,</div>
            <div class="relative">
              enjoy
              <LineSVG />
            </div>
          </div>
          <div>and live a new and full life</div>
        </div>
        <p class="font-poppins text-gray-500 text-sm">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div class="flex items-center space-x-3">
          <button type="button" aria-label="Find out more"
            class="block bg-[#F1A501] text-white p-3 text-sm font-poppins rounded-md"
          >
            Find out more
          </button>
        </div>
      </div>
      <div>
        <nuxt-picture
          src="/images/travel-girl.png"
          width="765"
          height="764"
          alt="travel-girl"
          sizes="sm:100vw md:50vw lg:400px"
        />
        <BrushSVG />
      </div>
    </section>
  </div>
</template>
