<script setup>
  import {onMounted, ref} from 'vue'
  import ContextMenu from "@imengyu/vue3-context-menu";



  // 禁止和开启上下滑动
  function noUpOrDown(e) {
    e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
  }

  function noSlideUpOrDown() {
    document.body.addEventListener('touchmove', noUpOrDown, {passive: false});
  }


  onMounted(() => {
    noSlideUpOrDown();
  })
</script>

<template>
  <!--  remixicon -->
  <!--  <div>-->
  <!--    <a href="https://vitejs.dev" target="_blank">-->
  <!--      <img src="/vite.svg" class="logo" alt="Vite logo" />-->
  <!--    </a>-->
  <!--    <a href="https://vuejs.org/" target="_blank">-->
  <!--      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />-->
  <!--    </a>-->
  <!--  </div>-->
  <!--  <HelloWorld msg="Vite + Vue" />-->
  <router-view/>
</template>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }

  .el-main {
    width: 100%;
    height: 100%;
    text-align: center;
    background: #efefef;
    padding: 0 !important;
    --el-main-padding: 0 !important;
  }

  .el-main {
    --el-main-padding: 0 !important;
  }
</style>
