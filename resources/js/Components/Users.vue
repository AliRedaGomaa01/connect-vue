<script setup>
import { Head, Link, usePage } from '@inertiajs/vue3';
import { computed, reactive, watch, watchEffect } from 'vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
let isEn = computed(() => usePage().props.isEn);
let props = defineProps({
    users:
    {
        type:Object,
        required:true,
        default: {}
    }
});
let users = computed(() => props.users.data);
let pages = reactive({
    current: props.users.current_page,
    last: props.users.last_page,
    prev: props.users.prev_page_url,
    next: props.users.next_page_url,
});
let contentClasses = "p-10";
</script>
<template>
    <div class="container" v-if="users != false">
        <div class="my-shadow rounded-xl m-5 p-5 w-[90%] grid justify-self-center gap-5" v-for="user in users" :key="user.id">
            <h3>{{ $page.props.isEn? 'Name' : 'الإسم'}}</h3>
            <p :class='contentClasses'>{{user['name']}}</p>
            <h3>{{ $page.props.isEn? 'Email' : 'الإيميل'}}</h3>
            <p :class='contentClasses'>{{user['email']}}</p>
            <a :href="route('user.show',user.id)" class="underline justify-self-center" :class='contentClasses'><PrimaryButton class="">{{$page.props.isEn? 'Show' : 'اعرض'}}</PrimaryButton></a>
        </div>
        <!-- buttons -->
        <div class="grid grid-cols-3 it-ce w-full my-10 " v-if="props.users.last_page !== 1">
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
