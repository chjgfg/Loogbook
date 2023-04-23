<script setup="main">
  import {onMounted} from 'vue'
  import MainHeader from "./main_header.vue"
  import MainBody from "./main_body.vue"
  import MainRight from "./main_right.vue"


</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-main class="dashboard">

        <MainHeader/>
        <MainBody/>

      </el-main>
      <el-aside width="250px">
        <MainRight/>
      </el-aside>
    </el-container>
  </div>
</template>
<style scoped >


  .dashboard {
    /*width: 80% !important;*/
  }
</style>
