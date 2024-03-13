<script setup>
import { Head, Link, useForm, usePage } from '@inertiajs/vue3';
import { computed, ref } from 'vue';
import { watchEffect } from 'vue';
import Layout from '@/Layouts/AuthenticatedLayout.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';

let props = defineProps({});
defineOptions({
    layout: Layout,
});
let isEn = computed(() => usePage().props.isEn);
let src = ref(null);
let fileInput = ref(null);

let form = useForm({
    photo: null
});

let getFile = (event) => {
    form.photo = event.target.files[0];
    src.value = URL.createObjectURL(event.target.files[0]);
}

let submit = (e) => {
    form.post(route('photos.store'), {
        preserveScroll: true,
        forceFormData: true,
        onSuccess: () => {
            form.reset();
            src.value = null;
            // fileInput.value.value = null;
            e.target.reset();
        }
    });
}

</script>
<template>
    <Head :title="isEn ? 'Add Photo' : 'اضافة صورة'"/>
    <div class="container">
        <form @submit.prevent="submit">
            <div class="grid gap-5 m-5 p-5 my-shadow rounded-xl center-container">
                <label for="photo">{{ isEn ? "Photo" : "الصورة" }}</label>
                <input type="file" @change="getFile" id="photo" ref="fileInput">
                <div class="text-red-600" v-if="form.errors.photo" >{{ form.errors.photo }}</div>
                <div class="grid it-ce justify-self-center max-w-[10vw]  overflow-hidden">
                    <img id="frame" :src="src" class="m-5 max-h-[200px]" v-if="src"/> 
                </div>
                <PrimaryButton type="submit" class="justify-self-end">{{ isEn ? "Add" : "أضف" }}</PrimaryButton>
            </div>
        </form>
    </div>

</template>
<style>
    input::file-selector-button { 
        @apply bg-main text-white
    }  
</style>