<template>
    <div class="p-10 gap-y-10">
        <div class="text-3xl font-bold mb-10">
          Succès
        </div>
        <div class="mb-6 flex items-center">
          <v-text-field variant="outlined" label="search" hide-details/>
          <v-btn class="m-2" variant="text">Filter</v-btn>
        </div>
        <div class="flex flex-wrap gap-6">
            <achievement
                v-for="achievement in achievements"
                :achievement="achievement"
            />
        </div>
    </div>
</template>

<script setup>
import Achievement from "@/components/Achievement/Achievement.vue";
import {useCollection} from "vuefire";
import {collection, orderBy, query, where} from "firebase/firestore";
import {firestoreDB} from "@/firebase";

const achievementsCollection = collection(firestoreDB, 'achievements')
const filteredAchievements = query(achievementsCollection, orderBy("title", "asc"))

const achievements = useCollection(filteredAchievements)
</script>

<style scoped>

</style>