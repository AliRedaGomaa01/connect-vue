<script setup>
import { Head, Link, usePage } from '@inertiajs/vue3';
import { computed, reactive, watch, watchEffect } from 'vue';
import Layout from '@/Layouts/AuthenticatedLayout.vue';
import Users from '@/Components/Users.vue';
defineOptions({
    layout: Layout,
});
let isEn = computed(() => usePage().props.isEn);
let props = defineProps({
    users:
    {
        type:Object,
        required:true,
        default: {}
    }
});
let users = computed(() => props.users);
</script>
<template>
    <Head :title="isEn ? 'Users' : 'المستخدمين'"/>
    <Users :users="users" v-if="users"/>
    <div class="container grid grid-cols-1 my-shadow p-5 rounded-xl it-ce" v-if="props.users.data == false">{{ $page.props.isEn ? "No users" : "لا مستخدمين" }}</div>

</template>
<style>
</style>
