<template>
  <div
    class="border-blue-600 rounded-2xl border divide-y divide-gray-200 max-w-sm mx-auto mt-5 md:mt-20"
    style="
      box-shadow: rgba(45, 50, 130, 0.15) 0px 12px 16px -4px,
        rgba(45, 50, 130, 0.15) 0px 4px 6px -2px;
    "
  >
    <div class="p-6">
      <div class="flex justify-between">
        <h2 class="text-lg font-semibold text-gray-600">Inversion</h2>
      </div>
      <p class="mt-0.5 text-sm text-gray-500">Entrada a tu transformacion</p>
      <div class="mt-8">
      <p v-if="!isEnded" class="my-1 text-text text-lg font-bold">
          Solo por tiempo limitado!
      </p>
        <span v-if="!isEnded" class="text-4xl font-bold tracking-tight text-gray-900 me-2">$35</span>
        <span class="text-4xl tracking-tight text-gray-900" :class="{'line-through': !isEnded, 'font-bold': isEnded}">$60</span>
        <span class="text-base font-medium text-gray-500">/entrada</span>
    </div>
      <p class="mt-1 text-text text-sm">
        + cargos por procesamiento e impuesto
      </p>
      <a
        target="_blank"
        class="flex justify-center w-full py-3 mt-4"
      >
        <button class="block bg-gold text-white px-6 py-3 rounded-lg z-20" disabled>
          LAS INSCRIPCIONES HAN TERMINADO
        </button>
      </a>
    </div>
    <div class="px-6 pt-6 pb-8">
      <h3 class="text-sm font-medium text-gray-900">Que incluye</h3>
      <ul
        role="list"
        class="mt-6 space-y-4"
        v-for="(item, index) in contenido"
        :key="index"
      >
        <li class="flex space-x-3">
          <div
            class="flex justify-center items-center rounded-full bg-green-100 h-5 w-5"
          >
            <checkIconSVG />
          </div>
          <span class="text-sm text-gray-500">{{ item }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import checkIconSVG from "../global/svg/checkIconSVG.vue";

const contenido = [
  "Acceso a la conferencia",
  "Acceso a la grabacion de la conferencia",
  "Ebook y audios",
  "Sorpresas adicionales",
];

const endPromoDate = ref(new Date('2024-07-28'));

const isEnded = computed(() => {
  return new Date() > endPromoDate.value;
});

</script>
