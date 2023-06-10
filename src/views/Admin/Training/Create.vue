<template>
    <div class="p-10 gap-y-10">
        <div class="text-3xl font-bold mb-10">
            Création d'un nouveau cours
        </div>
        <div class="flex flex-wrap gap-6">
            <create-training/>
        </div>
    </div>
</template>

<script setup lang="ts">
import CreateTraining from "@/components/Admin/Training/CreateTraining.vue";

</script>