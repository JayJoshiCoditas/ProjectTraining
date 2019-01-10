<template>
  <div id="app">
    <navBar />
    <router-view/>
    
  </div>
</template>

<script>
import navBar from '@/views/navBar.vue'
import footer from '@/views/footer.vue'

export default {
  name: 'App',
  components: {
    navBar,
    footer,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
