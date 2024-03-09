<script setup>
import { computed } from 'vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import { Head, Link, useForm, usePage } from '@inertiajs/vue3';
let isEn = computed(() => usePage().props.isEn);

const props = defineProps({
    status: {
        type: String,
    },
});

const form = useForm({});

const submit = () => {
    form.post(route('verification.send'));
};

const verificationLinkSent = computed(() => props.status === 'verification-link-sent');
</script>

<template>
    <GuestLayout>
        <Head :title="isEn ? 'Email Verification' : 'الحقق من البريد الإلكتروني'" />

        <div class="mb-4 text-sm text-gray-600">
            {{ 
                isEn 
                ? "Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."
                : "شكرا لك على تسجيل الدخول. قبل البدء قمنا بإرسال رابط للتحقق من بريدك على بريدك الإلكتروني. اذا لم تتلقي البريد الإلكتروني، سنرسل لك رابط تحقق جديد."
            }}
            
        </div>

        <div class="mb-4 font-medium text-sm text-green-600" v-if="verificationLinkSent">
            {{ 
                isEn 
                ? "A new verification link has been sent to the email address you provided during registration."
                : "رابط تحقق جديد تم إرساله لبريدك الإلكتروني الذي قمت بتسجيله."
            }}
            
        </div>

        <form @submit.prevent="submit">
            <div class="mt-4 flex items-center justify-between">
                <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    {{ 
                        isEn 
                        ? "Resend Verification Email"
                        : "أعد إرسال رابط التحقق"
                    }}
                    
                </PrimaryButton>

                <Link
                    :href="route('logout')"
                    method="post"
                    as="button"
                    class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                    {{ 
                        isEn 
                        ? "Log Out"
                        : "تسجيل الخروج"
                    }}
                    </Link
                >
            </div>
        </form>
    </GuestLayout>
</template>
