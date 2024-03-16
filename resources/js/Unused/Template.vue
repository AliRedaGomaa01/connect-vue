<!-- **************
******* vue template
************ -->
<script setup>
import { Head, Link, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import { watchEffect } from 'vue';
import Layout from '@/Layouts/AuthenticatedLayout.vue';

defineOptions({
    layout: Layout,
});
let isEn = computed(() => usePage().props.lang == 'en');

let props = defineProps({});

</script>
<template>
    <Head :title="isEn ? '' : ''"/>

</template>
<style>
</style>

<!-- **************
******* lang tempate 
************ -->

