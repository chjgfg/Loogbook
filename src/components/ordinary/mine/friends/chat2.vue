<script setup="">
  import {onBeforeUnmount, onMounted, ref} from 'vue'
  import {ElMessage} from 'element-plus'

  export default {
    name: "chat",
    setup() {
      const list = reactive([]);
      let socket = null;

      // Websoket连接成功事件
      const websocketonopen = (res) => {
        ElMessage.success("WebSocket连接成功");
      };
      // Websoket接收消息事件
      const websocketonmessage = (res) => {
        if (res.data) {
          ElMessage.success("接收到消息：" + JSON.parse(res.data).content);
          message.content = JSON.parse(res.data).content;
          message.name = JSON.parse(res.data).name;
          message.type = 'left';
          list.push(JSON.parse(JSON.stringify(message)));
          console.log(list);
        }
      };
      // Websoket连接错误事件
      const websocketonerror = (res) => {
        ElMessage.error("连接错误");
      };
      // Websoket断开事件
      const websocketclose = (res) => {
        ElMessage.error("断开连接");
      };

      let message = reactive({
        name: "",
        content: "",
        type: ''
      });
      let msg = ref("");
      let name = ref("");
      const dialogFormVisible = ref(false);

      const sendMesage = (m) => {
        if (name.value === "") {
          ElMessage.warning("未登录，无法发送消息");
        } else {
          ElMessage.success("发送消息：" + m);
          message.content = m;
          message.name = name.value;
          message.type = 'right';
          socket.send(JSON.stringify(message));
          //解决message对象只有一个，push修改所有message对象的问题
          list.push(JSON.parse(JSON.stringify(message)));
          console.log(list);
        }
      };
      // 创建 websocket 的实例
      const createSocket = () => {
        const wsurl = "ws://localhost:8075/chat/" + name.value;
        socket = new WebSocket(wsurl);
        socket.onopen = websocketonopen;
        socket.onmessage = websocketonmessage;
        socket.onerror = websocketonerror;
        socket.onclose = websocketclose;
      };
      //登录聊天室
      const login = () => {
        console.log(name);
        createSocket();
        dialogFormVisible.value = false;
      };

      // 组件被销毁之前，清空 sock 对象
      onBeforeUnmount(() => {
        // 关闭连接
        websocketclose;

        // 销毁 websocket 实例对象
        socket = null;
      });
      //建立连接，创建websocket实例

      return {
        name,
        list,
        msg,
        message,
        dialogFormVisible,
        sendMesage,
        createSocket,
        login
      };
    },
  };

</script>


<template>
  <h1>聊天室</h1>
  <el-scrollbar height="400px" style="border:1px solid #1813131f">
    <el-tag v-for="item in list" :key="item" class="scrollbar-demo-item" :style="`justify-content: ${item.type}`">
      {{item.name}}:{{ item.content }}
    </el-tag>
  </el-scrollbar>
  发送消息：
  <el-input v-model="msg"/>
  <el-button @click="sendMesage(msg)">发送消息</el-button>
  <el-button text @click="dialogFormVisible = true">登录</el-button>

  <el-dialog v-model="dialogFormVisible" title="登录">
    请输入用户昵称:
    <el-input v-model="name" autocomplete="off"/>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="login()">确认</el-button>
      </span>
    </template>
  </el-dialog>
  <router-link to="/">返回首页</router-link>
</template>


<style scoped>
  .read-the-docs {
    color: #888;
  }

  .scrollbar-demo-item {
    display: flex;
    align-items: center;
    height: 30px;
    margin: 10px;
    text-align: left;
    border-radius: 4px;
  }


</style>
