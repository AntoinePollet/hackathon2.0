<template>
  <div class="p-10 gap-y-10">
    <div class="text-3xl font-bold mb-10">
      Trainings
    </div>
    <div class="mb-6 flex items-center">
      <v-text-field variant="outlined" label="search" hide-details/>
      <v-btn class="m-2" variant="text">Filter</v-btn>
    </div>
    <div class="flex flex-wrap gap-6">
      <v-card
        v-for="i in 10"
        class="flex flex-col h-64 w-64"
      >
        <div class="p-5">
          <p>Training {{i}}</p>
          <p class="text-sm">01/01/2001</p>
        </div>
        <v-divider class="border-black"/>
        <div class="p-5 h-28 overflow-auto">
          Description
        </div>
        <div class="p-5">
          <v-btn block>
            Register
          </v-btn>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>

</style>