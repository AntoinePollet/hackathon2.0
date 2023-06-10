<template>
    <div class="p-10 gap-y-10">
        <div class="text-3xl font-bold mb-10">
            {{
                users.length > 1 ? "Les profils partagés" : "Le profil partagé"
            }}
        </div>
        <div v-for="(user, index) of users" class="px-10 py-5 gap-y-10 overflow-auto h-full">
            <div v-if="user" class="grid grid-cols-4 pt-3">
                <div class="col-span-1">
                    <div class="relative max-w-fit">
                        <div
                            class="bg-cover h-32 w-32"
                            :style="`background-image: url('https://api.multiavatar.com/${
                                user.firstname
                            }${
                                user.lastname
                            }.png?apikey=XdoCH30EA6grGx')`"
                        ></div>
                    </div>

                    <div class="py-4">
                        <p class="font-semibold text-lg">
                            {{ user.firstname }}
                            {{ user.lastname }}
                        </p>
                        <p v-if="user.position" class="italic">
                            {{ user.position }}
                        </p>
                        <p v-else class="italic">Pas de position !</p>
                    </div>

                    <div class="sticky top-0 flex flex-col gap-y-4">
                        <div class="bg-h-green/25 rounded-lg shadow-lg">
                            <div class="p-6">
                                <div class="flex items-center">
                                    <FontAwesomeIcon
                                        icon="fa-solid fa-trophy"
                                    ></FontAwesomeIcon>
                                    <h2 class="text-xl font-bold pl-4">
                                        {{
                                            user.skills?.length
                                        }}
                                        Compétences
                                    </h2>
                                </div>
                                <p class="text-sm pt-2 italic">
                                    Small description for this card ...
                                </p>
                            </div>
                        </div>

                        <div class="bg-h-blue/25 rounded-lg shadow-lg">
                            <div class="p-6">
                                <div class="flex items-center">
                                    <FontAwesomeIcon
                                        icon="fa-solid fa-wallet"
                                    ></FontAwesomeIcon>
                                    <h2 class="text-xl font-bold pl-4">
                                        {{
                                            user.jobs?.length
                                        }}
                                        Missions
                                    </h2>
                                </div>
                                <p class="text-sm pt-2 italic">
                                    Small description for this card ...
                                </p>
                            </div>
                        </div>

                        <div class="bg-h-red/25 rounded-lg shadow-lg">
                            <div class="p-6">
                                <div class="flex items-center">
                                    <FontAwesomeIcon
                                        icon="fa-solid fa-face-meh"
                                    ></FontAwesomeIcon>
                                    <h2 class="text-xl font-bold pl-4">
                                        {{
                                            user.training?.length
                                        }}
                                        Formations
                                    </h2>
                                </div>
                                <p class="text-sm pt-2 italic">
                                    Small description for this card ...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="flex flex-col gap-y-4 col-span-2 px-3 mb-12"
                    id="testidid"
                >
                    <div class="bg-gray-100 rounded-lg shadow-md">
                        <div class="p-6">
                            <div class="flex items-center">
                                <FontAwesomeIcon
                                    icon="fa-solid fa-trophy"
                                ></FontAwesomeIcon>
                                <h2 class="text-xl font-bold pl-4">
                                    Mes missions
                                </h2>
                            </div>
                            <div v-if="user.jobs">
                                <div
                                    v-for="job in user.jobs"
                                    class="py-2 border-b"
                                >
                                    <div class="flex justify-between gap-x-3">
                                        <p class="text-sm pt-2 italic">
                                            {{ job.title }}
                                        </p>
                                        <p class="text-sm pt-2 italic">
                                            {{ job.compagny }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-100 rounded-lg shadow-md">
                        <div class="p-6">
                            <div class="flex items-center">
                                <FontAwesomeIcon
                                    icon="fa-solid fa-trophy"
                                ></FontAwesomeIcon>
                                <h2 class="text-xl font-bold pl-4">
                                    Mes formations
                                </h2>
                            </div>
                            <div v-if="user.training">
                                <div
                                    v-for="train in user.training"
                                    class="py-2 border-b"
                                >
                                    <div class="flex items-end gap-x-3">
                                        <Icon
                                            :icon="
                                                train.completed
                                                    ? 'pixelarticons:hourglass'
                                                    : 'pixelarticons:check-double'
                                            "
                                            height="1rem"
                                            weight="1rem"
                                        />
                                        <p class="text-sm pt-2 italic">
                                            {{ train.title }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="flex items-end gap-x-3">
                                <p class="text-sm pt-2 italic">
                                    Pas de formation en cours
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-y-4 col-span-1">
                    <div class="sticky flex flex-col gap-y-4 top-0">
                        <div class="bg-white rounded-lg shadow-lg">
                            <div class="p-6">
                                <div class="flex items-center">
                                    <FontAwesomeIcon
                                        icon="fa-solid fa-trophy"
                                    ></FontAwesomeIcon>
                                    <h2 class="text-xl font-bold pl-4">
                                        A mon sujet
                                    </h2>
                                </div>
                                <p
                                    v-if="user.biography"
                                    class="text-sm pt-2 italic"
                                >
                                    du
                                    {{ user.biography }}
                                </p>
                                <p v-else class="text-sm pt-2 italic">
                                    No description yet !
                                </p>
                            </div>
                        </div>
                        <div class="bg-white rounded-lg shadow-lg">
                            <div class="p-6">
                                <div class="flex items-center pb-2">
                                    <FontAwesomeIcon
                                        icon="fa-solid fa-person-booth"
                                    ></FontAwesomeIcon>
                                    <h2 class="text-xl font-bold pl-4">
                                        Mes compétences
                                    </h2>
                                </div>
                                <div class="flex flex-wrap gap-2">
                                    <template
                                        v-for="skill in user
                                            ?.skills"
                                    >
                                        <v-tooltip
                                            v-if="
                                                skill.name?.split(' ')?.length > 2
                                            "
                                            :text="skill.name"
                                        >
                                            <template
                                                v-slot:activator="{ props }"
                                            >
                                                <v-chip
                                                    v-bind="props"
                                                    :color="
                                                        skillLevelColor(
                                                            skill.rating
                                                        )
                                                    "
                                                    >{{
                                                        ellipsisIfMoreThanThreeWords(
                                                            skill.name
                                                        )
                                                    }}</v-chip
                                                >
                                            </template>
                                        </v-tooltip>
                                        <span v-else>
                                            <v-chip
                                                :color="
                                                    skillLevelColor(
                                                        skill.rating
                                                    )
                                                "
                                                >{{ skill.name }}</v-chip
                                            ></span
                                        >
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>Loading</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { firestoreDB } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id as string;

const users = ref();
const docRef = doc(firestoreDB, "shareProfils", id);
getDoc(docRef).then((doc) => {
    if (doc.exists()) {
        users.value = doc.data()?.users;
    } else {
        console.log("No such document!");
    }
});

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
    const words = skill?.split(' ');
    if (words?.length > 2) {
        return words[0] + " " + words[1] + " ..."
    }
    return skill;
}
</script>

<style scoped></style>
