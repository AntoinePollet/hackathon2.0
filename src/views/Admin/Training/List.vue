<template>
    <div class="p-10 gap-y-10">
        <div class="text-3xl font-bold mb-10">
            Formations
        </div>
        <div class="mb-6 flex gap-4 items-center">
            <v-btn variant="flat" @click="router.push({ name: 'admin-trainings-create' })">Nouvelle formation</v-btn>
            <v-text-field label="search" variant="outlined" density="compact" hide-details />
            <v-btn variant="flat">Filtre</v-btn>
        </div>
        <div class="flex flex-wrap gap-6">
            <training v-for="training in trainings" :key="training.id" :training="training" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTrainingStore } from '@/stores/training';
import { storeToRefs } from 'pinia';
import Training from "@/components/Admin/Training/training.vue";
import { useCollection } from "vuefire";
import { collection } from "firebase/firestore";
import { firestoreDB } from "@/firebase";
import { useRouter } from "vue-router";

const router = useRouter();
const trainings = useCollection(collection(firestoreDB, 'trainings'))

const trainingStore = useTrainingStore();
const { sortedTrainings } = storeToRefs(trainingStore);

</script>