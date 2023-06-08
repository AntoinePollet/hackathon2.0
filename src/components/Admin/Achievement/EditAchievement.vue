<template>
    <div class="w-full" v-if="achievement">
        <v-text-field v-model="achievement.title" label="title" variant="outlined"/>
        <v-textarea v-model="achievement.description" label="description" variant="outlined"/>
        <v-text-field v-model="achievement.icon" label="title" variant="outlined"/>
        <button class="my-4 border p-3 border-h-black rounded hover:bg-h-black hover:text-h-white" @click="submit">Edit</button>
    </div>
</template>

<script setup lang="ts">
import { PropType, ref } from "vue";
import { useRouter } from "vue-router";
import {AchievementDoc} from "@/interfaces/achievement";
import {useAchievementsStore} from "@/stores/achievements";

const props = defineProps({
    achievement: {
        type: Object as PropType<AchievementDoc>,
        required: true
    }
});

const achievementsStore = useAchievementsStore();
const { updateAchievement } = achievementsStore;
const router = useRouter();

const submit = () => {
    try {
        updateAchievement({
            id: props.achievement.id,
            title: props.achievement.title,
            description: props.achievement.description,
            icon: props.achievement.icon,
        })

        router.push({name: "admin-achievements-list"})
    } catch (e) {
        console.log(e)
    }
}
</script>

<style scoped>

</style>