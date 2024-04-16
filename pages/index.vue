<script setup>
import Hero from '~/components/hero/index.vue'
import Category from '~/components/category/index.vue'
import About from '~/components/about/index.vue'
import Details from '~/components/details/index.vue'
import Testimonials from '~/components/testimonials/index.vue'
import Companies from '~/components/companies/index.vue'
import Subscribe from '~/components/subscribe/index.vue'
</script>

<template>
    <LazyHero />
    <LazyCategory />
    <LazyAbout />
    <LazyDetails />
    <LazyTestimonials />
    <LazyCompanies />
    <LazySubscribe />
</template>
