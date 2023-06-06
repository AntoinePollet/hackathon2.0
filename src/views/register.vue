<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { onMounted } from "vue";

const userStore = useUserStore();
const { signup } = userStore;

onMounted(() => {
  // TODO: call this signup from user store to register new user into firebase
  signup({
    email: "admin2@gmail.com",
    password: "password",
  });
});
</script>

<template></template>
