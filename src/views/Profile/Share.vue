<template>
    <div class="p-10 gap-y-10">
        <div class="text-3xl font-bold mb-10">
            {{
                users.length > 1 ? "Les profils partagés" : "Le profil partagé"
            }}
        </div>
        <div class="w-500" v-for="(user, index) of users">
            <v-card class="w-2/3 shadow-none mb-10">
                <div class="!p-0 !m-0 relative">
                    <div class="w-full h-36 border-b"></div>
                    <img
                        src="@/assets/logoCarbonGrey.svg"
                        alt=""
                        class="absolute h-32 w-32 bg-white -bottom-14 left-5 border-2 rounded-full"
                    />
                </div>
                <div class="flex flex-col py-16 px-6 gap-y-2 text-xl">
                    <div>
                        <p><span class="underline">Firstname</span> :</p>
                        {{ user.firstname }}
                    </div>
                    <div>
                        <p><span class="underline">Lastname</span> :</p>

                        {{ user.lastname }}
                    </div>
                    <div>
                        <p><span class="underline">Job</span> :</p>
                        Web developer
                    </div>
                    <div>
                        <p><span class="underline">Skills</span> :</p>
                        VueJS
                    </div>
                    <div>
                        <p><span class="underline">Success</span> :</p>
                    </div>
                </div>
            </v-card>
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
</script>

<style scoped></style>
