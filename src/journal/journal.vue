<template>
  <div class="journal_header_holder inter font_size_xs">
    My Journal
  </div>
  <div class="journal_selection_holder inter font_size_xs">
    <div v-for="item in journalItems" :key="item.key" class="journal_selection"
      :class="{ active: selectedJournalItem === item.key, [item.cornerClass]: true }" @click="setJournalItem(item.key)">
      {{ item.label }}
    </div>
  </div>
  <div class="journal_entry_holder" v-if="selectedJournalItem === 'journalEntry'">
    <div class="journal_entry_date_holder inter font_size_xs">
      <div>{{ journalEntryDate }} <br> {{ journalEntryTime }}</div>
    </div>
    <div class="journal_entry_content_holder">
      <input placeholder="Give us a title." class="journal_input inter font_size_xs" v-model="journalEntryHeading" />
      <textarea placeholder="What's weighing on your mind today? Or what's a small win?"
        class="journal_textarea inter font_size_xs" v-model="journalEntryContent"></textarea>
    </div>
    <br>
    <div class="save_button inter font_size_xxs" @click="saveJournal">
      Save
    </div>
    <errorModal v-if="journalSaved" :errorMessage="journalMessage" @close="handleErrorModalClose" />
  </div>
  <div v-else>
    <div class="journal_list_holder">
      <div v-for="(entry, date) in userStore.journalData" :key="date" class="journal_list_item inter"  v-if="userStore.journalData">
        <div class="journal_list_heading inter font_size_sm">
          {{ entry.journalEntryHeading }}
        </div>
        <div class="journal_list_content inter font_size_xs">
          {{ entry.journalEntryContent }}
        </div>
        <div class="journal_list_timestamp inter font_size_xxs">
          Logged on: {{ new Date(entry.journalEntryLogged.seconds * 1000).toLocaleString() }}
        </div>
      </div>
      <div class="inter font_size_sm" v-else>You don't have any journals logged as of yet.</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/firebase'
import { useUserStore } from '@/data/userStore'
import errorModal from '../modals/errorModal.vue'

const emit = defineEmits(['close'])

const userStore = useUserStore()
userStore.getJournalEntries()
const selectedJournalItem = ref('journalEntry')
const journalItems = [
  { key: 'journalEntry', label: 'New Journal Entry', cornerClass: 'right-rounded' },
  { key: 'journalList', label: 'Journal List', cornerClass: 'left-rounded' }
]

const journalEntryDate = ref(new Date().toDateString())
const journalEntryTime = ref(new Date().toLocaleTimeString())

const journalEntryHeading = ref('')
const journalEntryContent = ref('')

const journalSaved = ref(false)
const journalMessage = ref('')
const setJournalItem = (item) => {
  selectedJournalItem.value = item
  journalEntryDate.value = new Date().toDateString()
  journalEntryTime.value = new Date().toLocaleTimeString()
  userStore.getJournalEntries()
}

const handleErrorModalClose = () => {
  journalSaved.value = false
  journalMessage.value = ''
}

const saveJournal = async () => {
  if (!journalEntryHeading.value) {
    journalSaved.value = true
    journalMessage.value = 'Please give a journal title.'
    return
  }

  if (!journalEntryContent.value) {
    journalSaved.value = true
    journalMessage.value = 'Please give journal content.'
    return
  }

  const dateSaved = Date.now()

  const journalEntry = {
    [dateSaved]: {
      journalEntryHeading: journalEntryHeading.value,
      journalEntryContent: journalEntryContent.value,
      journalEntryLogged: serverTimestamp()
    }
  }

  try {
    await setDoc(doc(db, 'journals', userStore.userData.uid), journalEntry, { merge: true })

    journalSaved.value = true
    journalMessage.value = 'Your journal entry has been logged.'

    journalEntryHeading.value = ''
    journalEntryContent.value = ''
    journalEntryDate.value = new Date().toDateString()
    journalEntryTime.value = new Date().toLocaleTimeString()

    emit('close')
  } catch (err) {
    console.error('Failed to save journal:', err)
    journalSaved.value = true
    journalMessage.value = 'Failed to save journal. Please try again.'
  }
}
</script>

<style scoped>
.journal_header_holder {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.journal_selection_holder {
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.journal_selection {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  cursor: pointer;
}

.journal_selection.active {
  background-color: #87bfba;
  color: white;
}

.right-rounded.active {
  border-radius: 0 1rem 1rem 0;
}

.left-rounded.active {
  border-radius: 1rem 0 0 1rem;
}

.journal_entry_holder {
  width: 100%;
  height: 35rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.journal_entry_date_holder {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #808080;
  text-align: center;
  width: 100%;
  height: 20%;
}

.journal_entry_content_holder {
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.journal_input,
.journal_textarea {
  width: 90%;
  padding: 0.5rem;
  border: 0.1rem solid #87bfba;
  border-radius: 1rem;
}

.journal_input {
  height: 5%;
}

.journal_textarea {
  height: 80%;
  resize: none;
}

.save_button {
  width: 10rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background-color: #87bfba;
  color: #ffffff;
  cursor: pointer;
  margin-bottom: 5rem;
}

.journal_list_holder {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
}

.journal_list_item {
  width: 90%;
  box-shadow: 0.1rem 0.1rem 1rem 0.2rem rgba(135, 191, 186, 0.4);
  margin-bottom: 1rem;
  border-radius: 1rem;
  padding: 0.5rem;
}

.journal_list_heading {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.journal_list_content {
  margin-bottom: 0.5rem;
}

.journal_list_timestamp {
  color: #808080;
}
</style>