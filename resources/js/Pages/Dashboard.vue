<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
let isEn = computed(() => usePage().props.isEn);
</script>

<template>
    <Head :title="isEn ? 'Dashboard' : 'لوحة التحكم'" />

    <AuthenticatedLayout>
        <!-- <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">{{isEn ? 'You\'re logged in!':'تم تسجيل الدخول'}}</div>
                </div>
            </div>
        </div> -->
        <div class="grid gap-5 text-center my-shadow p-5 rounded-xl ">
        <h1 class="text-center">{{ isEn ? 'Connect' : 'كونكت' }}</h1>
        <p class="">
            {{ isEn 
            ? 'It\'s a project made by me - Ali Hussein - which proofs that I know how to use the technical skills that mentioned in my CV.' 
            : 'هو مشروع تم بواسطتي - على حسين- والذي يثبت أنني أستطيع تطبيق المهارات التقنية المذكورة في سيرتي الذاتية.' }}
        </p>
        <p class="">
            {{ isEn 
            ? 'It\'s a project where you can publish your achievements that may benifit others.' 
            : 'من خلاله يمكنك مشاركة انجازاتك التي قد تنفع الآخرين.' }}
        </p>
        <p class="">
            {{ isEn 
            ? 'Also, you can follow others and like their achievements & their photos.' 
            : 'أيضا يمكنك متابعة الآخرين والاعجاب بإنجازاتهم وصورهم.' }}
        </p>
        <p class="">
            {{ isEn 
            ? 'Don\'t hesitate to contact me anytime.' 
            : 'لا تتردد في التواصل معي في أي وقت.' }}
        </p>
        <p class="">
            {{ isEn 
            ? 'You can visit my website to get all info about me.' 
            : 'يمكنك زيارة موقعي للحصول على كافة المعلومات عني.' }}
        </p>
        <a href="https://aligh.net">{{ isEn ? 'My personal Website Url' : 'رابط موقعي الشخصي' }}</a>
        <a href="https://github.com/AliRedaGomaa01/connect-vue">{{ isEn ? 'Project github URL' : 'رابط المشروع على GitHub' }}</a>
    </div>
    </AuthenticatedLayout>
</template>

<style scoped >
    a{
        @apply underline font-[700] text-blue-500
    }
</style>
