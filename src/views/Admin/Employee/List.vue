<template>
    <div class="p-10 gap-y-10">
        <div class="text-3xl font-bold mb-10">Employées</div>
        <div class="flex mb-5 gap-4 items-center">
            <v-btn color="primary">
                Nouveau
                <v-dialog v-model="isDialogOpen" activator="parent" width="auto">
                    <v-card>
                        <div class="p-5" id="dialogCreate">
                            <h2 class="mb-4">Créer un utilisateur</h2>
                            <v-text-field v-model="newUserData.email" label="Email" outlined />
                            <v-text-field v-model="newUserData.firstname" label="Prénom" outlined />
                            <v-text-field v-model="newUserData.lastname" label="Nom" outlined />
                            <v-radio-group label="Rôle de l'utilisateur" v-model="newUserData.role">
                                <v-radio label="Admin" value="admin" />
                                <v-radio label="Recruteur" value="recruteur" />
                                <v-radio label="Consultant" value="consultant" />
                                <v-radio label="Manager" value="manager" />
                            </v-radio-group>
                            <v-btn color="primary" block @click="handleSubmitNewUser()"
                                :disabled="isButtonNewUserSubmittes">Créer</v-btn>
                        </div>
                    </v-card>
                </v-dialog>
            </v-btn>
            <v-text-field v-model="filter" label="Rechercher" variant="outlined" hide-details density="compact">
                <template #prepend-inner>
                    <FontAwesomeIcon icon="fa-solid fa-search"></FontAwesomeIcon>
                </template>
            </v-text-field>

            <div class="flex justify-center">
                <v-btn color="primary" @click="addDocForSharingProfils()" :disabled="usersSelected.length === 0">
                    Partager ces profils
                </v-btn>
                <v-dialog v-model="isShareProfilDialogOpen" width="auto">
                    <v-card>
                        <v-card-text>
                            Voici l'url que vous pouvez partager :
                            {{ currentDomain + "/share/" + uid }}
                        </v-card-text>
                        <v-card-actions>
                            <v-btn color="primary" variant="flat" block @click="handleCopyAndCloseDialog()">Copier</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </div>
        </div>
        <div class="flex-grow-1 mb-10">
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
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { firestoreDB } from "@/firebase";

import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { addDoc, collection } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useRouter } from "vue-router";
import { createToast } from "mosha-vue-toastify"
import { useCurrentUser } from "vuefire";
import axios from "axios";

const usersSelected = ref<any[]>([]);
const isShareProfilDialogOpen = ref<boolean>(false);
const uid = ref<string>("");

const currentDomain = window.location.origin;

const handleCopyAndCloseDialog = () => {
    navigator.clipboard.writeText(currentDomain + "/share/" + uid.value);
    isShareProfilDialogOpen.value = false;
    createToast("Lien copié dans le presse-papier", {
        position: "bottom-right",
        timeout: 2000,
        showIcon: true,
        type: "success",
    });
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
const filter = ref<string>("");

onMounted(async () => {
    try {
        await getUsers();
    } catch { }
});

const navigateToProfile = (userId: string) => {
    router.push({ name: "client-profile-show", params: { id: userId } })
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

const currentUserLoggedIn: any = useCurrentUser();

const newUserData = ref({
    role: "consultant",
    email: "",
    firstname: "",
    lastname: "",
});

const isButtonNewUserSubmittes = ref(false);

const handleSubmitNewUser = () => {
    if (currentUserLoggedIn?.value?.accessToken) {
        isButtonNewUserSubmittes.value = true;
        axios
            .post(
                `${import.meta.env.VITE_FIRESTORE_API}/users`,
                {
                    role: newUserData.value.role,
                    email: newUserData.value.email,
                    firstname: newUserData.value.firstname,
                    lastname: newUserData.value.lastname
                },
                {
                    headers: {
                        Authorization: `Bearer ${currentUserLoggedIn.value.accessToken}`,
                    },
                }
            )
            .then((res) => {
                isDialogOpen.value = false;
            })
            .catch((err) => {
                console.log("%cShow.vue line:61 err", "color: #007acc;", err);
                alert("Une erreur est survenue lors de la création de l'utilisateur")
            })
            .finally(() => {
                isButtonNewUserSubmittes.value = false;
            });
    }

};

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