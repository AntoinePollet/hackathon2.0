<script setup lang="ts">
import { useEventStore } from '@/stores/event';
import { onMounted } from 'vue';
import { EventTypeEnum } from "@/interfaces/event"
// const eventSource = new EventSource('http://localhost:3000/events/sse');
// eventSource.onmessage = ({ data }) => {
//     console.log('New message', JSON.parse(data));
// };
const eventStore = useEventStore();
const { publishEvent } = eventStore;

onMounted(() => {
    publishEvent({ title: "New user", description: "Hello", type: EventTypeEnum.START_OF_MISSION })
});

</script>

<template></template>