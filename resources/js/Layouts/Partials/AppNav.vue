<script setup>
import { Head, Link, usePage } from '@inertiajs/vue3';
import { computed, watchEffect } from 'vue';
let isEn = computed(() => usePage().props.lang == 'en');
let currentLang = computed(() => usePage().props.lang );
let isAuthenticated = computed(() => usePage().props.auth.check);
let currentRouteName = computed(() => usePage().props.routeName);
let langRoute = computed(() => usePage().props.langRoute);
let props = defineProps({});
watchEffect(() => {
    
})
</script>
<template>
    <div class="w-full py-2 grid grid-cols-2 sm:grid-cols-4 it-ce shadow-[0px_3px_6px_6px_rgb(0,0,0,0.1)]">
        <Link :href="langRoute" class="mx-auto" >{{ isEn ? "عربي" : "English"  }}</Link>
        <Link :href="route('login')+'?locale='+currentLang" class="mx-auto" :class="currentRouteName == 'login' ? 'active' : ''" v-if="!isAuthenticated">{{ isEn ? "Login" : "تسجيل الدخول"  }}</Link>
        <Link :href="route('register')+'?locale='+currentLang" class="mx-auto" :class="currentRouteName == 'register' ? 'active' : ''" v-if="!isAuthenticated">{{ isEn ?  "Register" : "تسجيل جديد" }}</Link>
        <Link :href="route('landing')+'?locale='+currentLang" class="mx-auto" :class="currentRouteName == 'landing' ? 'active' : ''" v-if="!isAuthenticated">{{ isEn ? "Home" : "الرئيسية"  }}</Link>
        <Link :href="route('dashboard')+'?locale='+currentLang" class="mx-auto" :class="currentRouteName == 'dashboard' ? 'active' : ''" v-if="isAuthenticated">{{ isEn ? "Dashboard" : "الداشبورد"  }}</Link>
        <Link :href="route('profile.edit')+'?locale='+currentLang" class="mx-auto" :class="currentRouteName == 'profile.edit' ? 'active' : ''" v-if="isAuthenticated">{{ isEn ? "Profile" : "الملف الشخصي"  }}</Link>
        <Link :href="route('logout')" method="post" as="button" class="mx-auto" v-if="isAuthenticated">{{ isEn ? "Logout" : "تسجيل الخروج"  }}</Link>
    </div>
</template>