<script setup="dialog">
  import {onMounted, onBeforeMount, inject, ref} from 'vue'
  import bus from '../../../bus/index.js';
  import BaseDate from "../../../bus/base_data.js";
  import {remark_list} from '../../../http/request.js'
  import List from "./list.vue";
  import {Check, Delete} from '@element-plus/icons-vue'

  let data = new BaseDate();
  let dialogVisible = ref(false);
  let tree_list = ref([]);
  let input = ref('');
  let remark_flag = ref(true);
  bus.on(data.dialog_data, message => {
    // console.log(message);
    dialogVisible.value = message.dialogVisible
  });

  async function getRemarkList() {
    let newVar = await remark_list({"data": "", "type": "post"});
    // console.log(newVar);
    tree_list.value = newVar.data.remark_list
  }

  onBeforeMount(() => {
    getRemarkList();
    // dialogVisible.value = true;
  })
</script>
<template>

  <el-dialog v-model="dialogVisible" :lock-scroll="false" title="Tips" width="40%" draggable :modal="false" class="publish-comment roll-dialog" align-center :close-on-click-modal="false">
    <div class="dialog">
      <div class="dialog-item">
        <List :tree_list="tree_list"/>
      </div>
    </div>

    <div :class="remark_flag ? 'block':'none'">
      <div>
        <el-input v-model="input" :rows="2" type="textarea" clearable placeholder="Please input"/>
      </div>
      <div>
        <el-button type="primary" :icon="Check" circle/>
        <el-button type="danger" :icon="Delete" circle/>
      </div>
    </div>


  </el-dialog>
</template>

<style scoped>

  .dialog {
    /*必须有高度 overflow 为自动*/
    height: 500px;
    overflow: auto;
  }

  .dialog:hover {
    cursor: pointer;
  }

  /*滚动条的样式,宽高分别对应横竖滚动条的尺寸*/
  .dialog::-webkit-scrollbar {
    width: 2px;
  }

  /*滚动条里面默认的小方块,自定义样式*/
  .dialog::-webkit-scrollbar-thumb {
    background: #626faf;
    border-radius: 2px;
  }

  /*滚动条里面的轨道*/
  .dialog::-webkit-scrollbar-track {
    background: transparent;
  }

  .dialog-item {
    width: 94%;
    margin-left: 3%;
  }

  .block {
    display: block;
  }

  .none {
    display: none;
  }
</style>
