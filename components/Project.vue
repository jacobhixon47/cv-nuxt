<template>
  <div class="project grid grid-cols-1 grid-rows-4 bg-gradient-to-b from-blue-300 to-indigo-500 rounded-xl p-10 gap-5 relative z-0">
    <!-- <img 
      :src="require(`@/assets/${project.image || 'day-1.jpg'}`)" 
      alt="project image"
      class="rounded-xl row-span-3 col-span-1"
    > -->
    <img 
      :src="require('@/assets/day-1.jpg')" 
      alt="project image"
      class="rounded-xl row-span-3"
    >
    <div class="p-5 bg-blue-100 rounded-xl">
      <p class="text-xl text-indigo-400 font-bold">{{ project.title }}</p>
      <p class="text-lg text-indigo-400 italic font-semibold">{{ project.description }}</p>
      <!-- <br>
      <p class="text-lg text-indigo-400 italic">{{ project.modifiedSince? "(Design has changed since I worked on it)" : "(Design has not changed since I worked on it)" }}</p> -->
    </div>
  </div>
</template>

<script>
  export default {
    props: ['project'],
    methods: {
      setImageUrl(event) {
        console.log("ERROR LOADING UR IMAGE WAAAAAAH!")
      }
      // setFallbackImageUrl(event) {
      //   console.log('Image failed to load, setting fallback.')
      //   event.target.src = require(`~/assets/${'day-1' + '.jpg'}`)
      // }
    }
  }
</script>

<style scoped>

</style>