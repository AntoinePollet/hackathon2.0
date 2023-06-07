<template>
    <div class="flex h-screen w-screen">
        <div class="h-full">
            <sidebar />
        </div>
        <div class="w-full h-screen overflow-auto">
            <router-view class="w-full" />
        </div>
    </div>
</template>

<script setup>
import Sidebar from "@/components/Structure/Sidebar.vue";
import SidebarNotification from "@/components/Structure/SidebarNotification.vue";

</script>

<style scoped></style>