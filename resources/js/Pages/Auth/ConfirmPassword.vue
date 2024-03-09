<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, useForm, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
let isEn = computed(() => usePage().props.lang == 'en');

const form = useForm({
    password: '',
});

const submit = () => {
    form.post(route('password.confirm'), {
        onFinish: () => form.reset(),
    });
};
</script>

<template>
    <GuestLayout>
        <Head :title="isEn ? 'Confirm Password':'تأكيد كلمة المرور'" />

        <div class="mb-4 text-sm text-gray-600">
           {{ isEn ? 'This is a secure area of the application. Please confirm your password before continuing.': 'هذه منطقة مؤمنة من التطبيق. الرجاء تأكيد كلمة المرور الخاصة بك قبل المتابعة.' }}
        </div>

        <form @submit.prevent="submit">
            <div>
                <InputLabel for="password" :value="isEn ? 'Password' : 'كلمة المرور'" />
                <TextInput
                    id="password"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password"
                    required
                    autocomplete="current-password"
                    autofocus
                />
                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div class="flex justify-end mt-4">
                <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    {{ isEn ? 'Confirm': 'تأكيد' }}
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
</template>
