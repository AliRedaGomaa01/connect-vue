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

let props = defineProps({photo:Object});

// delete photo
let deleteFn = (id) => {
    if(confirm(usePage().props.isEn ? 'Are you sure you want to delete this photo?' : 'هل أنت متاكد من حذف هذه الصورة؟')){
        router.delete(route('photos.destroy',id))
    }
}

</script>
<template>
    <Head :title="isEn ? 'Show Photo' : 'عرض صورة'"/>
    <div class="container grid grid-cols-1">
        <div class="grid gap-4 my-shadow p-5 rounded-xl it-ce " > 
            <img :src="$page.props.storageUrl + '/'+ photo.path" class="max-w-[40vw] max-h-[400px]"/>
            <PrimaryButton class="bg-red-600" @click="deleteFn(photo.id)" v-if="$page.props.auth.id == photo.user_id">{{ isEn ? "Delete" : "حذف"  }}</PrimaryButton>
            <!-- Like & dislike -->
            <div class="" v-if="$page.props.auth.id != photo.user_id"></div>
        </div> 
    </div>

</template>
<style>
</style>