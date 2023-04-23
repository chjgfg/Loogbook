<script setup="">
  import {onMounted, ref} from 'vue'
  import {sider_books_list} from "../../../http/request.js"
  import {useStore} from "../../../store";
  import {useRouter} from "vue-router"

  let sider_books = ref([]);
  let store = useStore();
  let cate = ref('');
  let router = useRouter();

  async function getSiderBooks() {
    let newVar = await sider_books_list({"data": "", "type": "post"});
    // console.log(newVar);
    sider_books.value = newVar.data.siderbooks_list;
  }

  store.$subscribe((mutation, state) => {
    console.log(state.categoryId);
    cate.value = state.categoryId;
    getSiderBooks();
  }, {detached: false});

  onMounted(() => {
    getSiderBooks();
  });


  function selectOneBook(event) {
    let s = JSON.parse(JSON.stringify(event));
    router.push({name: "book_info", query: {cateId: cate._value, bookId: s.id}});
    // console.log(s);
  }

  const rowState = ({row}) => {
    // console.log(row.name);
    return {
      fontSize: '0.5em',
      color: '#888888',
    };
  };
  const cellStyle = ({row, column, rowIndex, columnIndex}) => {
    // let s = JSON.parse(JSON.stringify(column));
    // let style = {};
    // if (s.property === "name") {
    //   style = {
    //     color: '#71b8f2',
    //   }
    // }
    // return style;
  };
  const headerRowStyle = (row) => {
    // console.log(row);
    return {
      fontSize: '5px',
      color: '#888888',
    };
  };
</script>
<template>
  <div class="rigth">

    <div v-for="(item,index) in sider_books">
      <el-text class="mx-1" type="primary" v-if="index===0">今天更新</el-text>
      <el-text class="mx-1 sider" type="primary" :class="[index=1 ? '':'sider']" v-else-if="index===1">昨天更新</el-text>
      <el-text class="mx-1 sider" type="primary" :class="[index=2 ? '':'sider']" v-else="index===2">前天更新</el-text>
      <el-table :data="item.siderbooks" :row-style="rowState" :cell-style="cellStyle" :header-row-style="headerRowStyle"
                style="width: 100%;cursor: pointer;" @cell-click="selectOneBook" size="small"
                :scrollbar-always-on="false">
        <el-table-column prop="name" label="书名"/>
        <el-table-column prop="author" label="作者"/>
      </el-table>
    </div>
  </div>
</template>
<style scoped>
  .sider {
    margin-top: 25px;
  }

  .text {
    text-align: left;
  }

  .rigth {
    width: 90%;
  }

  #app > div > section > main > div > section > aside > div > div:nth-child(2), div:nth-child(3) {
    margin-top: 25px;
  }
</style>
