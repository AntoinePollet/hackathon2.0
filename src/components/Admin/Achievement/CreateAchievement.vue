<template>
    <div class="w-full">
        <v-text-field v-model="title" label="title" variant="outlined" />
        <v-textarea v-model="description" label="description" variant="outlined" />
        <v-select
            v-if="icons"
            v-model="icon"
            variant="outlined"
            label="icon"
            :items="icons?.data?.uncategorized"
        >
            <template #selection="item, index">
                <div class="flex items-center">
                    <Icon
                            :icon="`flat-color-icons:${item.item.title}`"
                            class="h-8 w-8 mr-3"
                    />
                    {{item.item.title}}
                </div>
            </template>
        </v-select>
        <button class="my-4 border p-3 border-h-black rounded hover:bg-h-black hover:text-h-white" @click="submit">Create</button>
    </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useAchievementsStore} from "@/stores/achievements";
import {useRouter} from "vue-router";
import axios from "axios";
import {Icon} from "@iconify/vue";

const title = ref<string>('');
const description = ref<string>('');
const icon = ref<string>('');

const achievementsStore = useAchievementsStore();
const { publishAchievement } = achievementsStore;

const router = useRouter();
const submit = () => {
    publishAchievement({
        id: '',
        title: title.value,
        description: description.value,
        icon: icon.value,
    })

    router.push({name: 'admin-achievements-list'})
}


const icons = ref();

onMounted(async () => {
    icons.value = await axios.get("https://api.iconify.design/collection?prefix=flat-color-icons");
})
</script>

<style scoped>

</style>