<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
// import { useJobStore } from '../stores/JobStore';
import { ffxivJobs } from '../assets/JobList';

const openSidebar = ref<boolean>(false);
const toggleSidebar = () => {
  openSidebar.value = !openSidebar.value;
};

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (target && target.classList) {
    if (
      !target.classList.contains('hamburger') &&
      !target.classList.contains('hamburger-lines') &&
      !target.classList.contains('hamburger-line')
    ) {
      const sidebarElement = document.querySelector('.sidebar');
      if (openSidebar.value && sidebarElement) {
        openSidebar.value = false;
      }
    }
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});

</script>

<template>
  <div class="flex flex-col bg-black rounded-xl w-fit p-3">
    <section class="mx-auto border-b border-white">
      Tanks
      <label v-for="job in ffxivJobs.filter(job => job.role === 'Tank')" :key="job.name">
        <input type="checkbox" :value="job.name" />
        {{ job.name }}
      </label>
    </section>
    <section class="mx-auto">
      Melee DPS
      <label v-for="job in ffxivJobs.filter(job => job.role === 'Melee DPS')" :key="job.name">
        <input type="checkbox" :value="job.name" />
        {{ job.name }}
      </label>
      Physical Ranged DPS
      <label v-for="job in ffxivJobs.filter(job => job.role === 'Physical Ranged DPS')" :key="job.name">
        <input type="checkbox" :value="job.name" />
        {{ job.name }}
      </label>
      Magical Ranged DPS
      <label v-for="job in ffxivJobs.filter(job => job.role === 'Magical Ranged DPS')" :key="job.name">
        <input type="checkbox" :value="job.name" />
        {{ job.name }}
      </label>
    </section>
    <section class="mx-auto">
      Healers
      <label v-for="job in ffxivJobs.filter(job => job.role === 'Healer')" :key="job.name">
        <input type="checkbox" :value="job.name" />
        {{ job.name }}
      </label>
    </section>
    <section class="mx-auto">
      Limited Jobs
      <label v-for="job in ffxivJobs.filter(job => job.role === 'Limited Job')" :key="job.name">
        <input type="checkbox" :value="job.name" />
        {{ job.name }}
      </label>
    </section>
  </div>
</template>