<template>
    <v-card class="flex w-64">
        <div class="flex flex-col p-4 h-full">
            <div class="flex h-32 w-full p-5">
                <Icon :icon="`flat-color-icons:${achievement.icon}`" class="h-full w-full" />
            </div>
            <div class="p-5 grow">
                <p class="text-2xl font-bold text-center">{{ achievement.title }}</p>
            </div>
            <div class="flex flex-col items-center gap-2">
                <div class="flex w-full gap-2">
                    <router-link :to="{ name: 'admin-achievements-edit', params: { id: achievement.id } }" class="w-1/2">
                        <v-btn class="w-full" color="primary">Modifier</v-btn>
                    </router-link>
                    <v-btn class=" w-1/2" color="primary" @click="deleteAchievement(achievement.id)">Supprimer</v-btn>
                </div>
                <assign-to-modal :achievement="achievement" />
            </div>
        </div>
    </v-card>
</template>

<script setup lang="ts">
import { onMounted, PropType, ref } from "vue";
import { AchievementDoc } from "@/interfaces/achievement";
import { useAchievementsStore } from "@/stores/achievements";
import AssignToModal from "@/components/Admin/Achievement/AssignToModal.vue";
import { Icon } from "@iconify/vue";

const props = defineProps({
    achievement: {
        type: Object as PropType<AchievementDoc>,
        required: true
    }
})

const icons = ref()

const achievementStore = useAchievementsStore();
const { deleteAchievement, assignAchievement } = achievementStore;


</script>
