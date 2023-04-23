<script setup="">
  import {onMounted, ref, reactive} from 'vue'
  import {admin_tags_list} from "../../../http/request";
  import {useRouter} from 'vue-router'

  let router = useRouter();
  let tag_list = ref([]);
  let alertDialog = ref(false);
  let updateOrAdd = ref(false);
  let search = ref('');
  let commentValue = ref({
    'id': '',
    'name': '',
  });


  async function getTags() {
    let newVar = await admin_tags_list({"data": "", "type": "get"});
    // console.log(newVar);
    tag_list.value = newVar.data.tags_list;
  }


  const handleClick = (item) => {
    console.log(item);
    tag_list.value = tag_list.value.filter((i) => {
      return i.id !== parse.id;
    })
  };

  const updateOne = (index, item) => {
    console.log(item);
    updateOrAdd.value = false;
    alertDialog.value = true;
    commentValue.value = item
  };

  const addOne = () => {
    alertDialog.value = true;
    updateOrAdd.value = true;
    commentValue.value = {
      'id': '',
      'name': '',
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
    getTags();
  });


</script>
<template>
  <div class="books">
    <div class="condition">

      <el-table :data="tag_list" style="width: 100%">
        <el-table-column prop="id" label="ID" width="500"/>
        <el-table-column prop="name" label="标签名" width="520"/>
        <el-table-column align="right" fixed="right" width="220">
          <template #header>
            <div class="other" style="display: flex;flex-direction: row;">
              <el-input v-model="search" style="margin-right: 10%;" placeholder="Type to search" @keyup.enter.native="handleSearch"/>
              <font-awesome-icon style="margin-top: 4%;" icon="fas fa-plus-circle" @click="addOne"/>
            </div>
          </template>
          <template #default="scope">
            <el-button link type="primary" size="small" @click="updateOne(scope.$index, scope.row)">Edit</el-button>
            <el-button link type="primary" size="small" @click="handleClick(scope.$index, scope.row)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page">
      <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000"/>
    </div>

  </div>


  <el-dialog draggable width="750px" :modal="false" :show-close="false" class="publish-comment" align-center v-model="alertDialog" :close-on-click-modal="false">
    <div>
      <el-input type="text" placeholder="标签ID～" :disabled="!updateOrAdd" v-model="commentValue.id"/>
      <el-input type="text" placeholder="请添加标签名～" v-model="commentValue.name"/>
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
      height: 680px;
      /*display: none;*/
    }
    .page{
      margin-left: 25%;
    }

  }
</style>
