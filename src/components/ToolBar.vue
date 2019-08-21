<template>
    <div class="header">
        <router-link to="/company">company p.j</router-link>
        <router-link to="/personal">personal p.j</router-link>
        <router-link to="/about">about me</router-link>
        <router-link to="/contact">contact me</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
    padding: 8px;
    text-align: center;
    border-bottom: 1px solid #a0a0a0;
    margin: 40px 0;
}
.header a.router-link-exact-active {
    color: #42b883;
    font-weight: normal;
}
.header a {
    color: #333;
    padding: 10px 15px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: lighter;
    display: inline-block;
}
.header a:hover {
    text-decoration: underline;
}
</style>
