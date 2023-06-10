<template>
    <div class="p-10 gap-y-10">
        <div class="text-3xl font-bold mb-10">
            Succès
        </div>
        <div class="flex mb-5 gap-4 items-center">
            <v-btn variant="flat" @click="router.push({ name: 'admin-achievements-create' })">Nouveau succes</v-btn>
            <v-text-field label="search" variant="outlined" density="compact" hide-details />
            <v-btn variant="flat">Filtre</v-btn>
        </div>
        <div class="flex flex-wrap gap-6">
            <achievement v-for="achievement in achievements" :achievement="achievement" />
        </div>
    </div>
</template>

<script setup>
import Achievement from "@/components/Admin/Achievement/Achievement.vue";
import { useCollection } from "vuefire";
import { collection } from "firebase/firestore";
import { firestoreDB } from "@/firebase";
import { useRouter } from "vue-router";

const router = useRouter();
const achievements = useCollection(collection(firestoreDB, 'achievements'))

</script>

<style scoped></style>