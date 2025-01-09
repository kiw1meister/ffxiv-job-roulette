<script setup lang="ts">
import { computed } from 'vue';
import { useJobStore } from '../stores/JobStore';
import { ffxivJobs } from '../assets/JobList';

const jobs = useJobStore();

// Filter the jobs to show their respective roles
const tankJobs = computed(() => 
  jobs.allJobs.filter(job => job.role === "Tank")
);

const meleeJobs = computed(() => 
  jobs.allJobs.filter(job => job.role === "Melee DPS")
);

const rangedJobs = computed(() => 
  jobs.allJobs.filter(job => job.role === "Physical Ranged DPS")
);

const magicJobs = computed(() => 
  jobs.allJobs.filter(job => job.role === "Magical Ranged DPS")
);

const healerJobs = computed(() => 
  jobs.allJobs.filter(job => job.role === "Healer")
);

const limitedJobs = computed(() => 
  jobs.allJobs.filter(job => job.role === "Limited Job")
);

// Check if a job is selected
const isJobSelected = (job) => {
  return jobs.selectedJobs.some(selected => selected.name === job.name);
}
// Handle checkbox change
const onCheckboxChange = (job, isChecked) => {
  jobs.toggleJob(job, isChecked);
};

// const openSidebar = ref<boolean>(false);
// const toggleSidebar = () => {
//   openSidebar.value = !openSidebar.value;
// };

// const handleClickOutside = (event: MouseEvent) => {
//   const target = event.target as HTMLElement;
//   if (target && target.classList) {
//     if (
//       !target.classList.contains('hamburger') &&
//       !target.classList.contains('hamburger-lines') &&
//       !target.classList.contains('hamburger-line')
//     ) {
//       const sidebarElement = document.querySelector('.sidebar');
//       if (openSidebar.value && sidebarElement) {
//         openSidebar.value = false;
//       }
//     }
//   }
// };

// onMounted(() => {
//   document.addEventListener('click', handleClickOutside);
// });

// onBeforeUnmount(() => {
//   document.removeEventListener('click', handleClickOutside);
// });

</script>

<template>
  <div class="flex flex-col bg-black text-white rounded-xl w-fit p-3">

    <!-- Tanks Section -->
    <section class="text-center mb-2 pb-2 border-b">
      <h2 class="text-lg font-bold mb-2">Tanks</h2>
      <div class="flex flex-wrap justify-center gap-2">
        <label 
          v-for="job in tankJobs" 
          :key="job.name" 
          class="flex items-center gap-2"
        >
          <input 
            type="checkbox" 
            :value="job.name"
            :checked="isJobSelected(job)"
            @change="onCheckboxChange(job, $event.target.checked)"
          />
          {{ job.name }}
        </label>
      </div>
    </section>

    <!-- Melee Section -->
    <section class="text-center mb-2 pb-2 border-b">
      <h2 class="text-lg font-bold mb-2">Melee DPS</h2>
      <div class="flex flex-wrap justify-center gap-2">
        <label 
          v-for="job in meleeJobs" 
          :key="job.name" 
          class="flex items-center gap-2"
        >
          <input 
            type="checkbox" 
            :value="job.name"
            :checked="isJobSelected(job)"
            @change="onCheckboxChange(job, $event.target.checked)"
          />
          {{ job.name }}
        </label>
      </div>
    </section>

    <!-- Ranged Section -->
    <section class="text-center mb-2 pb-2 border-b">
      <h2 class="text-lg font-bold mb-2">Physical Ranged DPS</h2>
      <div class="flex flex-wrap justify-center gap-2">
        <label 
          v-for="job in rangedJobs" 
          :key="job.name" 
          class="flex items-center gap-2"
        >
          <input 
            type="checkbox" 
            :value="job.name"
            :checked="isJobSelected(job)"
            @change="onCheckboxChange(job, $event.target.checked)"
          />
          {{ job.name }}
        </label>
      </div>
    </section>

    <!-- Magic Section -->
    <section class="text-center mb-2 pb-2 border-b">
      <h2 class="text-lg font-bold mb-2">Magical Ranged DPS</h2>
      <div class="flex flex-wrap justify-center gap-2">
        <label 
          v-for="job in magicJobs" 
          :key="job.name" 
          class="flex items-center gap-2"
        >
          <input 
            type="checkbox" 
            :value="job.name"
            :checked="isJobSelected(job)"
            @change="onCheckboxChange(job, $event.target.checked)"
          />
          {{ job.name }}
        </label>
      </div>
    </section>

    <!-- Healer Section -->
    <section class="text-center mb-2 pb-2 border-b">
      <h2 class="text-lg font-bold mb-2">Healers</h2>
      <div class="flex flex-wrap justify-center gap-2">
        <label 
          v-for="job in healerJobs" 
          :key="job.name" 
          class="flex items-center gap-2"
        >
          <input 
            type="checkbox" 
            :value="job.name"
            :checked="isJobSelected(job)"
            @change="onCheckboxChange(job, $event.target.checked)"
          />
          {{ job.name }}
        </label>
      </div>
    </section>

    <!-- Limited Jobs -->
    <section class="text-center mb-2 pb-2 border-b">
      <h2 class="text-lg font-bold mb-2">Limited Jobs</h2>
      <div class="flex flex-wrap justify-center gap-2">
        <label 
          v-for="job in limitedJobs" 
          :key="job.name" 
          class="flex items-center gap-2"
        >
          <input 
            type="checkbox" 
            :value="job.name"
            :checked="isJobSelected(job)"
            @change="onCheckboxChange(job, $event.target.checked)"
          />
          {{ job.name }}
        </label>
      </div>
    </section>

    <!-- Select Options -->
    <section class="text-center mb-2">
      <h2 class="text-lg font-bold mb-2">Options</h2>
      <button
        class="bg-slate-500 px-2 mx-2 rounded-xl hover:animate-pulse"
        @click="jobs.selectAll"
      >
        Select all
      </button>
      <button
        class="bg-slate-500 px-2 mx-2 rounded-xl hover:animate-pulse"
        @click="jobs.deselectAll"
      >
        Deselect all
      </button>
    </section>
    
  </div>
</template>