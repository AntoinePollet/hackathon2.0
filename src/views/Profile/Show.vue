<template>
    <div class="px-10 py-5 gap-y-10 overflow-auto h-full">
        <!-- <div class="text-3xl font-bold mb-5">Profile</div> -->
        <Icon @click="router.go(-1)" height="2.5rem" width="2.5rem"
            class="rounded-full drop-shadow-md hover:drop-shadow-lg hover:cursor-pointer bg-white p-1"
            icon="ph:arrow-left-bold" />

        <div v-if="user" class="grid grid-cols-4 pt-3">
            <div class="col-span-1">
                <div class="bg-cover h-32 w-32"
                    :style="`background-image: url('https://api.multiavatar.com/${user.firstname}${user.lastname}.png?apikey=XdoCH30EA6grGx')`">
                </div>

                <div class="py-4">
                    <p class="font-semibold text-lg">{{ user?.firstname }} {{ user?.lastname }}</p>
                    <p v-if="user?.position" class="italic">{{ user.position }}</p>
                    <p v-else class="italic">Pas de position !</p>
                </div>

                <div class="sticky top-0 flex flex-col gap-y-4">
                    <div class="bg-h-green/25 rounded-lg shadow-lg">
                        <div class="p-6">
                            <div class="flex items-center">
                                <FontAwesomeIcon icon="fa-solid fa-trophy"></FontAwesomeIcon>
                                <h2 class="text-xl font-bold pl-4">{{ user?.skills?.length }} Compétences</h2>
                            </div>
                            <p class="text-sm pt-2 italic">Small description for this card ...</p>
                        </div>
                    </div>

                    <div class="bg-h-blue/25 rounded-lg shadow-lg">
                        <div class="p-6">
                            <div class="flex items-center">
                                <FontAwesomeIcon icon="fa-solid fa-wallet"></FontAwesomeIcon>
                                <h2 class="text-xl font-bold pl-4">{{ user?.jobs?.length }} Missions</h2>
                            </div>
                            <p class="text-sm pt-2 italic">Small description for this card ...</p>
                        </div>
                    </div>

                    <div class="bg-h-red/25 rounded-lg shadow-lg">
                        <div class="p-6">
                            <div class="flex items-center">
                                <FontAwesomeIcon icon="fa-solid fa-face-meh"></FontAwesomeIcon>
                                <h2 class="text-xl font-bold pl-4">{{ user?.training?.length }} Formations</h2>
                            </div>
                            <p class="text-sm pt-2 italic">Small description for this card ...</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-y-4 col-span-2 px-3">
                <div class="bg-gray-100 rounded-lg shadow-md">
                    <div class="p-6">
                        <div class="flex items-center">
                            <FontAwesomeIcon icon="fa-solid fa-trophy"></FontAwesomeIcon>
                            <h2 class="text-xl font-bold pl-4">Mes missions</h2>
                        </div>
                        <div v-if="user?.jobs">
                            <div v-for="job in user?.jobs" class="py-2 border-b">
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
                        <div v-if="user?.training">
                            <div v-for="train in user?.training" class="py-2 border-b">
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
                                <v-icon v-if="user?.biography" @click="isBiographyInputOpen = true" color="grey lighten-1" class="ml-2">mdi-pencil</v-icon>
                            </div>
                            <p v-if="user?.biography" class="text-sm pt-2 italic">
                                {{ user?.biography }}
                            </p>
                            <v-textarea v-if="isBiographyInputOpen" class="mt-2" v-model.lazy="biographyModified" @blur="handleSubmitBio" label="Quelques mots sur vous" variant="outlined" />
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-lg">
                        <div class="p-6">
                            <div class="flex items-center pb-2">
                                <FontAwesomeIcon icon="fa-solid fa-person-booth"></FontAwesomeIcon>
                                <h2 class="text-xl font-bold pl-4">Mes compétences</h2>
                            </div>
                            <div class="flex flex-wrap gap-2">

                                <template v-for="skill in user?.skills">
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
import { useCurrentUser } from "vuefire";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router"
import { Icon } from "@iconify/vue";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { firestoreDB } from "@/firebase";

const router = useRouter()
const currentUserLoggedIn = useCurrentUser();
const user = ref()

const biographyModified = ref("")
const isBiographyInputOpen = ref(false)


const handleSubmitBio = async () => {
    updateDoc(doc(firestoreDB, "users", currentUserLoggedIn.value?.uid as string), {
        biography: biographyModified.value
    })
    if (biographyModified.value !== "") {
        isBiographyInputOpen.value = false
        await callUserDocAgain();
    }
};

const callUserDocAgain = async () => {
    try {
        if (currentUserLoggedIn) {
        const documentGetted = await getDoc(
            doc(firestoreDB, "users", currentUserLoggedIn.value?.uid as string)
        );
        user.value = documentGetted.data();

        if (!documentGetted.data()?.biography) {
            isBiographyInputOpen. value = true
        }
    }
    } catch (error) {
        console.log(error);
    }
}

onMounted(async () => {
    await callUserDocAgain();
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

</script>

<style scoped></style>
