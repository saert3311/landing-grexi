<script setup>
import Hero from '~/components/hero/index.vue'
import Details from '~/components/details/index.vue'
import Category from '~/components/category/index.vue'
import Subscribe from '~/components/subscribe/index.vue'
</script>

<template>
    <LazyHero />
    <LazyDetails />
    <LazyCategory />
    <LazySubscribe />
</template>
