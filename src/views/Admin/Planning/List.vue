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
import {ref, watch} from "vue";
import {planningsRef} from "@/firebase";

const plannings = ref(null)
const calendarOptions = ref(null)
calendarOptions.value = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    weekends: true,
    events: planningsRef.value,
    locale: frLocale
}

watch(planningsRef,() => {})
</script>

<style scoped>

</style>