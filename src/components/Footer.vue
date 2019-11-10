<template>
  <footer class="footer">
    <small>© Copyright Soyoung Park all right reserved.</small>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
	height: 50px;
	background-color: #888;
	text-align: center;
}
.footer small {
	line-height: 50px;
	color: #ccc;
}

/* 760px 이상 */
@media (min-width: 768px) {
	.footer {
		position: relative;
		bottom: 0;
	}
}
</style>