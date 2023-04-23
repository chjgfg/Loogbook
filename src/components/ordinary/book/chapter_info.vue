<script setup="chapter_info">
  import {onMounted, provide, ref, reactive} from 'vue'
  import {useRoute, useRouter} from "vue-router"
  import {chapter} from "../../../http/request";
  import Dialog from "./dialog.vue"
  import bus from '../../../bus/index.js';
  import BaseDate from "../../../bus/base_data.js";

  let route = useRoute();
  let router = useRouter();
  let date = new BaseDate();
  let one_chapter = ref({});
  let title = ref("发表评论:");  // dialog的默认标题
  let alertDialog = ref(false);  // 是否展示该弹窗
  let selectedValue = ref("这里显示被选中的词");  //这里显示被选中的词
  let commentValue = ref(""); // 这里为要评论的内容
  let remark = reactive({
    "bookId": "",
    "chapterId": "",
    "segmentId": "",
    "userId": "",
    "content": "",
    "father": 0,
    "son": 0,
  });

  async function getChapter() {
    let s = await chapter({data: "", type: "post"});
    one_chapter.value = s.data;
    // console.log(s);
  }

  function selectHandle(index, id) {
    let selectText = window.getSelection().toString(); // 将 selection 对象转换成字符串
    if (selectText.trim() === "") {
      return;
    } // 如果选中的不是空
    alertDialog.value = true;
    selectedValue = selectText;
    console.log(index, id);
    if (one_chapter._value.content[index].id === id) {
      one_chapter._value.content[index].flag = 1;
    }
  }
  


  function saveRemark() {
    alertDialog = false;
  }

  function searchDialog(id) {
    let data = {
      "bookId": "",
      "chapterId": "",
      "segmentId": id,
      "userId": "",
      "dialogVisible": true
    };
    bus.emit(date.dialog_data, data);
  }

  onMounted(() => {
    console.log(route.query);
    getChapter();
  })
</script>
<template>
  <div class="contents">
    <div class="title">{{one_chapter.title}}</div>
    <div class="author">{{one_chapter.author}}</div>
    <div class="content">
      <div v-for="(item,index) in one_chapter.content">
        <span v-html="item.content" @mouseup="selectHandle(index,item.id)"/>
        <span v-if="item.flag===1" class="dialog" @click="searchDialog(item.id)">sss</span>
      </div>
    </div>
  </div>

  <el-dialog draggable width="750px" :modal="false" :show-close="false" class="publish-comment" :title="title" align-center :lock-scroll="false" v-model="alertDialog" :close-on-click-modal="false">
    <div>
      <el-input type="textarea" :rows="5" placeholder="评论内容写在此哦～" v-model="commentValue"/>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="alertDialog = false">取 消</el-button>
      <el-button type="primary" @click="saveRemark">确 定</el-button>
    </div>
  </el-dialog>
  <Dialog/>
</template>
<style scoped>
  .contents {
    /*width: 1100px;*/
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .title {
    font-size: 30px;
    text-align: center;
  }

  .author {
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: center;
    font-size: 15px;
    color: #888888;
  }

  .content {
    width: 90%;
    margin-left: 5%;
  }

  .dialog {
    background: lightblue;
    color: #fff;
    border-radius: 4px;
  }

  .dialog:hover {
    cursor: pointer;
  }

  .dialog::before {
    content: '';
    width: 0;
    height: 0;
    border: 1px solid;
    border-color: #747bff lightblue transparent transparent;
  }
</style>
