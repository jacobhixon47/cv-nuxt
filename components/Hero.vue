<template>
  <div class="hero px-10 py-20 pb-0 h-full">
    <div class="w-full h-full bg-cover rounded-2xl bg-blend-hue bg-indigo-600 bg-opacity-60 py-40" :style="{ backgroundImage: `url(${image})`}">
      <div class="hero-inner w-full h-full flex flex-col justify-around content-center gap-10">
        <div class="flex flex-col justify-center align-center">
          <p class="text-9xl font-sans font-black text-blue-100 text-center">GET THE DEVELOPMENT</p>
          <p class="text-9xl font-sans font-black text-indigo-400 text-center">YOU NEED.</p>
        </div>
        <div class="flex justify-center gap-20">
          <button class="text-xl rounded-lg bg-blue-100 px-20 py-5 text-indigo-400 font-semibold">Contact</button>
          <button class="text-xl rounded-lg bg-indigo-400 px-20 py-5 text-white font-semibold bg-opacity-50 transition hover:bg-opacity-100 duration-500 ease-in-out">Projects</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayOneImg from 'assets/day-1.jpg'
import dayTwoImg from 'assets/day-2.jpg'
import dayThreeImg from 'assets/day-3.jpg'
import nightOneImg from 'assets/night-1.jpg'

let dayImages = [dayOneImg, dayTwoImg, dayThreeImg]
let nightImages = [nightOneImg]

let now = new Date().getHours();
let currentImg;

if (now <= 20 || now >= 5) {
  currentImg = dayImages[Math.floor(Math.random()*dayImages.length)]
} else {
  currentImg = nightImages[Math.floor(Math.random()*nightImages.length)]
}

  export default {
    data() {
      return {
        image: dayOneImg,
      }
    }
  }
</script>

<style scoped>
  .hero {
    background: linear-gradient(to bottom, #fff 50%, #f3f4f6 50%);
  }
</style>