<script setup="admin">
  import {useRouter} from 'vue-router'
  import {getCurrentInstance, reactive, ref} from '@vue/runtime-core'
  import {set} from '../../utils/local_storage'


  let userLoginForm = reactive({
    username: "admin",
    password: "123456"
  });
  const router = useRouter();

  //获取用户登录信息
  async function usreList() {
    set('user', userLoginForm);
    router.replace({
      name: "admin_dashboard",
      query: {"name": userLoginForm.username, "password": userLoginForm.password}
    })
  }

  //获取用户信息
  async function getUserInfo() {

  }

  function goPage() {
    router.push({name: "main", params: {}})
  }

</script>

<template>
  <div id="login">
    <div id="back">
      <el-tooltip class="box-item" effect="dark" content="返回图书页" placement="top-start">
        <font-awesome-icon :icon="['fas', 'fa-arrow-left']" @click="goPage"/>
      </el-tooltip>
    </div>
    <div id="contain">
      <div id="left_card">
        <h1>管理端</h1>
      </div>
      <div id="right_card">
        <el-card class="el-card">
          <h2>欢迎回来</h2>
          <form class="login" action="">
            <input type="text" v-model="userLoginForm.username" placeholder="请输入账号">
            <input type="password" v-model="userLoginForm.password" placeholder="请输入密码">
          </form>
          <div class="remember">
            <!--            <input type="radio" name="" id="psd" class="radio"><label for="psd"/>记住密码-->
          </div>
          <div id="btn">
            <button class="loginbtn" @click="usreList">登陆</button>
          </div>
        </el-card>
      </div>
    </div>

  </div>
</template>


<style lang="less" scoped>
  @keyframes animate {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }

  #login {
    position: relative;
    width: 100vw;
    height: 100vh;

    #back {
      height: 400px;
      position: absolute;
      top: 55%;
      left: 24%;
      transform: translate(-50%, -50%);
      z-index: 100;
    }

    #contain {
      height: 400px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 25px;
      border: 1px solid #e0e0e0;
    }
  }

  #contain {
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;

    #left_card {
      width: 500px;

      span {
        font-size: 1.2rem;
        text-align: center;
      }
    }

    #right_card {
      width: 400px;

      .el-card {
        margin: 0 45px;
        border-radius: 25px;
        background-color: rgba(206, 206, 206, 0.1);
      }
    }
  }

  #right_card {
    display: flex;
    justify-content: center;
    align-items: center;

    .login {
      input {
        width: 80%;
        height: 45px;
        margin-top: 10px;
        border: 1px solid white;
        border-radius: 10px;
        font-size: inherit;
        padding-left: 20px;
        outline: none;
      }
    }

    .remember {
      float: right;
      height: 26px;
      text-align: center;
      font-size: 1rem;
      position: relative;

      .radio {
        height: 1rem;
        width: 1rem;
        vertical-align: middle;
        margin-top: -2px;
        opacity: 0;
      }

      label {
        position: absolute;
        left: -2px;
        top: 5px;
        height: 1rem;
        width: 1rem;
        margin-top: -2px;
        border-radius: 50%;
        border: 1px solid black;
      }

      //radio选中后修改labe内的内容 :after 选择器在被选元素的内容后面插入内容。
      input:checked + label::after {
        content: "";
        width: 0.6rem;
        height: 0.6rem;
        position: absolute;
        left: 50%;
        top: 50%;
        border-radius: 50%;
      }
    }

    .message {
      margin-top: 26px;
      font-size: 0.9rem;
    }

    .loginbtn {
      width: 100%;
      height: 35px;
      margin-top: 10px;
    }

  }

  .tooltip-base-box {
    /*width: 600px;*/
  }

  /*去掉 el-tooltip 点击的黑框*/
  .el-tooltip__trigger {
    outline: none;
  }

</style>
