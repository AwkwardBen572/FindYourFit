<template>
    <div class="login_page">
        <div class="login_page_content">
            <div class="login_background_holder">

            </div>
            <div class="login_page_intro inter font_size_xs">
                <div class="login_page_intro_text">
                    <div class="font_size_m licorice_regular">Welcome to Finding Your Fit</div>
                    <br /><br />
                    A space designed to help you understand yourself better, build emotional balance, and grow into the
                    life that fits you best. Take a moment to reconnect, reflect, and start working toward your goals —
                    one step at a time.
                </div>
            </div>

            <div class="login_page_form">
                <form class="login_page_form_fields">
                    <input class="login_page_input inter font_size_xs" type="text" placeholder="Email"
                        v-model="email" />
                    <input class="login_page_password inter font_size_xs" :type="inputType" placeholder="Password"
                        v-model="password" />

                    <div class="show_password_toggle inter font_size_xs">
                        <label>
                            <input type="checkbox" @change="togglePassword" />
                            Show Password
                        </label>
                    </div>

                </form>
                <button class="login_page_button inter font_size_xs" @click="handleLogin">
                    {{ pageRef === 'login' ? 'Login' : 'Register' }}
                </button>

                <div class="login_page_forgot_password inter font_size_xs" @click="handleForgotPassword">
                    {{ pageRef === 'login' ? 'Forgot Password?' : '' }}
                </div>
            </div>

            <div class="login_page_social_login">
                <div class="login_page_social_button" @click="handleGoogleLogin()"></div>
            </div>

            <div class="login_page_toggle_register inter font_size_xs">
                <u @click="togglePageRef">{{ pageRef === 'login' ? 'Register' : 'Login' }}</u>
            </div>
        </div>
    </div>

    <errorModal v-if="error" :errorMessage="errorMessage" @close="error = false" />
    <userInfoModal v-if="register && globalUser" :globalUser="globalUser" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth, db } from '../firebase.js'
import {
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    linkWithPopup,
    sendPasswordResetEmail
} from 'firebase/auth'
import errorModal from '../modals/errorModal.vue'
import userInfoModal from '../modals/userInfoModal.vue'
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore"
import { useUserStore } from '@/data/userStore'

const userStore = useUserStore()
const router = useRouter()
const inputType = ref('password')
const globalUser = ref(null)
const email = ref('')
const password = ref('')
const pageRef = ref('login')
const error = ref(false)
const errorMessage = ref('')
const register = ref(false)

const googleProvider = new GoogleAuthProvider()
googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly')

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const validatePassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/.test(password)

const togglePassword = () => {
    inputType.value = inputType.value === 'password' ? 'text' : 'password'
}

const togglePageRef = () => {
    pageRef.value = pageRef.value === 'login' ? 'register' : 'login'
}

const handleForgotPassword = () => {
    if (email.value === '') {
        errorMessage.value = 'Please enter your email to reset your password!'
        error.value = true
        return
    }

    sendPasswordResetEmail(auth, email.value)
        .then(() => {
            errorMessage.value = 'An email has been sent to reset your password!'
            error.value = true
        })
}

const handleGoogleLogin = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider)
        const user = result.user
        if (user) {
            if (!user) return
            const docRef = doc(db, 'users', user.uid)
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                var userData = docSnap.data()
                if (userData) {
                    await updateStreak(userData)
                }
            }
        }

        router.push({ name: 'Navigation' })

    } catch (err) {
        console.log(err.message)
        errorMessage.value = 'Google login failed!'
        error.value = true
    }
}

const updateStreak = async (userData) => {
    if (userData.streak) {
        const streakData = userData.streak
        if (isYesterday(streakData.lastUpdate)) {
            userData.streak.count = userData.streak.count + 1
        } else {
            userData.streak.count = 1
        }
        userData.streak.lastUpdate = serverTimestamp()
        userData.loginDate = serverTimestamp()
        await setDoc(doc(db, "users", userData.uid), userData)
    }
}

const isYesterday = (timestamp) => {
    const lastUpdateDate = timestamp.toDate();
    const nowDate = new Date();

    const todayMidnight = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate())
    const yesterdayMidnight = new Date(todayMidnight)
    yesterdayMidnight.setDate(todayMidnight.getDate() - 1)

    return lastUpdateDate >= yesterdayMidnight && lastUpdateDate < todayMidnight
}

