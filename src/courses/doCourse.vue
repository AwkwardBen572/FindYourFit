<template>
  <div class="do-course-page inter font_size_s">

    <div v-if="loading" class="spinner-wrapper">
      <div class="spinner"></div>
    </div>
    <template v-else>
      <div class="course-title">{{ course?.name }}</div>
      &emsp;

      <div v-if="course">
        <div v-if="!lockedToday && !courseCompleted && course.days[todayDay]" class="day-section">
          <div class="font_size_xs"><b>Day {{ todayDay + 1 }}: {{ course.days[todayDay].title }}</b></div>
          <br>
          <div class="font_size_xs">{{ course.days[todayDay].content }}</div>
          <br>
          <button class="complete-btn" :disabled="dayCompleted" @click="completeDay">
            {{ dayCompleted ? "Completed!" : "Mark as Done" }}
          </button>
        </div>

        <div v-else-if="courseCompleted" class="next-day-locked font_size_xs">
          🎉 Course completed! Well done.
        </div>
        <div v-else-if="lockedToday && !courseCompleted" class="next-day-locked font_size_xs">
          Come back tomorrow for Day {{ todayDay + 1 }}.
        </div>

      </div>

      <p v-else class="next-day-locked">Course not found.</p>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { auth } from "@/firebase";
import { useUserStore } from '@/data/userStore'

const route = useRoute();
const db = getFirestore();
const userStore = useUserStore()

const course = ref(null);
const loading = ref(true);
const todayDay = ref(0);
const dayCompleted = ref(false);
const lockedToday = ref(false);
const courseCompleted = ref(false);

let userCourseProgress = null;

const fetchCourse = async () => {
  loading.value = true;

  const courseId = route.params.id;
  const courseSnap = await getDoc(doc(db, "courses", courseId));

  if (!courseSnap.exists()) {
    loading.value = false;
    return;
  }

  course.value = courseSnap.data();

  if (!auth.currentUser) {
    loading.value = false;
    return;
  }

  const userRef = doc(db, "users", auth.currentUser.uid);
  const userSnap = await getDoc(userRef);

  let courses = userSnap.exists() ? userSnap.data().courses || [] : [];
  let progress = courses.find(c => c.courseId === courseId);

  const todayDate = new Date().toISOString().split("T")[0];

  if (!progress) {
    progress = {
      courseId,
      lastDayCompleted: -1,
      lastDayCompletedDate: null
    };
    courses.push(progress);
    await updateDoc(userRef, { courses });
  }

  userCourseProgress = progress;

  if (courseCompleted.value) {
    todayDay.value = course.value.days.length - 1;
    lockedToday.value = true;
  } else {
    todayDay.value = progress.lastDayCompleted + 1;
  }

  if (
    progress.lastDayCompletedDate === todayDate &&
    !courseCompleted.value
  ) {
    dayCompleted.value = true;
    lockedToday.value = true;
  } else {
    dayCompleted.value = false;
  }

  if (progress.completed) courseCompleted.value = progress.completed

  loading.value = false;
};

const completeDay = async () => {
  loading.value = true
  if (!course.value || !auth.currentUser || !userCourseProgress) return;

  const todayDate = new Date().toISOString().split("T")[0];

  dayCompleted.value = true;
  lockedToday.value = true;

  const userRef = doc(db, "users", auth.currentUser.uid);
  const userSnap = await getDoc(userRef);
  const courses = userSnap.data().courses || [];
  var completed = false
  console.log(courses)
  if (todayDay.value === course.value.days.length - 1) {
    completed = true
    courseCompleted.value = true
  }

  const updatedCourses = courses.map(c =>
    c.courseId === userCourseProgress.courseId
      ? {
        ...c,
        lastDayCompleted: todayDay.value,
        lastDayCompletedDate: todayDate,
        completed: completed
      }
      : c
  );

  await updateDoc(userRef, { courses: updatedCourses });

  const snap = await getDoc(userRef)

  if (snap.exists()) {
    const fullDoc = snap.data()
    userStore.setUserData(fullDoc)
  }

  userCourseProgress.lastDayCompleted = todayDay.value + 1;
  userCourseProgress.lastDayCompletedDate = todayDate;

  todayDay.value = userCourseProgress.lastDayCompleted

  loading.value = false
};

onMounted(fetchCourse);
</script>

<style scoped>
.do-course-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
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

.spinner-text {
  margin-top: 12px;
  color: #666;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.course-title {
  font-weight: bold;
  margin-bottom: 5px;
  text-align: center;
}

.course-theme {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}

.day-section {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 1rem;
  margin-bottom: 20px;
  box-shadow: 0.1rem 0.1rem 1rem 0.2rem rgba(135, 191, 186, 0.4);
  margin-bottom: 5rem;
}

.complete-btn {
  background-color: #87bfba;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.complete-btn:disabled {
  background-color: #aaa;
  cursor: not-allowed;
}

.next-day-locked {
  color: #333;
  font-weight: bold;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 20px;
}
</style>
