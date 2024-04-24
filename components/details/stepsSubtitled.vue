<template>
  <div class="mx-auto dark:bg-gray-800">
    <div class="flex">
      <div class="mr-4 flex flex-col items-center">
        <div>
          <div
            class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-secondary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 text-secondary"
            >
              <path d="M12 5l0 14"></path>
              <path d="M18 13l-6 6"></path>
              <path d="M6 13l6 6"></path>
            </svg>
          </div>
        </div>
        <div class="h-full w-px bg-secondary" :class="{hidden: props.last}"></div>
      </div>
      <div class="pt-1 pb-8">
        <p class="mb-2 text-xl text-text">
          <span class="font-bold">{{ props.item.title}}: </span> {{ props.item.text }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>

const props = defineProps({
  item: Object,
  last: {
    type: Boolean,
    default: false
  }
});
</script>