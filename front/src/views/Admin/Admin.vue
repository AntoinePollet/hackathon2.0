<template>
  <div class="flex h-screen w-screen">
    <div class="h-full">
      <sidebar/>
    </div>
    <div>
      <router-view class="w-full"/>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "@/components/Structure/Sidebar.vue";

</script>

<style scoped>

</style>