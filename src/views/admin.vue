<script setup lang="ts">
import router from "@/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref } from "vue";
import { useCurrentUser } from "vuefire";

const isUserAdmin = ref(false);

const user = useCurrentUser();

// TODO: voir pour déplacer ça dans le router directement
onAuthStateChanged(getAuth(), (userAuth) => {
    if (userAuth) {
        userAuth.getIdTokenResult().then(function ({ claims }) {
            if (claims.admin) {
                isUserAdmin.value = true;
            } else {
                router.push("/");
            }
        });
    }
});
</script>
<template>
    <div v-if="isUserAdmin">
        <p v-if="user">Hello {{ user.providerData[0].email }}</p>
        <h1>Page admin</h1>
        <h2>
            Vous pouvez voir cette page uniquement si vous êtes authentifié
            comme un admin depuis le serveur
        </h2>
    </div>
    <h1 v-else>Vous n'avez pas les droits</h1>
</template>
