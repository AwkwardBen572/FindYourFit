<template>
  <div class="empty_therapy_list inter font_size_xs" v-if="!therapistListExists && !signUpStep">
    No therapists are listed at this moment.
  </div>

  <div class="therapy_sign_up" v-else>
    <div class="logo_holder">
      <div class="logo"></div>
      <div class="inter font_size_xs">
        &emsp;<b style="color:#87bfba">FindingYourFit</b>&emsp;
      </div>
      <div class="logo"></div>
    </div>
    <div class="therapy_sign_up_step_1" v-if="signUpStep === 'step_1'">
      <div class="therapy_sign_up_heading inter font_size_xs">
        <b>Let's get you signed up and listed!</b>
      </div>
      <br />
      <form class="therapist_sign_up_form_holder">
        <input
          class="form_input inter font_size_xs"
          type="text"
          placeholder="Email Address"
          v-model="email"
          required
        />
        <input
          class="form_input inter font_size_xs"
          type="text"
          placeholder="Username"
          v-model="username"
          required
        />
        <input
          class="form_input inter font_size_xs"
          :type="inputType"
          placeholder="Password"
          v-model="password"
          required
        />
        <div class="show_password_toggle inter font_size_xs">
          <label>
            <input type="checkbox" @change="togglePassword" />
            Show Password
          </label>
        </div>
        <select class="form_input inter font_size_xs" v-model="selectedTitle">
          <option disabled value="">Select your title</option>
          <option v-for="t in title" :key="t.value">
            {{ t.text }}
          </option>
        </select>
        <input
          class="form_input inter font_size_xs"
          type="text"
          placeholder="Name & Surname"
          v-model="nameSurname"
          required
        />
        <select class="form_input inter font_size_xs" v-model="selectedAcademicTitle">
          <option disabled value="">Select your academic title</option>
          <option v-for="a in academicTitle" :key="a.value">
            {{ a.text }}
          </option>
        </select>
        <select class="form_input inter font_size_xs" v-model="selectedCredential">
          <option disabled value="">Select your credential</option>
          <option v-for="credential in credentialOptions" :key="credential.value">
            {{ credential.text }}
          </option>
        </select>
        <input v-model="addressSelected" ref="addressInput" class="form_input inter font_size_xs" type="text" placeholder="Search address" />
        <input
          class="form_input inter font_size_xs"
          type="text"
          placeholder="ID Number"
          v-model="idNumber"
          required
        />
      </form>
      <button type="submit" class="form_button inter font_size_xs" @click="addTherapist()">
          Confirm
        </button>
    </div>
  </div>
  <div class="sign_up_button_holder inter font_size_s" v-if="!signUpStep">
    <i class="fas fa-plus" @click="signUpAsTherapist()"></i>
  </div>
    <errorModal v-if="error" :errorMessage="errorMessage" @close="error = false" />
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'
import { useUserStore } from '@/data/userStore'
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore"
import errorModal from '../modals/errorModal.vue'
import { auth, db } from '../firebase.js'

const userStore = useUserStore()

const email = ref(userStore.userData.personalInfo.email)
const nameSurname = ref(userStore.userData.personalInfo.name)
const idNumber = ref('')
const username = ref('')
const password = ref('')
const inputType = ref('password')
const errorMessage = ref('')
const error = ref(false)
const addressSelected = ref('')

const signUpStep = ref(null)
const therapistListExists = ref(false)

const title = ref([
  { value: 'dr', text: 'Dr.' },
  { value: 'mr', text: 'Mr.' },
  { value: 'mrs', text: 'Mrs.' },
  { value: 'miss', text: 'Miss.' },
  { value: 'ms', text: 'Ms.' },
  { value: 'mx', text: 'Mx.' },
  { value: 'prof', text: 'Prof.' },
  { value: 'rev', text: 'Rev.' },
  { value: 'rev_dr', text: 'Rev. Dr.' },
  { value: 'rabbi', text: 'Rabbi.' },
  { value: 'sister', text: 'Sister.' }
])
const selectedTitle = ref('')

const academicTitle = ref([
  { value: 'mp_psych', text: 'MpPsych' },
  { value: 'phd', text: 'PhD' },
  { value: 'msc', text: 'MSc' },
  { value: 'ma', text: 'Ma' },
  { value: 'msocsci', text: 'MSocSci' },
  { value: 'mbchb', text: 'MBCHb' },
  { value: 'other', text: 'Other' }
])

const credentialOptions = ref([
  { value: 'social_worker', text: 'Social Worker' },
  { value: 'psychiatrist', text: 'Psychiatrist' },
  { value: 'psychologist', text: 'Psychologist' },
  { value: 'g_counsellor', text: 'General Counselor' },
  { value: 'registered_psycho', text: 'Registered Psychotherapist' },
  { value: 'registered_counsellor', text: 'Registered Counsellor' },
  { value: 'other', text: 'Other' }
])
const selectedCredential = ref('')

