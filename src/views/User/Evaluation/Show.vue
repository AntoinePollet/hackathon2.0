<template>
    <div class="py-10">
        <v-container v-if="user !== null">
            <h1 class="text-3xl font-bold mb-10">Évaluation</h1>
            <section class="mb-8" v-if="user !== null">
                <div class="bg-white p-4 shadow flex items-center">
                    <div class="mr-4">
                        <v-avatar size="72">
                            <img :src="`https://api.multiavatar.com/${user.firstname}${user.lastname}.png?apikey=XdoCH30EA6grGx`"
                                alt="Avatar">
                        </v-avatar>
                    </div>
                    <div>
                        <h2 class="text-2xl font-semibold mb-2">{{ user.firstname }} {{ user.lastname }}</h2>
                        <p class="text-lg">{{ user.role }}</p>
                    </div>
                    <div class="ml-auto"> <!-- Utilisation de ml-auto pour aligner le bouton à droite -->
                        <v-btn prepend-icon="mdi-plus" color="primary" @click="addSkill" class="add-skill-btn">Ajouter une compétence</v-btn>
                    </div>
                </div>
            </section>
            <h2 class="text-2xl font-bold mb-8">Compétences</h2>
            <div v-for="(skill, index) in user.skills" :key="index" class="mb-5">
                <v-card>
                    <v-card-title class="text-lg">{{ skill.name }}</v-card-title>
                    <v-card-subtitle class="text-sm">{{ skill.category }}</v-card-subtitle>
                    <v-row align="center" class="row">
                        <v-col cols="9">
                            <v-slider v-model="skill.rating" min="1" max="4" step="1" class="ml-5"></v-slider>
                        </v-col>
                        <v-col cols="3">
                            <div class="text-center">
                                <v-chip small color="red">
                                    <span class="mr-1">{{ skill.rating }}</span>
                                    <span>/ {{ skillMaxRating }}</span>
                                </v-chip>
                            </div>
                        </v-col>
                    </v-row>
                </v-card>
            </div>
            <v-btn color="primary" @click="updateSkillsRating" class="validate-btn mx-auto mt-10">Valider
                l'évaluation</v-btn>
        </v-container>
    </div>
</template>
  
<script setup lang="ts">
import { EventTypeEnum } from '@/interfaces/event';
import { ref, onMounted } from 'vue';
import { collection, getDocs, updateDoc, doc, query, where } from "firebase/firestore";
import { firestoreDB } from "@/firebase";
import { useRoute } from 'vue-router';
import { useEventStore } from '@/stores/event'
import { createToast } from 'mosha-vue-toastify';
const eventStore = useEventStore();
const { publishEvent } = eventStore;
const route = useRoute();
const uuid = route.params.id;
let user: any = ref(null);
const skillMaxRating = 4;

onMounted(async () => {
    try {
        const usersFromFB = await getDocs(collection(firestoreDB, "users"));

        usersFromFB.forEach((doc) => {
            const data = doc.data();
            if (data.uuid === uuid) {
                user.value = data;
            }
        });

    } catch (error) {
        console.log(error);
    }
});

const updateSkillsRating = async () => {
    try {
        const { uuid, skills } = user.value;

        // Crée une référence à la collection "users" et utilise une requête pour retrouver le document avec le champ "uuid"
        const q = query(collection(firestoreDB, 'users'), where('uuid', '==', uuid));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.size > 0) {
            // Récupère l'ID du premier document correspondant à la requête
            const docId = querySnapshot.docs[0].id;

            const consultantRef = doc(firestoreDB, "users", docId);

            // Met à jour le document correspondant dans Firestore en utilisant l'ID
            await updateDoc(consultantRef, {
                skills: skills
            });

            await publishEvent({ title: "Validation de compétences", description: `Une nouvelle validation de compétences faites pour ${consultantRef.data}`, type: EventTypeEnum.SKILL_UPGRADE });

            createToast('Les compétences ont été mises à jour avec succès.', {
                position: 'bottom-right',
                type: 'success',
                showIcon: true,
                timeout: 2000,
            });
        } else {
            console.warn('Aucun document correspondant à l\'UUID spécifié n\'a été trouvé.');
        }
    } catch (error) {
        console.error('Erreur lors de la mise à jour des compétences :', error);
    }
}
</script>
  
<style scoped>
.row {
    margin: 0 !important;
}

.validate-btn {
    display: block !important;
}
</style>
