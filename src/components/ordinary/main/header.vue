<script lang="ts" setup="header">
  import {onMounted, ref} from 'vue'
  import {category, user_info, user_img, menu_list} from "../../../http/request";
  import {Calendar, Search} from '@element-plus/icons-vue'
  import {useStore} from "../../../store";
  import {useRouter} from "vue-router";

  let activeIndex = ref('1');
  let input = ref('');
  let cate = ref([]);
  let menu = ref([]);
  let imgs = ref({});
  let store = useStore();
  let router = useRouter();

  function handleSelect(key, keyPath) {
    store.setCategoryId(key);
    // console.log(store.getCategoryId());
  }

  async function getCategorys() {
    let newVar = await category({data: '', type: 'get'});
    // console.log(newVar);
    cate.value = newVar.data.array;
  }

  async function getUserInfo() {
    let newVar = await user_info({data: {'name': 'sss', 'pass': '111'}, type: 'post'});
    // console.log(newVar);
  }

  async function getUserImg() {
    let newVar = await user_img({data: {'name': 'sss', 'pass': '111'}, type: 'post'});
    imgs.value = newVar.data;
  }

  async function getMenuList() {
    let newVar = await menu_list({data: {'name': 'sss', 'pass': '111'}, type: 'post'});
    menu.value = newVar.data.list;
    console.log(newVar);
  }

  function selectOneCate(item) {
    let s = JSON.parse(JSON.stringify(item));
    router.push({name: "main", query: {cateId: "cate._value", bookId: s.id}});

  }

  function menus(item) {
    console.log(item);
    router.push({name: item.url, query: {cateId: "cate._value", bookId: item.id}});
  }

  function toMine(imgs) {
    console.log(imgs);
    router.push({name: 'mine', query: {cateId: imgs.id, bookId: imgs.id}});
  }

  onMounted(() => {
    getCategorys();
    getUserInfo();
    getUserImg();
    getMenuList();
    // console.log(get("user"));
  });
</script>


<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
           active-text-color="#fff" @select="handleSelect">
    <el-menu-item index="0">LOGO</el-menu-item>
    <el-menu-item index="99">
      <el-input v-model="input" class="w-5100 m-2" size="large" :prefix-icon="Search" placeholder="Please input"
                clearable/>
    </el-menu-item>
    <el-menu-item :index="item.id" v-for="(item,index) in cate" @click="selectOneCate(item)">{{item.name}}
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>
        <el-avatar :size="50" :src="imgs.image" @click="toMine(imgs)"/>
      </template>
      <el-menu-item style="width: 210px;" :index="item.id" v-for="(item,index) in menu" @click="menus(item)">
        {{item.name}}
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style scoped>
  .read-the-docs {
    color: #888;
  }

  ul > li:nth-child(2) {
    height: auto !important;
    width: 2000px;
  }

  ul > li:nth-child(2):hover {
    background-color: #fff !important;
  }

  .el-menu-demo {
    width: 86.5%;
    position: fixed;
    z-index: 100;
  }

  .el-menu--horizontal > .el-menu-item {
    border-bottom: none;
    text-decoration: none;
  }

  /*.el-menu-item {*/
  /*  min-width: 120px !important;*/
  /*}*/
</style>
<!--<style scoped lang="less">-->
<!--  :deep( .el-menu&#45;&#45;collapse .el-menu .el-submenu, .el-menu&#45;&#45;popup) {-->
<!--    min-width: 120px !important;-->
<!--  }-->
<!--</style>-->
