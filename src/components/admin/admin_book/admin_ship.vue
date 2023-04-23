<script setup="">
  import {onMounted, ref, reactive} from 'vue'
  import {admin_addrs_list} from "../../../http/request";
  import {useRouter, onBeforeRouteLeave} from 'vue-router'

  let router = useRouter();
  let addr_list = ref([]);
  let alertDialog = ref(false);
  let updateOrAdd = ref(false);
  let search = ref('');
  let form = ref({
    id: "",
    name: "",
    addr: "",
    addr_info: "",
    zip: "",
    phone: ""
  });

  const handleSearch = () => {
    console.log(search);
  };

  function selectOneUser(event) {
    let s = JSON.parse(JSON.stringify(event));
    // router.push({name: "book_info", query: {cateId: cate._value, bookId: s.id}});
    // console.log(s);
  }

  async function getUserLists() {
    let newVar = await admin_addrs_list({"data": "", "type": "get"});
    console.log(newVar);
    addr_list.value = newVar.data.addrs_list;
  }


  const handleDelete = (index, data) => {
    let parse = JSON.parse(JSON.stringify(data));
    addr_list.value = addr_list.value.filter((i) => {
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
      id: "",
      name: "",
      addr: "",
      addr_info: "",
      zip: "",
      phone: ""
    }
  };


  const saveRemark = () => {
    alertDialog.value = false;
    console.log(form);
  };

  onMounted(() => {
    getUserLists();
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

      <el-table :data="addr_list" style="width: 100%">
<!--        <el-table-column prop="id" label="ID" width="150"/>-->
        <el-table-column prop="name" label="用户" width="130"/>
        <el-table-column prop="addr" label="地址" width="320"/>
        <el-table-column prop="addr_info" label="地址详情" width="320"/>
        <el-table-column prop="zip" label="邮编" width="130"/>
        <el-table-column prop="phone" label="电话" width="150"/>
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
      <el-input type="text" placeholder="请添加姓名～" v-model="form.name"/>
      <el-input type="text" placeholder="请添加电话～" v-model="form.phone"/>
      <el-input type="text" placeholder="请添加地址～" v-model="form.addr"/>
      <el-input type="text" placeholder="请添加地址详情～" v-model="form.addr_info"/>
      <el-input type="text" placeholder="请添加邮编～" v-model="form.zip"/>
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
