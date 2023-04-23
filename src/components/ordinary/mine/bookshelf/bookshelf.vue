<script setup="">
  import {onMounted, ref} from 'vue'
  import {mine_books_list} from "../../../../http/request.js"
  import {useRouter, useRoute} from "vue-router"

  let bookslist = ref([]);
  let router = useRouter();
  let route = useRoute();

  async function getBooks() {
    let newVar = await mine_books_list({"data": "", "type": "post"});
    console.log(newVar);
    let books = newVar.data.mine_books_list;
    let len = books.length;
    let col = 5;
    let lineNum = len % col === 0 ? len / col : Math.floor((len / col) + 1);
    for (let i = 0; i < lineNum; i++) {
      let temp = books.slice(i * col, i * col + col);
      bookslist.value.push(temp)
    }
  }

  function goBook(book) {
    console.log(book);
    router.push({name: "chapter_info", params: {"name": ""}})
  }

  onMounted(() => {
    getBooks();
  });
</script>
<template>
  <div class="addr">
    <!--    <el-row v-for="(item,index) in bookslist.length">-->
    <el-row v-for="(item,index) in bookslist" class="el-row-item">
      <el-col :span="4" v-for="(book,jndex) in item" class="el-col-item">

        <el-card :body-style="{ padding: '0px' }" shadow="never" @click="goBook(book)">
          <img :src="book.image" class="image" alt=""/>
          <div class="book-name">
            {{book.name}}
          </div>
        </el-card>

      </el-col>

    </el-row>
    <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000"/>
  </div>
</template>
<style scoped lang="less">
  .addr {
    width: 100%;
    /*margin-left: 2%;*/
    margin-top: 5%;
    /*margin-bottom: 20%;*/

    .el-row-item {
      margin-top: 15px;

      .el-col-item {
        margin-left: 30px;

        .image {
          width: 160px;
          height: 170px;
        }

        .book-name {
          margin: 2px;
          text-align: center;
          font-size: 10px;
        }
      }
    }
  }

  .el-row {
    margin-bottom: 20px;
  }

  .el-row:last-child {
    margin-bottom: 0;
  }

  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .image {
    width: 100%;
    display: block;
  }
</style>
