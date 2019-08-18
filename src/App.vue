<template>
  <div id="app">
    <logo :is-hover-once="true">
      <template slot="list-1">company p.j</template>
      <template slot="list-2">about me</template>
      <template slot="list-3">personal p.j</template>
      <template slot="list-4">contact me</template>
    </logo>
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
</style>
