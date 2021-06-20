<template>
  <div id="projects" class="w-full relative p-10 pt-0 flex-col gap-0 justify-start items-center bg-gray-700 transform -skew-y-12">
    <p class="projects-title w-full text-huge rounded-lg py-5 text-gray-700 font-black text-right transform skew-y-12">work.</p>
    <div class="projects-container flex transform skew-y-12 w-full h-1/5 z-20 gap-5">
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

.projects-title {
  text-shadow: 
            5px 5px 10px #2e3744,
             -5px -5px 10px #404b5e;
  outline: none;
}

</style>