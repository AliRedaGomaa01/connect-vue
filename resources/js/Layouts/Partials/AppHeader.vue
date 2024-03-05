<script setup>
import { Head, Link, usePage } from '@inertiajs/vue3';
import AppNav from '@/Layouts/Partials/AppNav.vue';
import { computed, watchEffect } from 'vue';
let isEn = computed(() => usePage().props.lang == 'en');
watchEffect( () => {
})
</script>
<template>
    <div class="w-full bg-main h-[6rem]"></div>
    <AppNav />
</template>