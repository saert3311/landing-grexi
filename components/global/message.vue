<template>
    <div class="p-4 mb-4 text-sm" role="alert" :class="messageClasses[props.type]">
        <slot />
    </div>
</template>
<script setup>
const messageClasses = {
    success: 'bg-green-50',
    error: 'bg-red-100 border border-red-200 text-red-800',
    warning: 'bg-yellow-50',
    info: 'bg-blue-50',
};
const props = defineProps({
    type: {
        type: String,
        default: 'info',
        validator: (value) => ['success', 'error', 'warning', 'info'].includes(value),
    },
});
</script>

<style>
.bg-green-50 {
    background-color: rgb(240 253 244);
}
.bg-red-100 {
    background-color: rgb(254 226 226);
}
.bg-yellow-50 {
    background-color: rgb(254 252 232);
}
.bg-blue-50 {
    background-color: rgb(239 246 255);
}
.border-red-200 {
    border-color: rgb(254 202 202);
}
.text-red-800 {
    color: rgb(153 27 27);
}

</style>