<template>
  <div id="app">
    <div class="container">
      <div class="col-sm-6">
        <builds></builds>
      </div>
      <div class="col-sm-4">
        <projects></projects>
      </div>
    </div>
  </div>
</template>

<script>
import Builds from './components/Builds.vue'
import Projects from './components/Projects.vue'
export default {
  name: 'app',
  components: {
    Builds,
    Projects
  }
}
</script>
