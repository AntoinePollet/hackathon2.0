<template>
    <div class="w-64 h-full rounded bg-white border-r">
        <div class="flex justify-center cursor-pointer" @click="router.push({ name: 'news-list' })">
            <img src="@/assets/logoCarbonGrey.svg" height="500" width="500" alt="" />
        </div>
        <div class="flex flex-col gap-y-1">
            <router-link v-if="currentUserRole === 'consultant'" v-for="item in items" :to="{ name: item.to }"
                class="mx-2 hover:rounded-xl hover:bg-slate-100 cursor-pointer">
                <div class="flex items-center px-4 py-2 gap-x-3">
                    <font-awesome-icon :icon="item.icon" />
                    {{ item.title }}
                </div>
            </router-link>

            <v-divider class="border-black"></v-divider>

            <router-link v-if="currentUserRole === 'admin' || currentUserRole === 'manager'" v-for="item in adminItems"
                :to="{ name: item.to }" class="mx-2 hover:rounded-xl hover:bg-slate-100 cursor-pointer">
                <div class="flex items-center px-4 py-2 gap-x-3">
                    <font-awesome-icon :icon="item.icon" />
                    {{ item.title }}
                </div>
            </router-link>

            <v-divider class="border-black"></v-divider>
            <div @click="handleLogout()" class="mx-2 hover:rounded-xl hover:bg-slate-100 cursor-pointer">
                <div class="flex items-center px-4 py-2 gap-x-3">
                    <font-awesome-icon icon="fa-solid fa-door-closed" />
                    Se déconnecter
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

const currentUserRole = ref("");

const currentUserLogged = useCurrentUser();

onAuthStateChanged(getAuth(), (userAuth) => {
    if (userAuth) {
        userAuth.getIdTokenResult().then(function ({ claims }) {
            if (claims) {
                if (claims.admin || claims.role === "admin") {
                    currentUserRole.value = "admin";
                } else if (claims.recruteur || claims.role === "recruteur") {
                    currentUserRole.value = "recruteur"
                } else if (claims.manager || claims.role === "manager") {
                    currentUserRole.value = "manager"
                } else {
                    currentUserRole.value = "consultant"
                }
            }
        });
    }
});

const handleLogout = () => {
    getAuth().signOut();
    router.push("/session/signin");
};

const items = ref([
    {
        title: "Actualités",
        icon: "fa-solid fa-newspaper",
        to: "news-list",
        value: "news",
    },
    {
        title: "Planning",
        icon: "fa-solid fa-calendar",
        to: "plannings-list",
        value: "my-planning",
    },
    {
        title: "Formations",
        icon: "fa-solid fa-school",
        to: "trainings-list",
        value: "my-training",
    },
    {
        title: "Succès",
        icon: "fa-solid fa-trophy",
        to: "achievements-list",
        value: "my-achievement",
    },
    {
        title: "Evaluation",
        icon: "fa-solid fa-graduation-cap",
        to: "evaluation-show",
        value: "my-evaluation",
    }
]);

const adminItems = ref([
    {
        title: "Employées",
        icon: "fa-solid fa-face-grimace",
        to: "admin-employees-list",
        value: "admin-employees",
    },
    {
        title: "Plannings",
        icon: "fa-solid fa-calendar",
        to: "admin-plannings-list",
        value: "admin-plannings",
    },
    {
        title: "Succès",
        icon: "fa-solid fa-trophy",
        to: "admin-achievements-list",
        value: "admin-achievements",
    },
    {
        title: "Formations",
        icon: "fa-solid fa-school",
        to: "admin-trainings-list",
        value: "admin-trainings",
    },
    {
        title: "Skills",
        icon: "fa-solid fa-hammer",
        to: "admin-skills-list",
        value: "admin-skills",
    },
    {
        title: "Evaluations",
        icon: "fa-solid fa-graduation-cap",
        to: "admin-evaluations",
        value: "admin-evaluations",
    }
]);

const clientItems = ref([
    { title: 'Mon compte', icon: 'fa-solid fa-user-gear', to: 'client-profile-list', value: 'client-account' },
    { title: 'Planning', icon: 'fa-solid fa-calendar', to: 'client-plannings-list', value: 'client-plannings' }
]);

onMounted(() => { });
</script>

<style scoped>
.router-link-exact-active>div {
    @apply bg-slate-200 rounded-xl font-bold;
}
</style>
