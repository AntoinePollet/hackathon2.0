<template>
  <div class="p-10 gap-y-10">
    <h1 class="text-3xl font-bold mb-8">Skills chez Carbon</h1>
    <div class="flex flex-wrap">
      <div v-for="skill in skills" :key="skill.name" class="w-1/4 p-4">
        <v-card outlined class="text-center">
          <v-card-text>
            <font-awesome-icon icon="fa-solid fa-book" class="text-h-red text-2xl" />
            <h3 class="text-lg font-bold mt-4">{{ skill.name }}</h3>
            <p class="text-gray-500">{{ skill.category }}</p>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { collection, getDocs, updateDoc, doc, query, where } from "firebase/firestore";
import { firestoreDB } from "@/firebase";

const skills = ref([]);

onMounted(async () => {
    try {
        const skillsFromFB = await getDocs(collection(firestoreDB, "commonSkills"));

        skillsFromFB.forEach((doc) => {
            const data = doc.data();
            skills.value.push(data);
        });
        
        skills.value.sort((a, b) => {
          if (a.category < b.category) {
            return -1;
          } else if (a.category > b.category) {
            return 1;
          } else {
            return 0;
          }
        });
        
    } catch (error) {
        console.log(error);
    }
});

</script>

<style scoped>

</style>