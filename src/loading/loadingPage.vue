<template>
    <div class="loading_page_holder"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/data/userStore'

const userStore = useUserStore()
const router = useRouter()

onMounted(() => {
    if (userStore.userData?.uid) {
        router.push({ name: 'Home' })
    } else {
        router.push({ name: 'Login' })
    }
})
</script>

<style scoped>
.loading_page_holder {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("../../src/assets/logo.png");
    background-size: 50% 25%;
    background-repeat: no-repeat;
    background-position: center;
}
</style>