<template>
    <div class="px-10 py-5 gap-y-10 overflow-auto h-full">
        <!-- <div class="text-3xl font-bold mb-5">Profile</div> -->
        <Icon @click="router.push({ name: 'admin-employees-list' })" height="2.5rem" width="2.5rem"
            class="rounded-full drop-shadow-md hover:drop-shadow-lg hover:cursor-pointer bg-white p-1"
            icon="ph:arrow-left-bold" />

        <div v-if="userById(userId)" class="grid grid-cols-4 pt-3">
            <div class="col-span-1">
                <div class="relative max-w-fit">
                    <div class="bg-cover h-32 w-32"
                        :style="`background-image: url('https://api.multiavatar.com/${userById(userId)?.firstname}${userById(userId)?.lastname}.png?apikey=XdoCH30EA6grGx')`">
                    </div>
                    <FontAwesomeIcon @click="handleShareProfile()" v-if="isCurrentUserAdminOrRecruteur" id="shareButton"
                        class="absolute bottom-0 right-0 cursor-pointer" icon="fas fa-share" />
                </div>

                <div class="py-4">
                    <p class="font-semibold text-lg">{{ userById(userId)?.firstname }} {{ userById(userId)?.lastname }}</p>
                    <p v-if="userById(userId)?.position" class="italic">{{ userById(userId).position }}</p>
                    <p v-else class="italic">Pas de position !</p>
                </div>

                <div class="sticky top-0 flex flex-col gap-y-4">
                    <div class="bg-h-green/25 rounded-lg shadow-lg">
                        <div class="p-6">
                            <div class="flex items-center">
                                <FontAwesomeIcon icon="fa-solid fa-trophy"></FontAwesomeIcon>
                                <h2 class="text-xl font-bold pl-4">{{ userById(userId)?.skills.length }} Compétences</h2>
                            </div>
                            <p class="text-sm pt-2 italic">Small description for this card ...</p>
                        </div>
                    </div>

                    <div class="bg-h-blue/25 rounded-lg shadow-lg">
                        <div class="p-6">
                            <div class="flex items-center">
                                <FontAwesomeIcon icon="fa-solid fa-wallet"></FontAwesomeIcon>
                                <h2 class="text-xl font-bold pl-4">{{ userById(userId)?.jobs.length }} Missions</h2>
                            </div>
                            <p class="text-sm pt-2 italic">Small description for this card ...</p>
                        </div>
                    </div>

                    <div class="bg-h-red/25 rounded-lg shadow-lg">
                        <div class="p-6">
                            <div class="flex items-center">
                                <FontAwesomeIcon icon="fa-solid fa-face-meh"></FontAwesomeIcon>
                                <h2 class="text-xl font-bold pl-4">{{ userById(userId)?.training.length }} Formations</h2>
                            </div>
                            <p class="text-sm pt-2 italic">Small description for this card ...</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-y-4 col-span-2 px-3 mb-12" id="testidid">
                <div class="bg-gray-100 rounded-lg shadow-md">
                    <div class="p-6">
                        <div class="flex items-center">
                            <FontAwesomeIcon icon="fa-solid fa-trophy"></FontAwesomeIcon>
                            <h2 class="text-xl font-bold pl-4">Mes missions</h2>
                        </div>
                        <div v-if="userById(userId)?.jobs">
                            <div v-for="job in userById(userId)?.jobs" class="py-2 border-b">
                                <div class="flex justify-between gap-x-3">

                                    <p class="text-sm pt-2 italic">{{ job.title }}</p>
                                    <p class="text-sm pt-2 italic">{{ job.compagny }}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-100 rounded-lg shadow-md">
                    <div class="p-6">
                        <div class="flex items-center">
                            <FontAwesomeIcon icon="fa-solid fa-trophy"></FontAwesomeIcon>
                            <h2 class="text-xl font-bold pl-4">Mes formations</h2>
                        </div>
                        <div v-if="userById(userId)?.training">
                            <div v-for="train in userById(userId)?.training" class="py-2 border-b">
                                <div class="flex items-end gap-x-3">
                                    <Icon :icon="train.completed ? 'pixelarticons:hourglass' : 'pixelarticons:check-double'"
                                        height="1rem" weight="1rem" />
                                    <p class="text-sm pt-2 italic">{{ train.title }}</p>
                                </div>
                            </div>
                        </div>
                        <div v-else class="flex items-end gap-x-3">
                            <p class="text-sm pt-2 italic">Pas de formation en cours</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-y-4 col-span-1">
                <div class="sticky flex flex-col gap-y-4 top-0">
                    <div class="bg-white rounded-lg shadow-lg">
                        <div class="p-6">
                            <div class="flex items-center">
                                <FontAwesomeIcon icon="fa-solid fa-trophy"></FontAwesomeIcon>
                                <h2 class="text-xl font-bold pl-4">A mon sujet</h2>
                            </div>
                            <p v-if="userById(userId)?.biography" class="text-sm pt-2 italic">
                                du
                                {{ userById(userId)?.biography }}
                            </p>
                            <p v-else class="text-sm pt-2 italic">No description yet !</p>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-lg">
                        <div class="p-6">
                            <div class="flex items-center pb-2">
                                <FontAwesomeIcon icon="fa-solid fa-person-booth"></FontAwesomeIcon>
                                <h2 class="text-xl font-bold pl-4">Mes compétences</h2>
                            </div>
                            <div class="flex flex-wrap gap-2">

                                <template v-for="skill in userById(userId)?.skills">
                                    <v-tooltip v-if="skill.name.split(' ').length > 2" :text="skill.name">
                                        <template v-slot:activator="{ props }">
                                            <v-chip v-bind="props"
                                                :color="skillLevelColor(skill.rating)">{{ ellipsisIfMoreThanThreeWords(skill.name) }}</v-chip>
                                        </template>
                                    </v-tooltip>
                                    <span v-else>
                                        <v-chip :color="skillLevelColor(skill.rating)">{{ skill.name }}</v-chip></span>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div v-else>
            Loading
        </div>
    </div>
