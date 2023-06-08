<template>
    <div class="p-10 gap-y-10">
        <div class="text-3xl font-bold mb-10">Profile</div>
        <div class="1/3">
            <v-card class="w-1/3 shadow-none">
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
                        John
                    </div>
                    <div>
                        <p><span class="underline">Lastname</span> :</p>

                        Leider
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
import { useCurrentUser } from "vuefire";

const currentUserLoggedIn = useCurrentUser();

console.log(
    "%cShow.vue line:46 currentUserLoggedIn",
    "color: #007acc;",
    currentUserLoggedIn
);
</script>

<style scoped></style>
