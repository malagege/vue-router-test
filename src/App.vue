<template>
  <h1>Hello App!</h1>
  <p>
    <!--使用 router-link 組件進行導航 -->
    <!--通過傳遞 `to` 來指定鏈接 -->
    <!--`<router-link>` 將呈現一個帶有正確 `href` 屬性的 `<a>` 標籤-->
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的組件將渲染在這裡 -->
  <router-view></router-view>
</template>

<script setup>
import Home from './components/Home.vue'
import About from './components/About.vue'
import HelloWorld from './components/HelloWorld.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
