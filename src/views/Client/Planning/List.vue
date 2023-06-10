<template>
    <div class="p-10">
        <div class="text-3xl font-bold">
            Planning
            <planning-modal/>
        </div>
        <FullCalendar :options='calendarOptions'/>
    </div>
</template>

<script setup>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import frLocale from '@fullcalendar/core/locales/fr'
import PlanningModal from "@/components/Admin/Planning/PlanningModal.vue";
import {ref} from "vue";

const plannings = ref(null)
const calendarOptions = ref(null)
calendarOptions.value = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    weekends: true,
    events: [
        {title: "Point avec le Paul", date: new Date().setDate(11)},
        {title: "Ticket #1243", date: new Date().setDate(1)},
        {title: "Point avec John", date: new Date().setDate(4)},
    ],
    locale: frLocale
}
</script>

<style scoped>

</style>