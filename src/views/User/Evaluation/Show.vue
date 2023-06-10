<template>
    <div class="py-10">
        <v-container v-if="user !== null">
            <h1 class="text-3xl font-bold mb-10">Évaluation</h1>
            <section class="mb-8" v-if="user !== null">
                <div class="p-4 shadow flex items-center">
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
                        <v-btn prepend-icon="mdi-plus" color="primary" @click="openAddSkillDialog" class="add-skill-btn">Ajouter une compétence</v-btn>
                    </div>
                </div>
            </section>
            <h2 class="text-2xl font-bold mb-8">Compétences</h2>
            <div v-for="(skill, index) in user.skills" :key="index" class="mb-5">
                <v-card>
                    <v-card-title class="text-lg">{{ skill.name }}</v-card-title>
                    <v-card-subtitle class="text-sm">{{ skill.category }}</v-card-subtitle>
                    <v-row align="center" class="row">
                        <v-col cols="8">
                            <v-slider v-model="skill.rating" min="1" max="4" step="1" class="ml-5"></v-slider>
                        </v-col>
                        <v-col cols="1">
                            <div class="text-center">
                                <v-chip small color="red">
                                    <span class="mr-1">{{ skill.rating }}</span>
                                    <span>/ {{ skillMaxRating }}</span>
                                </v-chip>
                            </div>
                        </v-col>
                        <v-col cols="3">
                            <div class="text-center">
                                <v-btn variant="elevated" icon small color="red" @click="removeSkill(index)" class="ml-2 relative bottom-2">
                                    <v-icon class="text-red-500">mdi-delete</v-icon>
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-card>
            </div>
            <v-btn color="primary" @click="updateSkillsRating" class="validate-btn mx-auto mt-10">Valider
                l'évaluation</v-btn>
        </v-container>
        <v-dialog v-model="addSkillDialog" max-width="500px">
            <v-card>
            <v-card-title>Ajouter une compétence</v-card-title>
            <v-card-text>
                <v-form @submit.prevent="addNewSkill">
                    <v-text-field v-model="newSkill.name" label="Nom de la compétence"></v-text-field>
                    <v-text-field v-model="newSkill.category" label="Catégorie de la compétence"></v-text-field>
                    <v-btn type="submit" color="primary">Ajouter</v-btn>
                </v-form>
            </v-card-text>
            </v-card>
      </v-dialog>
    </div>
</template>
  
<script setup lang="ts">
import { EventTypeEnum } from '@/interfaces/event';
import { ref, onMounted } from 'vue';
import { collection, getDocs, updateDoc, doc, query, where, onSnapshot } from "firebase/firestore";
import { firestoreDB } from "@/firebase";
import { useEventStore } from '@/stores/event'
import { createToast } from 'mosha-vue-toastify';
import { useCurrentUser } from "vuefire"; 

const eventStore = useEventStore();
const { publishEvent } = eventStore;
let user: any = ref(null);
const skillMaxRating = 4;
const addSkillDialog = ref(false);
const newSkill = ref({ name: '', category: '' });

onMounted(async () => {
    const currentUserLogged = useCurrentUser(); 
    const uid = currentUserLogged.value?.uid;        

    try {
        onSnapshot(doc(firestoreDB, "users", uid), (doc) => {
            user.value = { id: doc.id, ...doc.data() };
            setSkillsRatingTo1IfUndefined();
        });

    } catch (error) {
        console.log(error);
    }
});

const updateSkillsRating = async () => {
    try {
        const { skills, id } = user.value;
        const consultantRef = doc(firestoreDB, "users", id);

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
    } catch (error) {
        console.error('Erreur lors de la mise à jour des compétences :', error);
    }
}

const openAddSkillDialog = () => {
    addSkillDialog.value = true;
}

const addNewSkill = async () => {
  try {
    const { name, category } = newSkill.value;

    if (name && category) {
        const skill = { name, category, rating: 1 };
        
        const userToEdit = doc(firestoreDB, "users", user.value.id);

        await updateDoc(userToEdit, {
            skills: [skill, ...user.value.skills]
        });

        // Fermer le dialogue et réinitialiser le formulaire
        addSkillDialog.value = false;
        newSkill.value = { name: '', category: '' };

        createToast('La compétence a été ajoutée avec succès.', {
            position: 'bottom-right',
            type: 'success',
            showIcon: true,
            timeout: 2000,
        });
    } else {
        console.warn('Veuillez remplir tous les champs du formulaire.');
    }
  } catch (error) {
        console.error('Erreur lors de l\'ajout de la compétence :', error);
  }
}

const removeSkill = async (indexSkillToRemove: any) => {
    try {
        user.value.skills.splice(indexSkillToRemove, 1);

        const userToEdit = doc(firestoreDB, "users", user.value.id);

        await updateDoc(userToEdit, {
            skills: user.value.skills
        });

        createToast("Skill supprimé", {
            position: "bottom-right",
            timeout: 2000,
            showIcon: true,
            type: "success",
        });
  } catch (error) {
    console.log(error);
  }
}

const setSkillsRatingTo1IfUndefined = () => {
    user.value.skills.forEach((skill: any) => {
        if (!skill.rating) {
            skill.rating = 1;
        }
    });
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
