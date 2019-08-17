<template>
  <div id="app">
    <logo></logo>
    <ul class="nav-list">
      <li>personal project</li>
      <li>about me</li>
      <li>company project</li>
      <li>contact me</li>
    </ul>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.nav-list {
  position: absolute;
  width: 310px;
}
.nav-list li {
  width: 100px;
  height: 50px;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  font-size: 1rem;
  font-weight: 100;
  text-transform: uppercase;
}
.nav-list li:nth-child(odd) {
  margin-right: 110px;
}
</style>
