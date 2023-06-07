<template>
  <div class="p-10 gap-y-10">
    <div class="text-3xl font-bold mb-10">
      Achievements
    </div>
    <div class="flex mb-5 gap-4 items-center">
      <router-link :to="{ name: 'admin-achievements-create' }" class="p-2 hover:underline">
        New achievement
      </router-link>
      <v-text-field label="search" variant="outlined" hide-details/>
      <v-btn variant="flat">Filter</v-btn>
    </div>
    <div class="flex flex-col gap-6">
      <v-card
        v-for="i in 10"
        class="flex h-32 w-full"
      >
        <div class="flex">
          <div class="flex-none h-32 w-32 p-5">
            <Icon
              icon="game-icons:achievement"
              class="h-full w-full"
            />
          </div>
          <div class="p-5 grow">
            <p class="text-2xl font-bold">Achievement 1 {{i}}</p>
            <p class="h-16 overflow-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div class="flex flex-col items-center">
            <v-btn class="m-2" variant="text">Edit</v-btn>
            <v-btn class="m-2" variant="text">Delete</v-btn>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>

</style>