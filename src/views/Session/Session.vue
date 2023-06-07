<template>
  <div class="flex h-screen w-screen">
    <div class="flex flex-col items-center justify-center w-1/2 h-full bg-h-black">
      <client-only class="h-full flex flex-col items-center justify-center">
        <img src="@/assets/logoCarbonLight.svg"  height="500" width="500" alt="">
        <Vue3Lottie
          animationLink="https://assets4.lottiefiles.com/packages/lf20_KvK0ZJBQzu.json"
          :height="300"
          :width="300"
        />
      </client-only>
    </div>
    <div class="flex items-center justify-center w-1/2 h-full">
      <router-view />
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>

</style>