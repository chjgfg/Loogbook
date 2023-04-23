<script setup="">
  import {onMounted, ref, reactive} from 'vue'
  import {books_list} from "../../../http/request";
  import {useRouter, onBeforeRouteLeave} from 'vue-router'

  let router = useRouter();
  let bookslist = ref([]);
  let category_list = ref([]);
  let alertDialog = ref(false);
  let updateOrAdd = ref(false);
  let search = ref('');
  let form = ref({
    id: '',
    name: '',
    author: '',
    chapter: '',
    updatetime: '',
    image: '',
  });

  function selectOneBook(event) {
    let s = JSON.parse(JSON.stringify(event));
    router.push({name: "book_info", query: {cateId: cate._value, bookId: s.id}});
    // console.log(s);
  }

  async function getBookLists() {
    let newVar = await books_list({"data": "", "type": "post"});
    console.log(newVar);
    bookslist.value = newVar.data.books;
  }


  const handleClick = (item) => {
    console.log(item);
    router.replace({name: "admin_book_info", params: {"data": ""}})
  };
  const handleSearch = () => {
    console.log(search);
  };

  const updateOneBook = (index,item) => {
    console.log(item);
    updateOrAdd.value = false;
    alertDialog.value = true;
    form.value = item
  };

  const addOneBook = () => {
    alertDialog.value = true;
    updateOrAdd.value = true;
    form.value = {
      id: '',
      name: '',
      author: '',
      chapter: '',
      updatetime: '',
      image: '',
    }
  };


  const saveRemark = () => {
    alertDialog.value = false;
    console.log(form);
  };

  onMounted(() => {
    getBookLists();
  });

  onBeforeRouteLeave((to, from, next) => {
    history.pushState(null, null, location.href);
    to.meta.keepAlive = true;
    next(0);
    return false
  })
</script>
<template>
  <div class="books">
    <div class="condition">
      <el-table :data="bookslist" style="width: 100%">
        <el-table-column prop="name" label="书名" width="250"/>
        <el-table-column prop="author" label="作者" width="200"/>
        <el-table-column prop="chapter" label="最近更新" width="200"/>
        <el-table-column prop="updatetime" label="最近更新时间" width="280"/>
        <!--        <el-table-column prop="image" label="图片" width=""/>-->
        <el-table-column prop="image" label="图片" width="200">
          <template #default="scope">
            <img :src="scope.row.image" alt="" style="width: 50px;height: 50px;">
          </template>
        </el-table-column>
        <el-table-column align="right" fixed="right" width="200">
          <template #header>
            <div class="other" style="display: flex;flex-direction: row;">
              <el-input v-model="search" style="margin-right: 10%;" placeholder="Type to search" @keyup.enter.native="handleSearch"/>
              <font-awesome-icon style="margin-top: 4%;" icon="fas fa-plus-circle" @click="addOneBook"/>
            </div>
          </template>
          <template #default="scope">
            <el-button link type="primary" size="small" @click="updateOneBook(scope.$index, scope.row)">Edit</el-button>
            <el-button link type="primary" size="small" @click="handleClick(scope.$index, scope.row)">Info</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>


  <el-dialog draggable width="750px" :modal="false" :show-close="false" class="publish-comment"
             align-center v-model="alertDialog" :close-on-click-modal="false">
    <div>
      <el-input type="text" placeholder="请添加书名～" v-model="form.name"/>
      <el-input type="text" placeholder="请添加作者名～" v-model="form.author"/>
      <el-input type="text" placeholder="请添加章节名～" v-model="form.chapter"/>
      <el-input type="text" placeholder="请添加跟新时间名～" v-model="form.updatetime"/>
      <el-input type="text" placeholder="请添加图片名～" v-model="form.image"/>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="alertDialog = false">取 消</el-button>
      <el-button type="primary" @click="saveRemark">确 定</el-button>
    </div>
  </el-dialog>


</template>
<style scoped lang="less">
  .books {
    width: 100%;

    .condition {
      /*display: none;*/
    }

  }
</style>
