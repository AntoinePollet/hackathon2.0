<template>
  <div class="flex h-screen w-screen">
    <div class="h-full bg-red-100">
      <sidebar/>
    </div>
    <div class="w-full">
      <router-view class="w-full bg-red-100"/>
    </div>
    <div class="h-full">
      <sidebar-notification />
    </div>
  </div>
</template>

<script setup>
import Sidebar from "@/components/Structure/Sidebar.vue";
import SidebarNotification from "@/components/Structure/SidebarNotification.vue";

</script>

<style scoped>

</style>