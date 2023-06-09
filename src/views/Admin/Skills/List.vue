<template>
  <div class="p-10 gap-y-10">
    <h1 class="text-3xl font-bold mb-8">Skills chez Carbon</h1>
    <div class="flex flex-wrap">
      <div v-for="skill in skills" :key="skill.name" class="w-1/4 p-4">
        <v-card outlined class="text-center">
          <v-card-text>
            <div class="flex flex-col items-center">
              <font-awesome-icon icon="fa-solid fa-book" class="text-h-red text-2xl" />
              <h3 class="text-lg font-bold mt-4">{{ skill.name }}</h3>
              <p class="text-gray-500">{{ skill.category }}</p>
              <div class="flex items-center mt-4">
                <v-icon @click="openEditDialog(skill)" color="grey lighten-1" class="mr-2">mdi-pencil</v-icon>
                <v-icon @click="deleteSkill(skill)" color="grey lighten-1">mdi-delete</v-icon>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </div>
    </div>
    <div class="my-8">
      <h2 class="text-2xl font-bold mb-4">Ajouter un skill</h2>
      <form @submit.prevent="addSkill">
        <v-text-field v-model="newSkill.name" label="Nom" required></v-text-field>
        <v-text-field v-model="newSkill.category" label="Catégorie" required></v-text-field>
        <v-btn color="primary" type="submit">Ajouter</v-btn>
      </form>
      <div class="mt-8 p-4 bg-green-200 text-green-800 rounded" v-if="skillAdded">
        <p class="text-lg font-semibold">Skill Ajouté !</p>
      </div>
    </div>
    <v-dialog v-model="editDialog" max-width="500px">
      <v-card>
        <v-card-title>
          Modifier le skill
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="saveSkill">
            <v-text-field v-model="editedSkill.name" label="Nom" required></v-text-field>
            <v-text-field v-model="editedSkill.category" label="Catégorie" required></v-text-field>
            <v-card-actions>
              <v-btn color="primary" type="submit">Enregistrer</v-btn>
              <v-btn color="error" @click="closeEditDialog">Annuler</v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
  </template>

<script setup>
import { ref, onMounted } from 'vue';
import { collection, getDocs, addDoc, updateDoc, doc, query, where, onSnapshot } from "firebase/firestore";
import { firestoreDB } from "@/firebase";

const skills = ref([]);
const newSkill = ref({});
const skillAdded = ref(false);
const editedSkill = ref({});
const editDialog = ref(false);

onMounted(async () => {
    try {
        const skillsCollection = collection(firestoreDB, 'commonSkills');

        onSnapshot(skillsCollection, (snapshot) => {
          skills.value = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            const dataAndId = {...data, id: doc.id};
            skills.value.push(dataAndId);
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
        });
        
    } catch (error) {
        console.log(error);
    }
});

const addSkill = async () => {
  try {
    await addDoc(collection(firestoreDB, "commonSkills"), newSkill.value);
    skillAdded.value = true;
  } catch (error) {
    console.log(error);
  }
}

const openEditDialog = (skill) => {
  editedSkill.value = skill
  editDialog.value = true;
}

const closeEditDialog = () => {
  editDialog.value = false;
}

const saveSkill = async () => {
  // Logique pour enregistrer les modifications du skill ici
  const skillToEdit = doc(firestoreDB, "commonSkills", editedSkill.value.id);

  await updateDoc(skillToEdit, {
    name: editedSkill.value.name,
    category: editedSkill.value.category
  });

  editDialog.value = false;
}

const deleteSkill = (skill) => {
  // Logique pour supprimer le skill ici
}

</script>

<style scoped>

</style>