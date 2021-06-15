<template>
  <div class="bg-fixed w-screen h-screen bg-cover" :style="{ backgroundImage: `url(${image})`}">

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