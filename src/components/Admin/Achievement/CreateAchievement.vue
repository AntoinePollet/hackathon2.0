<template>
    <div class="w-full">
        <v-text-field v-model="title" label="title" variant="outlined" />
        <v-textarea v-model="description" label="description" variant="outlined" />
        <v-text-field v-model="icon" label="icon" variant="outlined" />
        <button class="my-4 border p-3 border-h-black rounded hover:bg-h-black hover:text-h-white" @click="submit">Create</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {useAchievementsStore} from "@/stores/achievements";
import {useRouter} from "vue-router";

const title = ref<string>('');
const description = ref<string>('');
const icon = ref<string>('');

const achievementsStore = useAchievementsStore();
const { publishAchievement } = achievementsStore;

const router = useRouter();
const submit = () => {
    publishAchievement({
        id: '',
        title: title.value,
        description: description.value,
        icon: icon.value,
    })

    router.push({name: 'admin-achievements-list'})
}
</script>

<style scoped>

</style>