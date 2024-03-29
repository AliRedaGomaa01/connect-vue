<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
let isEn = computed(() => usePage().props.lang == 'en');

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});



const user = usePage().props.auth.user;

const form = useForm({
    name: user.name,
    email: user.email,
    bio: user.bio,
    cv: user.cv,
});
</script>

<template>
    <section>
        <header>
            <h2 class="text-lg font-medium text-gray-900">{{isEn ? 'Profile Information' : 'معلومات الملف'}}</h2>

            <p class="mt-1 text-sm text-gray-600">
                {{isEn ? 'Update your account\'s profile information and email address.' : 'تحديث معلومات الملف الشخصي وعنوان بريدك الإلكتروني.'}}
            </p>
        </header>

        <form @submit.prevent="form.patch(route('profile.update'))" class="mt-6 space-y-6">
            <!-- name -->
            <div>
                <InputLabel for="name" :value="isEn ? 'Name' : 'الاسم'" />

                <TextInput
                    id="name"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.name"
                    required
                    autofocus
                    autocomplete="name"
                />

                <InputError class="mt-2" :message="form.errors.name" />
            </div>
            <!-- email -->
            <div>
                <InputLabel for="email" :value="isEn ? 'Email' : 'الإيميل'" />

                <TextInput
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    v-model="form.email"
                    required
                    autocomplete="username"
                />

                <InputError class="mt-2" :message="form.errors.email" />
            </div>
            <!-- Bio -->
            <div>
                <InputLabel for="bio" :value="isEn ? 'Bio' : 'نبذة عنك'" />

                <textarea name="bio" id="bio"  class="mt-1 block w-full" v-model="form.bio" rows="10" cols="30" autocomplete="bio" required></textarea>

                <InputError class="mt-2" :message="form.errors.bio" />
            </div>
            <!-- CV Link -->
            <div>
                <InputLabel for="cv" :value="isEn ? 'CV Link' : 'رابط السيرة الذاتية'" />

                <TextInput
                    id="cv"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.cv"
                    required
                    autofocus
                    autocomplete="cv"
                />

                <InputError class="mt-2" :message="form.errors.cv" />
            </div>
            <div v-if="mustVerifyEmail && user.email_verified_at === null">
                <p class="text-sm mt-2 text-gray-800">
                    {{isEn ? 'Your email address is unverified.' : 'بريدك الإلكتروني لم يتم التحقق منه.'}}
                    <Link
                        :href="route('verification.send')"
                        method="post"
                        as="button"
                        class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                    {{isEn ? 'Click here to re-send the verification email.' : 'اضغط هنا لإعادة إرسال إيميل التحقق.'}}

                        
                    </Link>
                </p>

                <div
                    v-show="status === 'verification-link-sent'"
                    class="mt-2 font-medium text-sm text-green-600"
                >
                    {{isEn ? 'A new verification link has been sent to your email address.' : 'تم إرسال رابط تحقق جديد لبريدك الإلكتروني.'}}
                    
                </div>
            </div>

            <div class="flex items-center gap-4">
                <PrimaryButton :disabled="form.processing">
                    {{isEn ? 'Save' : 'حفظ'}}
                    </PrimaryButton>

                <Transition
                    enter-active-class="transition ease-in-out"
                    enter-from-class="opacity-0"
                    leave-active-class="transition ease-in-out"
                    leave-to-class="opacity-0"
                >
                    <p v-if="form.recentlySuccessful" class="text-sm text-gray-600">
                        {{isEn ? 'Saved' : 'تم الحفظ'}}
                    </p>
                </Transition>
            </div>
        </form>
    </section>
</template>
