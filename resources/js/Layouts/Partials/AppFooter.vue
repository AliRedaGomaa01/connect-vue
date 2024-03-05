<script setup>
import { Head, Link , usePage } from '@inertiajs/vue3';
import { watchEffect , computed } from 'vue';
let props = defineProps({});
let isEn = computed(() => usePage().props.lang == 'en');
let year = new Date().getFullYear();
let footer = isEn 
    ? " Designed & Developed & Deployed By Ali Hussein © " + (year)
    : " تم التصميم والتطوير والاستضافة  بواسطة علي حسين © "  + (year) ;
watchEffect(() => {
    
})
</script>
<template>
    <div class="w-full bg-main h-[4rem] text-center text-white px-10">
        {{ footer }}
    </div>
</template>