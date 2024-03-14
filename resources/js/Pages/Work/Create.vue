<script setup>
import { Head, Link, useForm, usePage } from '@inertiajs/vue3';
import { computed, ref } from 'vue';
import { watchEffect } from 'vue';
import Layout from '@/Layouts/AuthenticatedLayout.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';

let props = defineProps({
    types: Object,
});
defineOptions({
    layout: Layout,
});
let isEn = computed(() => usePage().props.isEn);

let form = useForm({
    type: 'Book',
    category: null,
    title: null,
    description: null,
    url: null,
});

let showCategory = ref(false);
let setCategory = () => {
    form.category = form.type;
    showCategory.value = form.type == "Other" ? true : false;
}
let submit = (e) => {
    form.post(route('works.store'), {
        preserveScroll: true,
        forceFormData: true,
        onSuccess: () => {
            form.reset();
            e.target.reset();
        }
    });
}

</script>
<template>
    <Head :title="isEn ? 'Add Work' : 'اضافة عمل'"/>
    <div class="container">
        <form @submit.prevent="submit">
            <div class="grid gap-5 m-5 p-5 my-shadow rounded-xl center-container">
                <!-- type -->
                <label for="type">{{ isEn ? "Type" : "النوع" }}</label>
                <select name="type" id="type" class="text-center" @change="setCategory" v-model="form.type">
                    <option v-for="(value , key) in props.types" :key="value" :value="key" class="text-center">{{ isEn ? key : value }}</option>
                </select>
                <div class="text-red-600" v-if="form.errors.type" >{{ form.errors.type }}</div>
                <!-- type -->
                <div class="grid gap-5" v-if="showCategory">
                    <label for="category">{{ isEn ? "Other Type" : "النوع الآخر" }}</label>
                    <input type="text" v-model="form.category" id="category" class="" required autocomplete="on">
                    <div class="text-red-600" v-if="form.errors.category" >{{ form.errors.category }}</div>
                </div>
                <!-- title -->
                <div class="grid gap-5">
                    <label for="title">{{ isEn ? "Title" : "العنوان" }}</label>
                    <input type="text" v-model="form.title" id="title" class="" autocomplete="on" required >
                    <div class="text-red-600" v-if="form.errors.title" >{{ form.errors.title }}</div>
                </div>
                <!-- description -->
                <div class="grid gap-5">
                    <label for="description">{{ isEn ? "Description" : "الوصف" }}</label>
                    <textarea v-model="form.description" id="description" class="" cols="30" rows="10" required autocomplete="on"></textarea>
                    <div class="text-red-600" v-if="form.errors.description" >{{ form.errors.description }}</div>
                </div>
                <!-- url -->
                <div class="grid gap-5">
                    <label for="url">{{ isEn ? "Previewing Url" : "رابط المعاينة" }}</label>
                    <input type="text" v-model="form.url" id="url" class="" required autocomplete="on">
                    <div class="text-red-600" v-if="form.errors.url" >{{ form.errors.url }}</div>
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