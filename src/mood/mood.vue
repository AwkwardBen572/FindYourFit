<template>
  <div class="mood_tracker_holder">
    <div class="mood_heading_holder inter font_size_xs">How am I feeling today?</div>

    <div class="mood_icons_holder">
      <div class="mood_icon_holder" v-for="mood in moods" :key="mood.ref">
        <div :class="mood.icon"
          style="font-size: 3rem; border: 0.2rem solid #87bfba; padding:0.5rem; border-radius: 50%"
          v-if="selectedMood === mood.ref" @click="setMood(mood.ref)"></div>
        <div :class="mood.icon" style="font-size: 3rem" v-else @click="setMood(mood.ref)"></div>
      </div>
    </div>

    <div class="influence_holder" style="height: 25rem;">
      <div class="influence_heading_holder inter font_size_xs"><b>What might be influencing this?</b></div>
      <div class="influence_items_holder">
        <div class="influence_item_holder inter font_size_xxs" v-for="influenceItem in influences"
          :key="influenceItem.ref" style="height: 12%;">
          &emsp;<input type="checkbox" v-model="selectedInfluences" :value="influenceItem.ref" />&nbsp;{{
            influenceItem.label }}
        </div>
      </div>
    </div>

    <div class="influence_holder">
      <div class="influence_heading_holder inter font_size_xs"><b>Optional Notes</b></div>
      <textarea placeholder="Write a few words about why you feel the way you feel"
        style="width: 90%; height: 60%; padding:0.5rem; border: 0.1rem solid #87bfba; border-radius: 1rem;"
        class="inter font_size_xs" v-model="optionalNotes"></textarea>
    </div>

    <div class="save_button inter font_size_xxs" @click="saveMood()">Save</div>
  </div>

  <errorModal v-if="moodSaved" :errorMessage="modalMessage" @close="handleErrorModalClose" />
</template>

<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '@/data/userStore'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/firebase'
import errorModal from '../modals/errorModal.vue'

const userStore = useUserStore()
const emit = defineEmits(['close'])

const moods = computed(() => [
  { label: 'Very Sad', ref: 'very_sad', icon: 'far fa-sad-tear' },
  { label: 'Sad', ref: 'sad', icon: 'far fa-frown' },
  { label: 'Neutral', ref: 'neutral', icon: 'far fa-meh' },
  { label: 'Happy', ref: 'happy', icon: 'far fa-grin' },
  { label: 'Very Happy', ref: 'very_happy', icon: 'far fa-grin-beam' }
])

const influences = computed(() => [
  { label: 'Sleep Quality', ref: 'sleep_quality' },
  { label: 'Nutrition', ref: 'nutrition' },
  { label: 'Physical Activity', ref: 'physical_activity' },
  { label: 'Social Connection', ref: 'social_connection' },
  { label: 'Mindset', ref: 'mindset' },
  { label: 'Environment', ref: 'environment' },
  { label: 'None', ref: 'none' }
])

const moodSaved = ref(false)
const modalMessage = ref('')
const selectedInfluences = ref([])
const optionalNotes = ref('')
const selectedMood = ref('neutral')

const setMood = (mood) => {
  selectedMood.value = mood
}

const saveMood = async () => {
  if (selectedInfluences.value.length === 0) {
    moodSaved.value = true
    modalMessage.value = 'Please select an influence.'
    return
  }

  const dateSaved = new Date().toISOString().split('T')[0]

  const mood = {
    [dateSaved]: {
      mood: selectedMood.value,
      influences: selectedInfluences.value,
      optional_notes: optionalNotes.value,
      mood_logged: serverTimestamp()
    }
  }

  await setDoc(doc(db, 'mood', userStore.userData.uid), mood, { merge: true })

  moodSaved.value = true
  modalMessage.value = 'Thank you for logging your mood. It will be taken into consideration.'
  userStore.setMoodData(mood)
  emit('close')
}

const handleErrorModalClose = () => {
  moodSaved.value = false
  modalMessage.value = ''
}
</script>

<style scoped>
.mood_tracker_holder {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mood_heading_holder {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}

.mood_icons_holder {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2rem;
}

.mood_icon_holder {
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #87bfba;
}

.influence_holder {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0.1rem 0.1rem 1rem 0.2rem rgba(135, 191, 186, 0.4);
  border-radius: 1rem;
  margin-bottom: 2rem;
}

.influence_heading_holder {
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
}

.influence_items_holder {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.influence_item_holder {
  width: 45%;
  height: 15%;
  border: 0.1rem solid #87bfba;
  border-radius: 1rem;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
}

input[type='checkbox'] {
  appearance: none;
  -webkit-appearance: none;
  background-color: #fff;
  border: 2px solid #87bfba;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
}

input[type='checkbox']:checked {
  background-color: #87bfba;
  border-color: #87bfba;
}

input[type='checkbox']:checked::after {
  content: '✔';
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 14px;
}

.save_button {
  width: 10rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background-color: #87bfba;
  color: #fff;
  cursor: pointer;
  margin-bottom: 5rem;
}
</style>
