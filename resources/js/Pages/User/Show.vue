<script setup>
import { Head, Link, router, usePage } from '@inertiajs/vue3';
import { computed, reactive, ref, watch , watchEffect} from 'vue';
import axios from 'axios';
import Works from '@/Components/Works.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import Layout from '@/Layouts/AuthenticatedLayout.vue';
defineOptions({ 
    layout: Layout,
});
// props
let props = defineProps({user:Object});
// lang 
let trans = reactive({
    ar : { 
    'title':'المستخدم',
    'name':'الاسم',
    'email':'الإيميل',
    'bio':'نبذة',
    'cv':'رابط السيرة الذاتية',
    'following':'عدد المتابعين',
    'follow':'متابعة',
    'unfollow':'عدم متابعة',
    'main info':'المعلومات الأساسية',
    'photos':'الصور',
    'works':'الأعمال',
    "No photos" : "لا توجد صور" ,
    "Delete" : "حذف",
    },
    en : {
    'title':'User',
    'name':'Name',
    'email':'Email',
    'bio':'Bio',
    'cv':'CV Link',
    'following':'Count of followers',
    'follow':'Follow',
    'unfollow':'Unfollow',
    'main info':'Main Info',
    'photos':'Photos',
    'works':'Works',
    "No photos" : "No photos",
    "Delete" : "Delete"
    }
});
let lang = computed(() => usePage().props.lang);
// following
let showFollowBtn = ref(!(props.user.isFollowed));
let followedCount = ref(null);
let toggleFollow = () => {
    axios.post(route('follow.toggle'),{
        followed_id:props.user.id,
    }).then((res) => {
        if(res.data.followStatus){
            showFollowBtn.value=false;
            followedCount.value.innerHTML = +followedCount.value.innerHTML+ 1 ;
        } else {
            showFollowBtn.value=true;
            followedCount.value.innerHTML = +followedCount.value.innerHTML- 1 ;
        }
        console.log(res.data);
    }).catch((err)=>{
        console.log(err);
    });
}
// navigation 
let current = ref('main info');

</script>
<template>
    <Head :title="trans[lang]['title']"/>
    <div class="grid gap-10">
        <div class="py-4 grid it-ce grid-cols-1 sm:grid-cols-3 text-center gap-4 my-shadow p-5 rounded-xl container mb-5">
            <button class="nav-item" :class="current == 'main info' ? 'active' : ''" @click="current = 'main info'">{{ trans[lang]['main info'] }}</button>
            <button class="nav-item" :class="current == 'works' ? 'active' : ''" @click="current = 'works'">{{ trans[lang]['works'] }}</button>
            <button class="nav-item" :class="current == 'photos' ? 'active' : ''" @click="current = 'photos'">{{ trans[lang]['photos'] }}</button>
        </div>
        <div class="" v-if="current == 'main info'">
            <div class="grid gap-4 my-shadow p-5 rounded-xl container " >
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
                <h3>
                    {{ trans[lang]['following'] }}
                </h3>
                <p ref="followedCount">{{ props.user['followedCount'] ?? '---' }}</p>
            </div>
            <div class="grid my-5" v-if="$page.props.auth.id != props.user.id">
                <PrimaryButton class=" justify-self-center" @click="toggleFollow()" v-if="showFollowBtn">{{ trans[lang]['follow'] }}</PrimaryButton>
                <PrimaryButton class="bg-red-600 justify-self-center" @click="toggleFollow()" v-if="!showFollowBtn">{{ trans[lang]['unfollow'] }}</PrimaryButton>
            </div>
        </div>
        <!-- Works -->
        <div class="grid gap-10" v-if="current == 'works' ">
            <PrimaryButton class=" justify-self-center"  v-if="$page.props.auth.id == props.user.id"> <Link :href="route('works.create')">{{ $page.props.isEn ? "Add A New Work" : "أضف عمل جديدة"}}</Link> </PrimaryButton>
            <Works :works="props.user.works"></Works>
            <div class="container grid grid-cols-1 my-shadow p-5 rounded-xl it-ce" v-if="props.user.works.data == false">{{ $page.props.isEn ? "No works" : "لا أعمال" }}</div>
        </div>
        <!-- Photos -->
        <div class="grid gap-10" v-if="current == 'photos' ">
            <PrimaryButton class=" justify-self-center"  v-if="$page.props.auth.id == props.user.id"> <Link :href="route('photos.create')">{{ $page.props.isEn ? "Add A New Photo" : " أضف صورة جديدة "}}</Link> </PrimaryButton>
            <div class="container grid grid-cols-1 sm:grid-cols-3 " v-if="props.user.photos">
                <div v-for="photo in props.user.photos" :key="photo.id" class="grid gap-4 my-shadow p-5 rounded-xl it-ce relative" > 
                    <img :src="$page.props.appUrl+'storage/'+ photo.path" class="max-w-[100%] max-h-[200px]"/>
                    <Link :href="route('photos.show',photo.id)">
                        <PrimaryButton class="" >{{  $page.props.isEn ? "Show" : "اعرض"  }}</PrimaryButton>
                    </Link>
                </div> 
            </div>
            <div class="container grid grid-cols-1 my-shadow p-5 rounded-xl it-ce" v-if="props.user.photos == false">{{ trans[lang]['No photos'] }}</div>
        </div>
    </div>

</template>
<style scoped>
    p{
        @apply px-4;
    }
</style>