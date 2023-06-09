<template>
    <div class="flex flex-col items-center justify-center w-full h-full p-10">
        <span class="mb-20 text-5xl font-bold">Welcome on Carbon</span>
        <form @submit="login" id="formSignin" class="flex flex-col gap-y-4">
            <v-text-field
                label="Email"
                class="w-full"
                variant="outlined"
                hide-details
                v-model="formData.email"
                required
            />
            <v-text-field
                label="Mot de passe"
                type="password"
                class="w-full"
                variant="outlined"
                v-model="formData.password"
                hide-details
            />
            <v-btn
                text="Se connecter"
                class="hover:bg-h-blue focus:bg-h-blue active:bg-h-blue bg-h-blue"
                color="primary"
                type="submit"
            />
        </form>
        <router-link
            :to="{ name: 'password-forgot' }"
            class="p-2 hover:underline"
        >
            Mot de passe oublié ?
        </router-link>
    </div>
</template>

<script lang="ts" setup>
import { useUserStore } from "@/stores/user";
import { ref } from "vue";

const userStore = useUserStore();
const formData = ref({
    email: "",
    password: "",
});
const { signin } = userStore;

const login = (e: Event) => {
    e.preventDefault();
    signin(formData.value);
};
</script>

<style scoped>
#formSignin {
    width: 100%;
    max-width: 420px;
}
</style>
