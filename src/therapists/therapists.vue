<template>
  <div
    class="empty_therapy_list inter font_size_xs"
    v-if="signUpStep === 'home_list' && verifiedTherapistList.length === 0 && unverifiedTherapistList.length >= 0"
  >
    No therapists are listed at this moment.
  </div>

  <div class="therapy_sign_up" v-else>
    <!-- <div class="logo_holder">
      <div class="logo"></div>
      <div class="inter font_size_xs">
        &emsp;<b style="color:#87bfba">FindingYourFit</b>&emsp;
      </div>
      <div class="logo"></div>
    </div> -->

    <div class="therapy_sign_up_step_1" v-if="signUpStep === 'step_1'">
      <div class="therapy_sign_up_heading inter font_size_xs">
        <b>Let's get you signed up and listed!</b>
      </div>
      <br />

      <form class="therapist_sign_up_form_holder">
        <input class="form_input inter font_size_xs" type="text" placeholder="Email Address" v-model="email" />
        <input class="form_input inter font_size_xs" type="text" placeholder="Username" v-model="username" />

        <select class="form_input inter font_size_xs" v-model="selectedTitle">
          <option disabled value="">Select your title</option>
          <option v-for="t in title" :key="t.value" :value="t.value">
            {{ t.text }}
          </option>
        </select>

        <input
          class="form_input inter font_size_xs"
          type="text"
          placeholder="Name & Surname"
          v-model="nameSurname"
        />

        <select class="form_input inter font_size_xs" v-model="selectedAcademicTitle">
          <option disabled value="">Select your academic title</option>
          <option v-for="a in academicTitle" :key="a.value" :value="a.value">
            {{ a.text }}
          </option>
        </select>

        <select class="form_input inter font_size_xs" v-model="selectedCredential">
          <option disabled value="">Select your credential</option>
          <option v-for="c in credentialOptions" :key="c.value" :value="c.value">
            {{ c.text }}
          </option>
        </select>

        <input
          ref="addressInput"
          class="form_input inter font_size_xs"
          type="text"
          placeholder="Search address"
        />
      </form>

      <button class="form_button inter font_size_xs" @click="addTherapist">
        Confirm
      </button>
    </div>

    <div style="width: 100%; height: 100%;" v-else-if="signUpStep === 'verify_therapist'">
      <div v-if="unverifiedTherapistList.length">
        <div
          class="therapist_items_holder inter font_size_xs"
          v-for="therapist in unverifiedTherapistList"
          :key="therapist.userName"
        >
          <div class="therapist_item_holder">
            <b>{{ therapist.nameSurname }}</b><br />
            {{ therapist.email }}<br />
            {{ therapist.credential }}<br />
            {{ therapist.address.city }}, {{ therapist.address.province }}

            <div class="contact_buttons_holder">
              <div class="contact_button" @click="acceptTherapist(therapist)">
                <i class="fas fa-user-check"></i>
              </div>
              <div class="contact_button" @click="declineTherapist(therapist)">
                <i class="fas fa-user-times"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="empty_therapy_list inter font_size_xs" v-else>
        <div>No therapists need verifying at this moment.</div>
        <div class="sign_up_button_holder inter font_size_s">
          <i class="far fa-address-book" @click="therapistHomeList"></i>
        </div>
      </div>
    </div>

    <div v-else-if="signUpStep === 'home_list' && verifiedTherapistList.length" style="width: 100%; height: 100%;">
      <div
        class="therapist_items_holder inter font_size_xs"
        v-for="therapist in verifiedTherapistList"
        :key="therapist.userName"
      >
        <div class="therapist_item_holder">
          <b>{{ therapist.nameSurname }}</b><br />
          {{ capitalize(therapist.credential) }}<br />
          {{ therapist.address.city }}, {{ therapist.address.province }}
        </div>
      </div>
    </div>
  </div>

  <div class="sign_up_button_holder inter font_size_s" v-if="signUpStep === 'home_list'">
    <i class="fas fa-plus" @click="signUpAsTherapist"></i>
  </div>

  <div
    class="verify_therapists_holder inter font_size_s"
    v-if="signUpStep === 'home_list' && isAdmin === 1"
  >
    <i class="fas fa-award" @click="verifyTherapists"></i>
  </div>

  <errorModal v-if="error" :errorMessage="errorMessage" @close="error = false" />
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'
import { useUserStore } from '@/data/userStore'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { db } from '../firebase.js'
import errorModal from '../modals/errorModal.vue'

const userStore = useUserStore()

const email = ref(userStore.userData.personalInfo.email)
const nameSurname = ref(userStore.userData.personalInfo.name)
const username = ref('')
const isAdmin = ref(userStore.userData.admin || 0)

