<script setup lang="ts">
    import { PropType } from 'vue'
    import { Job } from '../assets/interfaces/Job'

    defineProps({
        playJob: {
            type: Object as PropType<Job | null>,
        },
    })

    const emit = defineEmits(['popUpDisplay'])

</script>

<template>
    <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm">
        <div class="flex w-full h-full items-center justify-center z-50">
            <div class="sm:h-3/4 sm:w-1/2 rounded-xl p-10 bg-white">
                <div class="flex place-content-between items-center  pb-5">
                    <img v-if="playJob?.icon" :src="playJob.icon" alt="Job icon">
                    <span v-if="playJob?.name" class="text-lg text-center mx-2 sm:text-4xl">
                        You should play {{ playJob.name }}!
                    </span>
                    <button class="bg-slate-500 w-10 h-10 text-white rounded-xl" @click="emit('popUpDisplay', false)">X</button>
                </div>
                <div class="flex justify-center h-5/6">
                    <img v-if="playJob?.pic" class="h-full object-contain mx-auto" :src="playJob.pic" alt="Job pic">
                </div>
            </div>
        </div>
    </div>
</template>