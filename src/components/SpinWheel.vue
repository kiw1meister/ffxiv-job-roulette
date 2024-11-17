<template>
    <div>
      <FortuneWheel
        style="width: 500px; max-width: 100%;"
        :verify="canvasVerify"
        :canvas="canvasOptions"
        :prizes="jobs"
        @rotateEnd="onRotateEnd"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
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
  
  const jobs = [
  {
        id: 1,
        name: "Paladin",
        role: "Tank",
        icon: "",
        pic: "",
        bgColor: "#2d3a80",
        color: '#ffffff',
        probability: 4.761
    },
    {
        id: 2,
        name: "Warrior",
        role: "Tank",
        icon: "",
        pic: "",
        bgColor: "#2d3a80",
        color: '#ffffff',
        probability: 4.762
    },
    {
        id: 3,
        name: "Dark Knight",
        role: "Tank",
        icon: "",
        pic: "",
        bgColor: "#2d3a80",
        color: '#ffffff',
        probability: 4.761
    },
    {
        id: 4,
        name: "Gunbreaker",
        role: "Tank",
        icon: "",
        pic: "",
        bgColor: "#2d3a80",
        color: '#ffffff',
        probability: 4.762
    },
    //healers
    {
        id: 5,
        name: "White Mage",
        role: "Healer",
        icon: "",
        pic: "",
        bgColor: "#336624",
        color: '#ffffff',
        probability: 4.762
    },
    {
        id: 6,
        name: "Scholar",
        role: "Healer",
        icon: "",
        pic: "",
        bgColor: "#336624",
        color: '#ffffff',
        probability: 4.762
    },
    {
        id: 7,
        name: "Astrologian",
        role: "Healer",
        icon: "",
        pic: "",
        bgColor: "#336624",
        color: '#ffffff',
        probability: 4.762
    },
    {
        id: 8,
        name: "Sage",
        role: "Healer",
        icon: "",
        pic: "",
        bgColor: "#336624",
        color: '#ffffff',
        probability: 4.762
    },
    //Melee DPS
    {
        id: 9,
        name: "Monk",
        role: "Melee DPS",
        icon: "",
        pic: "",
        bgColor: "#732828",
        color: '#ffffff',
        probability: 4.762
    },
    {
        id: 10,
        name: "Dragoon",
        role: "Melee DPS",
        icon: "",
        pic: "",
        bgColor: "#732828",
        color: '#ffffff',
        probability: 4.762
    },
    {
        id: 11,
        name: "Ninja",
        role: "Melee DPS",
        icon: "",
        pic: "",
        bgColor: "#732828",
        color: '#ffffff',
        probability: 4.762
    },
    {
        id: 12,
        name: "Samurai",
        role: "Melee DPS",
        icon: "",
        pic: "",
        bgColor: "#732828",
        color: '#ffffff',
        probability: 4.762
    },
    {
        id: 13,
        name: "Reaper",
        role: "Melee DPS",
        icon: "",
        pic: "",
        bgColor: "#732828",
        color: '#ffffff',
        probability: 4.762
    },
    {
        id: 14,
        name: "Viper",
        role: "Melee DPS",
        icon: "",
        pic: "",
        bgColor: "#732828",
        color: '#ffffff',
        probability: 4.762
    },
    //Physical Ranged DPS
    {
        id: 15,
        name: "Bard",
        role: "Physical Ranged DPS",
        icon: "",
        pic: "",
        bgColor: "#732828",
        color: '#ffffff',
        probability: 4.762
    },
    {
        id: 16,
        name: "Machinist",
        role: "Physical Ranged DPS",
        icon: "",
        pic: "",
        bgColor: "#732828",
        color: '#ffffff',
        probability: 4.762
    },
    {
        id: 17,
        name: "Dancer",
        role: "Physical Ranged DPS",
        icon: "",
        pic: "",
        bgColor: "#732828",
        color: '#ffffff',
        probability: 4.762
    },
    //Magical Ranged DPS
    {
        id: 18,
        name: "Black Mage",
        role: "Magical Ranged DPS",
        icon: "",
        pic: "",
        bgColor: "#732828",
        color: '#ffffff',
        probability: 4.762
    },
    {
        id: 19,
        name: "Summoner",
        role: "Magical Ranged DPS",
        icon: "",
        pic: "",
        bgColor: "#732828",
        color: '#ffffff',
        probability: 4.762
    },
    {
        id: 20,
        name: "Red Mage",
        role: "Magical Ranged DPS",
        icon: "",
        pic: "",
        bgColor: "#732828",
        color: '#ffffff',
        probability: 4.762
    },
    {
        id: 21,
        name: "Pictomancer",
        role: "Magical Ranged DPS",
        icon: "",
        pic: "",
        bgColor: "#732828",
        color: '#ffffff',
        probability: 4.762
    }
  ]
  
  function onRotateEnd (job: Job) {
    alert("You should play " + job.name + "!")
  }
  </script>