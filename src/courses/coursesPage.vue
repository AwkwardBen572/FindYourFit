<template>
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
    <!-- <div class="courses_sub_selection_holder inter" v-if="selectedCoursesItem === 'myCourses'">
        <div v-for="item in courseSubItems" :key="item.key" class="courses_sub_selection"
            :class="{ active: selectedCoursesSubItem === item.key, [item.cornerClass]: true }"
            @click="setCoursesSubItem(item.key)">
            {{ item.label }}
        </div>
    </div> -->
    <div class="inter course_selection_holder">
        <select class="course_input inter font_size_xs" v-model="selectedOption" @change="fetchCourses()">
            <option disabled value="">Please select a theme</option>
            <option v-for="option in options" :key="option.value" :value="option.value">
                {{ option.text }}
            </option>
        </select>
    </div>
    <div class="courses_holder inter">
        <div class="empty_courses_holder" v-if="myCourses.length === 0 && selectedCoursesItem === 'myCourses'">
            You don't have any courses linked to your profile.
        </div>
    </div>
    <div v-if="selectedCoursesItem === 'discoverCourses'" class="inter course_selection_holder">
        <br>
        <div class="discover_courses_holder" v-if="courses.length > 0">
            <div class="courses_list">
                <div v-for="course in courses" :key="course.id" class="course_card">
                    <div class="course_image">
                        <div class="image_placeholder">IMG</div>
                    </div>

                    <div class="course_days">
                        <div class="days_number">{{ course.days }}</div>
                        <div class="days_label">Days</div>
                    </div>

                    <div class="course_info">
                        <div class="course_title">{{ course.name }}</div>
                        <div class="course_summary">{{ course.summary }}</div>
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

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/data/userStore'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "@/firebase";

const emptyList = ref('')
const emit = defineEmits(['setPage'])
const userStore = useUserStore()
const isAdmin = ref(Boolean(userStore.userData.admin))

const selectedOption = ref('')
const selectedCoursesItem = ref('myCourses')
const selectedCoursesSubItem = ref('saved')
const coursesItems = [
    { key: 'myCourses', label: 'My Courses', cornerClass: 'right-rounded' },
    { key: 'discoverCourses', label: 'Discover Courses', cornerClass: 'left-rounded' }
]
const courseSubItems = [
    { key: 'saved', label: 'Saved', cornerClass: 'right-rounded' },
    { key: 'completed', label: 'Completed', cornerClass: 'left-rounded' }
]

const setCoursesItem = (item) => {
    selectedCoursesItem.value = item
}

const setCoursesSubItem = (item) => {
    selectedCoursesSubItem.value = item
}

const addCourses = (item) => {
    emit('setPage', 'createCourses')
}

const courses = ref([]);
const myCourses = ref([]);
const loading = ref(false);
const error = ref(null);

const fetchCourses = async () => {
    loading.value = true;
    try {
        let querySnapshot = null;
        if (selectedOption.value) {
            const coursesRef = collection(db, "courses");
            const q = query(coursesRef, where("courseTheme", "==", selectedOption.value));
            querySnapshot = await getDocs(q);
        } else {
            querySnapshot = await getDocs(collection(db, "courses"));
        }

        courses.value = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            console.log(courses.value)
    } catch (err) {
        error.value = err.message;
    } finally {
        loading.value = false;
    }
};

onMounted(fetchCourses);

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
    { value: 'anger', text: 'Anger' },
    { value: 'patience', text: 'Patience' },
    { value: 'jealousy', text: 'Jealousy' },
    { value: 'doubt', text: 'Doubt' }
])

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
    /* height: 3rem; */
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

.course_card {
    width: 90%;
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 12px;
    padding: 12px;
    gap: 14px;
    box-shadow: 0.1rem 0.1rem 1rem 0.2rem rgba(135, 191, 186, 0.4);
}

/* LEFT */
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

/* MIDDLE */
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

/* RIGHT */
.course_info {
    flex: 1;
}

.course_title {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 4px;
}

.course_summary {
    font-size: 12px;
    color: #666;
}
</style>