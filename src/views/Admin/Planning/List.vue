<template>
    <div class="p-10">
        <div class="text-3xl font-bold">
            Planning
            <planning-modal />
        </div>
        <FullCalendar :options='calendarOptions' />
    </div>
</template>

<script setup>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import frLocale from '@fullcalendar/core/locales/fr'
import PlanningModal from "@/components/Admin/Planning/PlanningModal.vue";
import {usePlanningStore} from "@/stores/plannings";
import {onMounted, ref, watch} from "vue";
import {useCollection} from "vuefire";
import {collection} from "firebase/firestore";
import {firestoreDB} from "@/firebase";

const planningStore = usePlanningStore()
const plannings = ref(null)
const calendarOptions = ref(null)
calendarOptions.value = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    weekends: true,
    events: [],
    locale: frLocale
}

onMounted(async () => {
    plannings.value = await useCollection(collection(firestoreDB, 'plannings'))
    calendarOptions.value.events.push(...plannings.value.data);
})

</script>

<style scoped>

</style>