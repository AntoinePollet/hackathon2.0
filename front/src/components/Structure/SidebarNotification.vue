<template>
  <v-layout>
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      :permanent="true"
      location="right"
      @click="rail = !rail"
    >
      <div class="p-3 flex items-center">
        <Icon
          icon="clarity:notification-solid"
          class="text-3xl"
        />
        <span
          v-if="!rail"
          class="pl-4 font-bold">
           Notifications
        </span>
      </div>

      <v-divider class="border-black"></v-divider>

      <div v-if="!rail">
        <div>
          Notification 1
        </div>
        <v-divider class="border-black"></v-divider>
      </div>
    </v-navigation-drawer>
    <v-main style="height: 250px"></v-main>
  </v-layout>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {Icon} from "@iconify/vue";

const drawer = ref(true)
const rail = ref(true)

onMounted(() => {

})
</script>

<style scoped>

</style>