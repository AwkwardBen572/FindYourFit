<template>
  <profile v-if="currentPage === 'profile'" @setPage="setPage"></profile>
  <home v-else-if="currentPage === 'home'" @setPage="setPage"></home>
  <mood v-else-if="currentPage === 'mood'"></mood>
  <journal-entry v-else-if="currentPage === 'journal'"></journal-entry>
  <therapists v-else-if="currentPage === 'therapists'"></therapists>
  <mood-trends v-else-if="currentPage === 'moodTrends'"></mood-trends>
  <courses v-else-if="currentPage === 'courses'" @setPage="setPage"></courses>
  <courses-create v-else-if="currentPage === 'createCourses'" @setPage="setPage"></courses-create>

  <div class="navigation_bar_holder">
    <div class="navigation_item_holder inter font_size_xxs" v-for="(item, key) in navigationItems" :key="key">
      <div class="navigation_item" :class="{ active: currentPage === key }" @click="setPage(key)">
        <div v-html="item.icon"></div>
        <div>{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/data/userStore'
import Profile from '../profile/profile.vue'
import Home from '../home/home.vue'
import Mood from '../mood/mood.vue'
import JournalEntry from '../journal/journal.vue'
import Courses from '../courses/coursesPage.vue'
import CoursesCreate from '../createCourses/createCourses.vue'
import Therapists from '../therapists/therapists.vue'
import MoodTrends from '../mood/moodTrends.vue'

const navigationItems = {
  home: { name: 'Home', icon: '<i class="fa fa-home"></i>' },
  journal: { name: 'Journal', icon: '<i class="fa fa-book"></i>' },
  therapists: { name: 'Therapists', icon: '<i class="fa fa-address-book"></i>' },
  courses: { name: 'Courses', icon: '<i class="fas fa-graduation-cap"></i>' },
  profile: { name: 'Profile', icon: '<i class="fa fa-id-card"></i>' }
}

const userStore = useUserStore()
const currentPage = ref('home')

const setPage = (page) => {
  currentPage.value = page
  localStorage.setItem('currentPage', page)
}

onMounted(() => {
  const savedPage = localStorage.getItem('currentPage')
  if (savedPage && navigationItems[savedPage]) {
    currentPage.value = savedPage
  }
})
</script>

<style scoped>
.navigation_bar_holder {
  width: 100%;
  height: 4rem;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0 -5px 20px -5px #87bfba;
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
}

.navigation_item_holder {
  width: 23%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.navigation_item {
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #87bfba;
  transition: all 0.2s ease;
  cursor: pointer;
}

.navigation_item.active {
  color: #ffffff;
  background-color: #87bfba;
  border-radius: 0.5rem;
}
</style>