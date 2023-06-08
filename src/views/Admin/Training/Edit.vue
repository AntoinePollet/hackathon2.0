<template>
    <div class="p-10 gap-y-10">
        <div class="text-3xl font-bold mb-10">
            Edit training
        </div>
        <div class="flex flex-wrap gap-6">
            <edit-training
                :training="training"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTrainingStore } from '@/stores/training';
import { storeToRefs } from 'pinia';
import {onMounted, ref} from "vue";
import { useRoute } from "vue-router";
import EditTraining from "@/components/Admin/Training/EditTraining.vue";
import { TrainingDoc } from "@/interfaces/training";

const trainingStore = useTrainingStore();
const route = useRoute();

const { getTraining } = trainingStore

const training = ref<TrainingDoc>({});

onMounted(async () => {
    training.value = await getTraining(route.params.id)
    training.value.id = route.params.id

})

</script>