<template>
  <div class="p-10 gap-y-10">
    <div class="text-3xl font-bold mb-10">
      News
    </div>
    <div class="flex flex-col gap-y-5">
      <v-card v-for="i in 10">
        <div
          class="p-5"
        >
          <div class="flex items-center mb-4 ">
            <div class="px-3 py-1 rounded-full bg-h-blue text-white font-bold">
              Cat {{ i }}
            </div>
          </div>
          <div class="flex items-center mb-4">
            <Icon icon="ri:add-circle-fill" class="h-8 w-8 mr-4"/>
            News {{i}}
          </div>
          <div>
            DescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptiondddddDescriptionddddd
          </div>
          <div class="flex justify-end w-full">
            <div>
              01/01/2001
            </div>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script setup>
import {Icon} from "@iconify/vue";
</script>

<style scoped>

</style>