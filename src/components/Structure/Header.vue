<template>
    <div class="w-full h-12 border-b">
        <div class="h-full flex justify-end items-center pr-3">
            <v-avatar @click="router.push({ name: 'profile-show' })" class="cursor-pointer"
                :image="`background-image: url('https://api.multiavatar.com/${currentUserLogged?.firstname}${currentUserLogged?.lastname}.png?apikey=XdoCH30EA6grGx')`"></v-avatar>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCurrentUser } from "vuefire";
const currentUserLogged = useCurrentUser();
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<style scoped></style>