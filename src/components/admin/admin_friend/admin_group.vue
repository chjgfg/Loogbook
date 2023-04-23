<script setup="">
  import {onMounted, ref, reactive} from 'vue'
  import {admin_groups_list} from "../../../http/request";
  import {useRouter, onBeforeRouteLeave} from 'vue-router'

  let router = useRouter();
  let group_list = ref([]);
  let category_list = ref([]);
  let alertDialog = ref(false);
  let updateOrAdd = ref(false);
  let search = ref('');
  let form = ref({
    id: '',
    name: '',
    time: '',
    image: ''
  });

  const handleSearch = () => {
    console.log(search);
  };

  function selectOneUser(event) {
    let s = JSON.parse(JSON.stringify(event));
    // router.push({name: "book_info", query: {cateId: cate._value, bookId: s.id}});
    // console.log(s);
  }

  async function getGroupLists() {
    let newVar = await admin_groups_list({"data": "", "type": "get"});
    console.log(newVar);
    group_list.value = newVar.data.groups_list;
  }


  const handleDelete = (index, data) => {
    let parse = JSON.parse(JSON.stringify(data));
    group_list.value = group_list.value.filter((i) => {
      return i.id !== parse.id;
    })
  };

  const updateOneUser = (index, data) => {
    console.log(index, data);
    updateOrAdd.value = false;
    alertDialog.value = true;
    form.value = JSON.parse(JSON.stringify(data))
  };

  const addOneUser = () => {
    alertDialog.value = true;
    updateOrAdd.value = true;
    form.value = {
      id: '',
      name: '',
      time: '',
      image: '',
    }
  };


  const saveRemark = () => {
    alertDialog.value = false;
    console.log(form);
  };

  onMounted(() => {
    getGroupLists();
  });

  // onBeforeRouteLeave((to, from, next) => {
  //   history.pushState(null, null, location.href);
  //   to.meta.keepAlive = true;
  //   next(0);
  //   return false
  // })
</script>
<template>
  <div class="books">
    <div class="condition">

      <el-table :data="group_list" style="width: 100%">
        <el-table-column prop="id" label="ID" width="340"/>
        <el-table-column prop="name" label="用户" width="250"/>
        <el-table-column prop="times" label="时间" width="320"/>
        <el-table-column prop="image" label="头像" width="130">
          <template #default="scope">
            <img :src="scope.row.image" alt="" style="width: 50px;height: 50px;border-radius: 50%">
          </template>
        </el-table-column>
        <el-table-column align="right" fixed="right" width="250">
          <template #header>
            <div class="other" style="display: flex;flex-direction: row;">
              <el-input v-model="search" style="margin-right: 10%;" placeholder="Type to search" @keyup.enter.native="handleSearch"/>
              <font-awesome-icon style="margin-top: 4%;" icon="fas fa-plus-circle" @click="addOneUser"/>
            </div>
          </template>
          <template #default="scope">
            <el-button link type="primary" size="small" @click="updateOneUser(scope.$index, scope.row)">Edit</el-button>
            <el-button link type="primary" size="small" @click="handleDelete(scope.$index, scope.row)">Delete
            </el-button>
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
      <el-input type="text" v-if="updateOrAdd===false" disabled placeholder="id" v-model="form.id"/>
      <el-input type="text" placeholder="请添加群名～" v-model="form.name"/>
      <el-input type="text" placeholder="请添加时间～" v-model="form.times"/>
      <el-input type="text" placeholder="请添加图片～" v-model="form.image"/>
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
      height: 660px;
    }

    .page {
      margin-top: 2px;
      margin-left: 25%;
    }

  }
</style>
