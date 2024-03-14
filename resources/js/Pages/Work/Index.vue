<script setup>
import { Head, Link, usePage } from '@inertiajs/vue3';
import { computed, reactive, watch, watchEffect } from 'vue';
import Layout from '@/Layouts/AuthenticatedLayout.vue';
import Works from '@/Components/Works.vue';
defineOptions({
    layout: Layout,
});
let isEn = computed(() => usePage().props.isEn);
let props = defineProps({
    works:
    {
        type:Object,
        required:true,
        default: {}
    }
});
</script>
<template>
    <Head :title="isEn ? 'Followed Works' : 'أعمال تتابعها'"/>
    <Works :works="props.works"></Works>
    <div class="container grid grid-cols-1 my-shadow p-5 rounded-xl it-ce" v-if="props.works.data == false">{{ $page.props.isEn ? "No works" : "لا أعمال" }}</div>
</template>
<style>
</style>
