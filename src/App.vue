<script setup lang="ts">
  import SpinWheel from './components/SpinWheel.vue';
</script>

<template>
  <body class="min-h-screen bg-slate-500">
    <div class="text-center py-10">
      <h1 class="text-5xl">FFXIV Job Roulette</h1>
      <p>Made in Vue.js by Shion with love <3</p>
    </div>
    <div class="p-5">
      <SpinWheel class="w-full h-full"/>
    </div>
  </body>
</template>

<style scoped>

</style>
