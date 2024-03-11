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
    <Users :users="users" />
</template>
<style>
</style>
