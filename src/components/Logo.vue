<template>
    <div class="logo-bars">
        <div class="logo-bar top"></div>
        <div class="logo-bar medium"></div>
        <div class="logo-bar bottom"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.logo-bars {
    position: relative;
    width: 110px;
    height: 76px;
    cursor: pointer;
    z-index: 1000;
}
.logo-bar {
    position: absolute;
    width: 110px;
    height: 1px;
    background-color: #3e3e3e;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.25), 0 1px 3px rgba(0, 0, 0, 0.2);
}
.logo-bar.top {
    top: 0;
}
.logo-bar.medium {
    top: 37px;
}
.logo-bar.bottom {
    top: 74px;
}
.logo-bars:hover .logo-bar.top {
    transition: top 0.4s ease-in-out, transform 0.3s ease-in-out 0.7s;
    top: 37px;
    transform: rotate(45deg);
}
.logo-bars:hover .logo-bar.medium {
    transition: 0.4s ease-in;
    opacity: 0;
}
.logo-bars:hover .logo-bar.bottom {
    transition: top 0.4s ease-in-out, transform 0.3s ease-in-out 0.7s;
    top: 37px;
    transform: rotate(-45deg);
}

</style>
