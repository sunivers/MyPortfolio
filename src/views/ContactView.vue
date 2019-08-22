<template>
    <div class="container">
        <router-link to="/"><logo></logo></router-link>
        <tool-bar></tool-bar>
        <div class="contact-icon">
            <a href="tel:010-3013-3596"><i class="fas fa-mobile-alt"></i></a>
        </div>
        <div class="contact-icon">
            <a href="mailto:soyoungp02@gmail.com"><i class="far fa-envelope"></i></a>
        </div>
        <div class="contact-icon">
            <a href="https://psyvelop.blogspot.com/" target="_blank"><i class="fab fa-blogger"></i></a>
        </div>
        <div class="contact-icon">
            <a href="https://github.com/sunivers" target="_blank"><i class="fab fa-github"></i></a>
        </div>
        <!-- <div class="contact-icon"><i class="fab fa-linkedin-in"></i></div> -->
    </div>
</template>

<script>
import Logo from '../components/Logo.vue';
import ToolBar from '../components/ToolBar.vue';

export default {
    components: {
        Logo,
        ToolBar,
    }
}
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
