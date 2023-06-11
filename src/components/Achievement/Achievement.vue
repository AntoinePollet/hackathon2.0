<template>
    <v-card class="flex w-64">
        <div class="flex flex-col p-4 h-full">
            <div class="flex h-32 w-full p-5">
                <Icon :icon="`flat-color-icons:${achievement?.icon}`" class="h-full w-full" />
            </div>
            <div class="p-5 grow">
                <p class="text-2xl font-bold text-center">{{ achievement?.title }}</p>
            </div>
        </div>
    </v-card>
</template>

<script setup lang="ts">
import { PropType, ref } from "vue";
import { AchievementDoc } from "@/interfaces/achievement";
import { useAchievementsStore } from "@/stores/achievements";
import { Icon } from "@iconify/vue";

const props = defineProps({
    achievement: {
        type: Object as PropType<AchievementDoc>,
        required: true
    }
})
const achievementStore = useAchievementsStore();
const { deleteAchievement } = achievementStore;

</script>
