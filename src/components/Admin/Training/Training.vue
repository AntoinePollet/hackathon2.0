<template>
    <v-card
        class="flex flex-col h-64 w-72"
    >
        <div class="p-5">
            <p>{{ training.title }}</p>
            <p class="text-sm">{{ formattedDate }}</p>
        </div>
        <v-divider class="border-black"/>
        <div class="p-5 h-24 overflow-auto">
            {{ training.description }}
        </div>
        <div class="flex p-5 justify-center gap-5">
            <router-link :to="{ name: 'admin-trainings-edit', params: {id: training.id }}">
                <v-btn  color="primary">
                    Modifier
                </v-btn>
            </router-link>
            <v-btn  color="error" @click="deleteTraining(training.id)">
                Supprimer
            </v-btn>
        </div>
    </v-card>
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue';
import { TrainingDoc } from "@/interfaces/training";
import {useTrainingStore} from "@/stores/training";

const props = defineProps({
  training: {
    type: Object as PropType<TrainingDoc>,
    required: true
  }
});

const formattedDate = computed(() => {
  return new Date(props.training.start_at.toDate()).toLocaleDateString('fr-FR', { day: "2-digit", month: "long", hour: "2-digit", minute: "2-digit" })
});


const trainingStore = useTrainingStore();
const { deleteTraining } = trainingStore;
</script>

<style scoped>

</style>