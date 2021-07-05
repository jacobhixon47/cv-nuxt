<template>
 <!-- Old layout  -->
  <!-- <div class="hero h-screen bg-gray-700">
    <div class="w-full h-full bg-cover rounded-2xl bg-blend-hue bg-indigo-600 bg-opacity-60 py-40" :style="{ backgroundImage: `url(${image})`}">
      <div class="hero-inner w-full h-full flex flex-col justify-around content-center gap-10">
        <div class="flex flex-col justify-center align-center">
          <p class="text-9xl font-sans font-black text-blue-100 text-center">GET THE DEVELOPMENT</p>
          <p class="text-9xl font-sans font-black text-indigo-400 text-center">YOU NEED.</p>
        </div>
        <div class="flex justify-center gap-20">
          <button class="text-xl rounded-lg bg-blue-100 px-20 py-5 text-indigo-400 font-semibold">Contact</button>
          <button class="text-xl rounded-lg bg-indigo-400 px-20 py-5 text-white font-semibold bg-opacity-50 transition hover:bg-opacity-100 bg-gradient-to-br duration-500 ease-in-out">Projects</button>
        </div>
      </div>
    </div>
  </div> -->

  <div class="hero h-screen bg-gray-700">
    <div class="absolute bottom-0 top-0 w-full h-full">
      <div class="grid-container w-full h-full transform -skew-y-12 z-0">
        <div class="bg-grid grid w-full absolute -bottom-10 bg-gradient-to-br from-gray-500 to-gray-700 -z-1">
          <div class="stripe opacity-0 left-stripe-fast col-span-2 row-span-1 row-start-9 col-start-1 bg-blue-400"></div>
          <div class="stripe opacity-0 left-stripe-slow col-span-3 row-span-1 row-start-12 col-start-1 bg-indigo-100"></div>
          <div class="stripe opacity-0 left-stripe-fast col-span-3 row-span-1 row-start-13 col-start-2 bg-purple-400"></div>
          <div class="stripe opacity-0 left-stripe-slow col-span-1 row-span-1 row-start-13 col-start-5 bg-purple-500"></div>

          <div class="stripe opacity-0 right-stripe-slow col-span-4 row-span-1 row-start-6 col-start-12 bg-indigo-100"></div>
          <div class="stripe opacity-0 right-stripe-fast col-span-3 row-span-1 row-start-7 col-start-11 bg-purple-400"></div>
          <div class="stripe opacity-0 right-stripe-slow col-span-1 row-span-1 row-start-7 col-start-14 bg-purple-500"></div>
          <div class="stripe opacity-0 right-stripe-fast col-span-2 row-span-1 row-start-10 col-start-13 bg-blue-400"></div>

          <div class="stripe opacity-0 right-stripe-slow col-span-4 row-span-1 row-start-14 col-start-12 bg-gray-500"></div>
          <div class="stripe opacity-0 left-stripe-slow col-span-3 row-span-1 row-start-4 col-start-1 bg-gray-500"></div>

          <div class="stripe opacity-0 left-stripe-fast col-span-2 row-span-1 row-start-6 col-start-3 border-gray-500 border-2"></div>
          <!-- <div class="stripe opacity-0 col-span-2 row-span-1 row-start-8 col-start-2 border-gray-500 border-2"></div> -->
          <div class="stripe opacity-0 right-stripe-fast col-span-2 row-span-1 row-start-12 col-start-10 border-gray-500 border-2"></div>

        </div>
      </div>
    </div>
    <div class="absolute hero-content skew-y-12 h-full w-full flex flex-col content-start justify-center pb-40 gap-10">
      <div class="flex flex-col justify-center align-center">
        <p class="hero-top-text text-6xl font-sans font-black text-indigo-100 text-center opacity-0">Get the development</p>
        <p class="hero-bottom-text text-6xl font-sans font-black text-purple-500 text-center opacity-0">you need.</p>
      </div>
      <div class="flex justify-center gap-20">
        <button class="hero-btn text-xl rounded-lg px-20 py-5 text-purple-500 font-semibold opacity-0 bg-indigo-100">Contact</button>
        <button class="hero-btn text-xl rounded-lg px-20 py-5 text-indigo-100 font-semibold opacity-0 bg-purple-500">Projects</button>
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
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(100%);
      visibility: hidden;
    }
    100% {
      opacity: 1;
      transform: translateY(0);
      visibility: visible;
    }
  }

  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translateX(-100%);
      visibility: hidden;
    }
    100% {
      opacity: 1;
      transform: translateX(0);
      visibility: visible;
    }
  }

  @keyframes leftStripeSlide {
    0% {
      transform: translateX(-150%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes rightStripeSlide {
    0% {
      transform: translateX(-500%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

    /* .hero {
    background: linear-gradient(to bottom, #fff 50%, #f3f4f6 50%);
  } */


  .bg-grid {
    grid-template-rows: repeat(16, minmax(0, 1fr));
    grid-template-columns: repeat(14, minmax(0, 1fr));
    height: 130%;
  }

  /* .stripe {
    box-shadow: 11px 12px 22px -10px rgba(0,0,0,0.6)
  } */

  .hero-top-text {
    animation: 0.75s ease-in-out 1s 1 fadeInUp forwards;
  }

  .hero-bottom-text {
    animation: 0.75s ease-in-out 1.25s 1 fadeInUp forwards;
  }

  .hero-btn {
    animation: 0.75s ease-in-out 1.5s 1 fadeInUp forwards;
  }

  .left-stripe-fast {  
    /* This section calls the slideInFromLeft animation we defined above */
    animation: .5s ease-in-out 0s 1 leftStripeSlide forwards;
  }

  .left-stripe-slow {  
    /* This section calls the slideInFromLeft animation we defined above */
    animation: 1s ease-in-out 0s 1 leftStripeSlide forwards;
  }

  .right-stripe-fast {  
    /* This section calls the slideInFromLeft animation we defined above */
    animation: 1s ease-in-out 0s 1 rightStripeSlide forwards;
  }

  .right-stripe-slow {  
    /* This section calls the slideInFromLeft animation we defined above */
    animation: 1.25s ease-in-out 0s 1 rightStripeSlide forwards;
  }


</style>