<script setup lang="ts">
import carbonBlue from "@/assets/Badge bleu .svg"
import carbonGreen from "@/assets/Badge turquoise.svg"
import carbonRed from "@/assets/Badge rouge .svg"
import carbonBlack from "@/assets/Badge noir .svg"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
    <div style="height: calc(100vh - 48px)">
        <div class="h-full flex flex-col">

            <div class="text-center">
                <h1 class="font-bold text-2xl py-3">Dashboard</h1>
            </div>
            <div class="grid grid-cols-2 h-fit flex-wrap gap-4 p-4">
                <div class="h-fit border rounded-lg">
                    <div class="flex bg-white rounded-lg">
                        <div class="p-6 w-full">
                            <div class="flex items-center whitespace-nowrap">
                                <div>
                                    <v-img :src="carbonBlue" height="1.5rem" width="1.5rem" />
                                </div>
                                <div class="text-xl font-bold text-h-blue pl-3">50 Carbonées</div>
                            </div>
                            <p class="text-sm pt-2 italic">Félicitation à John Doe d'avoir rejoint Carbon</p>
                        </div>
                    </div>
                </div>
                <div class="h-fit border rounded-lg">
                    <div class="flex bg-white rounded-lg">
                        <div class="p-6 w-full">
                            <div class="flex items-center">
                                <div>

                                    <v-img :src="carbonRed" height="1.5rem" width="1.5rem" />
                                </div>
                                <div class="text-xl font-bold text-h-red pl-3">13 Entreprises</div>
                            </div>
                            <p class="text-sm pt-2 italic">13 entreprises nous font confiance</p>
                        </div>
                    </div>
                </div>
                <div class="h-fit border rounded-lg" elevation="3">
                    <div class="flex bg-white rounded-lg">
                        <div class="p-6 w-full">
                            <div class="flex items-center whitespace-nowrap">
                                <div>
                                    <v-img :src="carbonGreen" height="1.5rem" width="1.5rem" />
                                </div>

                                <v-tooltip text="156 Missions effectuées
                                            par nos Carbonées">
                                    <template v-slot:activator="{ props }">
                                        <div v-bind="props" class="text-xl font-bold text-h-green pl-3 truncate">156
                                            Missions effectuées
                                            par nos Carbonées</div>
                                    </template>
                                </v-tooltip>

                            </div>
                            <p class="text-sm pt-2 italic">Déjà plus de 150 missions effectuées par notre équipe</p>
                        </div>
                    </div>
                </div>

                <div class="h-fit border rounded-lg">
                    <div class="flex bg-white rounded-lg">
                        <div class="p-6 w-full">
                            <div class="flex items-center whitespace-nowrap">
                                <div>
                                    <v-img :src="carbonBlack" height="1.5rem" width="1.5rem" />
                                </div>
                                <v-tooltip text="40 Formations disponible">
                                    <template v-slot:activator="{ props }">
                                        <div v-bind="props" class="text-xl font-bold text-h-black pl-3 truncate">40
                                            Formations
                                            disponible</div>
                                    </template>
                                </v-tooltip>

                            </div>
                            <p class="text-sm pt-2 italic">Nouvelle formation disponible: Reactjs</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overflow-auto grid grid-cols-1 p-4" style="overflow: auto;">

                <v-card class="overflow-auto" style="overflow: auto;">
                    <div class="flex flex-col bg-white rounded-lg">

                        <v-card-title class="flex gap-4 items-center">
                            <FontAwesomeIcon icon="fa-solid fa-calendar" />
                            Mes dates clés
                        </v-card-title>
                        <div class="pl-4">
                            <div class="flex justify-between bg-white rounded-lg p-3">
                                <div class="text-gray-900 italic">Evaluation de compétences<span
                                        class="text-gray-500 italic"> - 13 juin à 10:05</span></div>
                                <v-btn color="secondary" size="small">S'inscrire</v-btn>
                            </div>
                            <div class="flex justify-between bg-white rounded-lg p-3">
                                <div class="text-gray-900 italic">Formation Vuejs<span class="text-gray-500 italic"> -
                                        14
                                        juin à 13:05</span></div>
                                <v-btn color="secondary" size="small">S'inscrire</v-btn>
                            </div>
                            <div class="flex justify-between bg-white rounded-lg p-3">
                                <div class="text-gray-900 italic">Participation à conférence OSINT<span
                                        class="text-gray-500 italic"> - 15 juin à 08:05</span></div>
                                <v-btn color="secondary" size="small">S'inscrire</v-btn>
                            </div>
                            <div class="flex justify-between bg-white rounded-lg p-3">
                                <div class="text-gray-900 italic">Evaluation de compétences<span
                                        class="text-gray-500 italic"> - 18 juin à 17:05</span></div>
                                <v-btn color="secondary" size="small">S'inscrire</v-btn>
                            </div>
                            <div class="flex justify-between bg-white rounded-lg p-3">
                                <div class="text-gray-900 italic">Formation Nestjs<span class="text-gray-500 italic"> -
                                        22
                                        juin à 09:20</span></div>
                                <v-btn color="secondary" size="small">S'inscrire</v-btn>
                            </div>
                            <div class="flex justify-between bg-white rounded-lg p-3">
                                <div class="text-gray-900 italic">Bilan trimestriel 'Antoine Pollet'<span
                                        class="text-gray-500 italic"> - 26 juin à 11:30</span></div>
                                <v-btn color="secondary" size="small">S'inscrire</v-btn>
                            </div>
                        </div>
                    </div>
                </v-card>
            </div>
        </div>

    </div>
</template>