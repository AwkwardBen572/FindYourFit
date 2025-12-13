<template>
    <div class="empty_therapy_list inter font_size_xs" v-if="!therapistListExists">No therapists are listed at this moment.</div>
    <div v-else>

    </div>
    <div class="sign_up_button_holder inter font_size_s">
        <i class='fas fa-plus'></i>
    </div>
</template>

<script setup>

import { ref, onMounted, watch } from 'vue'
import { useUserStore } from '@/data/userStore'
import { useRouter } from 'vue-router'

const therapistList = ref()
const therapistListExists = ref(false)

</script>

<style scoped>

.empty_therapy_list {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
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
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    border-radius: 5rem;
    box-shadow: 0 0 5px 0px #000000;
}

</style>
