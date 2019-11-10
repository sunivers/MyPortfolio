<template>
	<div class="main_container">
		<section class="profile">
			<h1>Front-End Developer</h1>
			<div class="profile-img">
				<img src="../assets/profile_image.jpg" alt="profile image">
			</div>
			<p>Hi, I'm Soyoung. <br>
				I am UI/UX and Front-end developer. I love my job.
				I have a experience for about 2 years.
			</p>
			<!-- Available for hire -->
		</section>
		<section class="navigation">
			<h1>Select!</h1>
			<ul>
				<li>
					<router-link to="/company">company project</router-link>
				</li>
				<li>
					<router-link to="/personal">personal project</router-link>
				</li>
				<li>
					<router-link to="/about">about me</router-link>
				</li>
				<li>
					<router-link to="/contact">contact me</router-link>
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.main_container {
	width: 90%;
	margin: 30px auto 50px auto;
	box-shadow: 5px 5px 8px 2px rgb(0, 0, 0, 0.15);
	background-color: #fff;
	display: flex;
	flex-direction: column;
}
.main_container section {
	text-align: center;
	padding: 20px 20px 40px 20px;
	box-sizing: border-box;
	flex: 1 350px;
}
.main_container h1 {
	font-size: 2rem;
	font-weight: 900;
	color: #ff78a1;
	text-shadow: 3px 2px #364f6b;
	text-transform: uppercase;
}

section.profile {
	background-color: #fff;
}
.profile-img {
	width: 200px;
	height: 200px;
	margin: 0 auto;
	border: 10px solid #3fc1c9;
	border-radius: 200px;
}
.profile-img img {
	border-radius: 200px;
	border: 10px solid #fff;
	width: 100%;
	box-sizing: border-box;
}
.profile p {
	color: #364f6b;
	padding: 20px 20px 0;
	margin: 0;
	line-height: 1.5;
}

section.navigation {
	background-color: #3fc1c9;
}
.navigation h1 {
	color: #ffc0d3;
}
.navigation ul {
	padding: 0;
	margin: 0;
}
.navigation li {
	list-style: none;
}
.navigation li a {
	display: inline-block;
	width: 90%;
	padding: 10px;
	border-radius: 20px;
	background-color: #fff;
	color: #364f6b;
	text-decoration: none;
	font-weight: bold;
	margin-bottom: 20px;
	text-transform: uppercase;
	box-shadow: 5px 5px #364f6b;
}

/* 760px 이상 */
@media (min-width: 768px) {
	.main_container {
		flex-direction: row;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		margin: 0;
	}
}
</style>