<template>
    <div class="flex flex-col items-center justify-center w-full h-full p-10">
        <v-img class="!max-h-10 w-full" />
        <span class="p-5 text-2xl font-bold">Mot de passe oublié</span>
        <div class="flex flex-col w-full gap-y-4">
            <v-text-field
                v-model="email"
                label="Email"
                class="w-full"
                variant="outlined"
                hide-details
            />
            <v-btn
                @click="handleSendEmail()"
                text="Envoyer un mail de réinitialisation"
                class="hover:bg-h-blue focus:bg-h-blue active:bg-h-blue bg-h-blue"
                color="primary"
            />
        </div>
        <router-link :to="{ name: 'signin' }" class="p-2 hover:underline">
            Se connecter
        </router-link>
    </div>
</template>

<script lang="ts" setup>
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { createToast } from "mosha-vue-toastify";
import { ref } from "vue";

const auth = getAuth();
const email = ref("");

const handleSendEmail = () => {
    sendPasswordResetEmail(auth, email.value)
        .then(() => {
            createToast("Email envoyé, check tes spams", {
                type: "success",
            });
        })
        .catch(() => {
            createToast("Une est survenue, vérifie ton mail", {
                type: "danger",
            });
        });
};
</script>

<style scoped></style>
