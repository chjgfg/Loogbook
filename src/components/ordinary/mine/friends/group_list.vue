<script setup="recent">
  import Chat from "./chat.vue";
  import {onMounted, ref, reactive} from 'vue'
  import {group_list} from "../../../../http/request";
  import bus from "../../../../bus";

  let recend = ref([]);

  async function getGroups() {
    let newVar = await group_list({data: "", type: "post"});
    // console.log(newVar);
    recend.value = newVar.data.group_list
  }

  function select(item) {
    // console.log(item);
    let parse = JSON.parse(JSON.stringify(item));
    // console.log(parse);
    bus.emit("select", parse)
  }

  onMounted(() => {
    getGroups();
  })
</script>
<template>
  <div class="addr">
    <el-row :gutter="20">
      <el-col :span="6">
        <ul class="grid-content ep-bg-purple infinite-list" style="overflow: auto">
          <li v-for="(item,index) in recend" class="infinite-list-item" @click="select(item)">
            <div class="user">
              <div class="user-name">{{item.name}}</div>
              <div class="user-time">{{item.updatetime}}</div>
            </div>
            <div class="content">{{item.content.substr(0,15)+"..."}}</div>
            <el-divider/>
          </li>
        </ul>
      </el-col>
      <el-col :span="18">
        <div class="grid-content ep-bg-purple"/>
        <Chat/>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped lang="less">
  .addr {
    width: 100%;
    margin-left: 2%;
    margin-top: 5%;

    .infinite-list {
      height: 600px;
      padding: 0;
      margin: 0;

      .user {
        display: flex;
        flex-direction: row;
      }

      .user-name {
        width: 40%;
      }

      .user-time {
        width: 60%;
        font-size: 5px;
        line-height: 30px;
      }

      .content {
        font-size: 13px;
        margin-top: 6px;
      }

      .el-divider--horizontal {
        margin: 10px 0;
        border-top: 1px var(--el-border-color) var(--el-border-style);
      }
    }
  }


  .infinite-list .infinite-list-item {
    color: var(--el-color-primary);
  }

  .infinite-list .infinite-list-item + .list-item {
    margin-top: 10px;
  }


  .infinite-list:hover {
    cursor: pointer;
  }

  /*滚动条的样式,宽高分别对应横竖滚动条的尺寸*/
  .infinite-list::-webkit-scrollbar {
    width: 2px;
  }

  /*滚动条里面默认的小方块,自定义样式*/
  .infinite-list::-webkit-scrollbar-thumb {
    background: #626faf;
    border-radius: 2px;
  }

  /*滚动条里面的轨道*/
  .infinite-list::-webkit-scrollbar-track {
    background: transparent;
  }


</style>
