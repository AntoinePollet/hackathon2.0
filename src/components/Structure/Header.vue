<template>
    <div class="w-full h-12 border-b">
        <div v-if="user" class="h-full flex justify-end items-center pr-3">
            <span class="font-semibold mr-4">{{ `Bonjour ${tokenResult?.claims?.firstname || tokenResult?.claims?.email}`}}</span>
            <v-avatar @click="router.push({ name: 'profile-show' })" class="cursor-pointer"
                :image="`https://api.multiavatar.com/${user.email.split('@')[0]}.png?apikey=XdoCH30EA6grGx'`"></v-avatar>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCurrentUser } from "vuefire";
import { onMounted, ref } from "vue";
import { useRouter } from 'vue-router';
import { getCurrentUser, getCurrentUserTokenResult } from "@/router"

const user = ref();
const tokenResult = ref();

onMounted(async () => {
    user.value = await getCurrentUser();
    tokenResult.value = await getCurrentUserTokenResult();
})

const router = useRouter();
</script>

<style scoped></style>