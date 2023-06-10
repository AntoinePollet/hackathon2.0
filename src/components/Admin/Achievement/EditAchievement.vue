<template>
    <div class="w-full" v-if="achievement">
        {{achievement}}
        <v-text-field v-model="achievement.title" label="Intitulé" variant="outlined"/>
        <v-textarea v-model="achievement.description" label="Description" variant="outlined"/>
        <v-select
                v-if="icons"
                v-model="achievement.icon"
                variant="outlined"
                label="icon"
                :items="icons?.data?.uncategorized"
        >
            <template #selection="item, index">
                <div class="flex items-center">
                    <Icon
                            :icon="`flat-color-icons:${item.item.title}`"
                            class="h-8 w-8 mr-3"
                    />
                    {{item.item.title}}
                </div>
            </template>
        </v-select>
        <button class="my-4 border p-3 border-h-black rounded hover:bg-h-black hover:text-h-white" @click="submit">Modifier</button>
    </div>
</template>

<script setup lang="ts">
import { PropType, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import {AchievementDoc} from "@/interfaces/achievement";
import {useAchievementsStore} from "@/stores/achievements";
import axios from "axios";
import {Icon} from "@iconify/vue";

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

const icons = ref();

onMounted(async () => {
    icons.value = await axios.get("https://api.iconify.design/collection?prefix=flat-color-icons");
})
</script>

<style scoped>

</style>