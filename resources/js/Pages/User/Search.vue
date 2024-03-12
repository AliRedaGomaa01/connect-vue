<script setup>
import { Head, Link, useForm, usePage } from '@inertiajs/vue3';
import { computed, reactive, ref, watch, watchEffect } from 'vue';
import Layout from '@/Layouts/AuthenticatedLayout.vue';
import Users from '@/Components/Users.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import axios from 'axios';
defineOptions({
    layout: Layout,
});
let isEn = computed(() => usePage().props.isEn);
let props = defineProps({
    searchable: {
        type: Array,
    },users: {
        type: Object,
        default: () => ({})
    }
});
let form = useForm({
    search: ''
})
let showUsers = ref(false);
let submit = () => {
    if (form.search != false) {
        form.post(route('user.result'));
        showUsers.value = true;
    }
}
</script>
<template>
    <Head :title="isEn ? 'Users' : 'المستخدمين'"/>
    <form @submit.prevent="submit()" >
        <div class="container">
            <div class="grid gap-5 m-5 p-5 my-shadow rounded-xl center-container">
                <label for="search">{{isEn ? 'Search' : 'بحث'}}</label>
                <input list="searching" type="text" v-model="form.search" id="search" class="" @focus="showUsers = false">
                <datalist id="searching">
                    <option v-for="(email, name) in searchable"  :key="email" :value="email" >{{name}}</option>
                </datalist>  
                <PrimaryButton class="justify-self-end">{{isEn ? 'Search' : 'بحث'}}</PrimaryButton>
            </div>
        </div>
    </form>
    <Users :users="props.users"  v-if="showUsers"/> 

</template>
<style>
</style>
