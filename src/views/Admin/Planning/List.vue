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

const calendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    weekends: false,
    events: [
        { title: 'event 1', date: new Date() },
        { title: 'event 2', date: new Date() }
    ],
    locale: frLocale
}
</script>

<style scoped>

</style>