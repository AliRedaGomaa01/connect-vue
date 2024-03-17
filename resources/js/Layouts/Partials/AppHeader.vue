<script setup>
import { Head, Link, usePage } from '@inertiajs/vue3';
import { computed, ref, watchEffect } from 'vue';
import AppNav from '@/Layouts/Partials/AppNav.vue';
let isEn = computed(() => usePage().props.lang == 'en');
let showNav = ref(true); 
</script>
<template>
    <div class="w-full bg-main min-h-[6rem] grid grid-cols-2 items-center " >
        <div class="text-white justify-self-start text-3xl mx-5">
            <Link href="/">
                {{ isEn ? "Connect" : "كونكت" }}
            </Link>
        </div>
        <button class="justify-self-end border-2 border-white grid it-ce rounded-full p-2 w-[2rem] h-[2rem] mx-5" >
            <img src="/app-assets/icons/bars.svg" alt="bars" width="10px" @click="showNav=!showNav">
        </button>
    </div>
    <AppNav v-if="showNav" />
    <div class="my-5"></div> 
</template>