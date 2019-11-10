<template>
    <div class="container">
        <section class="section contact">
            <h1>Contact me</h1>
            <div class="contact-icon">
                <a href="tel:010-3013-3596"><i class="fas fa-mobile-alt"></i></a>
            </div>
            <div class="contact-icon">
                <a href="mailto:soyoungp02@gmail.com"><i class="far fa-envelope"></i></a>
            </div>
            <div class="contact-icon">
                <a href="https://soobakba.tistory.com/" target="_blank"><i class="fab fa-blogger"></i></a>
            </div>
            <div class="contact-icon">
                <a href="https://github.com/sunivers" target="_blank"><i class="fab fa-github"></i></a>
            </div>
        </section>
        
        <!-- <div class="contact-icon"><i class="fab fa-linkedin-in"></i></div> -->
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url('../../node_modules/@fortawesome/fontawesome-free/css/all.css');
.contact-icon {
	text-align: center;
	padding: 20px 0;
}
.contact-icon i {
	font-size: 70px;
	color: #aaa;
}
.contact-icon i:hover {
	color: #42b883;
}
</style>
