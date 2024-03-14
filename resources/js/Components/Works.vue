<script setup>
import { Head, Link, usePage } from '@inertiajs/vue3';
import { computed, reactive, watch, watchEffect } from 'vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
let isEn = computed(() => usePage().props.isEn);
let props = defineProps({
    works:
    {
        type:Array,
        required:true,
        default: {}
    }
});
let works = computed(() => props.works.data);
let pages = reactive({
    current: props.works.current_page,
    last: props.works.last_page,
    prev: props.works.prev_page_url,
    next: props.works.next_page_url,
});
let contentClasses = "p-10";
</script>
<template>
    <div class="container grid gap-10 " v-if="works">
        <div class="my-shadow rounded-xl grid center-container w-full gap-5 p-5" v-for="work in works" :key="work.id">
            <h3>
            {{ $page.props.isEn ? "Category" : "الفئة" }}
            </h3>
            <p>{{ work['category'] }}</p>
            <h3>
            {{ $page.props.isEn ? "Title" : "العنوان" }}
            </h3>
            <p>{{ work.title }}</p>
            <h3>
            {{ $page.props.isEn ? "Description" : "الوصف" }}
            </h3>
            <p>{{ work.description }}</p>
            <h3>
            {{ $page.props.isEn ? "Previewing Url" : "رابط المعاينة" }}
            </h3>
            <p> <a :href="work.url" target="_blank">{{ work.url }}</a></p>
            <Link :href="route('works.show',work.id)" class="my-5 justify-self-center">
                <PrimaryButton class="" >{{  $page.props.isEn ? "Show" : "اعرض"  }}</PrimaryButton>
            </Link>
        </div>
        <!-- buttons -->
        <div class="grid grid-cols-3 it-ce w-full my-10 " v-if="props.works.last_page !== 1">
            <Link :href="pages.prev" class="" preserve-scroll >
                <PrimaryButton v-if="pages.prev"> {{isEn ? 'Previous' : "السابق"}} </PrimaryButton>
            </Link>
            <p class="justify-self-center " >{{pages.current}} {{isEn ? 'of' : "من"}} {{pages.last}}</p >
            <Link :href="pages.next" class=""  preserve-scroll>
                <PrimaryButton class="{{ $nextBtnCond ? 'hidden' : '' }}" v-if="pages.next"> {{isEn ? 'Next' : "التالي"}} </PrimaryButton>
            </Link>
        </div>
    </div>

</template>
<style>
</style>
