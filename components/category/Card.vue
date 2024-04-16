<template>
          <div class="relative group">
        <div class="space-y-3 cursor-pointer mt-2 group-hover:border  p-12 sm:px-6 sm:py-12 group-hover:rounded-3xl group-hover:z-20 group-hover:bg-white group-hover:drop-shadow-2xl">
            {{  props.image }}
          <p class="text-[#1E1D4C] font-semibold">{{ props.title }}</p>
          <p class="text-xs text-gray-500">
            {{ props.description }}
          </p>
        </div>
        <svg
          class="hidden group-hover:block group-hover:absolute group-hover:-bottom-4 group-hover:w-20 group-hover:-left-4 group-hover:-z-10"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 30C0 13.4315 13.4315 0 30 0H100V90C100 95.5228 95.5229 100 90 100H0V30Z"
            fill="#DF6951"
          />
        </svg>
      </div>
</template>
<script setup>
const props = defineProps({
  title: String,
  description: String,
  image: String
});
</script>