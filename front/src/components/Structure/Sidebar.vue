<template>
  <v-card class="w-64 h-full rounded">
    <v-layout class="rounded">
      <div class="w-full">
        <v-list-item class="flex justify-center">
          <div class="font-bold text-3xl p-3 w-full h-full">
            Carbon
          </div>
        </v-list-item>

        <v-list density="compact" :nav="true">
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
            title="John Leider"
            :nav="true"
            to="profile"
          />
          <v-divider class="border-black"></v-divider>
          <v-list-item
            v-for="item in items"
            :prepend-icon="item.icon"
            :title="item.title"
            :value="item.value"
            :to="item.to"
          />
          <v-divider class="border-black"></v-divider>
          <div>
            <v-list-item class="flex">
              <div class="font-medium w-full h-full">
                Client
              </div>
            </v-list-item>
            <v-divider class="border-black"></v-divider>
            <v-list-item
              v-for="item in clientItems"
              :prepend-icon="item.icon"
              :title="item.title"
              :value="item.value"
              :to="item.to"
            />
          </div>
          <v-divider class="border-black"></v-divider>
          <div>
            <v-list-item class="flex">
              <div class="font-medium w-full h-full">
                Admin
              </div>
            </v-list-item>
            <v-divider class="border-black"></v-divider>
            <v-list-item
              v-for="item in adminItems"
              :prepend-icon="item.icon"
              :title="item.title"
              :value="item.value"
              :to="item.to"
            />
          </div>
          <v-divider class="border-black"></v-divider>
          <v-list-item
            prepend-icon="a"
            title="Log out"
          />
        </v-list>
      </div>
    </v-layout>
  </v-card>
</template>

<script setup>
import {onMounted, ref} from "vue";

const items = ref([
  { title: 'My Account', icon: 'mdi-account', to: '', value: 'my-account' },
  { title: 'Planning', icon: 'mdi-account', to: '', value: 'my-account' },
  { title: 'Trainings', icon: 'mdi-account', to: '', value: 'my-account' },
  { title: 'Achievements', icon: 'mdi-account', to: '', value: 'my-account' },
  { title: 'Evaluations', icon: 'mdi-account', to: '', value: 'my-account' },
])

const adminItems = ref([
  { title: 'Users', icon: 'mdi-account-group-outline', to: '', value: 'users' },
  { title: 'Plannings', icon: 'mdi-account-group-outline', to: '', value: 'users' },
  { title: 'Achievements', icon: 'mdi-account-group-outline', to: '', value: 'users' },
  { title: 'Trainings', icon: 'mdi-account-group-outline', to: '', value: 'users' },
]);

const clientItems = ref([
  { title: 'My Account', icon: 'mdi-account', to: '', value: 'my-account' },
  { title: 'Planning', icon: 'mdi-account', to: '', value: 'my-account' },
]);

onMounted(() => {

})
</script>

<style scoped>

</style>