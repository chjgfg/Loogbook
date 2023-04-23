<script setup="">
  import {onMounted, ref} from 'vue'
  import {history} from "../../../../http/request.js"
  import {useRouter} from "vue-router"

  let bookslist = ref([]);
  let router = useRouter();

  async function getHistory() {
    let newVar = await history({"data": "", "type": "post"});
    bookslist.value = newVar.data.history;
  }

  function goBook(book) {
    console.log(book);
    router.push({name: "chapter_info", params: {"name": ""}})
  }

  onMounted(() => {
    getHistory();
  });
</script>
<template>
  <div class="addr">

    <el-table :data="bookslist" style="width: 100%" class="table" height="540" :fit="true">
      <el-table-column prop="title" label="书名" width="270"/>
      <el-table-column prop="author" label="作者" width="120"/>
      <el-table-column prop="update_time" label="更新时间" width="220"/>
      <el-table-column prop="sort" label="已浏览" width="70"/>
      <el-table-column prop="popularity" label="人气" width="120"/>
      <el-table-column prop="state" label="状态" width="120"/>
    </el-table>

  </div>
</template>
<style scoped lang="less">
  .addr {
    width: 100%;
    margin-left: 5%;
    margin-top: 5%;

  }

  el-table {
    ::v-deep(el-table__body-wrapper) {
      &:hover {
        cursor: pointer;
      }

      &::-webkit-scrollbar {
        width: 2px !important;
      }

      &::-webkit-scrollbar-thumb {
        background: #626faf !important;
        border-radius: 2px !important;
      }

      &::-webkit-scrollbar-track {
        background: transparent !important;
      }
    }
  }


</style>
