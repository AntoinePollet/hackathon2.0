<template>
    <div class="p-10 gap-y-10">
        <div class="text-3xl font-bold mb-10">
          Succès
        </div>
        <div class="mb-6 flex items-center">
          <v-text-field variant="outlined" label="search" hide-details/>
          <v-btn class="m-2" variant="text">Filtre</v-btn>
        </div>
        <div class="flex flex-wrap gap-6">
            <achievement
                v-for="achievement in achievements"
                :achievement="achievement"
            />
        </div>
    </div>
</template>

<script setup>
import Achievement from "@/components/Achievement/Achievement.vue";
import {collection, orderBy, query, where} from "firebase/firestore";
import {firestoreDB} from "@/firebase";
import {useUserStore} from "@/stores/user";
import {getCurrentUser} from "@/router/index";
import {onMounted, ref} from "vue";
import {storeToRefs} from "pinia";

const achievementsCollection = collection(firestoreDB, 'achievements')
const filteredAchievements = query(achievementsCollection, orderBy("title", "asc"))

const achievements = ref()

const userStore = useUserStore()
const { getUser } = userStore
const { user } = storeToRefs(userStore)

const currentUser = ref()

onMounted(async () => {
    currentUser.value = await getCurrentUser()
    await getUser(currentUser.value.uid)
    achievements.value = user.value.data.achievements
})


</script>

<style scoped>

</style>