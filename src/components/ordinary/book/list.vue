<script setup="List">
  import {onMounted, toRefs, ref, defineProps} from 'vue'
  import {Check, Delete} from '@element-plus/icons-vue'

  let input = ref('');
  // let remark_flag = ref(false);
  const props = defineProps({
    tree_list: Array
  });

  const {tree_list} = toRefs(props);

  let parse = JSON.parse(JSON.stringify(props));

  // console.log(parse);

  function remarkFather(item) {
    item.flag = !item.flag;
    console.log(item);
  }

  function remarkSon(item) {
    item.flag = !item.flag;
    console.log(item);
  }
</script>
<template>
  <div v-if="tree_list">
    <div class="list-item" v-for="(item, index) in tree_list" :key="index">
      <div class="grand">

        <!--        father层-->
        <div class="father" v-if="item.father === '0'">
          <div class="father-first">
            <div class="father-first-first">
              <div>
                <el-image :src="item.img" class="images"/>
              </div>
              <div>
                <span>{{item.user}}</span>&emsp;评论了:
              </div>
            </div>
            <div class="content">
              &emsp;&emsp;<span>{{item.content}}</span>
            </div>
            <div class="footer">
              <span>点赞</span>&emsp;<span @click="remarkFather(item)">评论</span>
            </div>
            <div :class="item.flag ? 'block':'none'">
              <div>
                <el-input v-model="input" :rows="2" type="textarea" clearable placeholder="Please input"/>
              </div>
              <div>
                <el-button type="primary" :icon="Check" @click="item.flag = false" circle/>
                <el-button type="danger" :icon="Delete" @click="item.flag = false" circle/>
              </div>
            </div>
          </div>

        </div>

        <!--son层-->
        <div class="son" v-if="item.father !== '0'">
          <div class="son-first">
            <div class="father-first-first">
              <div>
                <el-image :src="item.img" class="images"/>
              </div>
              <div>
                <span>{{item.user}}</span>&emsp;回复 {{item.father}}:
              </div>
            </div>
            <div class="content">
              &emsp;&emsp;<span>{{item.content}}</span>
            </div>
            <div class="footer">
              <span>点赞</span>&emsp;<span @click="remarkSon(item)">评论</span>
            </div>

            <div :class="item.flag ? 'block':'none'">
              <div>
                <el-input v-model="input" :rows="2" type="textarea" clearable placeholder="Please input"/>
              </div>
              <div>
                <el-button type="primary" :icon="Check" @click="item.flag = false" circle/>
                <el-button type="danger" :icon="Delete" @click="item.flag = false" circle/>
              </div>
            </div>
          </div>

        </div>

        <!--递归调用-->
        <div v-if="item.children" class="children-item">
          <list :tree_list="item.children"/>
        </div>
      </div>
    </div>
  </div>

</template>
<style scoped>

  .father {
    margin-bottom: 4%;
    margin-top: 4%;
  }

  .son {
    width: 92%;
    margin-left: 4%;
    margin-bottom: 1%;
    margin-top: 1%;
  }

  .images {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .son-first {
    width: 98%;
    margin-left: 3%;
  }

  .father-first-first {
    height: 40px;
    display: flex;
    flex-direction: row;
  }

  .father-first-first > div:nth-child(2) > span {
    margin-left: 10px;
    line-height: 40px;
  }

  .content {
    width: 82%;
    margin-left: 9%;
  }

  .footer {
    width: 82%;
  }

  .footer > span:nth-child(1) {
    margin-left: 80%;
  }

  /*.son>.footer > span:nth-child(1) {*/
  /*  margin-left: 110%;*/
  /*}*/

  .footer > span:nth-child(2) {
    margin-left: 1%;
  }

  .footer > span:hover {
    cursor: pointer;
    color: #535bf2;
  }

  .block {
    display: block;
  }

  .none {
    display: none;
  }
</style>
