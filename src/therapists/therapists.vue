<template>
  <div class="empty_therapy_list inter font_size_xs" v-if="
    signUpStep === 'home_list' &&
    verifiedTherapistList.length === 0 &&
    unverifiedTherapistList.length === 0
  ">
    <br>
    No therapists are listed at this moment.
  </div>

  <div class="therapy_sign_up" v-else>
    <div class="therapy_sign_up_step_1" v-if="signUpStep === 'step_1'">
      <div class="therapy_sign_up_heading inter font_size_xs">
        <br>
        <b>Let's get you signed up and listed!</b>
        <br><br>
      </div>

      <form class="therapist_sign_up_form_holder">
        <input class="form_input inter font_size_xs" type="text" placeholder="Email Address" v-model="email" />
        <input class="form_input inter font_size_xs" type="text" placeholder="Contact Number" v-model="contactNumber" />
        <input class="form_input inter font_size_xs" type="text" placeholder="Username" v-model="username" />

        <select class="form_input inter font_size_xs" v-model="selectedTitle">
          <option disabled value="">Select your title</option>
          <option v-for="t in title" :key="t.value" :value="t.value">{{ t.text }}</option>
        </select>

        <input class="form_input inter font_size_xs" type="text" placeholder="Name & Surname" v-model="nameSurname" />

        <select class="form_input inter font_size_xs" v-model="selectedAcademicTitle">
          <option disabled value="">Select your academic title</option>
          <option v-for="a in academicTitle" :key="a.value" :value="a.value">{{ a.text }}</option>
        </select>

        <select class="form_input inter font_size_xs" v-model="selectedCredential">
          <option disabled value="">Select your credential</option>
          <option v-for="c in credentialOptions" :key="c.value" :value="c.value">{{ c.text }}</option>
        </select>

        <input ref="addressInput" class="form_input inter font_size_xs" type="text" placeholder="Search address" />
      </form>

      <button class="form_button inter font_size_xs" @click="addTherapist">
        Confirm
      </button>

      <div class="sign_up_button_holder inter font_size_s">
        <i class="fas fa-times" @click="cancelSignUp"></i>
      </div>
    </div>

    <div style="width: 100%;" v-else-if="signUpStep === 'verify_therapist' && isAdmin">
      <div style="width: 100%;" v-if="unverifiedTherapistList.length">
        <div class="therapist_items_holder inter font_size_xs" v-for="therapist in unverifiedTherapistList"
          :key="therapist.id">
          <div class="therapist_item_holder">
            <b>{{ therapist.nameSurname }}</b><br />
            {{ therapist.email }}<br />
            {{ capitalize(therapist.credential) }}<br />
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
        <br>
        No therapists need verifying at this moment.
      </div>
      <div class="sign_up_button_holder inter font_size_s">
        <i class="fas fa-times" @click="cancelSignUp"></i>
      </div>
    </div>

    <div style="width: 100%;" v-else-if="signUpStep === 'home_list'">
      <div class="search_therapists_holder">
        <div class="search_input_holder">
          <input class="search_input inter font_size_xs" type="text" placeholder="Search Therapist" v-model="search">
          <div class="search_button_holder" @click="searchTherapist()">
            <i class="fa fa-search"></i>
          </div>
        </div>

        <div v-if="filteredTherapists.length === 0" class="empty_therapy_list inter font_size_xs">
          <br>
          No verified therapists available yet.
        </div>

        <div v-else class="therapist_items_holder inter font_size_xs" v-for="therapist in filteredTherapists"
          :key="therapist.id">
          <div class="therapist_item_holder">
            <b>{{ therapist.nameSurname }}</b><br />
            {{ capitalize(therapist.credential) }}<br />
            {{ therapist.address.city }}, {{ therapist.address.province }}
            <br>
            <br>
            <div style="display: flex; flex-flow: row nowrap;">
              <div
                style="width: 3rem;height: 1.5rem; background-color: #87bfba; color: white; display: flex; flex-flow: row nowrap; justify-content: center; align-items: center; border-radius: 1rem;"
                @click="phoneTherapist(therapist)"><i class="fa fa-phone"></i></div>
              &emsp;
              <div
                style="width: 3rem;height: 1.5rem; background-color: #87bfba; color: white; display: flex; flex-flow: row nowrap; justify-content: center; align-items: center; border-radius: 1rem;"
                @click="emailTherapist(therapist)"><i class="fa fa-envelope"></i></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <errorModal v-if="error" :errorMessage="errorMessage" @close="error = false" />
  </div>

  <div class="sign_up_button_holder inter font_size_s" v-if="signUpStep === 'home_list'">
      <i class="fas fa-plus" @click="signUpAsTherapist"></i>
    </div>

    <div class="verify_therapists_holder inter font_size_s" v-if="signUpStep === 'home_list' && isAdmin">
      <i class="fas fa-award" @click="verifyTherapists"></i>
    </div>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue'
import { useUserStore } from '@/data/userStore'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'
import errorModal from '../modals/errorModal.vue'