const selectedAcademicTitle = ref('')
const addressInput = ref(null)
const selectedAddress = ref(null)
let autocomplete = null

function loadGoogleMaps() {
  return new Promise((resolve, reject) => {
    if (window.google?.maps?.places) {
      resolve()
      return
    }

    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBWGRHjfWWoBWojyOBuGi75ACgNAkGobws&libraries=places`
    script.async = true
    script.defer = true

    script.onload = resolve
    script.onerror = reject

    document.head.appendChild(script)
  })
}

watch(signUpStep, async (step) => {
  if (step !== 'step_1') return

  await nextTick()
  await loadGoogleMaps()

  if (!addressInput.value) return

  autocomplete = new google.maps.places.Autocomplete(addressInput.value, {
    types: ['address'],
    componentRestrictions: { country: 'za' },
    fields: ['address_components', 'formatted_address', 'geometry'],
  })

  autocomplete.addListener('place_changed', () => {
    const place = autocomplete.getPlace()
    if (!place.address_components) return
    selectedAddress.value = parseAddress(place)
    console.log('Selected address:', selectedAddress.value)
  })
})

function parseAddress(place) {
  const components = {}
  place.address_components.forEach(c =>
    c.types.forEach(t => (components[t] = c.long_name))
  )

  return {
    fullAddress: place.formatted_address,
    street: `${components.street_number || ''} ${components.route || ''}`.trim(),
    city: components.locality || components.sublocality || '',
    province: components.administrative_area_level_1 || '',
    postalCode: components.postal_code || '',
    country: components.country || '',
    lat: place.geometry.location.lat(),
    lng: place.geometry.location.lng(),
  }
}

const signUpAsTherapist = () => {
  signUpStep.value = 'step_1'
}

const togglePassword = () => {
  inputType.value = inputType.value === 'password' ? 'text' : 'password'
}

const addTherapist = async () => {

  console.log(addressSelected.value)

  if(!validateEmail(email.value)) {
    errorMessage.value = 'Invalid email format!'
    error.value = true
    return
  }

  if(!username.value) {
    errorMessage.value = 'Please insert a username!'
    error.value = true
    return
  }

  if(!password.value) {
    errorMessage.value = 'Please insert a password!'
    error.value = true
    return
  }

  if(!selectedTitle.value) {
    errorMessage.value = 'Please select a title!'
    error.value = true
    return
  }

  if(!nameSurname.value) {
    errorMessage.value = 'Please insert your full name and surname!'
    error.value = true
    return
  }

  if(!selectedAcademicTitle.value) {
    errorMessage.value = 'Please select an academic title!'
    error.value = true
    return
  }

  if(!selectedCredential.value) {
    errorMessage.value = 'Please select your credentials!'
    error.value = true
    return
  }

   if(!selectedAddress.value) {
    errorMessage.value = 'Please select your address!'
    error.value = true
    return
  }

  if(!idNumber.value || idNumber.value.length !== 13) {
    errorMessage.value = 'Please inert a valid id number!'
    error.value = true
    return
  }

  const therapistData = {
    nameSurname: nameSurname.value,
    userName: username.value,
    title: selectedTitle.value,
    email: email.value,
    credential: selectedCredential.value,
    academicTitle: selectedAcademicTitle.value,
    address: selectedAddress.value,
    idNumber: idNumber.value
  }
  console.log(therapistData)

  await setDoc(doc(db, "therapists", userStore.userData.uid), therapistData)
}

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

</script>

<style scoped>
.empty_therapy_list {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sign_up_button_holder {
  position: fixed;
  bottom: 5rem;
  right: 1.5rem;
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

.therapy_sign_up {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo_holder {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 10%;
  height: 50%;
  background-image: url("../../src/assets/logo.png");
  background-size: contain;
  background-repeat: no-repeat;
}

.therapy_sign_up_step_1 {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.therapist_sign_up_form_holder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
}

.form_input {
  width: 90%;
  min-height: 2.5rem;
  border: 1px solid #ccc;
  border-radius: 0.4rem;
  padding: 0 0.5rem;
  box-sizing: border-box;
}

select.form_input {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: white;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 140 140' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='20,50 70,100 120,50' fill='none' stroke='%23999' stroke-width='15'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.6rem center;
  background-size: 0.7rem;
  padding-right: 2rem;
}

.show_password_toggle {
  width: 90%;
  font-size: 0.9rem;
}

.form_button {
  width: 80%;
  height: 2.5rem;
  margin-top: 1rem;
  background-color: #87bfba;
  border: none;
  border-radius: 0.5rem;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
</style>
