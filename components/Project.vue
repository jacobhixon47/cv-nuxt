<template>
  <div class="project grid grid-cols-1 grid-rows-4 gap-2 bg-gray-700 relative z-0 w-full">
    <!-- <img 
      :src="require(`@/assets/${project.image || 'day-1.jpg'}`)" 
      alt="project image"
      class="rounded-xl row-span-3 col-span-1"
    > -->
    <div class="project-img row-span-3" :style="{ backgroundImage: `url(${imgUrl})`}">

    </div>
    <div class="p-5 bg-gray-600">
      <p class="text-xl text-indigo-100 font-bold">{{ project.title }}</p>
      <p class="text-lg text-indigo-100 italic font-semibold">{{ project.description }}</p>
      <!-- <br>
      <p class="text-lg text-indigo-400 italic">{{ project.modifiedSince? "(Design has changed since I worked on it)" : "(Design has not changed since I worked on it)" }}</p> -->
    </div>
  </div>
</template>

<script>
  export default {
    props: ['project'],
    computed: {
      imgUrl() {
        try {
          return require(`@/assets/${this.project?.image}`)
        } catch (e) {
          return require('@/assets/day-1.jpg')
        }
      }
    }
  }
      // setFallbackImageUrl(event) {
      //   console.log('Image failed to load, setting fallback.')
      //   event.target.src = require(`~/assets/${'day-1' + '.jpg'}`)
      // }
</script>

<style scoped>

.project-img {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  position: relative;
}

</style>