<script setup="security">
  import {onMounted, ref, reactive} from 'vue'
  import {user_info} from "../../../../http/request.js"

  const user = reactive({
    name: "",
    email: "",
    phone: ""
  });


  async function getUserInfo() {
    let newVar = await user_info({data: {'name': 'sss', 'pass': '111'}, type: 'post'});
    let user1 = newVar.data.user;
    console.log(user1);
    user.name = user1.name;
    user.email = user1.email;
    user.phone = user1.phone;
    console.log(user);
  }

  onMounted(() => {
    getUserInfo()
  });


  const submitForm = (formEl) => {
    if (!formEl) return;
    formEl.validate((valid) => {
      if (valid) {
        console.log('submit!')
      } else {
        console.log('error submit!');
        return false
      }
    })
  };

  const resetForm = (formEl) => {
    if (!formEl) return;
    formEl.resetFields()
  }

</script>
<template>

  <div class="addr">

    <div class="form">
      <div>您的基础信息</div>
      <el-form ref="ruleFormRef" :model="user" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">
        <el-form-item label="名字" prop="name">
          <el-input v-model="user.name"/>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="user.email"/>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="user.phone"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(user)">提交</el-button>
          <el-button @click="resetForm(user)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>

    <el-divider/>
    <div>
      <div>您的安全服务</div>

      <el-row>
        <el-col :span="2">
          <div class="grid-content ep-bg-purple"/>
          已认证
        </el-col>
        <el-col :span="3">
          <div class="grid-content ep-bg-purple"/>
          身份认证
        </el-col>
        <el-col :span="16">
          <div class="grid-content ep-bg-purple"/>
          用于提升账号的安全性和信任级别。认证后的有卖家记录的账号不能修改认证信息。
        </el-col>
        <el-col :span="2">
          <div class="grid-content ep-bg-purple"/>
          查看
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="2">
          <div class="grid-content ep-bg-purple"/>
          已设置
        </el-col>
        <el-col :span="3">
          <div class="grid-content ep-bg-purple"/>
          登录密码
        </el-col>
        <el-col :span="16">
          <div class="grid-content ep-bg-purple"/>
          安全性高的密码可以使账号更安全。建议您定期更换密码，且设置一个包含数字和字母，并长度超过6位以上的密码。
        </el-col>
        <el-col :span="2">
          <div class="grid-content ep-bg-purple"/>
          修改
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="2">
          <div class="grid-content ep-bg-purple"/>
          未设置
        </el-col>
        <el-col :span="3">
          <div class="grid-content ep-bg-purple"/>
          密保问题
        </el-col>
        <el-col :span="16">
          <div class="grid-content ep-bg-purple"/>
          是您找回登录密码的方式之一。建议您设置一个容易记住，且最不容易被他人获取的问题及答案，更有效保障您的密码安全。
        </el-col>
        <el-col :span="2">
          <div class="grid-content ep-bg-purple"/>
          设置
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="2">
          <div class="grid-content ep-bg-purple"/>
          已绑定
        </el-col>
        <el-col :span="3">
          <div class="grid-content ep-bg-purple"/>
          绑定手机
        </el-col>
        <el-col :span="16">
          <div class="grid-content ep-bg-purple"/>
          绑定手机后，您即可享受淘宝丰富的手机服务，如手机找回密码等。
        </el-col>
        <el-col :span="2">
          <div class="grid-content ep-bg-purple"/>
          修改
        </el-col>
      </el-row>

    </div>

  </div>


</template>
<style scoped>
  .el-row {
    margin-bottom: 20px;
  }

  .el-row:last-child {
    margin-bottom: 0;
  }

  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }


  .addr {
    width: 100%;
    margin-left: 5%;
    margin-top: 5%;
  }

  .form {
    width: 70%;
    margin-bottom: 5%;
  }
</style>
