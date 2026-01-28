<template>
  <div class="navigation_bar_holder">
    <div v-for="(item, key) in navigationItems" :key="key" class="navigation_item_holder inter font_size_xxs">
      <div class="navigation_item" :class="{ active: isActive(key) }" @click="goTo(item.name)">
        <i :class="item.iconClass"></i>
        <div>{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const navigationItems = {
  Home: {
    name: 'Home',
    iconClass: 'fa fa-home'
  },
  Journal: {
    name: 'Journal',
    iconClass: 'fa fa-book'
  },
  Therapists: {
    name: 'Therapists',
    iconClass: 'fa fa-address-book'
  },
  Courses: {
    name: 'Courses',
    iconClass: 'fas fa-graduation-cap'
  },
  Profile: {
    name: 'Profile',
    iconClass: 'fa fa-id-card'
  }
}

const goTo = (routeName) => {
  if (route.name !== routeName) {
    router.push({ name: routeName })
  }
}

const isActive = (routeName) => {
  return (
    route.name === routeName ||
    route.name?.toString().startsWith(routeName)
  )
}
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
