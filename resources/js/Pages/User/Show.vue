<script setup>
import { Head, Link, usePage } from '@inertiajs/vue3';
import { computed, reactive, ref, watch } from 'vue';
import { watchEffect } from 'vue';
import Layout from '@/Layouts/AuthenticatedLayout.vue';
defineOptions({ 
    layout: Layout,
});
let trans = reactive({
    ar : { 
    'title':'المستخدم',
    'name':'الاسم',
    'email':'الإيميل',
    'bio':'نبذة',
    'cv':'رابط السيرة الذاتية',
    },
    en : {
    'title':'User',
    'name':'Name',
    'email':'Email',
    'bio':'Bio',
    'cv':'CV Link',
    }
});
let lang = computed(() => usePage().props.lang);
let props = defineProps({user:Object});

</script>
<template>
    <Head :title="trans[lang]['title']"/>
    <div class="grid gap-4 my-shadow p-5 rounded-xl container ">
        <h3>
            {{ trans[lang]['name'] }}
        </h3>
        <p>{{ props.user['name'] }}</p>
        <h3>
            {{ trans[lang]['email'] }}
        </h3>
        <p>{{ props.user['email'] }}</p>
        <h3>
            {{ trans[lang]['bio'] }}
        </h3>
        <p>{{ props.user['bio'] ?? '---' }}</p>
        <h3>
            {{ trans[lang]['cv'] }}
        </h3>
        <p>{{ props.user['cv']  ?? '---' }}</p>

    </div>
</template>
<style scoped>
    p{
        @apply px-4;
    }
</style>