const userStore = useUserStore()

userStore.getTherapists()

const search = ref("")
const email = ref(userStore.userData.personalInfo.email)
const contactNumber = ref(userStore.userData.personalInfo.contactNumber)
const nameSurname = ref(userStore.userData.personalInfo.name)
const username = ref('')
const selectedTitle = ref('')
const selectedAcademicTitle = ref('')
const selectedCredential = ref('')
const selectedAddress = ref(null)
const addressInput = ref(null)

const signUpStep = ref('home_list')
const isAdmin = ref(Boolean(userStore.userData.admin))
const error = ref(false)
const errorMessage = ref('')

const title = [
  { value: 'dr', text: 'Dr.' },
  { value: 'mr', text: 'Mr.' },
  { value: 'mrs', text: 'Mrs.' },
  { value: 'miss', text: 'Miss.' },
  { value: 'ms', text: 'Ms.' }
]

const academicTitle = [
  { value: 'phd', text: 'PhD' },
  { value: 'msc', text: 'MSc' },
  { value: 'ma', text: 'MA' }
]

const credentialOptions = [
  { value: 'psychologist', text: 'Psychologist' },
  { value: 'psychiatrist', text: 'Psychiatrist' },
  { value: 'social_worker', text: 'Social Worker' }
]

const capitalize = value => value ? value.replace('_', ' ').replace(/^./, c => c.toUpperCase()) : ''

const verifiedTherapistList = computed(() => (userStore.therapists || []).filter(t => t.isVerified))
const unverifiedTherapistList = computed(() => (userStore.therapists || []).filter(t => !t.isVerified))

const filteredTherapists = computed(() => {
  if (!search.value) return verifiedTherapistList.value
  const term = search.value.toLowerCase()
  return verifiedTherapistList.value.filter(t =>
    t.nameSurname.toLowerCase().includes(term)
  )
})

watch(unverifiedTherapistList, list => {
  if (signUpStep.value === 'verify_therapist' && list.length === 0) {
    signUpStep.value = 'home_list'
  }
})

const signUpAsTherapist = () => signUpStep.value = 'step_1'
const verifyTherapists = () => signUpStep.value = 'verify_therapist'
const cancelSignUp = () => signUpStep.value = 'home_list'

const addTherapist = async () => {
  if (!selectedAddress.value) {
    errorMessage.value = 'Please select an address'
    error.value = true
    return
  }

  const therapistRef = doc(db, 'therapists', userStore.userData.uid)
  const snap = await getDoc(therapistRef)

  if (snap.exists()) {
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

  //  setTimeout(() => {
  //   window.location.href =
  //     'https://docs.google.com/forms/d/e/1FAIpQLSe2kKgs6Qnvl1uNfVSVEjUeCRmM8jv6E6O-6xhy-1mIiAYvLg/viewform'
  // }, 8000)
}

const acceptTherapist = async therapist => {
  await setDoc(doc(db, 'therapists', therapist.id), { isVerified: true }, { merge: true })
  signUpStep.value = 'home_list'
  userStore.getTherapists()

  // window.location.reload()
}

const declineTherapist = therapist =>
  setDoc(doc(db, 'therapists', therapist.id), { declined: true }, { merge: true })

const loadGoogleMaps = () =>
  new Promise(resolve => {
    if (window.google?.maps?.places) return resolve()
    const script = document.createElement('script')
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBWGRHjfWWoBWojyOBuGi75ACgNAkGobws&libraries=places'
    script.onload = resolve
    document.head.appendChild(script)
  })

watch(signUpStep, async step => {
  if (step !== 'step_1') return
  await nextTick()
  await loadGoogleMaps()
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

// Optional: separate search button for server-side search
const searchTherapist = async (term) => {
  if (!term) return []

  const lowerTerm = term.toLowerCase()
  const q = query(
    collection(db, "therapists"),
    where("isVerified", "==", true),
    where("searchIndex", "array-contains", lowerTerm)
  )

  const querySnapshot = await getDocs(q)
  const results = []
  querySnapshot.forEach(docSnap => results.push({ id: docSnap.id, ...docSnap.data() }))
  return results

}

const phoneTherapist = (therapist) => {
  console.log(therapist.contactNumber)
  window.location.href = `tel:${therapist.contactNumber}`;
}

const emailTherapist = (therapist) => {
  const subject = encodeURIComponent('Therapy Session Enquiry');

  window.location.href = `mailto:${therapist.email}?subject=${subject}`;
}

</script>

<style scoped>
.empty_therapy_list {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
  width: 88%;
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

.search_therapists_holder {
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

.search_input_holder {
  width: 100%;
  height: 3rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
}

.search_button_holder {
  width: 15%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background-color: rgb(135, 191, 186);
  color: #ffffff;
}

.search_input {
  width: 80%;
  max-width: 400px;
  height: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #ccc;
  border-radius: 0.4rem;
  outline: none;
  box-sizing: border-box;
  font-size: 1rem;
  transition: border-color 0.2s ease;
}
</style>