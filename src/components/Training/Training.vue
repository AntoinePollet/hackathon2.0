<template>
    <v-card
            class="flex flex-col h-64 w-64"
    >
        <div class="p-5">
            <p>{{ training.title }}</p>
            <p class="text-sm">{{ formattedDate }}</p>
        </div>
        <v-divider class="border-black"/>
        <div class="p-5 h-24 overflow-auto">
            {{ training.description }}
        </div>
        <div class="p-5">
            <v-btn block @click="register()" color="primary">
                {{currentUser?.value?.trainings?.some(train => train.title === training.title) ? 'Se désinscrire' : 'S\'inscrire'}}
            </v-btn>
        </div>
    </v-card>
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue';
import { TrainingDoc } from "@/interfaces/training";
import {useTrainingStore} from "@/stores/training";
import {UserI} from "@/interfaces/user";

const props = defineProps({
    training: {
        type: Object as PropType<TrainingDoc>,
        required: true
    },
    currentUser: {
        type: Object as PropType<UserI>,
        required: true
    }
});

const trainingStore = useTrainingStore();
const { registerToTraining } = trainingStore;

const register = () => {
    try {
        registerToTraining(props.currentUser, props.training)
    } catch (e) {
        console.log(e)
    }
}

const formattedDate = computed(() => {
    return new Date(props.training.start_at.toDate()).toLocaleDateString('fr-FR', { day: "2-digit", month: "long", hour: "2-digit", minute: "2-digit" })
});
</script>

<style scoped>

</style>