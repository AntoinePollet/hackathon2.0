<script setup lang="ts">
import { useEventStore } from '@/stores/event';
import { onMounted } from 'vue';
import { EventTypeEnum } from "@/interfaces/event"

const eventStore = useEventStore();
const { publishEvent, getEvents, watchEventChanges } = eventStore;

onMounted(async () => {
    try {
        // await getEvents();
        publishEvent({ title: "New user", description: "Hello", type: EventTypeEnum.START_OF_MISSION });
        // watchEventChanges();
    } catch (error) {

    }
});

</script>

<template></template>