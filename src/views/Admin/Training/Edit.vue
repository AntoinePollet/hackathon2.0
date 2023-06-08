<template>
    <div class="p-10 gap-y-10">
        <div class="text-3xl font-bold mb-10">
            Edit training
        </div>
        <div class="flex flex-wrap gap-6">
            <edit-training
                :training="'1'"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTrainingStore } from '@/stores/training';
import { storeToRefs } from 'pinia';
import CreateTraining from "@/components/Admin/Training/CreateTraining.vue";
import EditTraining from "@/components/Admin/Training/EditTraining.vue";

const trainingStore = useTrainingStore();
</script>