<script setup="">
  import {onMounted, ref} from 'vue'
  import {books_list} from "../../../http/request.js"
  import {useStore} from "../../../store";
  import {useRouter} from "vue-router"
  import Footer from './footer.vue'

  let bookslist = ref([]);
  let store = useStore();
  let cate = ref('');
  let router = useRouter();

  async function getBooks() {
    let newVar = await books_list({"data": "", "type": "post"});
    // console.log(newVar);
    bookslist.value = newVar.data.books;
  }

  onMounted(() => {
    getBooks();
  });

  const subscribe = store.$subscribe((mutation, state) => {
    console.log(state.categoryId);
    cate.value = state.categoryId;
    getBooks();
  }, {detached: false});

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
    let s = JSON.parse(JSON.stringify(column));
    // console.log(s);
    let style = {};
    if (s.property === "name") {
      style = {
        color: '#71b8f2',
      }
    }
    return style;
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
  <div class="">
    <el-container>
      <!--      头selectOneUser部-->
      <el-header>
        <Header/>
      </el-header>
      <!--      中心-->
      <el-main>
        <div class="mains">
          <el-table :data="bookslist" :row-style="rowState" :cell-style="cellStyle" :header-row-style="headerRowStyle" style="width: 100%;cursor: pointer;" @cell-click="selectOneBook">
            <el-table-column prop="name" label="书名"/>
            <el-table-column prop="chapter" label="最新章节" width="250px"/>
            <el-table-column prop="author" label="作者" width="140px"/>
            <el-table-column prop="updatetime" label="更新时间"/>
          </el-table>
        </div>
      </el-main>
      <!--      足部-->
      <el-footer>
        <Footer/>
      </el-footer>
    </el-container>

  </div>
</template>
<style scoped>
  .common-layout {
    margin-top: -80px;
  }

  .el-header {
    display: none;
  }

  .mains {
    /*margin-top: 0.01%;*/
    /*z-index: 100;*/
  }

  /*.el-main {*/
  /*  --el-main-padding: 0 !important;*/
  /*}*/

  .el-table__body-wrapper::-webkit-scrollbar {
    /*width: 0;宽度为0隐藏*/
    width: 0;
  }
</style>
