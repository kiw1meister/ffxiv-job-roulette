import { reactive } from "vue";
import { defineStore } from "pinia";
import { ffxivJobs } from "../assets/JobList";

export const useJobStore = defineStore(
    'jobStore',
    () => {
        let list = reactive(ffxivJobs);

        function useMock() {
            // Clear the original list and populate it with new data
            list.splice(0, list.length, ...[
                {
                    id: 1,
                    name: "Paladin",
                    role: "Tank",
                    icon: "https://lds-img.finalfantasyxiv.com/promo/h/V/NUXU4h6iXzF8HS4BxHKYf7vOa0.png",
                    pic: "https://i.kym-cdn.com/photos/images/original/001/721/586/194.png",
                    bgColor: "#2d3a80",
                    color: '#ffffff',
                    weight: 1
                }
            ]);
        }
        
        return { list, useMock };
    }
)