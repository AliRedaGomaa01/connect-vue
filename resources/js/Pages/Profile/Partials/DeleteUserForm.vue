<script setup>
import DangerButton from '@/Components/DangerButton.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import Modal from '@/Components/Modal.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { useForm, usePage } from '@inertiajs/vue3';
import { computed, nextTick, ref } from 'vue';
let isEn = computed(() => usePage().props.lang == 'en');

const confirmingUserDeletion = ref(false);
const passwordInput = ref(null);

const form = useForm({
    password: '',
});

const confirmUserDeletion = () => {
    confirmingUserDeletion.value = true;

    nextTick(() => passwordInput.value.focus());
};

const deleteUser = () => {
    form.delete(route('profile.destroy'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset(),
    });
};

const closeModal = () => {
    confirmingUserDeletion.value = false;

    form.reset();
};
</script>

<template>
    <section class="space-y-6">
        <header>
            <h2 class="text-lg font-medium text-gray-900">{{isEn?'Delete Account':'حذف الحساب'}}</h2>

            <p class="mt-1 text-sm text-gray-600">
                {{isEn?'Once your account is deleted, all of its resources and data will be permanently deleted. Before deletingyour account, please download any data or information that you wish to retain.'
                :'بمجرد حذف حسابك ستفقد بياناتك لذلك راجع بياناتك جيدا قبل الحذف.'}}
                
            </p>
        </header>

        <DangerButton @click="confirmUserDeletion">{{isEn?'Delete Account':'حذف الحساب'}}</DangerButton>

        <Modal :show="confirmingUserDeletion" @close="closeModal" :dir="isEN ? 'ltr' : 'rtl'">
            <div class="p-6">
                <h2 class="text-lg font-medium text-gray-900">
                    {{isEn?'Are you sure you want to delete your account?':'هل انت متأكد من حذف حسابك؟'}}
                </h2>

                <p class="mt-1 text-sm text-gray-600">
                    {{isEn?'Once your account is deleted, all of its resources and data will be permanently deleted. Before deletingyour account, please download any data or information that you wish to retain.'
                :'بمجرد حذف حسابك ستفقد بياناتك لذلك راجع بياناتك جيدا قبل الحذف.'}}
                </p>

                <div class="mt-6">
                    <InputLabel for="password" :value="isEn?'Password':'كلمة المرور'" class="sr-only" />

                    <TextInput
                        id="password"
                        ref="passwordInput"
                        v-model="form.password"
                        type="password"
                        class="mt-1 block w-3/4"
                        :placeholder="isEn ? 'Password':'كلمة المرور'"
                        @keyup.enter="deleteUser"
                    />

                    <InputError :message="form.errors.password" class="mt-2" />
                </div>

                <div class="mt-6 flex justify-end">
                    <SecondaryButton @click="closeModal"> {{isEn ? "Cancel" : "الغاء"}} </SecondaryButton>

                    <DangerButton
                        class="ms-3"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                        @click="deleteUser"
                    >
                        {{isEn ? 'Delete Account': 'حذف الحساب'}}
                    </DangerButton>
                </div>
            </div>
        </Modal>
    </section>
</template>
