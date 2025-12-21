import { defineStore } from 'pinia'
import { getDoc, getDocs, setDoc, doc, serverTimestamp, collection } from 'firebase/firestore'
import { db, auth } from '@/firebase'

export const useUserStore = defineStore('user', {
  state: () => ({
    userData: null,
    moodData: null,
    journalData: null,
    therapists: null
  }),

  actions: {
    async fetchUserData() {
      const user = auth.currentUser
      if (!user) return

      const docRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        this.userData = docSnap.data()

        if (!this.userData.streak) {
          this.userData.streak = {
            count: 1,
            lastUpdate: serverTimestamp()
          }
          await setDoc(docRef, this.userData, { merge: true })
        }

        await this.updateStreak()

        await this.getMood()

        await this.getJournalEntries()

        await this.getTherapists()
      }
    },
    setUserData(user) {
      this.userData = user
    },
    setMoodData(mood) {
      this.moodData = mood
    },
    async updateStreak() {
      const user = auth.currentUser
      if (!user || !this.userData?.streak) return

      const { count, lastUpdate } = this.userData.streak

      if (!lastUpdate || typeof lastUpdate.toDate !== 'function') {
        this.userData.streak = {
          count: 1,
          lastUpdate: serverTimestamp()
        }

        await setDoc(doc(db, "users", user.uid), this.userData, { merge: true })
        return
      }

      const lastDate = lastUpdate.toDate()
      const now = new Date()
      if (this.isSameDay(lastDate, now)) {
        return
      }
      if (this.isYesterday(lastDate, now)) {
        this.userData.streak.count = count + 1
      } else {
        this.userData.streak.count = 1
      }
      this.userData.streak.lastUpdate = serverTimestamp()
      await setDoc(
        doc(db, "users", user.uid),
        this.userData,
        { merge: true }
      )
    },
    isSameDay(a, b) {
      return (
        a.getUTCFullYear() === b.getUTCFullYear() &&
        a.getUTCMonth() === b.getUTCMonth() &&
        a.getUTCDate() === b.getUTCDate()
      )
    },
    isYesterday(timestamp) {
      const date = timestamp
      const now = new Date()

      const dateUTC = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
      const nowUTC = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())

      const diffDays = (nowUTC - dateUTC) / (1000 * 60 * 60 * 24)

      return diffDays === 1
    },
    async getMood() {
      const user = auth.currentUser
      if (!user) return

      const docRef = doc(db, 'mood', user.uid)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        this.moodData = docSnap.data()
      }
    },
    async getJournalEntries() {
      const user = auth.currentUser
      if (!user) return

      const docRef = doc(db, 'journals', user.uid)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        const data = docSnap.data()

        const sorted = Object.entries(data)
          .sort((a, b) => Number(b[0]) - Number(a[0]))
          .map(([key, value]) => ({ id: key, ...value }))

        this.journalData = sorted
      }
    },
    async getTherapists() {
      const therapistList = []

      const querySnapshot = await getDocs(collection(db, "therapists"))
      querySnapshot.forEach((doc) => {
        therapistList.push({
          id: doc.id,
          ...doc.data()
        })
      })

      this.therapists = therapistList

      return this.therapists
    }
  }
})