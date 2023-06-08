<template>
    <div class="p-10 gap-y-10">
        <div class="text-3xl font-bold mb-10">Employées</div>
        <div class="flex mb-5 gap-4 items-center">
            <v-btn color="primary" @click="addConsultant">Add</v-btn>
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
            <v-text-field v-model="filter" label="Rechercher" variant="outlined" hide-details density="compact">
                <template #prepend-inner>
                    <FontAwesomeIcon icon="fa-solid fa-search"></FontAwesomeIcon>
                </template>
            </v-text-field>
        </div>
        <div class="flex-grow-1">
            <div class="flex flex-wrap gap-2">
                <template v-for="(skill, index) of selectedSkillsToFilter" :key="`skill-${index}`">
                    <span @click="removeSkill(skill)">
                        <v-chip>{{ skill }}</v-chip>
                    </span>
                </template>
            </div>
            <div class="table-container">

                <table class="min-w-full">
                    <thead class="bg-white border-b">
                        <tr>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Email
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Nom
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Disponible
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Compétences
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user, index) of filteredUsers" class="bg-gray-100 border-b">
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {{ user.email }}
                            </td>
                            <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                {{ user.firstname }} {{ user.lastname }}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {{ user.isAvailable }}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4">
                                <div class="flex flex-wrap gap-2">
                                    <template v-for="skill in user.skills">
                                        <v-tooltip v-if="skill.name.split(' ').length > 2" :text="skill.name">
                                            <template v-slot:activator="{ props }">
                                                <span @click="filterBySkill(skill.name)">
                                                    <v-chip v-bind="props"
                                                        :color="skillLevelColor(skill.rating)">{{ ellipsisIfMoreThanThreeWords(skill.name) }}</v-chip>
                                                </span>
                                            </template>
                                        </v-tooltip>
                                        <span v-else @click="filterBySkill(skill.name)">
                                            <v-chip :color="skillLevelColor(skill.rating)">{{ skill.name }}</v-chip></span>
                                    </template>

                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { auth, usersRolesRef, usersRef } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { addDoc } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const userStore = useUserStore();
const { getUsers } = userStore;
const { users } = storeToRefs(userStore);

const selectedSkillsToFilter = ref<string[]>([]);
const isDialogOpen = ref<boolean>(false);
const email = ref<string>("");
const filter = ref<string>("");

onMounted(async () => {
    try {
        await getUsers();
    } catch {

    }
});

const addConsultant = async () => {
    const data = {
        firstname: 'paul',
        lastname: 'consultant',
        birthdate: '1 Janvier 1990',
        hiredate: '8 Mars 2021',
        role: 'consultant',
        isAvailable: true,
        email: 'test@gmail.com',
        uuid: '669Jkhq6LSTa3rFq8rFhEmHfGqr2',
        skills: [
            {
                "name": "Express",
                "category": "Résolution de problèmes algorithmiques",
                "rating": 1
            },
            {
                "name": "Nest",
                "category": "Résolution de problèmes algorithmiques",
                "rating": 2
            },
            {
                "name": "Magician lord supreme",
                "category": "Résolution de problèmes algorithmiques",
                "rating": 1
            },
        ]
    }
    await addDoc(usersRef, data);
}
const skillLevelColor = (rating: number) => {
    switch (rating) {
        case 1:
            return "#00BB7E"
        case 2:
            return "#5B98D2"
        case 3:
            return "#E53F49"
        case 4:
            return "#282B2A"
    }
}

const ellipsisIfMoreThanThreeWords = (skill: string) => {
    const words = skill.split(' ');
    if (words.length > 2) {
        return words[0] + " " + words[1] + " ..."
    }
    return skill;
}

const filterBySkill = (skillName: string) => {
    if (!selectedSkillsToFilter.value.includes(skillName)) {
        selectedSkillsToFilter.value.push(skillName);
    }
}

const removeSkill = (skillName: string) => {
    const index = selectedSkillsToFilter.value.indexOf(skillName)
    if (index !== -1) {
        selectedSkillsToFilter.value.splice(index, 1)
    }
}

const filteredUsers = computed(() => {
    const filterUsers = users.value;
    if (selectedSkillsToFilter.value.length > 0) {
        return filterUsers.filter(user => {
            return selectedSkillsToFilter.value.every(desiredSkill => user.skills.some(skill => skill.name === desiredSkill))
        })
    }
    if (filter.value.length > 0) {
        return filterUsers.filter(user => {
            return user.firstname.indexOf(filter.value) !== -1 ||
                user.lastname.indexOf(filter.value) !== -1 ||
                user.email.indexOf(filter.value) !== -1
        })
    }
    return filterUsers;
})

const functions = getFunctions();

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

span.v-chip:hover {
    cursor: pointer !important;
}

.table-container {
    width: 100%;
    height: 100%;
    overflow-y: auto;
}

table {
    width: 100%;
    border-collapse: collapse;
}

thead {
    position: sticky;
    top: 0;
    background-color: #fff;
}
</style>
