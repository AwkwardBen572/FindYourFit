<script setup>

// import { onMounted, computed  } from 'vue'
// import { useRouter } from 'vue-router'
// import { useUserStore } from '@/data/userStore'

// const router = useRouter()
// const userStore = useUserStore()

// onMounted(async () => {
//   const userFetched = useUserStore()
//   await userFetched.fetchUserData()
//   router.replace('/loading')
// })

</script>

<template>
  <div class="app_holder">
    <router-view />
  </div>
</template>

<style>

html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.app_holder {
  width: 100%;
  height: 100%;
}

.londrina_solid_thin {
  font-family: "Londrina Solid", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.dancing_script {
  font-family: "Dancing Script", cursive;
  font-optical-sizing: auto;
  font-style: normal;
}

.licorice_regular {
  font-family: "Licorice", cursive;
  font-weight: 400;
  font-style: normal;
}

.fira_sans_condensed {
  font-family: "Fira Sans Condensed", sans-serif;
  font-style: normal;
}

.inter {
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

.font_size_xxs { 
  font-size: 0.75rem;
}

.font_size_xs { 
  font-size: 1rem;
}

.font_size_s { 
  font-size: 1.5rem;
}

.font_size_m { 
  font-size: 2rem;
}

.font_size_ml { 
  font-size: 3rem;
}

.font_size_l { 
  font-size: 4rem;
}

.input {
  border-radius: 0.5rem;
  background-color: rgba(135, 191, 186, 0.1);
  border: 0;
  padding: 0.5rem;
}

</style>
