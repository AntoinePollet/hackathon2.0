<template>
    <div class="p-10 gap-y-10">
        <div class="text-3xl font-bold mb-10">
            Edit achievemnt
        </div>
        <div class="flex flex-wrap gap-6">
            <edit-achievement
                :achievement="achievement"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import { useRoute } from "vue-router";
import EditAchievement from "@/components/Admin/Achievement/EditAchievement.vue";
import {AchievementDoc} from "@/interfaces/achievement";
import {useAchievementsStore} from "@/stores/achievements";

const achievementsStore = useAchievementsStore();
const route = useRoute();

const { getAchievement } = achievementsStore

const achievement = ref<AchievementDoc>({});

onMounted(async () => {
    achievement.value = await getAchievement(route.params.id)
    achievement.value.id = route.params.id
})

</script>