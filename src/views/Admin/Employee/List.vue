<template>
    <div class="p-10 gap-y-10">
        <div class="text-3xl font-bold mb-10">Employées</div>
        <div class="flex mb-5 gap-4 items-center">
            <v-btn color="primary" @click="generateUsers">Générer des users</v-btn>
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
            <div class="flex">
                <p class="italic font-medium">Niveaux :</p>
                <div class="flex flex-wrap gap-4 pl-4">
                    <div class="flex items-center gap-x-2">
                        <div class="h-3 w-3 rounded-full bg-h-green"></div>
                        <p class="italic">Bronze</p>
                    </div>
                    <div class="flex items-center gap-x-2">
                        <div class="h-3 w-3 rounded-full bg-h-blue"></div>
                        <p class="italic">Silver</p>
                    </div>
                    <div class="flex items-center gap-x-2">
                        <div class="h-3 w-3 rounded-full bg-h-red"></div>
                        <p class="italic">Gold</p>
                    </div>
                    <div class="flex items-center gap-x-2">
                        <div class="h-3 w-3 rounded-full bg-h-black"></div>
                        <p class="italic">Diamond</p>
                    </div>
                </div>
            </div>
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
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-2 text-left">
                                Email
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-2 text-left">
                                Nom
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-2 text-left">
                                Disponible
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-2 text-left">
                                Compétences
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Selectionner
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user, index) of filteredUsers"
                            class="hover:bg-gray-200 bg-gray-100 border-b cursor-pointer"
                            :class="usersSelected.includes(user) ? 'bg-purple-100 hover:bg-purple-200' : 'bg-gray-100'"

                            @click.stop="navigateToProfile(user.uuid)">
                            <td class="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                                {{ user.email }}
                            </td>
                            <td class="text-sm text-gray-900 font-medium px-6 py-2 whitespace-nowrap">
                                {{ user.firstname }} {{ user.lastname }}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                                <div :class="user.isAvailable
                                    ? 'h-3 w-3 rounded-full bg-green-500 m-auto'
                                    : 'h-3 w-3 rounded-full bg-red-500 m-auto'
                                    "></div>
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-2">
                                <div class="flex flex-wrap gap-2">
                                    <template v-for="skill in user.skills">
                                        <v-tooltip v-if="skill.name.split(' ').length > 2" :text="skill.name">
                                            <template v-slot:activator="{ props }">
                                                <span @click.stop="filterBySkill(skill.name)">
                                                    <v-chip v-bind="props"
                                                        :color="skillLevelColor(skill.rating)">{{ ellipsisIfMoreThanThreeWords(skill.name) }}</v-chip>
                                                </span>
                                            </template>
                                        </v-tooltip>
                                        <span v-else @click.stop="filterBySkill(skill.name)">
                                            <v-chip :color="skillLevelColor(skill.rating)">{{ skill.name }}</v-chip></span>
                                    </template>
                                </div>
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4">
                                <input class="m-auto block" @click.stop="selectUser(user)" type="checkbox" name="choisir" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="flex justify-center">
                <v-btn color="primary" class="mt-4 mb-10" @click="addDocForSharingProfils()"
                    :disabled="usersSelected.length === 0">
                    Partager ces profils
                </v-btn>
                <v-dialog v-model="isShareProfilDialogOpen" width="auto">
                    <v-card>
                        <v-card-text>
                            Voici l'url que vous pouvez partager :
                            {{ currentDomain + "/share/" + uid }}
                        </v-card-text>
                        <v-card-actions>
                            <v-btn color="primary" block @click="handleCopyAndCloseDialog()">Copier</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { usersRef, firestoreDB } from "@/firebase";

import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { addDoc, collection } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useRouter } from "vue-router";

const usersSelected = ref<any[]>([]);
const isShareProfilDialogOpen = ref<boolean>(false);
const uid = ref<string>("");

const currentDomain = window.location.origin;

const handleCopyAndCloseDialog = () => {
    navigator.clipboard.writeText(currentDomain + "/share/" + uid.value);
    isShareProfilDialogOpen.value = false;
};

