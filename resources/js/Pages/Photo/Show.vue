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

// toggle like
let toggleLike = (id) => {
    router.post(route('like.toggle'),{
        id:id,
        type: 'photo'
    },{
        replace: true,
        preserveScroll: true,
    })
}

</script>
<template>
    <Head :title="isEn ? 'Show Photo' : 'عرض صورة'"/>
    <div class="container grid grid-cols-1">
        <div class="grid gap-4 my-shadow p-5 rounded-xl it-ce " > 
            <img :src="$page.props.storageUrl + '/'+ photo.path" class="max-w-[40vw] max-h-[400px]"/>
            <PrimaryButton class="bg-red-600" @click="deleteFn(photo.id)" v-if="$page.props.auth.id == photo.user_id">{{ isEn ? "Delete" : "حذف"  }}</PrimaryButton>
            <!-- Like & dislike -->
        </div> 
        <div class="grid" v-if="$page.props.auth.id != photo.user_id">
            <PrimaryButton v-if="!photo.isLiked" class=" justify-self-center text-[1.5em]" @click="toggleLike(photo.id)"><img :src="$page.props.appUrl + 'app-assets/icons/likes.svg'" alt="like icon" width="20px"> &nbsp;&nbsp;&nbsp;{{photo.likesCount}}</PrimaryButton>
            <PrimaryButton v-if="photo.isLiked" class="bg-red-600 justify-self-center text-[1.5em]" @click="toggleLike(photo.id)"><img :src="$page.props.appUrl + 'app-assets/icons/dislike.svg'" alt="like icon" width="20px"> &nbsp;&nbsp;&nbsp;{{photo.likesCount}}</PrimaryButton>
        </div>
    </div>

</template>
<style>
</style>