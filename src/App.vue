<script setup lang="ts">
  import { ref } from 'vue'
  import SpinWheel from './components/SpinWheel.vue';
  import PopUp from './components/PopUp.vue';
  import FilterMenu from './components/FilterMenu.vue';

  let popUpDisplay = ref<boolean>(false)
  let rolledJob = ref(null)
  let filterMenuDisplay = ref<boolean>(false);

  const showFilterMenu = () => {
    filterMenuDisplay.value = true;
    console.log(filterMenuDisplay.value);
  }
</script>

<template>
  <body class="min-h-screen bg-slate-500">
    <div class="text-center py-10">
      <h1 class="text-5xl font-bold text-white">FFXIV Job Roulette</h1>
      <p class="text-white">Made in Vue.js by Shion with love <3</p>
    </div>
    <div class="flex flex-col justify-center">
      <button
        class="bg-black text-white rounded-xl px-3 hover:animate-pulse mx-auto text-xl mb-2"
        @click="showFilterMenu"
      >
        Filter Classes
      </button>
      <div class="mx-auto">
        <FilterMenu />
      </div>
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
  </body>
</template>
