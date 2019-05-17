<template>
  <div id="app">
    <div>
      <router-view/>
      <FootGuide/>
    </div>
  </div>
</template>

<script>
import FootGuide from './components/FootGuide/FootGuide.vue'

export default {
  name: 'App',
  components:{
    FootGuide
  }

}
</script>

<style>

</style>
