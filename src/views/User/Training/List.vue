<template>
    <div class="p-10 gap-y-10">
        <div class="text-3xl font-bold mb-10">
          Trainings
        </div>
        <div class="mb-6 flex items-center">
            <v-text-field variant="outlined" label="search" hide-details/>
            <v-btn class="m-2" variant="text">Filter</v-btn>
        </div>
        <div class="flex flex-wrap gap-6">
            <training
                v-for="training in trainings"
                :key="training.id"
                :training="training"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
//import { useTrainingStore } from '@/stores/training';
//import { storeToRefs } from 'pinia';
import Training from "@/components/Training/training.vue";
import {useCollection} from "vuefire";
import {collection} from "firebase/firestore";
import {firestoreDB} from "@/firebase";

const trainings = useCollection(collection(firestoreDB, 'trainings'))
//const trainingStore = useTrainingStore();
//const { sortedTrainings } = storeToRefs(trainingStore);
</script>