<template>
  <div id="projects" class="w-full p-10 flex gap-5 bg-gray-700">
    <Project 
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
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
  /* #projects {
    background-color: #f3f4f6;
  } */
</style>