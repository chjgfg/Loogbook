<script setup="">
  import {onMounted, ref} from 'vue'
  import {bookinfo} from "../../../http/request.js"
  import {useRouter} from 'vue-router'

  let router = useRouter();
  const currentDate = ref(new Date());
  const bookInfo = ref({});

  async function getBookInfo() {
    let newVar = await bookinfo({"data": "", "type": "post"});
    // console.log(newVar);
    bookInfo.value = newVar.data
  }

  function selectChapter(item) {
    let s = JSON.parse(JSON.stringify(item));
    router.push({name: "chapter_info", query: {cateId: "cate._value", bookId: s.id}});
  }

  onMounted(() => {
    getBookInfo();
  })

</script>

<template>
  <div class="book-header">
    <el-card shadow="never">
      <div class="book-info">
        <div class="book-img" @click="selectChapter(bookInfo)">
          <img :src="bookInfo.image" class="image" alt=""/>
        </div>
        <div class="book-other">
          <div @click="selectChapter(bookInfo)">
            <span class="title">{{bookInfo.title}}</span> / <span class="author">{{bookInfo.author}}</span>
          </div>
          <div style="margin-top: 30px">
            人气 :<span class="popularity">{{bookInfo.popularity}}</span>
            <span class="state">{{bookInfo.state===false?'未完结':'已完结'}}</span>
            <span class="update_time">{{bookInfo.update_time}}</span>
          </div>
          <div class="intro">{{bookInfo.intro}}</div>
        </div>
      </div>

    </el-card>
  </div>

</template>

<style scoped>

  .book-header {
    width: 1326px;
    margin-left: 1.5%;
  }

  .book-info {
    display: flex;
    flex: auto;
    width: 100%;
  }

  .book-img {
    width: 25%;
    text-align: center;
    cursor: pointer;
  }

  .image {
    width: 250px;
    height: 300px;
    border-radius: 0.5em;
  }

  .book-other {
    width: 70%;
  }

  .author {
    cursor: pointer;
    color: #747bff;
    white-space: pre-wrap;
  }

  .title {
    cursor: pointer;
    font-size: 30px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }

  .popularity, .state, .update_time {
    /*width: 100%;*/
    margin-left: 20px;
    border: 1px #6bff96 solid;
    /*background-color: #6bff96;*/
    border-radius: 0.5em;
    color: #000000;
  }

  .update_time {
    border: 1px #6eeeff solid;
  }

  .popularity {
    border: 1px #3b84ff solid;
    /*background-color: #3b84ff;*/
  }

  .state {
    border: 1px #39ff9b solid;
  }

  .popularity, .state, .update_time, .intro {
    margin-top: 30px;
  }

  .intro {
    color: #888888;
  }

  .intro {
    font-size: 13px;
  }
</style>
