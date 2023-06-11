<template>
    <v-btn color="primary" block>
        Assigner
        <v-dialog v-model="isDialogOpen" activator="parent" width="auto">
            <v-card>
                <div class="p-5" id="dialogCreate">
                    <h2 class="mb-4">Assigner un utilisateur</h2>
                    <div class="flex flex-col gap-y-2">
                        <div v-for="user in users" class="flex w-full h-12 rounded-lg gap-x-2 items-center p-2 border">
                            <div class="">{{ user.firstname }}</div>
                            <div>{{ user.lastname }}</div>
                            <div class="grow" />
                            <v-btn color="primary" @click="assignTo(user, achievement)"
                                :disabled="user?.achievements?.some(obj => obj['title'] === achievement?.title)">
                                {{ user?.achievements?.some(obj => obj['title'] === achievement?.title) ? "Deja Assigné" :
                                    "Assigner" }}
                            </v-btn>
                        </div>
                    </div>
                </div>
            </v-card>
        </v-dialog>
    </v-btn>
</template>

<script setup lang="ts">
import { onMounted, PropType, ref } from "vue";
import { AchievementDoc } from "@/interfaces/achievement";
import { useCollection } from "vuefire";
import { collection } from "firebase/firestore";
import { firestoreDB } from "@/firebase";
import { useAchievementsStore } from "@/stores/achievements";
import { UserI } from "@/interfaces/user";

const isDialogOpen = ref<boolean>(false);

const users = useCollection(collection(firestoreDB, "users"));

const achievementStore = useAchievementsStore();
const { assignAchievement } = achievementStore;

const props = defineProps({
    achievement: {
        type: Object as PropType<AchievementDoc>,
        required: true
    }
})

const assignTo = async (user: UserI, achievement: AchievementDoc) => {
    await assignAchievement(user, achievement)
}
</script>

<style scoped>
</style>
