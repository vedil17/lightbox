<template>
  <div id="app">
    <a :href="'https://picsum.photos/id/'+n+'/800/600'" v-lightbox v-for="n in 9">
      <img :src="'https://picsum.photos/id/'+n+'/150/150'">
    </a>
    <lightbox></lightbox>
  </div>
</template>

<script>
import lightbox from './components/lightbox/lightbox'

export default {
  name: 'App',
  components: {
    lightbox
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
