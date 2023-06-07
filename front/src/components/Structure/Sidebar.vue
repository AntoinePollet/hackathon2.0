<template>
  <v-card class="w-64 h-full rounded">
    <v-layout class="rounded">
      <div class="w-full">
        <v-list-item class="flex justify-center">
          <img src="@/assets/logoCarbonGrey.svg"  height="500" width="500" alt="">
        </v-list-item>

        <v-list density="compact" :nav="true">
          <router-link :to="{ name: 'profile-show' }">
            <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
              :nav="true"
              value="profile"
            >
                John Leider
            </v-list-item>
          </router-link>
          <v-divider class="border-black"></v-divider>
          <router-link
            v-for="item in items"
            :to="{ name: item.to }"
          >
            <v-list-item
              :prepend-icon="item.icon"
              :title="item.title"
              :value="item.value"
            />
          </router-link>
          <v-divider class="border-black"></v-divider>
          <div>
            <v-list-item class="flex">
              <div class="font-medium w-full h-full">
                Client
              </div>
            </v-list-item>
            <v-divider class="border-black"></v-divider>
            <router-link v-for="item in clientItems" :to="{ name: item.to }">
              <v-list-item
                :prepend-icon="item.icon"
                :title="item.title"
                :value="item.value"
              />
            </router-link>
          </div>
          <v-divider class="border-black"></v-divider>
          <div>
            <v-list-item class="flex">
              <div class="font-medium w-full h-full">
                Admin
              </div>
            </v-list-item>
            <v-divider class="border-black"></v-divider>
            <router-link
              v-for="item in adminItems"
              :to="{ name: item.to }"
            >
              <v-list-item
                :prepend-icon="item.icon"
                :title="item.title"
                :value="item.value"
              />
            </router-link>
          </div>
          <v-divider class="border-black"></v-divider>
          <v-list-item
            prepend-icon="a"
            title="Log out"
            value="logout"
            @click="null"
          />
        </v-list>
      </div>
    </v-layout>
  </v-card>
</template>

<script setup>
import {onMounted, ref} from "vue";

const items = ref([
  { title: 'News', icon: 'mdi-account', to: 'news-list', value: 'news' },
  { title: 'Planning', icon: 'mdi-account', to: 'plannings-list', value: 'my-planning' },
  { title: 'Trainings', icon: 'mdi-account', to: 'trainings-list', value: 'my-training' },
  { title: 'Achievements', icon: 'mdi-account', to: 'achievements-list', value: 'my-achievement' },
  { title: 'Evaluations', icon: 'mdi-account', to: 'evaluations-list', value: 'my-evaluation' },
])

const adminItems = ref([
  { title: 'Users', icon: 'mdi-account-group-outline', to: 'admin-users-list', value: 'users' },
  { title: 'Plannings', icon: 'mdi-account-group-outline', to: 'admin-plannings-list', value: 'plannings' },
  { title: 'Achievements', icon: 'mdi-account-group-outline', to: 'admin-achievements-list', value: 'achievements' },
  { title: 'Trainings', icon: 'mdi-account-group-outline', to: 'admin-trainings-list', value: 'trainings' },
]);

const clientItems = ref([
  { title: 'My Account', icon: 'mdi-account', to: 'client-profile-show', value: 'client-account' },
  { title: 'Planning', icon: 'mdi-account', to: 'client-plannings-list', value: 'client-plannings' },
]);

onMounted(() => {

})
</script>

<style scoped>

</style>