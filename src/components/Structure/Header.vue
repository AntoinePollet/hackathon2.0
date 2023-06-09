<template>
    <div class="w-full h-12 border-b">
        <div v-if="user" class="h-full flex justify-end items-center pr-3">
            <v-avatar @click="router.push({ name: 'profile-show' })" class="cursor-pointer"
                :image="`https://api.multiavatar.com/${user.email.split('@')[0]}.png?apikey=XdoCH30EA6grGx'`"></v-avatar>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCurrentUser } from "vuefire";
import { onMounted, ref } from "vue";
import { useUserStore } from "@/stores/user";
import { useRouter } from 'vue-router';
import { usersRef } from "@/firebase";
import { getCurrentUser } from "@/router"
import { storeToRefs } from "pinia";

const user = ref();
const userStore = useUserStore();
const { userById } = storeToRefs(userStore);

onMounted(async () => {
    user.value = await getCurrentUser();
    console.log(user.value)
})

const router = useRouter();
</script>

<style scoped></style>