<template>
    <div class="w-full">
        <v-text-field v-model="title" label="title" variant="outlined" />
        <v-textarea v-model="description" label="description" variant="outlined" />
        <div class="mb-4">
            <span>Start at</span>
            <VueDatePicker v-model="start_at"></VueDatePicker>
        </div>
        <div class="my-4">
            <span>End at</span>
            <VueDatePicker v-model="end_at"></VueDatePicker>
        </div>
        <button class="my-4 border p-3 border-h-black rounded hover:bg-h-black hover:text-h-white" @click="submit">Create</button>
    </div>
</template>

<script setup lang="ts">
import { useTrainingStore } from '@/stores/training';
import { storeToRefs } from 'pinia';
import { ref } from "vue";

const title = ref<string>('');
const description = ref<string>('');
const start_at = ref<Date>(new Date());
const end_at = ref<Date>(new Date());

const trainingStore = useTrainingStore();
const { publishTraining } = trainingStore;

const submit = () => {
    publishTraining({
        id: '',
        title: title.value,
        description: description.value,
        start_at: start_at.value,
        end_at: end_at.value,
        registered: false
    })
}
</script>

<style scoped>

</style>