<template>
  <nav 
    class="fixed h-20 flex w-full px-10 py-5 align-center justify-between bg-transparent z-10"
    :class="{ 'scrolled': !view.atTopOfPage }"
    >
    <div class="nav-logo flex justify-center items-center flex-shrink-0 flex-grow-0 rounded-xl border-2 h-10 w-10 border-purple-500">
      <h3 class="text-indigo-100">JH</h3>
    </div>
    <div class="nav-items flex-grow flex justify-center items-center text-indigo-100">
      <div class="nav-item px-10">
        <p class="text-l">Projects</p>
      </div>
      <div class="nav-item px-10">
        <p class="text-l">CV</p>
      </div>
      <div class="nav-item px-10">
        <p class="text-l">Contact</p>
      </div>
    </div>
  </nav>
</template>

<script>
// scroll class-change functionality added from this article by Chris Dermody https://chrisdermody.com/tailwind-css-static-navbar-with-shadow-on-scroll/
  export default {
    data () {
      return {
        view: {
          atTopOfPage: true
        }
      }
    },
    beforeMount () {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
	// the function to call when the user scrolls, added as a method
      handleScroll(){
          // when the user scrolls, check the pageYOffset
        if(window.pageYOffset>0) {
            // user is scrolled
          if(this.view.atTopOfPage) this.view.atTopOfPage = false
        } else {
            // user is at top of page
          if(!this.view.atTopOfPage) this.view.atTopOfPage = true
        }
      }
    }
  }
</script>

<style scoped>
  nav {
    transition: all 0.5s ease-in-out;
  }
  .scrolled {
      @apply shadow-2xl;
      border-bottom: 0px;
      @apply bg-gray-600;
      transition: all 0.5s ease-in-out;
  }

</style>