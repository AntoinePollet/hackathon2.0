<template>
    <v-btn colors="primary" class="ml-5">
        Nouvel évènement
        <v-dialog
            v-model="isDialogOpen"
            activator="parent"
            class="w-1/3 overflow-none z-100"
        >
            <v-card>
                <div class="p-5" id="dialogCreate">
                    <h2 class="mb-4">Ajoutez un évènement</h2>
                    <div class="flex flex-col gap-y-2">
                        <v-text-field v-model="title" variant="outlined" label="titre" />
                        Date
                        <input type="datetime-local" v-model="date" class="p-3 rounded border border-neutral-400"/>
                        <v-select
                            v-model="user_id"
                            :items="users"
                            item-title="email"
                            item-value="id"
                            class=""
                            hide-details
                            variant="outlined"
                        />
                    </div>
                </div>
                <v-btn
                    @click="submit"
                    color="secondary"
                    class="m-5"
                >
                    Soumettre
                </v-btn>
            </v-card>
        </v-dialog>
    </v-btn>
</template>

<script setup lang="ts">
import { onMounted, PropType, ref } from "vue";
import { PlanningDoc } from "@/interfaces/plannings";
import { useCollection } from "vuefire";
import { collection } from "firebase/firestore";
import { firestoreDB } from "@/firebase";
import { usePlanningStore } from "@/stores/plannings";
import { UserI } from "@/interfaces/user";

const isDialogOpen = ref<boolean>(false);

const users = useCollection(collection(firestoreDB, "users"));

const planningStore = usePlanningStore();
const { publishPlanning } = planningStore;

const title = ref('')
const start_at = ref('')
const end_at = ref('')
const user_id = ref('')

const submit = async (planning: PlanningDoc) => {
    await publishPlanning({
        id: '',
        title: title.value,
        start_at: start_at.value,
        end_at: end_at.value,
        user_id: user_id.value
    })
}
</script>

<style scoped>
</style>