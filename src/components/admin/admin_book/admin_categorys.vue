<script setup="">
  import {onMounted, ref, reactive} from 'vue'
  import {category} from "../../../http/request";
  import {useRouter} from 'vue-router'

  let router = useRouter();
  let bookslist = ref([]);
  let category_list = ref([]);
  let alertDialog = ref(false);
  let updateOrAdd = ref(false);
  let search = ref('');
  let commentValue = ref({
    'id': '',
    'name': '',
    'category': ''
  });


  async function getCategory() {
    let newVar = await category({"data": "", "type": "get"});
    // console.log(newVar);
    category_list.value = newVar.data.array;
  }


  const handleClick = (item) => {
    console.log(item);
    router.replace({name: "admin_books", params: {"data": ""}})
  };

  const updateOneCategory = (index, item) => {
    console.log(item);
    updateOrAdd.value = false;
    alertDialog.value = true;
    commentValue.value = item
  };

  const addOneCategory = () => {
    alertDialog.value = true;
    updateOrAdd.value = true;
    commentValue.value = {
      'id': '',
      'name': '',
      'category': ''
    }
  };


  const saveRemark = () => {
    alertDialog.value = false;
    console.log(search);
    commentValue.value.push(search)
  };

  const handleSearch = () => {
    console.log(search);
  };

  onMounted(() => {
    getCategory();
  });


</script>
<template>
  <div class="books">
    <div class="condition">

      <el-table :data="category_list" style="width: 100%">
        <el-table-column prop="id" label="ID" width="500"/>
        <el-table-column prop="name" label="分类名" width="520"/>
        <el-table-column align="right" fixed="right" width="220">
          <template #header>
            <div class="other" style="display: flex;flex-direction: row;">
              <el-input v-model="search" style="margin-right: 10%;" placeholder="Type to search"
                        @keyup.enter.native="handleSearch"/>
              <font-awesome-icon style="margin-top: 4%;" icon="fas fa-plus-circle" @click="addOneCategory"/>
            </div>
          </template>
          <template #default="scope">
            <el-button link type="primary" size="small" @click="updateOneCategory(scope.$index, scope.row)">Edit
            </el-button>
            <el-button link type="primary" size="small" @click="handleClick(scope.$index, scope.row)">Info</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page">
      <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000"/>
    </div>

  </div>


  <el-dialog draggable width="750px" :modal="false" :show-close="false" class="publish-comment" align-center
             v-model="alertDialog" :close-on-click-modal="false">
    <div>
      <el-input type="text" placeholder="分类ID～" :disabled="!updateOrAdd" v-model="commentValue.id"/>
      <el-input type="text" placeholder="请添加分类名～" v-model="commentValue.name"/>
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
      height: 400px;
      /*display: none;*/
    }
    .page{
      margin-left: 25%;
    }

  }
</style>
