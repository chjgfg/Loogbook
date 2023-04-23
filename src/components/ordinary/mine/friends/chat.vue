<script setup="chat">
  import {onMounted, reactive, ref} from 'vue'
  import {chat, user_img} from "../../../../http/request";
  import {Check, Delete, Edit, Message, Search, Star} from '@element-plus/icons-vue'
  import bus from "../../../../bus";
  // import {initWebsocket, onOpen, onMessage, onError, onClose} from "../../../../utils/websocket"

  let chat_list = ref([]);
  let image = ref();
  let txt = ref("");
  let websocket = ref({});
  let other = reactive({
    "id": "",
    "img": "",
    "name": "",
    "content": "",
    "updatetime": "",
  });


  function onOpen() {
    console.log('WebSocket连接成功，状态码：', websocket.readyState)
  }

  function onMessage(event) {
    websocket.send(event);
    console.log('WebSocket收到消息：', event);
  }

  function onError(event) {
    console.log('WebSocket连接错误，状态码：', websocket.readyState)
  }

  function onClose() {
    console.log('WebSocket连接关闭，状态码：', websocket.readyState)
  }

  function initWebsocket() {
    websocket.onOpen = onOpen;
    websocket.onMessage = onMessage;
    websocket.onError = onError;
    websocket.onClose = onClose;
  }

  async function getChats() {
    let newVar = await chat({data: "", type: "post"});
    let newVar2 = await user_img({data: "", type: "post"});
    chat_list.value = newVar.data.chat;
    image.value = newVar2.data.image;

    // onMessage();
  }

  bus.on("select", message => {
    // console.log(message);
    other.content = message.content;
    other.id = message.id;
    other.img = message.img;
    other.name = message.name;
    other.updatetime = message.updatetime;
    getChats();
  });


  const initChat = () => {
    if ('WebSocket' in window) {
      // 连接地址：ws://127.0.0.1:8880/ws/xxx
      websocket = new WebSocket("ws://127.0.0.1:12344/person/123456");
      initWebsocket();
      onOpen();
    } else {
      // 关闭
      websocket.close();
      onError("test");
      onClose();
      alert('当前浏览器 不支持')
    }
  };

  onMounted(() => {
    getChats();
    initChat();
    // console.log(JSON.parse(JSON.stringify(other._value)));
    // console.log(JSON.stringify(other) == '{}');
    // console.log(other.id == '');
    // console.log(Object.keys(other));
    // console.log(other.hasOwnProperty('name'));
  })
</script>
<template>
  <div v-if="other.id !== ''">
    <div>
      {{other.name}} <img style="height: 40px;width: 40px;border-radius: 50%" :src="other.img" alt="">
    </div>
    <div class="chat-content  infinite-list" style="overflow: auto">
      <!-- recordContent 聊天记录数组-->
      <li v-for="(itemc,indexc) in chat_list" :key="indexc" class="infinite-list-item">
        <!-- 对方 -->
        <div class="word" v-if="!itemc.mine">
          <img :src="other.img" alt="">
          <div class="info">
            <p class="time">{{itemc.name}} {{itemc.time}}</p>
            <div class="info-content">{{itemc.content}}</div>
          </div>
        </div>
        <!-- 我的 -->
        <div class="word-my" v-else>
          <div class="info">
            <p class="time">{{itemc.name}} {{itemc.time}}</p>
            <div class="info-content">{{itemc.content}}</div>
          </div>
          <img :src="image" alt="">
        </div>
      </li>
    </div>
    <div>
      <el-input v-model="txt" class="textarea " resize="none" :rows="4" type="textarea"/>
      <el-button type="primary" :icon="Edit" @click="onMessage(txt)" circle/>
      <el-button type="success" :icon="Check" @click="onMessage(txt)" circle/>
    </div>
  </div>
</template>
<style scoped lang="less">
  .chat-content {
    /*width: 100%;*/
    /*padding: 20px;*/

    .word {
      display: flex;
      margin-bottom: 20px;

      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }

      .info {
        margin-left: 10px;

        .time {
          font-size: 12px;
          color: rgba(51, 51, 51, 0.8);
          margin: 0;
          height: 20px;
          line-height: 20px;
          margin-top: -5px;
        }

        .info-content {
          padding: 10px;
          font-size: 14px;
          background: #47ff45;
          position: relative;
          margin-top: 8px;
        }

        //小三角形
        .info-content::before {
          position: absolute;
          left: -8px;
          top: 8px;
          content: '';
          border-right: 10px solid #47ff45;
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
        }
      }
    }

    .word-my {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 20px;

      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }

      .info {
        width: 90%;
        margin-left: 10px;
        text-align: right;

        .time {
          font-size: 12px;
          color: rgba(51, 51, 51, 0.8);
          height: 20px;
          line-height: 20px;
          margin-top: -5px;
          margin-right: 10px;
        }

        .info-content {
          max-width: 70%;
          padding: 10px;
          font-size: 14px;
          float: right;
          margin-right: 10px;
          position: relative;
          margin-top: 8px;
          background: #A3C3F6;
          text-align: left;
        }

        //小三角形
        .info-content::after {
          position: absolute;
          right: -8px;
          top: 8px;
          content: '';
          border-left: 10px solid #A3C3F6;
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
        }
      }
    }
  }

  .infinite-list {
    margin-top: 50px;
    height: 500px !important;
    padding: 0;
    /*margin: 0;*/
  }

  .infinite-list-item {
    list-style: none;
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

  .textarea {
    width: 80%;
    height: 50px;
    resize: none !important;
  }


</style>
