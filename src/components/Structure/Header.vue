<template>
    <div class="w-full h-12 border-b">
        <div class="h-full flex justify-end items-center pr-3">
            <v-avatar @click="router.push({ name: 'profile-show' })" class="cursor-pointer"
                image="https://images.unsplash.com/photo-1615807713086-bfc4975801d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"></v-avatar>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<style scoped></style>