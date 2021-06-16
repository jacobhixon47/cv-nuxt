<template>
  <div>
    <div class="bg-fixed w-screen h-screen bg-cover" :style="{ backgroundImage: `url(${image})`}">
      <div class="hero-inner w-full h-full flex flex-col justify-center content-center">
        <div class="flex justify-center content-center">
          <p class="text-9xl font-sans">Hello</p>
        </div>
        <div class="flex justify-center justify-items-stretch">
          <button class="rounded-full bg-gradient-to-br from-purple-300 to-purple-900 px-6 py-3">Option 1</button>
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
        image: currentImg,
      }
    }
  }
</script>

<style scoped>

</style>