<template>
  <div class="profile_container">
    <div class="profile_header">
      <div class="profile_title font_size_s inter"></div>
      <div class="profile_edit_btn">
        <i class="fas fa-edit" @click="editProfile()"></i>
      </div>
    </div>

    <div class="profile_info">
      <div class="profile_avatar_wrapper">
        <div class="profile_avatar" :style="{
          backgroundImage: `url(${avatarSrc})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }"></div>
      </div>

      <div class="pfp_edit_button">
        <i class="fas fa-edit" @click="editProfileAvatar()"></i>
        <input
          type="file"
          ref="fileInput"
          style="display:none"
          accept="image/*"
          @change="handleImageUpload"
        />
      </div>

      <div class="profile_user_details font_size_s inter">
        {{ userName }}
        <span class="font_size_xxs">{{ userEmail }}</span>
      </div>
    </div>

    <div class="profile_stats">
      <div class="profile_stat_card" v-for="(item, index) in stats" :key="index">
        <div class="profile_stat_top inter font_size_xs">
          <div class="profile_stat_value" v-if="item.label === 'Mood Trends'">
            <div v-if="mood">
              <i :class="item.value" style="font-size:1.5rem;"></i>&nbsp;
            </div>
            <div v-else>
              <i class="far fa-meh" style="font-size:1.5rem;"></i>&nbsp;
            </div>
          </div>
          <div class="profile_stat_value" v-else>{{ item.value }}</div>
          <div class="profile_stat_icon">
            <i :class="item.icon" :style="{ color: '#87bfba' }"></i>
          </div>
        </div>
        <div class="profile_stat_label inter font_size_xs">{{ item.label }}</div>
      </div>
    </div>
  </div>

  <profileEdit
    v-if="editProfileBool"
    @close="editProfileBool = false"
    :globalUser="userStore"
    :viewPoint="profileEdit"
  />

  <profileAvatar
    v-if="avatarProfileBool"
    @close="avatarProfileBool = false"
    :globalUser="userStore"
    :viewPoint="profileAvatar"
  />
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useUserStore } from '@/data/userStore'
import profileEdit from '../profile/profileEdit.vue'
import profileAvatar from '../profile/profileAvatar.vue'
import { doc, updateDoc } from "firebase/firestore"

import brownMan from '@/assets/avatars/brown_man.png'
import blondeMan from '@/assets/avatars/blonde_man.png'
import gingerMan from '@/assets/avatars/ginger_man.png'
import blackMan from '@/assets/avatars/black_man.png'
import brownWoman from '@/assets/avatars/brunette_woman.png'
import blondeWoman from '@/assets/avatars/blonde_woman.png'
import gingerWoman from '@/assets/avatars/ginger_woman.png'
import blackWoman from '@/assets/avatars/black_woman.png'
import none from '@/assets/avatars/none.png'

const userStore = useUserStore()
const mood = ref(false)
const editProfileBool = ref(false)
const avatarProfileBool = ref(false)
const globalUser = ref(null)

const avatarMap = {
  brown_man: brownMan,
  blonde_man: blondeMan,
  ginger_man: gingerMan,
  black_man: blackMan,
  brown_woman: brownWoman,
  blonde_woman: blondeWoman,
  ginger_woman: gingerWoman,
  black_woman: blackWoman,
  none: none
}

const avatarSrc = computed(() => {
  const ref = userStore.userData?.profileAvatar || 'none'
  return avatarMap[ref] || none
})

const userName = computed(() => userStore.userData?.personalInfo.name || '')
const userEmail = computed(() => userStore.userData?.personalInfo.email || '')
const userStreak = computed(() => userStore.userData?.streak?.count || 0)
const journalEntries = computed(() => userStore.journalData.length || 0)
const courseAmounts = computed(() => userStore.userData?.personalInfo.courses?.length || 0)

const moods = computed(() => [
  { label: 'Very Sad', ref: 'very_sad', icon: 'far fa-sad-tear' },
  { label: 'Sad', ref: 'sad', icon: 'far fa-frown' },
  { label: 'Neutral', ref: 'neutral', icon: 'far fa-meh' },
  { label: 'Happy', ref: 'happy', icon: 'far fa-grin' },
  { label: 'Very Happy', ref: 'very_happy', icon: 'far fa-grin-beam' }
])

const stats = ref([
  { label: 'App Streak', value: userStreak.value, icon: 'fa fa-signal' },
  { label: 'Journal Entries', value: journalEntries.value, icon: 'fa fa-book' },
  { label: 'Mood Trends', value: '', icon: 'fas fa-chart-line' },
])

onMounted(() => {
  globalUser.value = userStore.userData

  const todaysDate = new Date().toISOString().split('T')[0]

  if (!userStore.moodData || !userStore.moodData[todaysDate]) return

  mood.value = true
  const todayMood = userStore.moodData[todaysDate]

  for (const moodOption of moods.value) {
    if (moodOption.ref === todayMood.mood) {
      stats.value[2].value = moodOption.icon
      break
    }
  }
})

const editProfile = () => { editProfileBool.value = true }
const editProfileAvatar = () => { avatarProfileBool.value = true }

const handleImageUpload = (event) => {
  console.log('Image selected:', event.target.files[0])
}
</script>

<style scoped>
.profile_container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: clamp(1rem, 2vw, 2rem);
  box-sizing: border-box;
}

.profile_header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: clamp(1rem, 2vw, 2rem);
}

.profile_title {
  flex: 1;
  text-align: center;
}

.profile_edit_btn {
  color: #87bfba;
  cursor: pointer;
}

.profile_info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: clamp(3rem, 2vw, 2rem);
}

.profile_avatar_wrapper {
  width: clamp(6rem, 20vw, 9rem);
  height: clamp(6rem, 20vw, 9rem);
  border-radius: 50%;
  border: 0.15rem solid #87bfba;
  background-color: #87bfba;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.profile_avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pfp_edit_button {
  width: 7rem;
  display: flex;
  justify-content: flex-end;
  color: #87bfba;
}

.profile_user_details {
  margin-top: 1rem;
  text-align: center;
}

.profile_user_details span {
  display: block;
  margin-top: 0.3rem;
  color: #777;
}

.profile_stats {
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: clamp(0.8rem, 2vw, 1.5rem);
  justify-content: center;
}

.profile_stat_card {
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0.1rem 0.1rem 1rem 0.2rem rgba(135, 191, 186, 0.4);
  padding: clamp(0.8rem, 2vw, 1.2rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.profile_stat_top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.profile_stat_value {
  font-weight: 600;
}

.profile_stat_icon {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.profile_stat_label {
  margin-top: 0.5rem;
  text-align: center;
  color: #555;
}

@media (max-width: 768px) {
  .profile_header {
    flex-direction: column;
    gap: 0.5rem;
  }
}

@media (min-width: 1200px) {
  .profile_stats {
    max-width: 1000px;
  }
}
</style>