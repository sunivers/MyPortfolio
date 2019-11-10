<template>
    <header class="header">
        <div class="home">
            <router-link to="/">Home</router-link>
        </div>
        <button :class="['m_nav_button', {active}]" @click="toggleNav">
            <div></div>
            <div></div>
            <div></div>
        </button>
        <div v-if="active" class="nav">
            <router-link to="/company">company p.j</router-link>
            <router-link to="/toy">toy p.j</router-link>
            <router-link to="/about">about me</router-link>
            <router-link to="/contact">contact me</router-link>
        </div>
    </header>
</template>

<script>
export default {
	data() {
		return {
			active: false,
		};
	},
	methods: {
		toggleNav() {
			this.active = !this.active;
		},
	},
	mounted() {
		if (window.innerWidth >= 768) {
			this.active = true;
		}
	},
};
</script>

<style scoped>
.header {
	display: flex;
	padding: 0 16px;
	border-bottom: 1px solid #a0a0a0;
	background-color: #3fc1c9;
	justify-content: space-between;
	height: 60px;
	box-sizing: border-box;
	position: relative;
}
.header .home a {
	font-size: 2rem;
	color: #ffc0d3;
	margin: 0;
}
.header a.router-link-exact-active {
	color: #eac7ff;
}
.header a {
	font-size: 1.2rem;
	font-weight: 900;
	color: #fff;
	text-shadow: 3px 2px #364f6b;
	text-transform: uppercase;
	line-height: 60px;
	text-decoration: none;
	text-transform: uppercase;
	display: inline-block;
	margin-left: 15px;
}
.header a:hover {
	text-decoration: underline;
}

.m_nav_button {
	background: none;
	border: none;
	cursor: pointer;
	padding: 0;
	width: 30px;
	height: 30px;
	position: absolute;
	top: 50%;
	right: 16px;
	transform: translate(0, -50%);
	z-index: 10;
}
.m_nav_button div {
	width: 30px;
	height: 3px;
	background-color: #fff;
	margin-bottom: 8px;
}
.m_nav_button div:last-child {
	margin: 0;
}
.m_nav_button.active div:nth-child(1) {
	margin: 0;
	transform: translate(0, 3px) rotate(45deg);
}
.m_nav_button.active div:nth-child(2) {
	display: none;
}
.m_nav_button.active div:nth-child(3) {
	transform: rotate(-45deg);
}

.nav {
	position: absolute;
	right: 0;
	width: 200px;
	height: 100vh;
	background-color: #3fc1c9;
	border-left: 2px solid #364f6b;
	padding: 60px 20px 0;
	box-sizing: border-box;
	text-align: right;
}

@media (min-width: 768px) {
	.m_nav_button {
		display: none;
	}
	.nav {
		display: block;
		position: static;
		width: auto;
		height: auto;
		padding: 0;
		border: none;
	}
}
</style>
