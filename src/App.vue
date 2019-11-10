<template>
  <div id="app">
		<main v-if="this.$route.path === '/'">
			<MainView></MainView>
		</main>
		<main v-else>
			<tool-bar></tool-bar>
			<router-view></router-view>
		</main>
		<Footer></Footer>
  </div>
</template>

<script>
import MainView from './views/MainView.vue';
import ToolBar from './components/ToolBar.vue';
import Footer from './components/Footer.vue';

export default {
	name: 'app',
	components: {
		MainView,
		ToolBar,
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
	background-color: #fff;
	box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.12);
	padding: 20px;
	text-align: center;
}
.section > h1 {
	font-size: 2rem;
	font-weight: 900;
	color: #ff78a1;
	text-shadow: 2px 2px #364f6b;
	text-transform: uppercase;
}
</style>
