<template>
  <div class="project flex justify-end items-end gap-2 bg-gray-700 relative w-full h-full p-10 z-10 rounded-xl" :style="{ backgroundImage: `url(${imgUrl})`}">
    <div class="overlay"></div>
    <div class="project-info p-5 bg-indigo-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 rounded-xl w-1/3">
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

.project {
  flex: 1;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
  -webkit-box-shadow: 0px 15px 20px 0px rgba(0,0,0,0.8); 
  box-shadow: 0px 15px 20px 0px rgba(0,0,0,0.8);
  transition: all 0.5s ease-in-out, background-position 3s ease-in;
  
}

.overlay {
  width:100%;
  height:100%;
  position:absolute;
  bottom: 0;
  right: 0;
  background-color:#000;
  opacity:0;
  transition: all 0.5s ease-in-out;
  @apply rounded-xl;
}

.project .project-info {
  opacity: 0;
  transition: all .5s ease-in-out;
}

.project:hover {
  flex-grow: 10;
  background-position: bottom center;
  transition: background-position 20s ease-out, flex-grow .5s ease-in;
}

.project:hover > .project-info {
  opacity: 1;
  transition: all .5s ease-in-out;
}

.project:hover > .overlay {
    opacity:0.3;
    transition: all 0.5s ease-in-out;
}

</style>