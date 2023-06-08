<template>
    <div>

    </div>
    <div class="px-10 py-5 gap-y-10 overflow-auto h-full">
        <!-- <div class="text-3xl font-bold mb-5">Profile</div> -->
        <Icon @click="router.push({ name: 'admin-employees-list' })" height="2.5rem" width="2.5rem"
            class="rounded-full drop-shadow-md hover:drop-shadow-lg hover:cursor-pointer bg-white p-1"
            icon="ph:arrow-left-bold" />

        <div v-if="userById(userId)" class="grid grid-cols-4 pt-3">
            <div class="col-span-1">
                <v-avatar size="120"
                    image="https://images.unsplash.com/photo-1615807713086-bfc4975801d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"></v-avatar>

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
            <div class="flex flex-col gap-y-4 col-span-2 px-3">
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
import { useCurrentUser } from "vuefire";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import { onMounted, computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router"
import { Icon } from "@iconify/vue";
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
</script>

<style scoped></style>
