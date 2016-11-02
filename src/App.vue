<template>
  <div id="app">
    <builds></builds>
    <projects></projects>
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
