<script setup="">
  import {onMounted, ref} from 'vue'
  import {chapter_list} from "../../../http/request";
  import {useRouter} from 'vue-router'

  let router = useRouter();
  let tableData = ref([]);

  async function getChapterList() {
    let newVar = await chapter_list({"data": "", "type": "post"});
    // console.log(newVar);
    tableData.value = newVar.data.chapterlist
  }

  function selectChapter(item) {
    let s = JSON.parse(JSON.stringify(item));
    router.push({name: "chapter_info", query: {cateId: "cate._value", bookId: s.id}});
  }


  onMounted(() => {
    getChapterList();
  });

</script>
<template>
  <div class="book-cate">
    <div class="book-chapter">

      <div v-for="(item,index) in tableData" class="chapter">
        <div class="chapter-item" @click="selectChapter(item)">
          {{item.title}}
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
  .book-cate {
    margin-top: 30px;
    margin-bottom: 60px;
    width: 1326px;
  }

  .book-chapter {
    /*width: 94%;*/
    margin-left: 4%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /*justify-content: space-between;*/
  }

  .chapter {
    width: 25%;
    /*margin-left: 0.5%;*/
  }

  .chapter-item:hover {
    color: #646cff;
    cursor: pointer;
  }

  .chapter-item {
    width: 90%;
    border-bottom: #b6b6b6 solid 0.1em;
    text-align: center;
    align-items: center;
    font-size: 10px;
    margin-top: 10px;
    color: #888888;
  }


</style>
