<template>
    <div class="w-full">
        <v-text-field v-model="email" label="Email" variant="outlined" />
        <v-textarea v-model="password" label="Password" variant="outlined" />
        <button class="my-4 border p-3 border-h-black rounded hover:bg-h-black hover:text-h-white">Create</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const email = ref();
const password = ref();
</script>

<style scoped>

</style>