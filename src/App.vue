<template>
  <div id="app">
		<main v-if="this.$route.path === '/'">
			<MainView></MainView>
		</main>
		<main v-else>
			<router-view></router-view>
		</main>
		<Footer></Footer>
  </div>
</template>

<script>
// import Logo from './components/Logo.vue';
import MainView from './views/MainView.vue';
import Footer from './components/Footer.vue';

export default {
	name: 'app',
	components: {
		MainView,
		Footer,
	},
};
</script>

<style>
/* common styling */
html,
body,
#app {
	min-height: 100vh;
	position: relative;
	margin: 0;
	padding: 0;
}
body {
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	background-color: #e8e8e8;
}
#app {
	display: flex;
	flex-direction: column;
}
#app main {
	flex: 1;
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
