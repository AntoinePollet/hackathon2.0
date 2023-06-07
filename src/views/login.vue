<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { onMounted } from "vue";
import { useCurrentUser } from "vuefire";

const userStore = useUserStore();
const { signin } = userStore;

const user = useCurrentUser();
onMounted(() => {
    // TODO: change this call when ui is developped
    signin({
        email: "newuser@gmail.com",
        password: "password",
    });
});
</script>
<template>
    <p v-if="user">Hello {{ user.providerData[0].email }}</p>
    <h1>Login</h1>
</template>
