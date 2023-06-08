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
            <div class="flex flex-col items-center p-3">
                <router-link :to="{name: 'admin-achievements-edit', params: { id: achievement.id }}">
                    <v-btn class="m-2 w-full" color="primary">Edit</v-btn>
                </router-link>
                <v-btn class="m-2 w-full" color="primary" @click="deleteAchievement(achievement.id)">Delete</v-btn>
                <assign-to-modal :achievement="achievement"/>
            </div>
        </div>
    </v-card>
</template>

<script setup lang="ts">
import {PropType, ref} from "vue";
import {AchievementDoc} from "@/interfaces/achievement";
import {useAchievementsStore} from "@/stores/achievements";
import AssignToModal from "@/components/Admin/Achievement/AssignToModal.vue";
import {Icon} from "@iconify/vue";

const props = defineProps({
    achievement: {
        type: Object as PropType<AchievementDoc>,
        required: true
    }
})
const achievementStore = useAchievementsStore();
const { deleteAchievement, assignAchievement } = achievementStore;

</script>
