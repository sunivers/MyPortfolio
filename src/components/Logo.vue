<template>
    <div class="flex-container">
        <div :class="['logo-bars', {'fixed':this.isLogoFixed}]" @mouseenter="hoveredLogo">
            <div class="logo-bar top"></div>
            <div class="logo-bar medium"></div>
            <div class="logo-bar bottom"></div>
        </div>
        <ul class="nav-list">
            <li><slot name="list-1"></slot></li>
            <li><slot name="list-2"></slot></li>
            <li><slot name="list-3"></slot></li>
            <li><slot name="list-4"></slot></li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLogoFixed: false,
        }
    },
    props: {
        isHoverOnce: Boolean,
    },
    methods: {
        hoveredLogo() {
            if(this.isHoverOnce) {
                this.isLogoFixed = true;
            }
        }
    }
}
</script>

<style scoped>
.flex-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

/* logo-bar CSS */
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
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.2), 0 1px 3px rgba(0, 0, 0, 0.15);
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

/* nav-list CSS */
.nav-list {
  position: absolute;
  width: 310px;
}
.nav-list li {
  width: 100px;
  padding: 20px 0;
  display: inline-block;
  vertical-align: middle;
  font-size: 1rem;
  font-weight: 100;
  text-transform: uppercase;
  opacity: 0;
}
.nav-list li:nth-child(odd) {
  margin-right: 110px;
  text-align: right;
}
.nav-list li:nth-child(1), .nav-list li:nth-child(2) {
    margin-bottom: 40px;
}
.logo-bars:hover + .nav-list li {
    transition: 0.2s ease-in 0.8s;
    opacity: 1;
}
.nav-list li a {
    text-decoration: none;
    color: #333;
}
.nav-list li a:hover, .nav-list li a:active {
    color: #42b883;
    font-weight: 400;
}

/* fixed logo CSS */
.fixed .logo-bar.top {
    top: 37px;
    transform: rotate(45deg);
}
.fixed .logo-bar.medium {
    opacity: 0;
}
.fixed .logo-bar.bottom {
    top: 37px;
    transform: rotate(-45deg);
}
.fixed + .nav-list li {
    opacity: 1;
}
</style>
