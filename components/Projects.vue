<template>
  <div id="projects" class="w-full relative p-10 pt-0 flex-col gap-0 justify-start items-center bg-gray-700 -z-2 transform -skew-y-12">
    <p class="w-full text-huge rounded-lg py-5 text-gray-600 font-black text-right transform skew-y-12">PROJECTS</p>
    <div class="flex transform skew-y-12 gap-2 w-full">
      <Project 
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState([
        'projects'
      ])
    }
  }
</script>

<style scoped>
  #projects {
    height: 200vh;
  }
</style>