<template>
  <div id="app">
    <template v-if="this.$route.path === '/'">
      <logo :is-hover-once="true">
        <template slot="list-1"><router-link to="/company">company p.j</router-link></template>
        <template slot="list-2"><router-link to="/about">about me</router-link></template>
        <template slot="list-3"><router-link to="/personal">personal p.j</router-link></template>
        <template slot="list-4"><router-link to="/contact">contact me</router-link></template>
      </logo>
    </template>
    <template v-else>
      <router-view></router-view>
    </template>
  </div>
</template>

<script>
import Logo from './components/Logo.vue'

export default {
  name: 'app',
  components: {
    Logo
  },
  created() {
    console.log(this.$route);
  }
}
</script>

<style>
@import url("./css/reset.css");

/* common styling */
html, body, #app {
  height: 100%;
}
.container {
  padding: 50px 20px;
}
.section {
    margin: 20px 0 50px 0;
}
.section h1 {
  font-size: 2rem;
  text-transform: uppercase;
  color: #aaa;
  font-weight: bold;
}
</style>
