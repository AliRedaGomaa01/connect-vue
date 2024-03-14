<script setup>
import { Head, Link, router, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import { watchEffect } from 'vue';
import Layout from '@/Layouts/AuthenticatedLayout.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';

defineOptions({
    layout: Layout,
});
let isEn = computed(() => usePage().props.isEn);

let props = defineProps({work:Object});

// delete work
let deleteFn = (id) => {
    if(confirm(usePage().props.isEn ? 'Are you sure you want to delete this work?' : 'هل أنت متاكد من حذف هذه الصورة؟')){
        router.delete(route('works.destroy',id))
    }
}

</script>
<template>
    <Head :title="isEn ? 'Show Work' : 'عرض عمل'"/>
    <div class="container grid gap-10 " v-if="work">
        <div class="my-shadow rounded-xl grid center-container w-full gap-5 p-5">
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
            <div class="grid it-ce grid-cols-2" v-if="$page.props.auth.id == work.user_id">
                <Link :href="route('works.edit',work.id)" class="my-5 justify-self-center">
                    <PrimaryButton class="" >{{  $page.props.isEn ? "Edit" : "تعديل"  }}</PrimaryButton>
                </Link>
                <PrimaryButton class="bg-red-600" @click="deleteFn(work.id)" >{{ isEn ? "Delete" : "حذف"  }}</PrimaryButton>  
            </div>
        </div>
    </div>
</template>
<style>
</style>