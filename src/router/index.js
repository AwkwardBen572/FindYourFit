import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../login_register/loginRegister.vue'
import HomePage from '../home/home.vue'
import LoadingPage from '../loading/loadingPage.vue'
import ProfilePage from '../profile/profile.vue'
import NavigationWidget from '../navigation/navigation.vue'

const routes = [
  {
    path: '/loading',
    name: 'Loading',
    component: LoadingPage
  }
  ,{
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/navigation',
    name: 'Navigation',
    component: NavigationWidget
  },
  {
    path: '/home/',
    name: 'Home',
    component: HomePage,
    props: true
  },
  {
    path: '/profile/',
    name: 'Profile',
    component: ProfilePage,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
