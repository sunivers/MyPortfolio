<template>
    <div class="container">
        <router-link to="/"><logo></logo></router-link>
        <tool-bar></tool-bar>

        <section class="section projects">
            <h1>Personal Project</h1>
            <div class="project-list">
                <div class="item"> 
                    <figure class="image">
                        <img class="project-thumb" src="../assets/break.jpg">
                    </figure>
                    <div class="text">
                        <h1 class="title">벽돌깨기</h1>
                        <p class="desc">
                            canvas 태그와 바닐라 JS를 사용해서 벽돌깨기 게임 구현.
                        </p>
                        <a class="button" href="https://sunivers.github.io/Game-breakout/" target="_blank">
                            <span>View Website</span>
                            <span class="icon"><i class="fas fa-angle-right"></i></span>
                        </a>
                    </div>
                </div>
                <div class="item">
                    <figure class="image">
                        <img class="project-thumb" src="../assets/paint.jpg">
                    </figure>
                    <div class="text">
                        <h1 class="title">그림판</h1>
                        <p class="desc">
                            canvas 태그와 바닐라 JS를 사용해서 그림판 구현.
                        </p>
                        <a class="button" href="https://sunivers.github.io/paintjs/" target="_blank">
                            <span>View Website</span>
                            <span class="icon"><i class="fas fa-angle-right"></i></span>
                        </a>
                    </div>
                </div>
                <div class="item">
                    <figure class="image">
                        <img class="project-thumb" src="../assets/graph.jpg">
                    </figure>
                    <div class="text">
                        <h1 class="title">그래프</h1>
                        <p class="desc">
                            canvas 태그와 React를 사용하여 동적 그래프 생성 구현.
                        </p>
                        <a class="button" href="https://sunivers.github.io/canvasGraph/" target="_blank">
                            <span>View Website</span>
                            <span class="icon"><i class="fas fa-angle-right"></i></span>
                        </a>
                    </div>
                </div>
                
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

<style>

</style>
