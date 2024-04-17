<template>
  <a :href="props.href" class="text-gray-500 hover:text-gold" target="_blank" rel="noreferer noopener nofollow">
    <slot />
  </a>
</template>
<script setup>
const props = defineProps({
  href: String,
});
</script>