</template>

<script lang="ts" setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useCollection, useCurrentUser } from "vuefire";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import { onMounted, computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router"
import { Icon } from "@iconify/vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createToast } from "mosha-vue-toastify";
import { addDoc, collection } from "firebase/firestore";
import { firestoreDB } from "@/firebase";
const route = useRoute()
const router = useRouter()
const userStore = useUserStore();
const { userById } = storeToRefs(userStore);
const { getUsers } = userStore;
const currentUserLoggedIn = useCurrentUser();
const userr = ref()

const userId = computed(() => {
    return route.params.id.toString()
});

const usersCollection = useCollection(
    collection(firestoreDB, "users")
);

// find the user by id in the users collection
const userFinded = computed(() => {
    return usersCollection.value.find((user) => user.uuid === userId.value);
});


const handleShareProfile = () => {
    if (userFinded.value) {
        addDoc(collection(firestoreDB, "shareProfils"), {
            users: [userFinded.value],
        }).then((docRef) => {
            navigator.clipboard.writeText(window.location.origin + "/share/" + docRef.id);
            createToast("Lien copié dans le presse-papier", {
                position: "bottom-right",
                timeout: 2000,
                showIcon: true,
                type: "success",
            });
        });
    }
}

onMounted(async () => {
    try {
        await getUsers();
    } catch (error) {

    }
})

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

console.log(
    "%cShow.vue line:46 currentUserLoggedIn",
    "color: #007acc;",
    currentUserLoggedIn
);

const isCurrentUserAdminOrRecruteur = ref(false);

onAuthStateChanged(getAuth(), (userAuth) => {
    if (userAuth) {
        userAuth.getIdTokenResult().then(function ({ claims }) {
            if (claims.admin || claims.recruteur || claims.role === "admin" || claims.role === "recruteur") {
                isCurrentUserAdminOrRecruteur.value = true;
            }
        });
    }
});
</script>

<style scoped>
#shareButton {
    border: 1px solid black;
    padding: 10px;
    background-color: #5B98D2;
    border-radius: 100%;
    transition: 0.3s;
}

#shareButton:hover {
    opacity: 0.8;
    transition: 0.3s;
}
</style>
