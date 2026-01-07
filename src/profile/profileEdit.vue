<template>
  <div class="modal_overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <div class="modal_holder">
      <div id="modal-title" class="modal_heading_holder inter font_size_xs">
        <span style="width: 80%;">Edit User Information</span>
        <button class="modal_close_button" @click="$emit('close')">&times;</button>
      </div>

      <div class="modal_content_holder inter font_size_xs">
        <div class="modal_content_description">
          We collect your name, date of birth, and contact number to create your profile,
          personalize your therapy experience, and stay in touch for updates or support.
          Your information is kept secure and private at all times.
        </div>

        <form class="modal_form_holder" @submit.prevent="registerUserInfo">
          <input class="modal_input inter font_size_xs" type="text" placeholder="Name & Surname" v-model="nameSurname"
            required />

          <input class="modal_input inter font_size_xs" type="tel" placeholder="Contact Number" v-model="contactNumber"
            required />

          <input class="modal_input inter font_size_xs" type="text" placeholder="Date of Birth (yyyy/mm/dd)"
            v-model="dateOfBirth" required />

          <select class="modal_input inter font_size_xs" v-model="selectedOption">
            <option disabled value="">Please select one</option>
            <option v-for="option in options" :key="option.value" :value="option.value">
              {{ option.text }}
            </option>
          </select>

          <select class="modal_input inter font_size_xs" v-model="selectedCountry">
            <option disabled value="">Select your country</option>
            <option v-for="country in countries" :key="country.cca3" :value="country.cca3">
              {{ country.name.common }}
            </option>
          </select>

          <button type="submit" class="modal_button inter font_size_xs">Confirm</button>
        </form>
      </div>
    </div>

    <errorModal v-if="error" :errorMessage="errorMessage" @close="handleErrorModalClose" />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { getAuth } from 'firebase/auth'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'
import { useUserStore } from '@/data/userStore'
import { db } from '@/firebase'
import errorModal from '../modals/errorModal.vue'

const userStore = useUserStore()
const emit = defineEmits(['close'])
const props = defineProps({ globalUser: { type: Object, required: true } })

const countries = ref([])
const selectedCountry = ref('')
const nameSurname = ref('')
const contactNumber = ref('')
const dateOfBirth = ref('')
const selectedOption = ref('')
const errorMessage = ref('')
const error = ref(false)

const options = [
  { value: 'male', text: 'Male' },
  { value: 'female', text: 'Female' },
  { value: 'other', text: 'Other' }
]

const STORAGE_KEY = 'editProfileForm'

onMounted(async () => {
  const res = await fetch('https://restcountries.com/v3.1/all?fields=name,cca3')
  const data = await res.json()
  countries.value = data.sort((a, b) => a.name.common.localeCompare(b.name.common))

  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
  if (saved) {
    nameSurname.value = saved.nameSurname || ''
    contactNumber.value = saved.contactNumber || ''
    dateOfBirth.value = saved.dateOfBirth || ''
    selectedOption.value = saved.selectedOption || ''
    selectedCountry.value = saved.selectedCountry || ''
  }
})

watch(
  [nameSurname, contactNumber, dateOfBirth, selectedOption, selectedCountry],
  () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        nameSurname: nameSurname.value,
        contactNumber: contactNumber.value,
        dateOfBirth: dateOfBirth.value,
        selectedOption: selectedOption.value,
        selectedCountry: selectedCountry.value
      })
    )
  },
  { deep: true }
)

function isValid10DigitContact(contact) {
  return /^\d{10}$/.test(contact)
}

function isValidDateFormat(dateStr) {
  const regex = /^\d{4}\/\d{2}\/\d{2}$/
  if (!regex.test(dateStr)) return false
  const [y, m, d] = dateStr.split('/').map(Number)
  const date = new Date(y, m - 1, d)
  return date.getFullYear() === y && date.getMonth() === m - 1 && date.getDate() === d
}

const registerUserInfo = async () => {
  const auth = getAuth()
  const currentUser = auth.currentUser
  error.value = false
  errorMessage.value = ''

  if (!isValid10DigitContact(contactNumber.value)) {
    errorMessage.value = 'Contact Number must be a valid 10-digit number.'
    error.value = true
    return
  }

  if (!isValidDateFormat(dateOfBirth.value)) {
    errorMessage.value = 'Date of Birth must be in the format yyyy/mm/dd.'
    error.value = true
    return
  }

  const userData = props.globalUser.userData

  const user = {
    personalInfo: {
      name: nameSurname.value,
      contactNumber: contactNumber.value,
      dateOfBirth: dateOfBirth.value,
      email: userData.email || currentUser.email,
      gender: selectedOption.value,
      country: selectedCountry.value
    },
    uid: userData.uid || currentUser.uid,
    loginDate: userData.loginDate,
    streak: userData.streak,
    profileEdited: serverTimestamp()
  }

  userStore.setUserData(user)
  await setDoc(doc(db, 'users', user.uid), user)
  localStorage.removeItem(STORAGE_KEY)
  emit('close')
}

const handleErrorModalClose = () => {
  error.value = false
  errorMessage.value = ''
}
</script>