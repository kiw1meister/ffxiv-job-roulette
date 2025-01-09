<script setup lang="ts">
    import { ref, watch } from 'vue'
    import FortuneWheel from 'vue-fortune-wheel'
    import { Job } from '../assets/interfaces/Job';
    import { useJobStore } from '../stores/JobStore';
    import 'vue-fortune-wheel/style.css'
    import { storeToRefs } from 'pinia';

    const emit = defineEmits(['playJob', 'popUpDisplay']);
  
    const canvasVerify = ref(false); // Whether the turntable in canvas mode is enabled for verification
    
    const canvasOptions = {
        btnWidth: 140,
        btnText: "Spin!",
        textDirection: 'vertical',
        borderColor: '#584b43',
        borderWidth: 6,
        lineHeight: 1,
        fontSize: 20,
        textLength: 20,
        textRadius: 235,
    }
  
    const jobs = useJobStore();
    const { selectedJobs } = storeToRefs(jobs); // Make `selectedJobs` reactive

    // Force re-render on changes
    const selectedJobsKey = ref(0);
    watch(selectedJobs, () => {
      selectedJobsKey.value++;
    }, { deep: true }); // Use deep to watch for array changes
  
    function onRotateEnd (job: Job) {
        //alert("You should play " + job.name + "!")
        emit('playJob', job)
        emit('popUpDisplay', true)
    }
</script>

<template>
    <div class="flex items-center justify-center">
      <FortuneWheel
        style="width: 500px; max-width: 100%;"
        :key="selectedJobsKey"
        :verify="canvasVerify"
        :canvas="canvasOptions"
        :useWeight="true"
        :prizes="selectedJobs"
        @rotateEnd="onRotateEnd"
      />
    </div>
</template>