const selectUser = (user: any) => {
    if (usersSelected.value.includes(user)) {
        usersSelected.value = usersSelected.value.filter(
            (selectedUser) => selectedUser !== user
        );
        return;
    }
    usersSelected.value.push(user);
};

const addDocForSharingProfils = () => {
    addDoc(collection(firestoreDB, "shareProfils"), {
        users: usersSelected.value,
    }).then((docRef) => {
        // get the uid of the document created
        uid.value = docRef.id;
        isShareProfilDialogOpen.value = true;
    });
};

const router = useRouter();
const userStore = useUserStore();
const { getUsers, generateUsers } = userStore;
const { users } = storeToRefs(userStore);

const selectedSkillsToFilter = ref<string[]>([]);
const isDialogOpen = ref<boolean>(false);
const email = ref<string>("");
const filter = ref<string>("");

onMounted(async () => {
    try {
        await getUsers();
    } catch { }
});

const navigateToProfile = (userId: string) => {
    router.push({ name: "client-profile-show", params: { id: userId } })
}

const addConsultant = async () => {
    const data = {
        firstname: "paul",
        lastname: "consultant",
        birthdate: "1 Janvier 1990",
        hiredate: "8 Mars 2021",
        role: "consultant",
        isAvailable: true,
        email: "test@gmail.com",
        uuid: "669Jkhq6LSTa3rFq8rFhEmHfGqr2",
        skills: [
            {
                name: "Express",
                category: "Résolution de problèmes algorithmiques",
                rating: 1,
            },
            {
                name: "Nest",
                category: "Résolution de problèmes algorithmiques",
                rating: 2,
            },
            {
                name: "Magician lord supreme",
                category: "Résolution de problèmes algorithmiques",
                rating: 1,
            },
        ],
    };
    await addDoc(usersRef, data);
}

const skillLevelColor = (rating: number) => {
    switch (rating) {
        case 1:
            return "#00BB7E";
        case 2:
            return "#5B98D2";
        case 3:
            return "#E53F49";
        case 4:
            return "#282B2A";
    }
};

const ellipsisIfMoreThanThreeWords = (skill: string) => {
    const words = skill.split(" ");
    if (words.length > 2) {
        return words[0] + " " + words[1] + " ...";
    }
    return skill;
};

const filterBySkill = (skillName: string) => {
    if (!selectedSkillsToFilter.value.includes(skillName)) {
        selectedSkillsToFilter.value.push(skillName);
    }
};

const removeSkill = (skillName: string) => {
    const index = selectedSkillsToFilter.value.indexOf(skillName);
    if (index !== -1) {
        selectedSkillsToFilter.value.splice(index, 1);
    }
};

const filteredUsers = computed(() => {

    console.log(users)
    const filterUsers = users.value;
    if (selectedSkillsToFilter.value.length > 0) {
        return filterUsers.filter(user => {
            if (user?.skills?.length > 0) {
                return selectedSkillsToFilter.value.every(desiredSkill => user.skills.some(skill => skill.name === desiredSkill))
            }
            return;
        })
    }
    if (filter.value.length > 0) {
        return filterUsers.filter((user) => {
            return (
                user.firstname.toLowerCase().indexOf(filter.value.toLowerCase()) !== -1 ||
                user.lastname.toLowerCase().indexOf(filter.value.toLowerCase()) !== -1 ||
                user.email.toLowerCase().indexOf(filter.value.toLowerCase()) !== -1
            );
        });
    }
    return filterUsers;
});

// const currentUserLoggedIn: any = useCurrentUser();

const handleSubmitNewUser = () => {
    // Error have "missing fields" but when testing with postman it works...
    // if (currentUserLoggedIn?.value?.accessToken) {
    //     fetch(
    //         "https://us-central1-hackathon2-0-d6ef2.cloudfunctions.net/api/users",
    //         {
    //             headers: {
    //                 Authorization: `Bearer ${currentUserLoggedIn.value.accessToken}`,
    //             },
    //             method: "POST",
    //             body: JSON.stringify({
    //                 role: "consultant",
    //                 email: "consul@teest.fr",
    //                 password: "testtest",
    //                 displayName: "marc",
    //             }),
    //         }
    //     )
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log("%cShow.vue line:61 data", "color: #007acc;", data);
    //         });
    // }
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
