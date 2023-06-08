<template>
    <div v-if="isCurrentUserAdmin" class="flex h-screen">
        <div class="h-full">
            <sidebar />
        </div>
        <div class="w-full h-full overflow-hidden">
            <navbar></navbar>
            <router-view class="w-full overflow-auto h-full" />
        </div>
    </div>
    <h1 v-else>Vous n'avez pas les droits</h1>
</template>

<script lang="ts" setup>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref } from "vue";
// import { useCurrentUser } from "vuefire";

import Sidebar from "@/components/Structure/Sidebar.vue";
import Navbar from "@/components/Structure/Header.vue";

const isCurrentUserAdmin = ref(false);

// const user = useCurrentUser();
// TODO: voir pour déplacer ça dans le router directement
onAuthStateChanged(getAuth(), (userAuth) => {
    if (userAuth) {
        userAuth.getIdTokenResult().then(function ({ claims }) {
            if (claims.admin) {
                isCurrentUserAdmin.value = true;
            } else {
                // TODO: Décommenter pour faire une redirection
                // router.push("/");
            }
        });
    }
});
</script>

<style scoped></style>
