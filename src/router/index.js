import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/data/userStore'
import LoginPage from '../login_register/loginRegister.vue'
import HomePage from '../home/home.vue'
import CoursesPage from '../courses/coursesPage.vue'
import CreateCoursesPage from '../courses/createCourses.vue'
import DoCourse from '../courses/doCourse.vue'
import AppStreak from '../appStreak/appStreak.vue'
import LoadingPage from '../loading/loadingPage.vue'
import ProfilePage from '../profile/profile.vue'
import MoodTrends from '../mood/moodTrends.vue'
import Mood from '../mood/mood.vue'
import JournalEntryPage from '../journal/journal.vue'
import TherapistPage from '../therapists/therapists.vue'

const routes = [
  {
    path: '/',
    name: 'Loading',
    component: LoadingPage
  }
  , {
    path: '/login',
    name: 'Login',
    component: LoginPage
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
  },
  {
    path: '/journal/',
    name: 'Journal',
    component: JournalEntryPage,
    props: true
  },
  {
    path: '/mood/',
    name: 'MoodTrends',
    component: MoodTrends,
    props: true
  },
  {
    path: '/mood/',
    name: 'Mood',
    component: Mood,
    props: true
  },
  {
    path: '/courses/',
    name: 'Courses',
    component: CoursesPage,
    props: true
  },
  {
    path: '/appStreak/',
    name: 'AppStreak',
    component: AppStreak,
    props: true
  },
  {
    path: '/createCourses/',
    name: 'CreateCourses',
    component: CreateCoursesPage,
    props: true
  },
  {
    path: '/courses/:id',
    name: 'DoCourse',
    component: DoCourse,
    props: true
  },
  {
    path: '/courses/:id',
    name: 'CourseView',
    component: () => import('@/courses/viewCourse.vue'),
    props: true
  },
  {
    path: '/therapists/',
    name: 'Therapists',
    component: TherapistPage,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()

  if (!userStore.userData) {
    await userStore.fetchUserData()
  }

  if (!userStore.userData?.uid && to.name !== 'Login') {
    return next({ name: 'Login' })
  }

  next()
})

export default router