const handleLogin = async () => {
    try {
        errorMessage.value = ''
        error.value = false

        if (!validateEmail(email.value)) {
            errorMessage.value = 'Invalid email format!'
            error.value = true
            return
        }

        // if (!validatePassword(password.value)) {
        //     errorMessage.value = `
        //         Invalid password!<br>
        //         At least one lowercase letter!<br>
        //         At least one uppercase letter!<br>
        //         At least one number!<br>
        //         At least one special character!<br>
        //         Minimum of 8 characters!`
        //     error.value = true
        //     return
        // }

        if (pageRef.value === 'register') {
            const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value)
            const user = userCredential.user

            try {
                await linkWithPopup(user, googleProvider)
            } catch (e) {
                console.warn("Google link failed (optional):", e)
            }

            globalUser.value = { uid: user.uid, email: user.email }
            register.value = true
        } else {
            const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value)
            const user = userCredential.user
            const docRef = doc(db, 'users', user.uid)
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                var userData = docSnap.data()
                if (userData) {
                    await updateStreak(userData)
                    userStore.setUserData(userData)
                    router.push({ name: 'Navigation' })
                }
            }
        }

    } catch (err) {
        if (err.code === "auth/invalid-credential") {
            errorMessage.value = 'Invalid login details.'
        } else if (err.code === "auth/email-already-in-use") {
            errorMessage.value = 'Email already in use.'
        } else {
            errorMessage.value = 'An unexpected error occurred.'
        }
        error.value = true
    }
}
</script>

<style scoped>
.login_page {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.login_page_content {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: #ffffff;
    border-radius: 1.5rem 1.5rem 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 2rem 1rem;
    box-sizing: border-box;
    overflow: hidden;
}

.login_page_content::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("../../src/assets/logo.png");
    background-size: 60% auto;
    background-repeat: no-repeat;
    background-position: center 5rem;
    opacity: 0.3;
    z-index: 0;
}

.login_page_content>* {
    position: relative;
    z-index: 1;
}

.login_page_intro {
    text-align: center;
    margin-bottom: 1rem;
}

.login_page_intro_text {
    width: 90%;
    margin: 0 auto;
    line-height: 1.4;
}

.login_page_form_fields {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
}

.login_page_input,
.login_page_password {
    width: 80%;
    max-width: 400px;
    height: 2.8rem;
    padding: 0.5rem 0.75rem;
    border: 1px solid #ccc;
    border-radius: 0.4rem;
    outline: none;
    box-sizing: border-box;
    font-size: 1rem;
    transition: border-color 0.2s ease;
}

.login_page_input:focus,
.login_page_password:focus {
    border-color: #87bfba;
}

.show_password_toggle {
    width: 80%;
    max-width: 400px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #555;
    font-size: 0.9rem;
}

.login_page_button {
    width: 80%;
    max-width: 400px;
    height: 2.8rem;
    margin-top: 1rem;
    background-color: #87bfba;
    border: none;
    border-radius: 0.5rem;
    color: #ffffff;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.login_page_button:hover {
    background-color: #6fa9a4;
}

.login_page_forgot_password,
.login_page_toggle_register {
    text-align: center;
    color: #87bfba;
    cursor: pointer;
    margin-top: 0.8rem;
}

.login_page_social_login {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
}

.login_page_social_button {
    width: 50px;
    height: 50px;
    background-image: url("../../src/assets/google_logo.png");
    background-size: 80% 80%;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.login_page_social_button:hover {
    transform: scale(1.1);
}

@media (max-width: 1024px) {
    .login_page_graphic_background {
        background-position: center right;
    }
}

@media (max-width: 768px) {
    .login_page_content::before {
        background-size: 80% auto;
        opacity: 0.3;
    }

    .login_page_intro_text {
        width: 95%;
        font-size: 0.95rem;
    }

    .login_page_input,
    .login_page_password,
    .login_page_button,
    .show_password_toggle {
        width: 90%;
    }
}

@media (max-width: 480px) {
    .login_page__title {
        padding-left: 0.5rem;
        font-size: clamp(1.2rem, 6vw, 2rem);
        text-align: left;
    }

    .login_page_content {
        padding: 1rem;
    }

    .login_page_input,
    .login_page_password,
    .login_page_button,
    .show_password_toggle {
        width: 100%;
    }
}
</style>
