import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import { ffxivJobs } from "../assets/JobList";
import { Job } from "../assets/interfaces/Job";

export const useJobStore = defineStore(
    'jobStore',
    () => {
        const allJobs = reactive([...ffxivJobs]); // Source data for all jobs
        const selectedJobs = ref([]); // Array to hold selected jobs

        // Toggle a job's selection
        const toggleJob = (job:Job, isChecked:boolean) => {
            if (isChecked) {
                if (!selectedJobs.value.some(selected => selected.name === job.name)) {
                    selectedJobs.value.push(job); // Add to selected jobs
                }
            } else {
                selectedJobs.value = selectedJobs.value.filter(
                    selected => selected.name !== job.name
                ); // Remove from selected jobs
            }
        };
        
        return { allJobs, selectedJobs, toggleJob };
    }
)