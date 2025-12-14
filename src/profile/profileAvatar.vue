<template>
  <div class="modal_overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <div class="modal_holder">
      <div id="modal-title" class="modal_heading_holder inter font_size_xs">
        <span style="width: 80%;">Profile Avatar</span>
        <button class="modal_close_button" @click="$emit('close')">&times;</button>
      </div>

      <div class="modal_content_holder inter font_size_xs">
        <div class="modal_avatars_holder" v-for="avatar in avatars" :key="avatar.ref">
          <div
            v-if="avatar.ref === selectedAvatar"
            class="modal_avatar_selected"
            @click="selectAvatar(avatar.ref)"
            :style="{
              backgroundImage: `url(${avatar.url})`,
              backgroundSize: '100% 100%',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat'
            }"
          ></div>
          <div
            v-else
            class="modal_avatar"
            @click="selectAvatar(avatar.ref)"
            :style="{
              backgroundImage: `url(${avatar.url})`,
              backgroundSize: '100% 100%',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat'
            }"
          ></div>
        </div>
      </div>

      <button type="submit" class="modal_button inter font_size_xs" @click="setProfileAvatar()">
        Confirm
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { doc, setDoc, serverTimestamp } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { useUserStore } from '@/data/userStore'
import { db } from '@/firebase'

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

const avatars = computed(() => [
  { label: 'Brown Hair', url: brownMan, ref: 'brown_man' },
  { label: 'Blonde Hair', url: blondeMan, ref: 'blonde_man' },
  { label: 'Ginger Hair', url: gingerMan, ref: 'ginger_man' },
  { label: 'Black Hair', url: blackMan, ref: 'black_man' },
  { label: 'Brown Hair Woman', url: brownWoman, ref: 'brown_woman' },
  { label: 'Blonde Hair Woman', url: blondeWoman, ref: 'blonde_woman' },
  { label: 'Ginger Hair Woman', url: gingerWoman, ref: 'ginger_woman' },
  { label: 'Black Hair Woman', url: blackWoman, ref: 'black_woman' },
  { label: 'None', url: none, ref: 'none' }
])

const emit = defineEmits(['close'])

const props = defineProps({
  globalUser: { type: Object, required: true }
})

const selectedAvatar = ref('none')

const selectAvatar = (avatar) => {
  selectedAvatar.value = avatar
}

const setProfileAvatar = async () => {
  const auth = getAuth()
  const userData = props.globalUser.userData
  const currentUser = auth.currentUser

  const user = {
    profileAvatar: selectedAvatar.value,
    profileEdited: serverTimestamp()
  }

  await setDoc(doc(db, "users", userData.uid ? userData.uid : currentUser.uid), user, { merge: true })
  userStore.userData.profileAvatar = selectedAvatar.value
  emit('close')
}
</script>

<style scoped>
.modal_overlay {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.45);
  z-index: 1000;
}

.modal_holder {
  width: 90%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000000;
}

.modal_heading_holder {
  width: 100%;
  padding: 0.3rem;
  background-color: #87bfba;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
}

.modal_close_button {
  width: 10%;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #fff;
  transition: transform 0.2s ease, color 0.2s ease;
}

.modal_content_holder {
  width: 80%;
  padding: 1rem;
  overflow: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
}

.modal_avatars_holder {
  height: 100%;
  width: 28%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.modal_avatar {
  width: 100%;
  height: 5rem;
  margin: 0.2rem;
}

.modal_avatar_selected {
  width: 100%;
  height: 5rem;
  box-shadow: 0.1rem 0.1rem 1rem 0.2rem rgba(135, 191, 186, 1);
  margin: 0.2rem;
  border-radius: 2rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.modal_button {
  width: 40%;
  height: 2.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: #87bfba;
  border: none;
  border-radius: 0.5rem;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.modal_button:hover {
  background-color: #6ea09a;
}
</style>