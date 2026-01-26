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
    <div class="courses_sub_selection_holder inter" v-if="selectedCoursesItem === 'myCourses'">
        <div v-for="item in courseSubItems" :key="item.key" class="courses_sub_selection"
            :class="{ active: selectedCoursesSubItem === item.key, [item.cornerClass]: true }"
            @click="setCoursesSubItem(item.key)">
            {{ item.label }}
        </div>
    </div>
    <div class="courses_holder inter">
        <div class="empty_courses_holder" v-if="courses.length === 0 && selectedCoursesItem === 'myCourses'">
            You don't have any courses saved to your profile.
        </div>
    </div>
    <div v-if="selectedCoursesItem === 'discoverCourses'" class="inter course_selection_holder">
        <select class="course_input inter font_size_xs" v-model="selectedOption">
            <option disabled value="">Please select one</option>
            <option v-for="option in options" :key="option.value" :value="option.value">
                {{ option.text }}
            </option>
        </select>
    </div>
    <div class="add_courses_holder inter font_size_s" v-if="isAdmin">
      <i class="fas fa-plus" @click="addCourses"></i>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/data/userStore'

const emit = defineEmits(['setPage'])
const userStore = useUserStore()
const isAdmin = ref(Boolean(userStore.userData.admin))

console.log(userStore.userData.admin)

// const isAdmin

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

const courses = []

const setCoursesItem = (item) => {
    selectedCoursesItem.value = item
}

const setCoursesSubItem = (item) => {
    selectedCoursesSubItem.value = item
}

const addCourses = (item) => {
    emit('setPage', 'createCourses')
}

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
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.course_input {
    width: 50%;
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
</style>