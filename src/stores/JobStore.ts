import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import { ffxivJobs } from "../assets/JobList";
import { Job } from "../assets/interfaces/Job";

export const useJobStore = defineStore(
    'jobStore',
    () => {
        const allJobs = reactive([...ffxivJobs]); // Source data for all jobs
        const selectedJobs = ref(allJobs.filter(job => job.role !== "Limited Job")); // All jobs except Limited Jobs selected by default

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

        // Selects all jobs except those with the "Limited Job" role
        const selectAll = () => {
            selectedJobs.value = allJobs.filter(job => job.role !== "Limited Job");
        };

        // Deselect all jobs
        const deselectAll = () => {
            selectedJobs.value = [];
        };
        
        return { allJobs, selectedJobs, selectAll, deselectAll, toggleJob };
    }
)