<script setup="">
  import {onMounted} from 'vue'
  import BookHeader from './book_header.vue'
  import BookCategoryList from './book_cate_list.vue'
</script>
<template>
<div class="headers">

  <BookHeader/>
  <BookCategoryList/>
</div>
</template>
<style scoped>

  .headers {
    /*width: 1100px;*/
    width: 100%;
  }

  .el-main {
    /*flex: 1;*/
    --el-main-padding: 0 !important;
  }
</style>
