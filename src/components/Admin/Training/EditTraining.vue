<template>
    <div className="w-full">
        <v-text-field v-model="title" label="title" variant="outlined"/>
        <v-textarea v-model="description" label="description" variant="outlined"/>
        <div className="mb-4">
            <span>Start at</span>
            <VueDatePicker v-model="start_at"></VueDatePicker>
        </div>
        <div className="my-4">
            <span>End at</span>
            <VueDatePicker v-model="end_at"></VueDatePicker>
        </div>
        <button className="my-4 border p-3 border-h-black rounded hover:bg-h-black hover:text-h-white">Edit</button>
    </div>
</template>

<script setup lang="ts">
import {PropType, ref} from "vue";

const date = ref()

const props = defineProps({
    training: {
        type: String,
        required: true
    }
});

const title = ref();
const description = ref();
const start_at = ref();
const end_at = ref();


</script>

<style scoped>

</style>