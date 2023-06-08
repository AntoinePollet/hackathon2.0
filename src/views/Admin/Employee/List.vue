<template>
    <div class="p-10 gap-y-10">
        <div class="text-3xl font-bold mb-10">Employees</div>
        <div class="flex mb-5 gap-4 items-center">
            <v-btn color="primary">
                Nouveau

                <v-dialog v-model="isDialogOpen" activator="parent" width="auto">
                    <v-card>
                        <div class="p-5" id="dialogCreate">
                            <h2 class="mb-4">Créer un utilisateur</h2>
                            <v-text-field v-model="email" label="Email" outlined />
                            <v-btn color="primary" block @click="handleSubmitNewUser">Créer</v-btn>
                        </div>
                    </v-card>
                </v-dialog>
            </v-btn>
            <v-text-field label="search" variant="outlined" hide-details />
            <v-btn variant="flat">Filter</v-btn>
        </div>
        <div class="bg-red-100 flex-grow-1">
            <v-data-table :headers="headers" :items="usersRolesRef" class="elevation-1 border rounded-lg h-full"
                height="600" item-value="name"></v-data-table>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { auth, usersRolesRef } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";

const functions = getFunctions();

const isDialogOpen = ref(false);
const email = ref("");

console.log(
    "%cList.vue line:29 usersRolesRef",
    "color: #007acc;",
    usersRolesRef
);

const handleSubmitNewUser = () => {
    // cors error policy
    const addMessage = httpsCallable(functions, "helloWorld");
    addMessage().then((result) => {
        // Read result of the Cloud Function.
        console.log("message", result);
        // ...
    });
    isDialogOpen.value = false;
};

const headers = ref([
    {
        title: "email",
        align: "start",
        // sortable: false,
        key: "email",
    },
    { title: "Prénom", align: "end", key: "firstname" },
    { title: "Nom", align: "end", key: "fat" },
    { title: "Poste actuel", align: "end", key: "carbs" },
]);
</script>

<style scoped>
#dialogCreate {
    width: 420px;
}
</style>
