<template>
    <div class="container">
        <router-link to="/"><logo></logo></router-link>
        <tool-bar></tool-bar>
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
