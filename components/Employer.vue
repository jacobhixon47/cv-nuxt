<template>
  <div class="employer text-indigo-100 font-thin p-10 bg-gray-500 bg-opacity-20 bg-clip-padding rounded-xl row-span-1 col-span-1" style="backdrop-filter: blur(20px)">
    <p class="company text-3xl font-bold text-indigo-300">{{employer.company}}</p>
    <p class="job-title text-xl">{{employer.jobTitle}}</p>
    <p class="job-dates text-xl italic">{{employer.dates}}</p>
    <br>
    <p class="role-desc text-lg">{{employer.roleDescription}}</p>
  </div>
</template>

<script>
  export default {
    props: ['employer'],
  }
</script>

<style scoped>
</style>