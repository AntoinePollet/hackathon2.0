<template>
  <div class="flex h-screen w-screen">
    <div class="h-full bg-red-100">
      <sidebar/>
    </div>
    <div>
      <router-view class="w-full bg-red-100"/>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "@/components/Structure/Sidebar.vue";

</script>

<style scoped>

</style>