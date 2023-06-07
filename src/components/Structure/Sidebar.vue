<template>
    <div class="w-64 h-full rounded bg-white border-r">
        <div class="flex justify-center">
            <img src="@/assets/logoCarbonGrey.svg" height="500" width="500" alt="">
        </div>
        <div class="flex flex-col gap-y-1">
            <router-link :to="{ name: 'profile-show' }" class="mx-2 hover:rounded-xl hover:bg-slate-100 cursor-pointer">
                <div class="flex items-center px-4 py-2 gap-x-3">
                    <v-avatar
                        image="https://images.unsplash.com/photo-1615807713086-bfc4975801d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"></v-avatar>
                    Nom prénom
                </div>
            </router-link>
            <v-divider class="border-black"></v-divider>
            
            <router-link v-for="item in items" :to="{ name: item.to }"
                class="mx-2 hover:rounded-xl hover:bg-slate-100 cursor-pointer">
                <div class="flex items-center px-4 py-2 gap-x-3">
                    <font-awesome-icon :icon="item.icon" />
                    {{ item.title }}
                </div>
            </router-link>

            <v-divider class="border-black"></v-divider>

            <router-link v-for="item in adminItems" :to="{ name: item.to }"
                class="mx-2 hover:rounded-xl hover:bg-slate-100 cursor-pointer">
                <div class="flex items-center px-4 py-2 gap-x-3">
                    <font-awesome-icon :icon="item.icon" />
                    {{ item.title }}
                </div>
            </router-link>

            <v-divider class="border-black"></v-divider>

            <router-link v-for="item in clientItems" :to="{ name: item.to }"
                class="mx-2 hover:rounded-xl hover:bg-slate-100 cursor-pointer">
                <div class="flex items-center px-4 py-2 gap-x-3">
                    <font-awesome-icon :icon="item.icon" />
                    {{ item.title }}
                </div>
            </router-link>

            <v-divider class="border-black"></v-divider>
            <div @click="null" class="mx-2 hover:rounded-xl hover:bg-slate-100 cursor-pointer">
                <div class="flex items-center px-4 py-2 gap-x-3">
                    <font-awesome-icon icon="fa-solid fa-door-closed" />
                    Logout
                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import router from "@/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useCurrentUser } from "vuefire";
const isCurrentUserAdmin= ref(false)

const currentUserLogged = useCurrentUser();

onAuthStateChanged(getAuth(), (userAuth) => {
    if (userAuth) {
        userAuth.getIdTokenResult().then(function ({ claims }) {
            if (claims.admin) {
                isCurrentUserAdmin.value = true;
            }
        });
    }
});

const handleLogout = () => {
    getAuth().signOut();
    router.push("/session/signin")
};

const items = ref([
    { title: 'News', icon: 'fa-solid fa-newspaper', to: 'news-list', value: 'news' },
    { title: 'Planning', icon: 'fa-solid fa-calendar', to: 'plannings-list', value: 'my-planning' },
    { title: 'Trainings', icon: 'fa-solid fa-school', to: 'trainings-list', value: 'my-training' },
    { title: 'Achievements', icon: 'fa-solid fa-star', to: 'achievements-list', value: 'my-achievement' },
    { title: 'Evaluations', icon: 'fa-solid fa-graduation-cap', to: 'evaluations-list', value: 'my-evaluation' },
])

const adminItems = ref([
    { title: 'News', icon: 'fa-solid fa-newspaper', to: 'admin-news-list', value: 'admin-news' },
    { title: 'Employees', icon: 'fa-solid fa-face-grimace', to: 'admin-employees-list', value: 'admin-employees' },
    { title: 'Plannings', icon: 'fa-solid fa-calendar', to: 'admin-plannings-list', value: 'admin-plannings' },
    { title: 'Achievements', icon: 'fa-solid fa-star', to: 'admin-achievements-list', value: 'admin-achievements' },
    { title: 'Trainings', icon: 'fa-solid fa-school', to: 'admin-trainings-list', value: 'admin-trainings' },
    { title: 'Skills', icon: 'fa-solid fa-hammer', to: 'admin-skills-list', value: 'admin-skills' },
]);

const clientItems = ref([
    { title: 'My Account', icon: 'fa-solid fa-user-gear', to: 'client-profile-show', value: 'client-account' },
    { title: 'Planning', icon: 'fa-solid fa-calendar', to: 'client-plannings-list', value: 'client-plannings' },
]);

onMounted(() => {

})
</script>

<style scoped>
.router-link-exact-active>div {
    @apply bg-slate-200 rounded-xl font-bold
}
</style>