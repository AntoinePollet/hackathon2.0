<script setup lang="ts">
import carbonBlue from "@/assets/Badge bleu .svg"
import carbonGreen from "@/assets/Badge turquoise.svg"
import carbonRed from "@/assets/Badge rouge .svg"
</script>

<template>
    <div>
        <div class="text-center">
            <h1 class="font-bold text-2xl py-3">Dashboard</h1>
        </div>
        <div class="flex h-fit flex-wrap gap-4 p-4">
            <div class="h-fit">
                <div class="flex bg-h-green/25 rounded-lg shadow-lg">
                    <div class="p-6">
                        <div class="flex items-center flex-nowrap">
                            <v-img :src="carbonBlue" height="1.5rem" width="1.5rem" />
                            <h2 class="text-xl font-bold pl-4">50 Carbonées</h2>
                        </div>
                        <p class="text-sm pt-2 italic">Small description for this card ...</p>
                    </div>
                </div>
            </div>
            <div class="h-fit">
                <div class="flex bg-h-blue/25 rounded-lg shadow-lg">
                    <div class="p-6">
                        <div class="flex items-center">
                            <v-img :src="carbonRed" height="1.5rem" width="1.5rem" />
                            <h2 class="text-xl font-bold pl-4">0 Entreprises</h2>
                        </div>
                        <p class="text-sm pt-2 italic">Small description for this card ...</p>
                    </div>
                </div>
            </div>
            <div class="h-fit">
                <div class="flex bg-h-red/25 rounded-lg shadow-lg">
                    <div class="p-6">
                        <div class="flex items-center">
                            <v-img :src="carbonGreen" height="1.5rem" width="1.5rem" />
                            <h2 class="text-xl font-bold pl-4">70 Missions effectuées par nos Carbonées</h2>
                        </div>
                        <p class="text-sm pt-2 italic">Small description for this card ...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>