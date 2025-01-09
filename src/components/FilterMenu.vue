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
  <div class="bg-black rounded-xl p-3">
    <section class="text-center">
      Tanks
      <p v-for="job in ffxivJobs.filter(job => job.role === 'Tank')" :key="job.name">
        {{ job.name }}
      </p>
    </section>
    <section>z
      Melee DPS
      <p v-for="job in ffxivJobs.filter(job => job.role === 'Melee DPS')" :key="job.name">
        {{ job.name }}
      </p>
      Physical Ranged DPS
      <p v-for="job in ffxivJobs.filter(job => job.role === 'Physical Ranged DPS')" :key="job.name">
        {{ job.name }}
      </p>
      Magical Ranged DPS
      <p v-for="job in ffxivJobs.filter(job => job.role === 'Magical Ranged DPS')" :key="job.name">
        {{ job.name }}
      </p>
    </section>
    <section>
      Healers
      <p v-for="job in ffxivJobs.filter(job => job.role === 'Healer')" :key="job.name">
        {{ job.name }}
      </p>
    </section>
  </div>
</template>