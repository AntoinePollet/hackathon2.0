<template>
    <div class="w-full">
        <v-text-field v-model="title" label="Titre" variant="outlined" />
        <v-textarea v-model="description" label="Description" variant="outlined" />
        <div class="mb-4">
            <span>Commence le</span>
            <VueDatePicker v-model="start_at"></VueDatePicker>
        </div>
        <div class="my-4">
            <span>Termine le</span>
            <VueDatePicker v-model="end_at"></VueDatePicker>
        </div>
        <button class="my-4 border p-3 border-h-black rounded hover:bg-h-black hover:text-h-white"
            @click="submit">Créer</button>
    </div>
</template>

<script setup lang="ts">
import { useTrainingStore } from '@/stores/training';
import { useRouter } from 'vue-router';
import { ref } from "vue";

const router = useRouter();
const title = ref<string>('');
const description = ref<string>('');
const start_at = ref<Date>(new Date());
const end_at = ref<Date>(new Date());

const trainingStore = useTrainingStore();
const { publishTraining } = trainingStore;

const submit = async () => {
    await publishTraining({
        id: '',
        title: title.value,
        description: description.value,
        start_at: start_at.value,
        end_at: end_at.value,
        registered: false
    });
    router.push({ name: 'admin-trainings-list' })
}
</script>

<style scoped>
</style>
