<template>
    <div class="course_page">
        <div class="course_page_content">
            <div class="course_page_intro inter font_size_xs">
                <div class="font_size_m licorice_regular">
                    Create a New Course
                </div>
                <br />
                Build a guided journey by adding daily reflections or lessons.
            </div>

            <div class="course_page_form">
                <div class="course_page_form_fields">
                    <input class="course_page_input inter font_size_xs" type="text"
                        placeholder="Course name (e.g. Finding Peace Through Anxiety)" v-model="courseName" />

                    <textarea class="course_page_textarea inter font_size_xs"
                        placeholder="Course summary — what's this course about?" v-model="courseSummary" />

                    <div class="inter course_selection_holder">
                        <select class="course_input inter font_size_xs" v-model="selectedOption">
                            <option disabled value="">Please select a course theme</option>
                            <option v-for="option in options" :key="option.value" :value="option.value">
                                {{ option.text }}
                            </option>
                        </select>
                    </div>

                    <input class="course_page_input inter font_size_xs" type="number" min="1"
                        placeholder="Number of days" v-model.number="days" @change="generateDays" />

                    <div v-for="(day, index) in courseDays" :key="index" class="course_day_block">
                        <div class="course_day_title inter font_size_xs">
                            Day {{ index + 1 }}
                        </div>

                        <input class="course_page_input inter font_size_xs" type="text" placeholder="Day title"
                            v-model="day.title" />

                        <textarea class="course_page_textarea inter font_size_xs" placeholder="Day content"
                            v-model="day.content" />
                    </div>
                </div>

                <button class="course_page_button inter font_size_xs" @click="saveCourse" :disabled="loading">
                    {{ loading ? 'Saving...' : 'Save Course' }}
                </button>
            </div>
        </div>
    </div>
    <div class="add_courses_holder inter font_size_s">
        <i class="fas fa-times" @click="cancelAddingCourse()"></i>
    </div>
</template>


<script setup>
import { ref } from 'vue'
import { db } from '@/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { useRouter } from 'vue-router'

const emit = defineEmits(['setPage'])

const router = useRouter()

const courseName = ref('')
const courseSummary = ref('')
const days = ref(1)
const loading = ref(false)

const courseDays = ref([])
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
const selectedOption = ref('')


const generateDays = () => {
    courseDays.value = Array.from({ length: days.value }, (_, i) => ({
        day: i + 1,
        title: '',
        content: ''
    }))
}

generateDays()

const saveCourse = async () => {
    if (!courseName.value || !courseSummary.value || !selectedOption.value) return;

    loading.value = true;

    try {
        await addDoc(collection(db, 'courses'), {
            name: courseName.value,
            summary: courseSummary.value,
            courseTheme: selectedOption.value,
            numberOfDays: days.value,
            days: courseDays.value.map(day => ({
                title: day.title,
                content: day.content,
            })),
            createdAt: serverTimestamp()
        });

        courseName.value = '';
        courseSummary.value = '';
        days.value = 1;
        selectedOption.value = '';
        generateDays();
    } catch (e) {
        console.error(e);
    } finally {
        loading.value = false;
    }

    router.push({
        name: 'Courses'
    })
};

const cancelAddingCourse = (item) => {
    router.push({
        name: 'Courses'
    })
}
</script>

<style scoped>
.course_page {
    width: 100%;
    min-height: 100vh;
    display: flex;
    padding-bottom: 5rem;
}

.course_page_content {
    width: 100%;
    min-height: 100vh;
    background-color: #ffffff;
    border-radius: 1.5rem 1.5rem 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 2rem 1rem;
    box-sizing: border-box;
}

.course_page_intro {
    margin-bottom: 1.5rem;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.4;
}

.course_page_form_fields {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
}

.course_page_input,
.course_page_textarea {
    width: 80%;
    height: 15rem;
    max-width: 400px;
    padding: 0.5rem 0.75rem;
    border: 1px solid #ccc;
    border-radius: 0.4rem;
    outline: none;
    box-sizing: border-box;
    transition: border-color 0.2s ease;
}

.course_page_input {
    height: 2.8rem;
}

.course_page_textarea {
    min-height: 6rem;
    resize: vertical;
}

.course_page_input:focus,
.course_page_textarea:focus {
    border-color: #87bfba;
}

.course_day_block {
    width: 100%;
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid #eee;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
}

.course_day_title {
    color: #555;
    margin-bottom: 0.25rem;
}

.course_page_button {
    width: 80%;
    max-width: 400px;
    height: 2.8rem;
    margin-top: 1.5rem;
    background-color: #87bfba;
    border: none;
    border-radius: 0.5rem;
    color: #ffffff;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.course_page_button:hover {
    background-color: #6fa9a4;
}

.course_page_button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

@media (max-width: 768px) {

    .course_page_input,
    .course_page_textarea,
    .course_page_button {
        width: 90%;
    }
}

@media (max-width: 480px) {

    .course_page_input,
    .course_page_textarea,
    .course_page_button {
        width: 100%;
    }
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

.course_selection_holder {
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.course_input {
    width: 100%;
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
</style>
