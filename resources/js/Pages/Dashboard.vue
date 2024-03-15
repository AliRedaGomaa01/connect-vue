<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
let isEn = computed(() => usePage().props.isEn);
</script>

<template>
    <Head :title="isEn ? 'Dashboard' : 'لوحة التحكم'" />

    <AuthenticatedLayout>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">{{isEn ? 'You\'re logged in!':'تم تسجيل الدخول'}}</div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<style scoped >
    a{
        @apply underline font-[700] text-blue-500
    }
</style>
