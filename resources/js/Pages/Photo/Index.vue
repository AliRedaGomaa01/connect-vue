<script setup>
import { Head, Link, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import { watchEffect } from 'vue';

let isEn = computed(() => usePage().props.lang == 'en');

let props = defineProps({});

</script>
<template>
    <Head :title="isEn ? '' : ''"/>

</template>
<style>
</style>