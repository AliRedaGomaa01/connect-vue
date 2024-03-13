<script setup>
import { Head, Link, router, usePage } from '@inertiajs/vue3';
import { computed, reactive, ref, watch , watchEffect} from 'vue';
import axios from 'axios';
import PrimaryButton from '@/Components/PrimaryButton.vue';
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
    'following':'عدد الأشخاص الذين يتابعونه',
    'follow':'متابعة',
    'unfollow':'عدم متابعة',
    'main info':'المعلومات الأساسية',
    'photos':'الصور',
    'works':'الأعمال',
    },
    en : {
    'title':'User',
    'name':'Name',
    'email':'Email',
    'bio':'Bio',
    'cv':'CV Link',
    'following':'Count of users who are following this user',
    'follow':'Follow',
    'unfollow':'Unfollow',
    'main info':'Main Info',
    'photos':'Photos',
    'works':'Works',
    }
});
let lang = computed(() => usePage().props.lang);
let props = defineProps({user:Object});
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
// delete photo
let deleteFn = (id) => {
    if(confirm(usePage().props.isEn ? 'Are you sure you want to delete this photo?' : 'هل أنت متاكد من حذف هذه الصورة؟')){
        router.delete(route('photos.destroy',id))
    }

}
</script>
<template>
    <Head :title="trans[lang]['title']"/>
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

    <div class="" v-if="current == 'photos' && props.user.photos">
        <div class="container grid grid-cols-1 sm:grid-cols-3 ">
            <div v-for="photo in props.user.photos" :key="photo.id" class="grid gap-4 my-shadow p-5 rounded-xl it-ce relative" > 
                <img :src="$page.props.appUrl+'storage/'+ photo.path" class="max-w-[100%] max-h-[200px]"/>
                <PrimaryButton class="bg-red-600" @click="deleteFn(photo.id)">{{ isEn ? "Delete" : "حذف"}}</PrimaryButton>
            </div> 
        </div>
    </div>

</template>
<style scoped>
    p{
        @apply px-4;
    }
</style>