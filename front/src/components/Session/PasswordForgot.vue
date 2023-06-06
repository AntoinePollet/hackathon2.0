<template>
  <div class="flex flex-col items-center justify-center w-full h-full p-10">
    <v-img class="!max-h-10 bg-red-100 w-full" />
    <span class="p-5 text-2xl font-bold">Password Forgot</span>
    <div class="flex flex-col w-full gap-y-4">
      <v-text-field label="Email" class="w-full" variant="outlined" hide-details/>
      <v-btn text="Reset password" variant="outlined" class="hover:bg-h-blue focus:bg-h-blue active:bg-h-blue bg-h-blue" color="none"></v-btn>
    </div>
    <router-link :to="{ name: 'signin' }" class="p-2 hover:underline">
      Sign in
    </router-link>
  </div>
</template>

<script setup>
</script>

<style scoped>

</style>