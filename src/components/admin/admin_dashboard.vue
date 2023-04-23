<script lang="" setup>
  import {onMounted, ref, computed, reactive} from 'vue'
  import {toRaw} from '@vue/reactivity'
  import {Menu as IconMenu, Message, Setting} from '@element-plus/icons-vue'
  import {remove} from '../../utils/local_storage.ts'
  import {useRouter} from 'vue-router'
  import {admin_dashboard} from '../../mock/json/listdata.json'


  const item = {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  };
  const router = useRouter();
  const tableData = ref(Array.from({length: 20}).fill(item));
  const search = ref('');


  const handleEdit = (index, row) => {
    console.log(index);
    var list = toRaw(row);
    console.log(list);
  };
  const handleDelete = (index, row) => {
    var list = toRaw(row);
    console.log(list);
  };

  // function goBack() {
  //   remove('token');
  //   router.push("admin_login")
  // }

  let scree = reactive({
    height: window.screen.height,
    width: window.screen.width - 2,
  });

  function change(url) {
    console.log(url);
    if (url.id === "98") {
      router.go(-1);
    } else {
      router.push({name: url.url, query: {data: "scacs"}});
    }
  }

  // function goPage() {
  //   router.go(-1)
  // }

  onMounted(() => {
    // console.log(window.screen.height);
    // console.log(window.screen.width);
    router.push({name: 'admin_categorys', query: {data: "是是是"}})
  })

</script>

<template>
  <el-container class="layout-container-demo" :style="{height: scree.height+'px',width: scree.width+'px'}">
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu index="1" :ellipsis="true" class="menu">
          <el-sub-menu :index="item.id" v-for="(item,index) in admin_dashboard" @click="change(item)">
            <template #title>
              <el-icon>
                <font-awesome-icon :icon="['fas',item.icon]"/>
              </el-icon>
              {{item.name}}
            </template>
          </el-sub-menu>

        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container class="container">
      <!--      <el-header style="text-align: right; font-size: 12px">-->

      <!--        <div class="toolbar">-->

      <!--          <div id="back">-->
      <!--            <el-tooltip class="box-item" effect="dark" content="返回图书页" placement="top-start">-->
      <!--              <font-awesome-icon :icon="['fas', 'fa-arrow-left']" @click="goPage"/>-->
      <!--            </el-tooltip>-->
      <!--          </div>-->

      <!--          <el-dropdown>-->
      <!--            <el-icon style="margin-right: 8px; margin-top: 1px">-->
      <!--              <setting/>-->
      <!--            </el-icon>-->
      <!--            <template #dropdown>-->
      <!--              <el-dropdown-menu>-->
      <!--                <el-dropdown-item>View</el-dropdown-item>-->
      <!--                <el-dropdown-item>Add</el-dropdown-item>-->
      <!--                <el-dropdown-item @click="goBack">注销</el-dropdown-item>-->
      <!--              </el-dropdown-menu>-->
      <!--            </template>-->
      <!--          </el-dropdown>-->
      <!--          <span>Tom</span>-->
      <!--        </div>-->
      <!--      </el-header>-->

      <!--      <router-view v-if="$route.meta.keepAlive"/>-->
      <router-view/>

    </el-container>
  </el-container>
</template>

<style scoped lang="less">
  .layout-container-demo {

    .menu {
      ::v-deep(.el-sub-menu__title) {
        .el-sub-menu__icon-arrow {
          display: none;
        }
      }
    }
  }

  .layout-container-demo .el-header {
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
  }

  .layout-container-demo .el-aside {
    color: var(--el-text-color-primary);
    background: var(--el-color-primary-light-8);
  }

  .layout-container-demo .el-menu {
    border-right: none;
  }

  .layout-container-demo .el-main {
    padding: 0;
  }

  .layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
  }

  .layout-container-demo .el-aside[data-v-f37ae40b] {
    /* color: var(--el-text-color-primary); */
    background: #ffffff !important;
  }

  .layout-container-demo .el-header[data-v-f37ae40b] {
    position: relative;
    color: var(--el-text-color-primary);
    background-color: #71b8f2;
  }

  .container {
    margin-top: 5px;
  }
</style>
