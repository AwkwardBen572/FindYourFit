<<template>
    <div v-if="loading" class="spinner-wrapper">
        <div class="spinner"></div>
    </div>
    <template v-else>
        <div class="courses_header_holder inter font_size_xs">
            Courses
        </div>
        <div class="courses_selection_holder inter font_size_xs">
            <div v-for="item in coursesItems" :key="item.key" class="courses_selection"
                :class="{ active: selectedCoursesItem === item.key, [item.cornerClass]: true }"
                @click="setCoursesItem(item.key)">
                {{ item.label }}
            </div>
        </div>
        <br>
        <div class="courses_holder inter" v-if="selectedCoursesItem === 'myCourses'">
            <div v-if="myCourses.length > 0" class="courses_list">
                <div v-for="course in myCourses" :key="course.id" class="course_card_holder" @click="doCourse(course)">
                    <div class="course_card">
                        <div class="course_image">
                            <div class="image_placeholder">IMG</div>
                        </div>

                        <div class="course_days">
                            <div class="days_number">{{ course.numberOfDays }}</div>
                            <div class="days_label">Days</div>
                        </div>

                        <div class="course_info">
                            <div class="course_title">{{ course.name }}</div>
                        </div>
                    </div>
                    <div class="course_progress">
                        <div :style="{width: ((course.courseProgress + 1) / course.courseLength * 100) + '%' , height: '100%', backgroundColor: '#87bfba', borderRadius: '1rem'}">

                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="empty_courses_holder">
                You don't have any courses linked to your profile.
            </div>
        </div>
        <div v-if="selectedCoursesItem === 'discoverCourses'" class="inter course_selection_holder">
            <div class="inter course_selection_holder">
                <select class="course_input inter font_size_xs" v-model="selectedOption" @change="fetchCourses()">
                    <option disabled value="">Please select a theme</option>
                    <option v-for="option in options" :key="option.value" :value="option.value">
                        {{ option.text }}
                    </option>
                </select>
            </div>
            <br>
            <div class="discover_courses_holder" v-if="courses.length > 0">
                <div class="courses_list">
                    <div v-for="course in courses" :key="course.id" class="course_card_holder"
                        @click="viewCourse(course)">
                        <div class="course_card">
                            <div class="course_image">
                                <div class="image_placeholder">IMG</div>
                            </div>

                            <div class="course_days">
                                <div class="days_number">{{ course.numberOfDays }}</div>
                                <div class="days_label">Days</div>
                            </div>

                            <div class="course_info">
                                <div class="course_title">{{ course.name }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                There are no courses linked to this theme.
            </div>
        </div>
        <div class="add_courses_holder inter font_size_s" v-if="isAdmin">
            <i class="fas fa-plus" @click="addCourses"></i>
        </div>
    </template>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, onBeforeRouteUpdate } from 'vue-router'
import { useUserStore } from '@/data/userStore'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "@/firebase";

const options = ref([
    { value: 'depressed', text: 'Depressed' },
    { value: 'anxious', text: 'Anxious' },
    { value: 'stressed', text: 'Stressed' },
    { value: 'overwhelmed', text: 'Overwhelmed' },
    { value: 'self_esteem', text: 'Self Esteem' },
    { value: 'anger', text: 'Anger' },
    { value: 'fear', text: 'Fear' },
    { value: 'panic', text: 'Panic' },
    { value: 'lonely', text: 'Lonely' },
    { value: 'peace', text: 'Peace' },
    { value: 'stress', text: 'Stress' },
    { value: 'patience', text: 'Patience' },
    { value: 'jealousy', text: 'Jealousy' },
    { value: 'doubt', text: 'Doubt' }
])

const router = useRouter()
const userStore = useUserStore()

const selectedOption = ref('')
const selectedCoursesItem = ref('myCourses')

const courses = ref([])
const myCourses = ref([])
const loading = ref(true)
const error = ref(null)

const coursesItems = [
    { key: 'myCourses', label: 'My Courses', cornerClass: 'right-rounded' },
    { key: 'discoverCourses', label: 'Discover Courses', cornerClass: 'left-rounded' }
]

const isAdmin = computed(() => !!userStore.userData?.admin)

const fetchCourses = async () => {
    try {
        let querySnapshot = null
        if (selectedOption.value) {
            const coursesRef = collection(db, "courses")
            const q = query(coursesRef, where("courseTheme", "==", selectedOption.value))
            querySnapshot = await getDocs(q)
        } else {
            querySnapshot = await getDocs(collection(db, "courses"))
        }

        courses.value = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
    } catch (err) {
        error.value = err.message
    } finally {
        // loading.value = false
    }
}

