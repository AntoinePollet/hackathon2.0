<script setup lang="ts">
import { useEventStore } from '@/stores/event';
import { onMounted } from 'vue';
import { EventTypeEnum } from "@/interfaces/event"

const eventStore = useEventStore();
const { publishEvent, getEvents } = eventStore;

onMounted(() => {
    getEvents();
    publishEvent({ title: "New user", description: "Hello", type: EventTypeEnum.START_OF_MISSION })
});

</script>

<template></template>