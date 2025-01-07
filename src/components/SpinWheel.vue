<script setup lang="ts">
    import { ref } from 'vue'
    import FortuneWheel from 'vue-fortune-wheel'
    import { Job } from '../assets/interfaces/Job';
    import { useJobStore } from '../stores/JobStore';
    import 'vue-fortune-wheel/style.css'

    const emit = defineEmits(['playJob', 'popUpDisplay'])
  
    const canvasVerify = ref(false) // Whether the turntable in canvas mode is enabled for verification
    
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

    // Test store modification
    // jobs.useMock();
  
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
        :verify="canvasVerify"
        :canvas="canvasOptions"
        :useWeight="true"
        :prizes="jobs.list"
        @rotateEnd="onRotateEnd"
      />
    </div>
</template>