const signUpStep = ref('home_list')

const verifiedTherapistList = ref([])
const unverifiedTherapistList = ref([])

const selectedTitle = ref('')
const selectedAcademicTitle = ref('')
const selectedCredential = ref('')

const selectedAddress = ref(null)
const addressInput = ref(null)

const error = ref(false)
const errorMessage = ref('')

const title = ref([
  { value: 'dr', text: 'Dr.' },
  { value: 'mr', text: 'Mr.' },
  { value: 'mrs', text: 'Mrs.' },
  { value: 'miss', text: 'Miss.' },
  { value: 'ms', text: 'Ms.' }
])

const academicTitle = ref([
  { value: 'phd', text: 'PhD' },
  { value: 'msc', text: 'MSc' },
  { value: 'ma', text: 'MA' }
])

const credentialOptions = ref([
  { value: 'psychologist', text: 'Psychologist' },
  { value: 'psychiatrist', text: 'Psychiatrist' },
  { value: 'social_worker', text: 'Social Worker' }
])

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

function capitalize(value) {
    if (!value) return ''
    return (value.charAt(0).toUpperCase() + value.slice(1)).replace("_", " ")
  }


onMounted(() => {
  verifiedTherapistList.value = []
  unverifiedTherapistList.value = []

  userStore.therapists?.forEach(t => {
    t.isVerified
      ? verifiedTherapistList.value.push(t)
      : unverifiedTherapistList.value.push(t)
  })
})

watch(signUpStep, async step => {
  if (step !== 'step_1') return
  await nextTick()
  await loadGoogleMaps()

  if (!addressInput.value) return

  const autocomplete = new google.maps.places.Autocomplete(addressInput.value, {
    types: ['address'],
    componentRestrictions: { country: 'za' }
  })

  autocomplete.addListener('place_changed', () => {
    const place = autocomplete.getPlace()
    selectedAddress.value = {
      city: place.address_components?.find(c => c.types.includes('locality'))?.long_name || '',
      province: place.address_components?.find(c => c.types.includes('administrative_area_level_1'))?.long_name || ''
    }
  })
})

const signUpAsTherapist = () => (signUpStep.value = 'step_1')
const verifyTherapists = () => (signUpStep.value = 'verify_therapist')
const therapistHomeList = () => (signUpStep.value = 'home_list')

const addTherapist = async () => {
  if (!selectedAddress.value) {
    errorMessage.value = 'Please select an address'
    error.value = true
    return
  }

  const therapistRef = doc(db, 'therapists', userStore.userData.uid)
  const therapistSnap = await getDoc(therapistRef)

  if (therapistSnap.exists()) {
    errorMessage.value = 'You are already registered as a therapist.'
    error.value = true
    return
  }

  await setDoc(therapistRef, {
    email: email.value,
    nameSurname: nameSurname.value,
    userName: username.value,
    title: selectedTitle.value,
    academicTitle: selectedAcademicTitle.value,
    credential: selectedCredential.value,
    address: selectedAddress.value,
    isVerified: false,
    createdAt: new Date()
  })

  errorMessage.value = 'Thank you. You will be redirected shortly.'
  error.value = true

  setTimeout(() => {
    window.location.href =
      'https://docs.google.com/forms/d/e/1FAIpQLSe2kKgs6Qnvl1uNfVSVEjUeCRmM8jv6E6O-6xhy-1mIiAYvLg/viewform'
  }, 8000)
}

const acceptTherapist = async therapist => {
  await setDoc(doc(db, 'therapists', therapist.id), {
    isVerified: true
  }, { merge: true })
  
  unverifiedTherapistList.value =
    unverifiedTherapistList.value.filter(t => t.id !== therapist.id)

  verifiedTherapistList.value.push(therapist)
}

const declineTherapist = therapist => {
  unverifiedTherapistList.value =
    unverifiedTherapistList.value.filter(t => t.id !== therapist.id)
}
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

.verify_therapists_holder {
  position: fixed;
  bottom: 5rem;
  right: 5.5rem;
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
  background-color: white;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 140 140' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='20,50 70,100 120,50' fill='none' stroke='%23999' stroke-width='15'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.6rem center;
  background-size: 0.7rem;
  padding-right: 2rem;
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
}

.therapist_items_holder {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}

.therapist_item_holder {
  width: 80%;
  border-radius: 2rem;
  box-shadow: 0.1rem 0.1rem 1rem 0.2rem rgba(135, 191, 186, 0.4);
  padding: 1rem;
}

.contact_buttons_holder {
  width: 100%;
  display: flex;
  margin-top: 1rem;
}

.contact_button {
  width: 4rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 5rem;
  background-color: #87bfba;
  margin-right: 3rem;
}
</style>
