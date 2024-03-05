<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { watchEffect } from 'vue';
let props = defineProps({routes: Array});
watchEffect(() => {
    let routes = props.routes
    return routes 
})
</script>
<template>
    <Head title="All Routes"/>
    <div class="grid it-ce p-[5rem] grid-cols-4 gap-10">
        <Link v-for="route in routes" :key="route.name" :href="route.path" class="text-center text-xl bg-blue-400 text-white p-2 rounded-xl">{{ route.name }}</Link>
    </div>
</template>
<style>
</style>