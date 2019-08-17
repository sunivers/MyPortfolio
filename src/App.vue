<template>
  <div id="app">
    <logo></logo>
  </div>
</template>

<script>
import Logo from './components/Logo.vue'

export default {
  name: 'app',
  components: {
    Logo
  }
}
</script>

<style>
@import url("./css/reset.css");

html, body, #app {
  height: 100%;
}
#app {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
