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
        <button class="my-4 border p-3 border-h-black rounded hover:bg-h-black hover:text-h-white">Create</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const date = ref()

const title = ref();
const description = ref();
const start_at = ref();
const end_at = ref();
</script>

<style scoped>

</style>