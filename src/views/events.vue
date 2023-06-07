<script setup lang="ts">
import { useEventStore } from '@/stores/event';
import { onMounted } from 'vue';
import { EventTypeEnum } from "@/interfaces/event"
import { eventsRef } from "@/firebase"
import event from '@/components/event.vue';
import { storeToRefs } from 'pinia';

const eventStore = useEventStore();
const { sortedEvents } = storeToRefs(eventStore);

onMounted(async () => {
    try {
        // await getEvents();
        // publishEvent({ title: "New user", description: "Hello", type: EventTypeEnum.START_OF_MISSION });
        // watchEventChanges();
    } catch (error) {

    }
});

</script>

<template>
    <div class="text-center">
        <h1 class="font-bold text-2xl py-3">Fil d'actualité</h1>
    </div>
    <div class="overflow-auto" style="height: calc(100vh - 56px)">
        <div class="flex flex-col gap-y-3 p-5 w-3/4 m-auto">
            <event v-for="event in sortedEvents" :key="event.id" :event="event"></event>
        </div>
    </div>
</template>