<script setup lang="ts">
    import { ref } from 'vue'
    import { ffxivJobs } from '../assets/Jobs';
    import FortuneWheel from 'vue-fortune-wheel'
    import 'vue-fortune-wheel/style.css'

    interface Job {
        id: number,
        name: string,
        role: string,
        icon: string,
        pic: string,
        bgColor: string,
        color: string,
        probability: number
    }
  
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
  
    const jobs = ffxivJobs;
  
    function onRotateEnd (job: Job) {
        alert("You should play " + job.name + "!")
    }
</script>

<template>
    <div class="flex items-center justify-center">
      <FortuneWheel
        style="width: 500px; max-width: 100%;"
        :verify="canvasVerify"
        :canvas="canvasOptions"
        :useWeight="true"
        :prizes="jobs"
        @rotateEnd="onRotateEnd"
      />
    </div>
</template>