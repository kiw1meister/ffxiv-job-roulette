import { reactive } from "vue";
import { defineStore } from "pinia";
import { Job } from "../assets/interfaces/Job";
import { ffxivJobs } from "../assets/JobList";

export const useJobStore = defineStore(
    'jobStore',
    () => {
        const list = reactive(ffxivJobs);
        
        return { list };
    }
)