const fetchMyCourses = async () => {
    if (!userStore.userData || !Array.isArray(userStore.userData.courses) || userStore.userData.courses.length === 0) {
        loading.value = false
        myCourses.value = []
        return
    }

    try {
        const myCourseIds = userStore.userData.courses.map(c => ({
            courseId: c.courseId,
            courseLength: c.courseLength,
            courseProgress: c.lastDayCompleted
        })).filter(Boolean)

        if (myCourseIds.length === 0) {
            myCourses.value = []
            return
        }

        const courseIds = myCourseIds.map(c => c.courseId)

        const coursesRef = collection(db, "courses")
        const q = query(coursesRef, where("__name__", "in", courseIds.slice(0, 10)))
        const querySnapshot = await getDocs(q)

        myCourses.value = querySnapshot.docs.map(doc => {
            const courseData = doc.data()
            const userCourse = myCourseIds.find(c => c.courseId === doc.id)

            return {
                id: doc.id,
                ...courseData,
                courseLength: userCourse?.courseLength ?? 0,
                courseProgress: userCourse?.courseProgress ?? 0
            }
        })

    } catch (err) {
        error.value = err.message
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    fetchCourses()
    fetchMyCourses()
})

onBeforeRouteUpdate((to, from, next) => {
    fetchCourses()
    fetchMyCourses()
    next()
})

const setCoursesItem = (item) => selectedCoursesItem.value = item

const addCourses = () => router.push({ name: 'CreateCourses' })

const viewCourse = (item) => router.push({ name: 'CourseView', params: { id: item.id } })
const doCourse = (item) => {
    router.push({ name: 'DoCourse', params: { id: item.id } })
}
</script>

<style scoped>
.courses_header_holder {
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.courses_selection_holder {
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.courses_selection {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000000;
    cursor: pointer;
}

.courses_selection.active {
    background-color: #87bfba;
    color: white;
}

.right-rounded.active {
    border-radius: 0 1rem 1rem 0;
}

.left-rounded.active {
    border-radius: 1rem 0 0 1rem;
}

.courses_sub_selection_holder {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.courses_sub_selection_holder {
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
}


.courses_sub_selection {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000000;
    cursor: pointer;
}

.courses_sub_selection.active {
    background-color: #87bfba;
    color: white;
}

.empty_courses_holder {
    width: 100%;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.course_selection_holder {
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
}

.course_input {
    width: 60%;
    height: 2rem;
    border: 1px solid #ccc;
    border-radius: 0.4rem;
    outline: none;
    padding: 0 0.5rem;
    box-sizing: border-box;
    background-color: #fff;
}

select.course_input {
    padding-right: 1.5rem;
    color: #797979;
}

.add_courses_holder {
    position: fixed;
    bottom: 5rem;
    right: 1rem;
    width: 3rem;
    height: 3rem;
    color: white;
    background-color: #87bfba;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5rem;
    box-shadow: 0 0 5px 0px #000000;
}

.courses_list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
}

.course_card_holder {
    width: 80%;
    height: 5rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    border-radius: 12px;
    padding: 1rem;
    box-shadow: 0.1rem 0.1rem 1rem 0.2rem rgba(135, 191, 186, 0.4);
}

.course_card {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    height: 80%;
}

.course_progress {
    width: 100%;
    height: 5%;
    background-color: #e3e3e3;
    border-radius: 1rem;
}

.course_image {
    width: 64px;
    height: 64px;
    flex-shrink: 0;
}

.image_placeholder {
    width: 100%;
    height: 100%;
    background: #eaeaea;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: #888;
}

.course_days {
    min-width: 60px;
    text-align: center;
}

.days_number {
    font-size: 20px;
    font-weight: 600;
}

.days_label {
    font-size: 11px;
    color: #777;
}

.course_info {
    flex: 1;
}

.course_title {
    font-size: 14px;
    font-weight: 600;
}

.course_summary {
    font-size: 12px;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.1em;
    max-height: 2.2em;
}

.save_btn {
    margin-top: 6px;
    padding: 4px 8px;
    font-size: 11px;
    border: none;
    border-radius: 6px;
    background-color: #87bfba;
    color: white;
    cursor: pointer;
}

.save_btn:hover {
    background-color: #6da69f;
}

.course_theme {
    font-size: 12px;
    color: #555;
    margin-top: 4px;
    font-style: italic;
}

.spinner-wrapper {
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
    to {
        transform: rotate(360deg);
    }
}
</style>>