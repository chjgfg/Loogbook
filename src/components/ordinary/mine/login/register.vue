<script setup="admin">
  import {useRouter} from 'vue-router'
  import {getCurrentInstance, reactive, ref} from '@vue/runtime-core'
  import {set} from '../../../../utils/local_storage.ts'
  import {ElMessage} from "element-plus";

  let userLoginForm = reactive({
    username: "admin",
    password: "123456"
  });
  const router = useRouter();
  const {proxy} = getCurrentInstance();
  // 修改密码
  let isChangePassword = ref(false);

  let data = reactive({
    phone: "",
    password: "",
    confirmPassword: "",
    identifyCode: "",
    agree: 0,
  });

  //获取用户登录信息
  async function login() {
    set('token', userLoginForm);
    // router.push({name: "", query: {"name": userLoginForm.username, "password": userLoginForm.password}})
    router.go(-1);
    // console.log(form);
  }

  async function register() {
    router.push({name: "register"});
    console.log("注册", data);
  }

  async function getUserInfo() {

  }

  function goPage() {
    router.push({name: "main", params: {}})
  }


  // 获取验证码
  function getIdentifyCode() {
    console.log("获取验证码");
  }

  // 确认密码
  const confirmFunc = () => {
    if (data.confirmPassword !== data.rPassword)
      ElMessage.error("密码与确认密码不一致.");
  };


  // 用的是注册参数
  function changePassword() {
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
        <h1>用户端</h1>
      </div>
      <div id="right_card">
        <el-card class="el-card">
          <!--          <h2>注册</h2>-->
          <el-form label-position="right" label-width="100px" style="max-width: 460px" class="loginForm">
            <el-input class="input" v-model="data.phone" placeholder="请输入邮箱"/>
            <el-input class="input" type="password" v-model="data.password" placeholder="请输入密码"/>
            <el-input class="input" type="password" v-model="data.confirmPassword" @blur="confirmFunc" placeholder="请再次输入密码"/>
            <el-row class="code-father">
              <el-input class="code-son input inpWidth" type="password" v-model="data.identifyCode" placeholder="请输入验证码"/>
              <el-button class="code-daughter" type="primary" @click="getIdentifyCode" plain>获取验证码</el-button>
            </el-row>
            <el-row>
              <el-checkbox class="checkBox" v-model="data.agree" label="同意用户使用准则" name="type"/>
            </el-row>
          </el-form>
          <div class="remember">
          </div>
          <div id="btn">
            <button class="register" @click="register">注册</button>
            <button class="login" @click="login">登录</button>
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

    /*.login {*/
    /*  input {*/
    /*    width: 80%;*/
    /*    height: 45px;*/
    /*    margin-top: 10px;*/
    /*    border: 1px solid white;*/
    /*    border-radius: 10px;*/
    /*    font-size: inherit;*/
    /*    padding-left: 20px;*/
    /*    outline: none;*/
    /*  }*/
    /*}*/

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

    #btn {
      /*margin-top: 26px;*/
      /*font-size: 0.9rem;*/
      width: 100%;
    }

    .loginbtn {
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

  .input {
    width: 90%;
    height: 45px;
    margin-top: 10px;
    /*border: 0px solid white;*/
    border: none;
    border-radius: 10px;
    font-size: inherit;
    /*padding-left: 20px;*/
    outline: none;
  }

  .el-input__inner {
    border-top: none !important;
    border-left: none !important;
    border-right: none !important;
    border-radius: 0;
    box-shadow: none !important;
  }

  .code-father, .checkBox {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 5%;
  }

  .code-son {
    width: 50%;
  }

  .code-daughter {
    width: 40%;
    margin-top: 4%;
    height: 45px;
    line-height: 45px;
    margin-left: 4%;
  }

  .register {
    margin-right: 45% !important;
  }
</style>
