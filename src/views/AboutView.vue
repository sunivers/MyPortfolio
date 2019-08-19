<template>
    <div class="container">
        <router-link to="/"><logo></logo></router-link>
        <tool-bar></tool-bar>

        <!-- Time Line -->
        <section class="timeline">
            <ul>
                <li>
                <div>
                    <time>1934</time> 
                </div>
                </li>
                <li>
                <div>
                    <time>1937</time> 
                </div>
                </li>
                <li>
                <div>
                    <time>1940</time> 
                </div>
                </li>
                <li>
                <div>
                    <time>1943</time> 
                </div>
                </li>
                <li>
                <div>
                    <time>1946</time> 
                </div>
                </li>
                <li>
                <div>
                    <time>1956</time> 
                </div>
                </li>
                <li>
                <div>
                    <time>1957</time> 
                </div>
                </li>
                <li>
                <div>
                    <time>1967</time> 
                </div>
                </li>
                <li>
                <div>
                    <time>1977</time> 
                </div>
                </li>
                <li>
                <div>
                    <time>1985</time> 
                </div>
                </li>
                <li>
                <div>
                    <time>2000</time> 
                </div>
                </li>
                <li>
                <div>
                    <time>2005</time> 
                </div>
                </li>
            </ul>
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
.timeline ul li {
  list-style-type: none;
  position: relative;
  width: 6px;
  margin: 0 auto;
  padding-top: 50px;
  background: #999;
}
.timeline ul li::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: inherit;
}
.timeline ul li div {
  position: relative;
  bottom: 0;
  width: 400px;
  padding: 15px;
  background: #F45B69;
}
.timeline ul li div::before {
  content: '';
  position: absolute;
  bottom: 7px;
  width: 0;
  height: 0;
  border-style: solid;
}
.timeline ul li:nth-child(odd) div {
  left: 45px;
}
.timeline ul li:nth-child(odd) div::before {
  left: -15px;
  border-width: 8px 16px 8px 0;
  border-color: transparent #F45B69 transparent transparent;
}
.timeline ul li:nth-child(even) div {
  left: -467px;
}
.timeline ul li:nth-child(even) div::before {
  right: -15px;
  border-width: 8px 0 8px 16px;
  border-color: transparent transparent transparent #F45B69;
}
</style>
