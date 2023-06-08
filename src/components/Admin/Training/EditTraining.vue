<template>
    <div class="w-full" v-if="training">
        <v-text-field v-model="training.title" label="title" variant="outlined"/>
        <v-textarea v-model="training.description" label="description" variant="outlined"/>
        <div class="mb-4">
            <span>Start at</span>
            <VueDatePicker v-model="training.start_at" :value="training.start_at"></VueDatePicker>
        </div>
        <div class="my-4">
            <span>End at</span>
            <VueDatePicker v-model="training.end_at"></VueDatePicker>
        </div>
        <button class="my-4 border p-3 border-h-black rounded hover:bg-h-black hover:text-h-white" @click="submit">Edit</button>
    </div>
</template>

<script setup lang="ts">
import { PropType, ref } from "vue";
import { TrainingDoc } from "@/interfaces/training";
import { useTrainingStore } from "@/stores/training";
import { useRouter } from "vue-router";

const props = defineProps({
    training: {
        type: Object as PropType<TrainingDoc>,
        required: true
    }
});

const start_at = ref(new Date());
const end_at = ref(props.training.end_at);

const trainingStore = useTrainingStore();
const { updateTraining } = trainingStore;
const router = useRouter();

const submit = () => {
    try {
        updateTraining({
            id: props.training.id,
            title: props.training.title,
            description: props.training.description,
            start_at: props.training.start_at,
            end_at: props.training.end_at,
            registered: props.training?.registered
        })

        router.push({name: "admin-trainings-list"})
    } catch (e) {
        console.log(e)
    }
}
</script>

<style scoped>

</style>