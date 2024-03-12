<script setup>
import { Head, Link, usePage } from '@inertiajs/vue3';
import { computed, reactive, ref, watch } from 'vue';
import { watchEffect } from 'vue';
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
    'following':'عدد الأشخاص الذين بتابعونه',
    'follow':'متابعة',
    'unfollow':'عدم متابعة',
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
    }
});
let lang = computed(() => usePage().props.lang);
let props = defineProps({user:Object});
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
        <h3>
            {{ trans[lang]['following'] }}
        </h3>
        <p ref="followedCount">{{ props.user['followedCount'] ?? '---' }}</p>
    </div>
    <div class="grid my-5" v-if="$page.props.auth.id != props.user.id">
        <PrimaryButton class=" justify-self-center" @click="toggleFollow()" v-if="showFollowBtn">{{ trans[lang]['follow'] }}</PrimaryButton>
        <PrimaryButton class="bg-red-600 justify-self-center" @click="toggleFollow()" v-if="!showFollowBtn">{{ trans[lang]['unfollow'] }}</PrimaryButton>
    </div>
</template>
<style scoped>
    p{
        @apply px-4;
    }
</style>