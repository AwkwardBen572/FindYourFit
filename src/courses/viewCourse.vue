<template>
    <div class="course_page">
        <div class="course_card" v-if="course && !loading">
            <div class="course_image_wrapper">
                <div class="course_theme_badge inter font_size_xs">
                    {{ formattedTheme }}
                </div>
            </div>

            <div class="course_content">
                <div class="course_title licorice_regular">{{ course.name }}</div>
                <div class="course_meta inter font_size_xs" v-if="!courseExists">
                    🗓 {{ course.numberOfDays }} day journey
                </div>
                <div class="course_summary inter font_size_xs" v-if="!courseExists">{{ course.summary }}</div>

                <div class="course_actions" v-if="!courseExists">
                    <button class="course_start_button inter font_size_xs" :disabled="starting || todayLocked"
                        @click="startCourse">
                        {{ todayLocked ? 'Next day unlocks tomorrow' : starting ? 'Starting...' : 'Start Course' }}
                    </button>
                </div>
                <div v-else class="inter font_size_xs course_actions">
                    <div class="color_grey"
                        style="display: flex;flex-flow:row nowrap;justify-content: center;align-items: center;">You
                        already own this course</div>
                </div>
            </div>
        </div>
        <div v-if="loading" class="course_loading inter font_size_xs">
            <div class="spinner"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { auth, db } from '@/firebase'
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from 'firebase/firestore'
import { useUserStore } from '@/data/userStore'

const route = useRoute()
const router = useRouter()

const userStore = useUserStore()


const course = ref(null)
const starting = ref(false)
const todayLocked = ref(false)
const courseExists = ref(false)
const loading = ref(true)

const courseId = route.params.id
let userProgressRef = null

const fetchCourse = async () => {
    const snap = await getDoc(doc(db, 'courses', courseId))
    if (!snap.exists()) {
        router.push({ name: 'Navigation' })
        return
    }
    course.value = { id: snap.id, ...snap.data() }

    if (auth.currentUser) {
        userProgressRef = doc(db, 'users', auth.currentUser.uid)
        const userSnap = await getDoc(userProgressRef)
        if (userSnap.exists() && userSnap.data().courses) {
            const courseProgress = userSnap.data().courses.find(c => c.courseId === courseId)
            if (courseProgress) {
                courseExists.value = true
            }
        }
    }

    loading.value = false
}

const formattedTheme = computed(() => {
    if (!course.value?.courseTheme) return ''
    return course.value.courseTheme.charAt(0).toUpperCase() + course.value.courseTheme.slice(1)
})

const startCourse = async () => {
    if (!auth.currentUser) return
    try {
        starting.value = true
        const todayDate = new Date().toISOString().split('T')[0]

        if (!userProgressRef) userProgressRef = doc(db, 'users', auth.currentUser.uid)
        const userSnap = await getDoc(userProgressRef)
        let courses = []
        if (userSnap.exists()) {
            courses = userSnap.data().courses || []
        }

        const existingProgress = courses.find(c => c.courseId === courseId)
        if (existingProgress) {
            await updateDoc(userProgressRef, {
                courses: courses.map(c =>
                    c.courseId === courseId ? {
                        ...c,
                        lastDayCompleted: (c.lastDayCompleted || -1) + 1,
                        lastDayCompletedDate: todayDate
                    } : c
                )
            })
        } else {
            await setDoc(userProgressRef, {
                courses: arrayUnion({
                    courseId: courseId,
                    lastDayCompleted: -1,
                    courseLength: course.value.numberOfDays,
                    completed: false
                })
            }, { merge: true })

            const snap = await getDoc(userProgressRef)

            if (snap.exists()) {
                const fullDoc = snap.data()
                userStore.setUserData(fullDoc)
            }

            router.push({ name: 'Courses' })
        }

        todayLocked.value = true
    } catch (err) {
        console.error(err)
    } finally {
        starting.value = false
    }
}

onMounted(fetchCourse)
</script>


<style scoped>
.course_page {
    width: 100%;
    min-height: 100vh;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    box-sizing: border-box;
}

.course_card {
    width: 100%;
    max-width: 420px;
    background-color: #ffffff;
    border-radius: 1.8rem;
    box-shadow: 0.1rem 0.1rem 1rem 0.2rem rgba(135, 191, 186, 0.4);
    overflow: hidden;
}

/* Image */

.course_image_wrapper {
    position: relative;
    height: 230px;
    /* match the old image height */
    background-color: #eee;
}

.course_image {
    width: 100%;
    height: 230px;
    object-fit: cover;
}

/* Theme badge */

.course_theme_badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: rgba(135, 191, 186, 0.9);
    color: #ffffff;
    padding: 0.35rem 0.7rem;
    border-radius: 1rem;
}

/* Content */

.course_content {
    padding: 1.6rem 1.3rem;
    text-align: center;
}

.course_title {
    color: #222;
    margin-bottom: 0.4rem;
}

.course_meta {
    color: #87bfba;
    margin-bottom: 1rem;
}

.course_summary {
    color: #555;
    line-height: 1.55;
    margin-bottom: 1.8rem;
}

/* Actions */

.course_actions {
    display: flex;
    gap: 0.75rem;
    flex-direction: column;
}

.course_start_button,
.course_save_button {
    width: 100%;
    height: 2.9rem;
    border: none;
    border-radius: 0.7rem;
    color: #ffffff;
    cursor: pointer;
    transition: background-color 0.25s ease, transform 0.15s ease;
}

.course_start_button {
    background-color: #87bfba;
}

/* .course_start_button:hover {
  background-color: #6fa9a4;
  transform: translateY(-1px);
} */

.course_save_button {
    background-color: #87bfa0;
}

/* .course_save_button:hover {
  background-color: #6fa986;
  transform: translateY(-1px);
} */

.course_start_button:disabled,
.course_save_button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.course_loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.spinner {
    width: 3rem;
    height: 3rem;
    border: 0.4rem solid #e0f0ef;
    border-top: 0.4rem solid #87bfba;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
