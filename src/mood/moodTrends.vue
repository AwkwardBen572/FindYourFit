<template>
  <div class="mood_trends_holder">
    <div class="mood_trends_heading_holder inter font_size_xs">
      My Mood Overview
    </div>
    <br>
    <div class="mood_trends_timerange_holder">
      <div v-for="timeItem in timeItems" :key="timeItem.key" class="mood_trends_timerange inter font_size_xxs"
        :class="{ mood_trends_timerange_selected: selectedRange === timeItem.key }"
        @click="selectedRange = timeItem.key">
        {{ timeItem.label }}
      </div>
    </div>
    <br>
    <br>
    <div class="mood_trends_graph_holder">
      <canvas id="moodPieChart" width="400" height="300"></canvas>
    </div>
    <br>
    <div class="mood_trends_items">
      <div class="mood_trend_explained_holder"  v-for="mood in moods">
        <div class="mood_trend_color" :style="{ backgroundColor: mood.color }"></div>
        &emsp;
        <i :class="mood.icon" style="font-size:1.4rem;" :style="{color: mood.color}"></i>&nbsp;
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, nextTick, computed } from "vue"
import { doc, getDoc } from "firebase/firestore"
import { db } from "@/firebase"
import { useUserStore } from '@/data/userStore'
import { Chart, PieController, ArcElement, Tooltip, Legend } from 'chart.js'

Chart.register(PieController, ArcElement, Tooltip, Legend)

const moods = computed(() => [
  { label: 'Very Sad', ref: 'very_sad', icon: 'far fa-sad-tear', color: "#6A5D7B" },
  { label: 'Sad', ref: 'sad', icon: 'far fa-frown', color: "#9FB1BC" },
  { label: 'Neutral', ref: 'neutral', icon: 'far fa-meh', color: "#87BFBA" },
  { label: 'Happy', ref: 'happy', icon: 'far fa-grin', color: "#F3C677" },
  { label: 'Very Happy', ref: 'very_happy', icon: 'far fa-grin-beam', color: "#F28C8C" }
])
const userStore = useUserStore()
const selectedRange = ref("7_days")
const moodsInRange = ref([])
const chartInstance = ref(null)

const timeItems = [
  { key: "7_days", label: "7 Days", days: 7 },
  { key: "30_days", label: "30 Days", days: 30 },
  { key: "90_days", label: "3 Months", days: 90 }
]

const userId = userStore.userData.uid

function getDateRange(rangeKey) {
  const item = timeItems.find(i => i.key === rangeKey)
  const end = new Date()
  const start = new Date()
  start.setDate(end.getDate() - item.days)
  return { start, end }
}

async function loadMoodTrends() {
  const snap = await getDoc(doc(db, "mood", userId))
  if (!snap.exists()) {
    moodsInRange.value = []
    updateChart()
    return
  }

  const data = snap.data()
  const { start, end } = getDateRange(selectedRange.value)

  moodsInRange.value = Object.values(data).filter(entry => {
    if (!entry.mood_logged) return false

    let loggedAt
    if (entry.mood_logged.toDate) {
      loggedAt = entry.mood_logged.toDate()
    } else {
      loggedAt = new Date(entry.mood_logged)
    }

    return loggedAt >= start && loggedAt <= end
  })

  updateChart()
}

function computeMoodData() {
  const moodCounts = {}
  moodsInRange.value.forEach(entry => {
    const mood = entry.mood_value || entry.mood || "Unknown"
    moodCounts[mood] = (moodCounts[mood] || 0) + 1
  })

  return {
    labels: Object.keys(moodCounts),
    data: Object.values(moodCounts)
  }
}

function updateChart() {
  nextTick(() => {
    const ctx = document.getElementById("moodPieChart")?.getContext("2d")
    if (!ctx) return

    const { labels, data } = computeMoodData()

    if (chartInstance.value) {
      chartInstance.value.data.datasets[0].data = data
      chartInstance.value.update()
    } else {
      chartInstance.value = new Chart(ctx, {
        type: 'pie',
        data: {
          datasets: [{
            data,
            backgroundColor: ['#6A5D7B', '#9FB1BC', '#87BFBA', '#F3C677', '#F28C8C']
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: 'bottom' },
            tooltip: { enabled: true }
          }
        }
      })
    }
  })
}


watch(selectedRange, loadMoodTrends)
onMounted(loadMoodTrends)
</script>

<style scoped>
.mood_trends_holder {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
}

.mood_trends_heading_holder {
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mood_trends_timerange_holder {
  width: 90%;
  height: 2rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid #87bfba;
}

.mood_trends_timerange {
  width: 33.34%;
  height: 100%;
  border-radius: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.mood_trends_timerange_selected {
  background-color: #87bfba;
}

.mood_trends_graph_holder {
  width: 90%;
  height: 20rem;
  border-radius: 1rem;
  box-shadow: 0.1rem 0.1rem 1rem 0.2rem rgba(135, 191, 186, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: .5rem;
}

.mood_trends_items {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
}

.mood_trend_explained_holder {
  width: 18%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
}

.mood_trend_color {
  width: 1rem;
  height: 1rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
}
</style>
