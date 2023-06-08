<template>
    <div class="flex h-screen">
        <div class="h-full">
            <sidebar />
        </div>
        <div class="w-full h-full overflow-hidden">
            <navbar></navbar>
            <router-view class="w-full overflow-auto h-full" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Sidebar from "@/components/Structure/Sidebar.vue";
import Navbar from "@/components/Structure/Header.vue";
</script>

<style scoped></style>