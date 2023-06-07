<script setup lang="ts">
import { PropType, computed } from 'vue';
import { EventDoc } from "@/interfaces/event"
import { Icon } from "@iconify/vue"

const props = defineProps({
    event: {
        type: Object as PropType<EventDoc>,
        required: true
    }
});

const formattedDate = computed(() => {
    return new Date(props.event.created_at.toDate()).toLocaleDateString('fr-FR', { day: "2-digit", month: "long", hour: "2-digit", minute: "2-digit" })
});

</script>

<template>
    <div class="bg-white rounded-lg shadow-lg">
        <div class="p-6">
            <div class="flex items-center mb-4">
                <Icon :icon="event.type" height="2rem" width="2rem" />
                <h2 class="text-xl font-bold pl-4">{{ event.title }}</h2>
            </div>
            <p class="text-gray-700">{{ event.description }}</p>
            <p class="text-right italic text-gray-500">{{ formattedDate }}</p>
        </div>
    </div>
</template>