<script setup lang="ts">
import {PropType, computed, ref, onMounted, watch} from 'vue';
import { EventDoc } from "@/interfaces/event"
import { Icon } from "@iconify/vue"
import {useEventStore} from "@/stores/event";
import {getCurrentUser} from "vuefire";

const eventStore = useEventStore()
const { likeEvent, unlikeEvent } = eventStore
const props = defineProps({
    event: {
        type: Object as PropType<EventDoc>,
        required: true
    }
});

const currentUserUid = ref();
const currentUserLiked = ref();

const formattedDate = computed(() => {
    return new Date(props.event.created_at.toDate()).toLocaleDateString('fr-FR', { day: "2-digit", month: "long", hour: "2-digit", minute: "2-digit" })
});

onMounted(async () => {
    currentUserUid.value = (await getCurrentUser())?.uid;
})

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
            <div class="flex">
                <button
                    class="p-3 hover:bg-neutral-100 gap-2 flex items-center"
                    :class="event?.like?.includes(currentUserUid?.toString()) ? 'bg-neutral-100' : null"
                    @click="event?.like?.includes(currentUserUid?.toString()) ? unlikeEvent(event) : likeEvent(event)"
                >
                    {{event?.like?.length}}
                    <Icon
                        icon="mdi:thumb-up"
                    />
                </button>
            </div>
        </div>
    </div>
</template>