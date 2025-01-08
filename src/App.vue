<script setup lang="ts">
  import { ref } from 'vue'
  import SpinWheel from './components/SpinWheel.vue';
  import PopUp from './components/PopUp.vue';
  import FilterMenu from './components/FilterMenu.vue';

  let popUpDisplay = ref<boolean>(false)
  let rolledJob = ref(null)
</script>

<template>
  <body class="min-h-screen bg-slate-500">
    <div class="text-center py-10">
      <h1 class="text-5xl">FFXIV Job Roulette</h1>
      <p>Made in Vue.js by Shion with love <3</p>
    </div>
    <div class="p-5">
      <SpinWheel
        class="w-full h-full"
        @playJob="(job) => rolledJob = job"
        @popUpDisplay="popUpDisplay = true"
        />
    </div>
    <PopUp v-if="popUpDisplay"
      :playJob="rolledJob"
      @popUpDisplay="popUpDisplay = false"
    />
    <FilterMenu />
  </body>
</template>
