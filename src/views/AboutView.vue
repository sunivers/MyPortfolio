<template>
    <div class="container">
        <router-link to="/"><logo></logo></router-link>
        <tool-bar></tool-bar>

        <!-- Intro -->
        <section class="section intro">
            <h1>intro</h1>
            <div class="flex-container">
                <div class="image">
                    <img src="../assets/profile_image.jpeg" alt="profile image">
                </div>
                <p class="text">
                    개발자로서는 2년차, 프론트엔드 직군으로는 1년차가 된 주니어 개발자입니다.<br>
                    기획 및 디자인을 전공하였고, 윈도우 프로그래밍 경력이 1년 있습니다. 이 후 5개월의 웹 퍼블리셔를 거쳐 현재의 프론트엔드 개발자에 이르게 되었습니다.<br>
                    현업에서 Vue.js, RESTful API, jQuery 등의 기술을 사용하여 약 10여개 서비스의 front-end를 담당하여 개발 및 운영하였으며, Node.js, MySQL 등을 이용한 짧은 back-end 경험도 있습니다.<br>
                    개발자로서 필요한 자질 중 하나는 끝없는 자기개발이라고 생각합니다. 그래서 블로그 운영이나 TIL(Today I Learned) 또는 1일 1커밋 등의 공부 습관을 꾸준히 유지하려 노력중이며, 또한 빠르게 발전하는 IT업계에서 뒤쳐지지 않기 위해 배우는 것을 두려워하지 않고 끊임없이 도전하고 있습니다.<br>
                </p>
            </div>
        </section>
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
/* section styling */
.section {
    margin: 20px 0 50px 0;
}
.section h1 {
  font-size: 2rem;
  text-transform: uppercase;
  color: #aaa;
  font-weight: bold;
}

/* intro styling */
.intro .flex-container {
    display: flex;
    padding: 20px;
    max-width: 700px;
    margin: 0 auto;
    align-items: center;
    flex-direction: column;
}
@media (min-width:768px) {
    .intro .flex-container {
        flex-direction: row;
    }
}
.intro .image {
    margin: 0 20px 20px 0;
}
.intro img {
    width: 150px;
    border-radius: 70px;
}
.intro .text {
    font-weight: lighter;
    padding: 20px;
    line-height: 1.3;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.2), 0 1px 3px rgba(0, 0, 0, 0.15);
}
</style>
