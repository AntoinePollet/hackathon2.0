<template>
    <div class="flex flex-col items-center justify-center w-full h-full p-10">
        <span class="mb-20 text-5xl font-bold">Welcome on Carbon</span>
        <form @submit="login" class="flex flex-col w-full gap-y-4">
            <v-text-field
                label="Email"
                class="w-full"
                variant="outlined"
                hide-details
                v-model="formData.email"
                required
            />
            <v-text-field
                label="Password"
                type="password"
                class="w-full"
                variant="outlined"
                v-model="formData.password"
                hide-details
            />
            <v-btn
                text="Sign In"
                variant="outlined"
                class="hover:bg-h-blue focus:bg-h-blue active:bg-h-blue bg-h-blue"
                color="none"
                type="submit"
            />
        </form>
        <router-link
            :to="{ name: 'password-forgot' }"
            class="p-2 hover:underline"
        >
            Password forgot ?
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

<style scoped></style>
