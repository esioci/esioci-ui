<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col">
          <builds></builds>
        </div>
        <div class="col">
          <projects></projects>
        </div>
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
