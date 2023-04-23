<script setup="">
  import {onMounted, ref, onActivated} from 'vue'
  import {six_books} from "../../../http/request.js"
  import {useStore} from "../../../store";
  import {useRouter} from "vue-router"

  let six_book = ref([]);
  let cate = ref('');
  let store = useStore();
  let router = useRouter();

  async function getSixBook() {
    let newVar = await six_books({data: "", type: "post"});
    six_book.value = newVar.data.sixbooks;
    // console.log(store.getCategoryId());
  }

  const subscribe = store.$subscribe((mutation, state) => {
    /*
    * mutation主要包含三个属性值：
    *   events：当前state改变的具体数据，包括改变前的值和改变后的值等等数据
    *   storeId：是当前store的id
    *   type：用于记录这次数据变化是通过什么途径，主要有三个分别是
    *         “direct” ：通过 action 变化的
              ”patch object“ ：通过 $patch 传递对象的方式改变的
              “patch function” ：通过 $patch 传递函数的方式改变的
    *
    * */
    // 我们就可以在此处监听store中值的变化，当变化为某个值的时候，去做一些业务操作之类的
    // console.log(mutation);
    // console.log(state.categoryId);
    cate.value = state.categoryId;
    getSixBook();
  }, {detached: false}); // detached:布尔值，默认是 false，正常情况下，当订阅所在的组件被卸载时，订阅将被停止删除，
  // 如果设置detached值为 true 时，即使所在组件被卸载，订阅依然在生效


  function selectOne(item) {
    let parse = JSON.parse(JSON.stringify(item));
    // console.log(parse);
    // console.log(cate);
    router.push({name: "book_info", query: {cateId: cate._value, bookId: parse.id}})
  }

  onMounted(() => {
    getSixBook();
  });

</script>
<template>
  <el-row class="row-bg dashboard-header" :gutter="20" justify="space-evenly">
    <el-col :span="8" v-for="(item,index) in six_book" class="el-col-every">

      <el-card class="box-card" @click="selectOne(item)" style="cursor: pointer;" :body-style="{ display: 'flex' }"
               shadow="never">
        <div>
          <el-image style="width: 100px; height: 150px;border-radius: 0.5em;margin-right: 5px" :src="item.image"/>
        </div>
        <div>
          <div class="name-author">{{item.name}}</div>
          <div class="book-info"> {{item.info.substr(0,52)+"..."}}</div>
        </div>
      </el-card>

    </el-col>
  </el-row>
</template>
<style scoped>
  .el-row {
    /*margin-bottom: 40px;*/
    margin-top: -20px;
  }

  .el-row:last-child {
    margin-bottom: 0;
  }

  .el-col {
    border-radius: 4px;
    margin-bottom: 10px;
    width: 60%;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    /*width: 480px;*/
    text-align: center;
  }

  .el-col-every {
    width: 150px;
  }

  .name-author {
    font-weight: bold;
    color: #71b8f2;
  }

  .book-info {
    font-size: 0.5em;
    color: #888888;
    margin-top: 10%;
  }

  /*.dashboard-header{*/
  /*  width: 950px;*/
  /*}*/
</style>
