<template>
  <div class="px-20 pb-20 h-auto bg-cover bg-top" :style="{ backgroundImage: `url(${image})`}">
    <div class="w-full h-full employers-section">
      <p class="work-title w-full text-huge rounded-lg text-indigo-100 opacity-60 font-black text-right">cv.</p>
      <div class="employer-container pt-0 grid grid-cols-2 justify-center h-full gap-5">
        <Employer 
          v-for="employer in employers"
          :key="employer.id"
          :employer="employer"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import nightImg from 'assets/night-2.jpg'
  export default {
    computed: {
      ...mapState([
        'employers'
      ])
    },
    data() {
      return {
        image: nightImg,
      }
    }
  }
</script>

<style scoped>

</style>