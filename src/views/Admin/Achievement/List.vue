<template>
  <div class="p-10 gap-y-10">
    <div class="text-3xl font-bold mb-10">
      Achievements
    </div>
    <div class="flex mb-5 gap-4 items-center">
      <router-link :to="{ name: 'admin-achievements-create' }" class="p-2 hover:underline">
        New achievement
      </router-link>
      <v-text-field label="search" variant="outlined" hide-details/>
      <v-btn variant="flat">Filter</v-btn>
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
import Achievement from "@/components/Admin/Achievement/Achievement.vue";
import {useCollection} from "vuefire";
import {collection} from "firebase/firestore";
import {firestoreDB} from "@/firebase";

const achievements = useCollection(collection(firestoreDB, 'achievements'))

</script>

<style scoped>

</style>