<template>
    <div class="journal_header_holder inter font_size_xs">
        My Journal
    </div>
    <div class="journal_selection_holder inter font_size_xs">
        <div v-for="item in journalItems" :key="item.key" class="journal_selection"
            :class="{ active: selectedJournalItem === item.key, [item.cornerClass]: true }"
            @click="setJournalItem(item.key)">
            {{ item.label }}
        </div>
    </div>
    <div class="journal_entry_holder" v-if="selectedJournalItem == 'journalEntry'">
        <div class="journal_entry_date_holder inter font_size_xs">
            <div style="width: 90%;">
                {{ journalEntryDate }} 
                <br>
                {{ journalEntryTime }}
            </div>
        </div>
        <div class="journal_entry_content_holder">
            <input placeholder="Give us a title."
                style="width: 90%; height: 5%; padding: 0.5rem; border: 0.1rem solid #87bfba; border-radius: 1rem;"
                class="inter font_size_xs" v-model="journalEntryHeading"></input>
            <textarea placeholder="What's weighing on your mind today? Or what's a small win?"
                style="width: 90%; height: 80%; padding: 0.5rem; border: 0.1rem solid #87bfba; border-radius: 1rem;"
                class="inter font_size_xs" v-model="journalEntryContent"></textarea>
        </div>
        <br>
        <div class="save_button inter font_size_xxs" @click="saveMood()">Save</div>

    </div>
</template>

<script setup>

import { ref, onMounted, watch, computed } from 'vue'

const selectedJournalItem = ref('journalEntry')
const journalItems = [
  { key: 'journalEntry', label: 'New Journal Entry', cornerClass: 'right-rounded' },
  { key: 'journalList', label: 'Journal List', cornerClass: 'left-rounded' }
]
const journalEntryDate = ref(new Date().toDateString())
const journalEntryTime = ref(new Date().toLocaleTimeString())

const setJournalItem = (item) => {
    selectedJournalItem.value = item
    journalEntryDate.value = ref(new Date().toDateString())
    journalEntryTime.value = ref(new Date().toLocaleTimeString())
}

const journalEntryHeading = ref('')
const journalEntryContent = ref('')

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
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
}

.journal_entry_date_holder {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    color: #808080;
    width: 100%;
    height: 20%;
}

.journal_entry_content_holder {
    width: 100%;
    height: 80%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;
}

.journal_entry {
    width: 90%;
    height: 90%;
    border-radius: 1rem;
    border-color: #87bfba;
    display: flex;
    flex-flow: row nowrap;
    padding: 0.5rem;
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

</style>