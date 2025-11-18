import { defineStore } from 'pinia'
import { getDoc, setDoc, doc, serverTimestamp } from 'firebase/firestore'
import { db, auth } from '@/firebase'

export const useUserStore = defineStore('user', {
  state: () => ({
    userData: null,
    moodData: null
  }),
  actions: {
    async fetchUserData() {
      const user = auth.currentUser
      if (!user) return
      const docRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        this.userData = docSnap.data()
        if (this.userData) {
          this.updateStreak(this.userData)
          this.getMood(this.userData)
        }
      }
    },
    setUserData(user) {
      this.userData = user
    },
    async updateStreak(userData) {
      if (userData.streak) {
        const streakData = userData.streak
        if (this.isYesterday(streakData.lastUpdate)) {
          userData.streak.count = userData.streak.count + 1
          userData.streak.lastUpdate = serverTimestamp()
          await setDoc(doc(db, "users", userData.uid), userData)
        }else {
            userData.streak.count = 1
            userData.streak.lastUpdate = serverTimestamp()
            await setDoc(doc(db, "users", userData.uid), userData)
        }
      }
    },
    isYesterday(timestamp) {
      const lastUpdateDate = timestamp.toDate();
      const nowDate = new Date();

      const todayMidnight = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate())
      const yesterdayMidnight = new Date(todayMidnight)
      yesterdayMidnight.setDate(todayMidnight.getDate() - 1)

      return lastUpdateDate >= yesterdayMidnight && lastUpdateDate < todayMidnight
    },
    async getMood(userData) {
      const user = auth.currentUser
      const docRef = doc(db, 'mood', user.uid)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        this.moodData = docSnap.data()
      }
    }
  }
})
