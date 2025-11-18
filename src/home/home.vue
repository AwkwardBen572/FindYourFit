<template>
  <div class="home_container">
    <div class="greeting_section licorice_regular font_size_m">
      Good {{ getTimeOfDay() }}, {{ userName }}!
    </div>

    <div class="checkin_section">
      <div class="feeling_section">
        <div class="feeling_heading inter font_size_xs">
          <b>How are you feeling today?</b>
        </div>
        <div class="feeling_image"></div>
        <div class="checkin_button inter font_size_xxs" @click="$emit('setPage', 'mood')">
          Check in now
        </div>
      </div>
    </div>

    <div class="features_section">
      <div
        class="feature_card"
        v-for="feature in featureList"
        :key="feature.label"
      >
        <div
          class="feature_icon"
          :style="{
            backgroundImage: `url(${feature.url})`,
            backgroundSize: '50% 80%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }"
        ></div>
        <div class="feature_label inter font_size_xxs">
          <b>{{ feature.label }}</b>
        </div>
      </div>
    </div>

    <div class="inspiration_section">
      <div class="inspiration_heading inter font_size_xxs">
        <b>Inspiration</b>
      </div>
      <div class="quote_text inter font_size_xxs">
        {{ dailyQuote.content }}
      </div>
    </div>

    <div class="offer_section">
      <div class="offer_heading inter font_size_xs">
        <b>What we offer</b>
      </div>
      <div class="offer_list">
        <div class="offer_card" v-for="offer in offerList" :key="offer.label">
          <div class="offer_icon_wrapper">
            <div
              class="feature_icon"
              :style="{
                backgroundImage: `url(${offer.icon})`,
                backgroundSize: '50% 80%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }"
            ></div>
          </div>
          <div class="offer_content_wrapper">
            <div class="offer_title inter font_size_xxs">
              <b>{{ offer.label }}</b>
            </div>
            <div class="offer_description inter font_size_xxs">
              {{ offer.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useUserStore } from '@/data/userStore'
import { getRandomQuote } from '@/data/quotes.js'

import therapistImg from '@/assets/my_therapist.png'
import journalImg from '@/assets/my_journal.png'
import journalImg2 from '@/assets/journal.png'
import coursesImg from '@/assets/my_courses.png'
import therapistImg2 from '@/assets/therapist.png'
import moodImg from '@/assets/mood_Track.png'
import coursesImg2 from '@/assets/courses.png'
import artImg from '@/assets/art.png'

const userStore = useUserStore()
const dailyQuote = ref({ content: '', author: '' })
const logMood = ref(false)

const userName = computed(() => userStore.userData?.personalInfo.name || '')

const featureList = computed(() => [
  { label: 'My Therapist', url: therapistImg },
  { label: 'Journal Entry', url: journalImg },
  { label: 'Explore Courses', url: coursesImg }
])

const offerList = computed(() => [
  {
    label: 'Expert support at your fingertips',
    content: 'Find and connect with qualified therapists specializing in various areas.',
    icon: therapistImg2
  },
  {
    label: 'Personalized mood tracking',
    content: 'Log your daily mood to visualize trends, identify triggers, and gain insights.',
    icon: moodImg
  },
  {
    label: 'Journaling',
    content: 'A private space for self-reflection, prompts, and gain thoughts.',
    icon: journalImg2
  },
  {
    label: 'Curated learning courses',
    content: 'Access a library of free and premium courses on mindfulness, stress management, and CBT techniques.',
    icon: coursesImg2
  },
  {
    label: 'Art Therapy',
    content: "If you're feeling stressed or sad, sometimes it's easier to express it through art than words.",
    icon: artImg
  }
])

onMounted(() => {
  dailyQuote.value = getRandomQuote()
})

const getTimeOfDay = () => {
  const hour = new Date().getHours()
  if (hour < 12) return 'morning'
  if (hour < 18) return 'afternoon'
  return 'evening'
}
</script>

<style scoped>

.home_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
}

.greeting_section {
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}

.checkin_section {
  width: 95%;
  max-width: 600px;
  height: 17rem;
  box-shadow: 0.1rem 0.1rem 1rem 0.2rem rgba(135, 191, 186, 0.4);
  border-radius: 1rem;
  margin-bottom: 2rem;
}

.feeling_section {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.feeling_heading {
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.feeling_image {
  width: 100%;
  height: 50%;
  background-image: url('../assets/feelings_graphic.png');
  background-repeat: no-repeat;
  background-size: 35% 100%;
  background-position: center;
}

.checkin_button {
  width: 10rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background-color: #87bfba;
  color: #ffffff;
  cursor: pointer;
}

.features_section {
  width: 95%;
  height: 7rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
}

.feature_card {
  flex: 1 1 30%;
  height: 100%;
  border-radius: 1rem;
  box-shadow: 0.1rem 0.1rem 1rem 0.2rem rgba(135, 191, 186, 0.4);
  display: flex;
  flex-direction: column;
  margin-right: 1%;
}

.feature_card:last-child {
  margin-right: 0;
}

.feature_icon {
  width: 100%;
  height: 80%;
}

.feature_label {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.inspiration_section {
  width: 95%;
  max-width: 600px;
  box-shadow: 0.1rem 0.1rem 1rem 0.2rem rgba(135, 191, 186, 0.4);
  border-radius: 1rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.inspiration_heading {
  width: 90%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
  padding-top: 1rem;
}

.quote_text {
  width: 90%;
  height: 70%;
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
}

.offer_section {
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.offer_heading {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}

.offer_card {
  width: 100%;
  height: 5rem;
  box-shadow: 0.1rem 0.1rem 1rem 0.2rem rgba(135, 191, 186, 0.4);
  border-radius: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.offer_icon_wrapper {
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.offer_content_wrapper {
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.offer_title {
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.offer_description {
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (max-width: 768px) {
  .checkin_section {
    height: 14rem;
  }

  .feature_card {
    flex: 1 1 30%;
  }
}

@media (max-width: 480px) {
  .checkin_section {
    height: 12rem;
  }

  .checkin_button {
    width: 8rem;
    height: 1.8rem;
  }
}
</style>