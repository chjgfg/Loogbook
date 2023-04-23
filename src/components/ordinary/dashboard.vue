<script lang="ts" setup="dashboard">
  import {ref, onMounted, reactive} from 'vue'
  import Header from "./main/header.vue"
  import Main from "./main/main.vue"
  import ContextMenu from '@imengyu/vue3-context-menu'
  import {useRouter} from "vue-router"

  let router = useRouter();

  let cate = ref({});
  const activeIndex = ref('1');
  let scree = reactive({
    height: window.screen.height,
    width: window.screen.width - 10,
  });

  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  };


  let onContextMenu = (e) => {
    //prevent the browser's default menu
    e.preventDefault();
    //show your menu
    ContextMenu.showContextMenu({
      x: e.x,
      y: e.y,
      items: [
        {
          label: "我的",
          onClick: () => {
            router.push({name: "mine", query: {cateId: "cate._value", bookId: "mine"}});
          }
        },
        {
          label: "好友",
          onClick: () => {
            router.push({name: "friends", query: {cateId: "cate._value", bookId: "friends"}});
          }
        },
        {
          label: "图书",
          onClick: () => {
            router.push({name: "mine_book", query: {cateId: "cate._value", bookId: "mine_book"}});
          }
        },
        {
          label: "设置",
          onClick: () => {
            router.push({name: "setting", query: {cateId: "cate._value", bookId: "setting"}});
          }
        },
        {
          label: "管理",
          onClick: () => {
            router.push({name: "admin_login", query: {cateId: "cate._value", bookId: "admin_login"}});
          }
        },
        {
          label: "返回",
          onClick: () => {
            router.back()
          }
        },
      ]
    });
  };
  onMounted(() => {
  });
</script>

<style>
  .flex-grow {
    flex-grow: 1;
  }
</style>
<template>
  <div class="common-layout headers"  @contextmenu.prevent="onContextMenu" :style="{height: scree.height+'px',width: scree.width+'px'}">
    <el-container class="layout-container-demo">
      <!--      头部-->
      <el-header>
        <div>
          <Header/>
        </div>
      </el-header>
      <!--      中心-->
      <el-main>
        <router-view />
      </el-main>
    </el-container>
    <el-backtop :right="20" :bottom="100"/>
  </div>

</template>

<style scoped>
  .read-the-docs {
    color: #888;
  }

  .headers {
    width: 1100px;
  }

  .layout-container-demo {
    width: 90%;
    margin-left: 5%;
  }

  .el-main {
    --el-main-padding: 0 !important;
  }
</style>
