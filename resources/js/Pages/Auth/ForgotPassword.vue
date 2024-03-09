<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
let isEn = computed(() => usePage().props.isEn);
defineProps({
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
});

const submit = () => {
    form.post(route('password.email'));
};
</script>

<template>
    <GuestLayout>
        <Head :title="isEn ? 'Forgot Password':'نسيان كلمة المرور'" />

        <div class="mb-4 text-sm text-gray-600">
            {{ isEn
                ?  'Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.' 
                : 'نسيت كلمة المرور؟ إذا لا تقلق ، فقط أعملنا ببريدك الإلكتروين لنرسل إليك رابط إعادة تعيين كلمة المرور'  
            }}
        </div>

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <div>
                <InputLabel for="email" :value="isEn ? 'Email' : 'البريد الإلكتروني'" />

                <TextInput
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    v-model="form.email"
                    required
                    autofocus
                    autocomplete="username"
                />

                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div class="flex items-center justify-end mt-4">
                <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    {{isEn ? 'Email Password Reset Link': 'رابط اعادة تعيين كلمة المرور'}}
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
</template>
