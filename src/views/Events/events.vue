<script setup lang="ts">
import { useEventStore } from '@/stores/event';
import { storeToRefs } from 'pinia';
import event from '@/components/Event/event.vue';

const eventStore = useEventStore();
const { sortedEvents } = storeToRefs(eventStore);

</script>

<template>
    <div>
        <div class="text-center">
            <h1 class="font-bold text-2xl py-3">Fil d'actualité</h1>
        </div>
        <div class="overflow-auto">
            <div class="flex flex-col gap-y-3 p-5 w-3/4 m-auto">
                <event v-for="event in sortedEvents" :key="event.id" :event="event" />
            </div>
        </div>
    </div>
</template>