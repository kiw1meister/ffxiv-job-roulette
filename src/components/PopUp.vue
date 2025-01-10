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
    <div class="flex items-center justify-center">
        <div class="sm:h-3/4 sm:w-1/2 rounded-xl p-10 bg-white">
            <div class="flex place-content-between items-center  pb-5">
                <img v-if="playJob?.icon" :src="playJob.icon" alt="Job icon">
                <span v-if="playJob?.name" class="text-lg text-center sm:text-4xl">
                    You should play {{ playJob.name }}!
                </span>
                <button class="bg-slate-500 w-10 h-10 text-white rounded-xl" @click="emit('popUpDisplay', false)">X</button>
            </div>
            <div class="flex">
                <img v-if="playJob?.pic" class="sm:w-3/5 mx-auto" :src="playJob.pic" alt="Job pic">
            </div>
        </div>
    </div>
</template>