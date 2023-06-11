<template>
    <div class="p-10 gap-y-10">
        <div class="text-3xl font-bold mb-10">
          Formations
        </div>
        <span class="font-bold text-2xl">Mes Formations</span>
        <div v-if="user">
            <div v-if="user?.value?.trainings?.length" class="flex flex-wrap gap-6">
                <training
                        v-for="training in user?.value?.trainings"
                        :key="training.id"
                        :training="training"
                        :current-user="user"
                />
            </div>
            <div v-else class="w-full">
                <p class="text-center w-full">Aucune formation en cours</p>
            </div>
        </div>
        <v-divider/>
        <span class="font-bold text-2xl">Formations</span>
        <div v-if="user">
            <div v-if="trainings?.length" class="flex flex-wrap gap-6">
                <training
                        v-for="training in trainings"
                        :key="training.id"
                        :training="training"
                        :current-user="user"
                />
            </div>
            <div v-else class="w-full">
                <p class="text-center w-full">Aucune formation en cours</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
//import { useTrainingStore } from '@/stores/training';
//import { storeToRefs } from 'pinia';
import Training from "@/components/Training/Training.vue";
import {useCollection} from "vuefire";
import {collection} from "firebase/firestore";
import {firestoreDB} from "@/firebase";
import {useUserStore} from "@/stores/user";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";
import {getCurrentUser} from "@/router";

const trainings = useCollection(collection(firestoreDB, 'trainings'))
const userStore = useUserStore()
const { getUser } = userStore
const { user } = storeToRefs(userStore)

const currentUser = ref()

onMounted(async () => {
    currentUser.value = await getCurrentUser()
    await getUser(currentUser.value.uid)
})

//const trainingStore = useTrainingStore();
//const { sortedTrainings } = storeToRefs(trainingStore);
</script>