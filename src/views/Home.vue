<script setup lang="ts">
import events from './Events/events.vue';
import Dashboard from '@/components/Dashboard.vue';
</script>

<template>
    <div class="flex gap-x-2">
        <Dashboard class="w-1/2"></Dashboard>
        <events class="w-1/2 overflow-auto"></events>
    </div>
</template>