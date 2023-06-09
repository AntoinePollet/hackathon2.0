<template>
    <div class="p-10 gap-y-10">
        <h1 class="text-3xl font-bold mb-10">Evaluations</h1>
        <div class="grid gap-4 lg:grid-cols-3 md:grid-cols-2">
            <div v-for="user in users" :key="user.uuid">
                <v-card class="max-w-xs mx-auto">
                    <div class="flex items-center justify-center h-32">
                        <div class="w-full h-full bg-cover bg-center"
                            :style="`background-image: url('https://api.multiavatar.com/${user.firstname}${user.lastname}.png?apikey=XdoCH30EA6grGx')`">
                        </div>
                        <!-- <font-awesome-icon :icon="['fas', 'user']" class="text-6xl text-gray-400"></font-awesome-icon> -->
                    </div>
                    <v-card-title class="text-center">
                        <h3 class="text-lg font-bold">{{ user.firstname }} {{ user.lastname }}</h3>
                        <p class="text-gray-500">{{ user.role }}</p>
                    </v-card-title>
                    <v-card-text>
                        <div>
                            <h4 class="text-xl font-bold mb-2">Top</h4>
                            <ul class="list-disc list-inside list-none">
                                <li v-for="skill in getTopRatedSkills(user.skills)" :key="skill.name" class="mb-2">
                                    <font-awesome-icon icon="fa-solid fa-fire" class="text-h-red" />
                                    {{ formatSkillName(skill.name) }}
                                </li>
                            </ul>
                        </div>
                    </v-card-text>
                    <div class="flex justify-center mb-5" v-if="user.uuid">
                        <router-link :to="{ name: 'evaluation-show', params: { id: user.uuid } }">
                            <v-btn color="primary">Évaluer</v-btn>
                        </router-link>
                    </div>
                </v-card>
            </div>
        </div>
    </div>
</template>



<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { collection, getDocs, updateDoc, doc, query, where } from "firebase/firestore";
import { firestoreDB } from "@/firebase";
import { useCurrentUser } from "vuefire";
const currentUserLogged = useCurrentUser();
let users: any = ref([]);

onMounted(async () => {
    try {
        const usersFromFB = await getDocs(collection(firestoreDB, "users"));

        usersFromFB.forEach((doc) => {
            const data = doc.data();
            users.value.push(data);
        });

    } catch (error) {
        console.log(error);
    }
});

const getTopRatedSkills = (skills: any) => {
    if (skills) {
        return skills.sort((a, b) => b.rating - a.rating).slice(0, 3);
    }
    return null;
};

const formatSkillName = (name) => {
    if (name.length > 32) {
        return name.slice(0, 32) + '...';
    }
    return name;
}

</script>

<style scoped></style>