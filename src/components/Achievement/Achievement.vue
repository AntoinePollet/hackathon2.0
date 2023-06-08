<template>
    <v-card
            class="flex h-32 w-full"
    >
        <div class="flex">
            <div class="flex-none h-32 w-32 p-5">
                <Icon
                        icon="game-icons:achievement"
                        class="h-full w-full"
                />
            </div>
            <div class="p-5 grow">
                <p class="text-2xl font-bold">{{ achievement.title }}</p>
                <p class="h-16 overflow-auto">
                    {{ achievement.description }}
                </p>
            </div>
        </div>
    </v-card>
</template>

<script setup lang="ts">
import {PropType, ref} from "vue";
import {AchievementDoc} from "@/interfaces/achievement";
import {useAchievementsStore} from "@/stores/achievements";
import {Icon} from "@iconify/vue";

const props = defineProps({
    achievement: {
        type: Object as PropType<AchievementDoc>,
        required: true
    }
})
const achievementStore = useAchievementsStore();
const { deleteAchievement } = achievementStore;

</script>
