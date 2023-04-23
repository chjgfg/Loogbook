<script setup="">
  import {onMounted, ref, toRaw} from 'vue'
  import {useRouter} from 'vue-router'
  import {Document, Menu as IconMenu, Location, Setting,} from '@element-plus/icons-vue'
  import {mine_info} from "../../../mock/json/listdata.json"

  let router = useRouter();

  function goPage() {
    router.replace("dashboard")
  }

  function showView(url) {
    router.push(url)
  }

  onMounted(() => {
    router.push(mine_info[0].url)
  })
</script>
<template>
  <div class="common-layout">
    <div class="info">
      <div id="back">
        <el-tooltip class="box-item" effect="dark" content="返回" placement="top-start">
          <font-awesome-icon :icon="['fas', 'fa-arrow-left']" @click="goPage"/>
        </el-tooltip>
      </div>
      <div class="info-menu">
        <el-menu default-active="1" class="el-menu-vertical-demo" style="margin-top: 40px">
          <el-menu-item v-for="(item,index) in mine_info" :index="item.id" @click="showView(item.url)">
            <template #title>
              <el-icon>
                <font-awesome-icon :icon="['fas',item.icon]"/>
              </el-icon>
              <span>{{item.name}}</span>
            </template>
          </el-menu-item>

        </el-menu>

      </div>
      <div class="info-content">
        <router-view/>
      </div>
    </div>


  </div>
</template>
<style scoped>
  .common-layout {
    width: 1326px;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  #back {
    position: absolute;
    margin-left: 23px;
    top: 20px;
    /*z-index: 100;*/
  }

  /*去掉 el-tooltip 点击的黑框*/
  .el-tooltip__trigger {
    outline: none;
  }

  .info {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  .info-menu {
    width: 15%;
  }

  .info-content {
    width: 70%;
    /*margin-left: 0.5%;*/
  }
</style>
