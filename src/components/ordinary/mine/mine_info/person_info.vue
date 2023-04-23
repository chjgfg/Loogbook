<script setup="person_info">
  import {onMounted, ref, reactive} from 'vue'
  import {user_info} from "../../../../http/request.js"
  import {ElMessage} from 'element-plus'

  const activeIndex = ref('1');
  const user = ref({});
  const radio1 = ref('1');


  // import type { UploadProps } from 'element-plus'

  const imageUrl = ref('');
  // const uploadRef = ref();

  const handleAvatarSuccess = (response, uploadFile) => {
    console.log(response, uploadFile);
    // URL.createObjectURL(e.file);
  };

  const beforeAvatarUpload = (rawFile) => {
    console.log(rawFile);
    if (rawFile.type !== 'image/jpeg') {
      ElMessage.error('Avatar picture must be JPG format!');
      return false
    } else if (rawFile.size / 1024 / 1024 > 10) {
      ElMessage.error('Avatar picture size can not exceed 2MB!');
      return false
    }
    return true
  };


  const handleSelect = (key, keyPath) => {
    // console.log(key, keyPath);
    activeIndex.value = key
  };

  async function getUserInfo() {
    let newVar = await user_info({data: {'name': 'sss', 'pass': '111'}, type: 'post'});
    // console.log(newVar);
    user.value = newVar.data.user
  }

  const handleSuccess = (response, file) => {
    imageUrl.value = URL.createObjectURL(file.raw)
  };
  onMounted(() => {
    getUserInfo()
  })
</script>
<template>

  <div class="person-info">

    <div class="person-info-menu">
      <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">基本信息</el-menu-item>
        <el-menu-item index="2">头&emsp;&emsp;&emsp;像</el-menu-item>
      </el-menu>
    </div>
    <div class="person-info-son" v-if="activeIndex == 1">
      <div>亲爱的 <span>{{user.name}}</span> ，填写真实的资料，有助于好友找到你哦。</div>
      <div>
        <table border="1">
          <tr>
            <td>头像</td>
            <td>
              <el-image class="image" :src="user.image"/>
            </td>
          </tr>
          <tr>
            <td>昵称</td>
            <td>{{user.name}}</td>
          </tr>
          <tr>
            <td>性别</td>
            <td>
              <el-radio-group v-model="radio1" class="ml-4">
                <el-radio label="1" size="large">男</el-radio>
                <el-radio label="2" size="large">女</el-radio>
                <el-radio label="3" size="large">妖</el-radio>
              </el-radio-group>
            </td>
          </tr>
          <tr>
            <td>
              <el-button type="success">保存</el-button>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="person-info-img " v-if="activeIndex == 2">
      <div>头像上传</div>
      <div>
<!--        <el-upload class="avatar-uploader" ref="imageUrl" action="http://localhost:8848/author/file/upload_test"-->
        <el-upload class="avatar-uploader" ref="imageUrl" :show-file-list="false" :on-success="handleSuccess" :before-upload="beforeAvatarUpload">
          <img v-if="user.image" :src="user.image" class="avatar image" alt=""/>
          <el-icon v-else class="avatar-uploader-icon">
            <font-awesome-icon icon="fas fa-plus"/>
          </el-icon>
        </el-upload>
      </div>
<!--      <div>-->
<!--        <el-button type="success">保存</el-button>-->
<!--      </div>-->
    </div>
  </div>

</template>
<style scoped lang="less">
  .person-info {
    margin-top: 3%;

    .person-info-menu {
      width: 30%;
    }

    .person-info-son {
      margin-top: 20px;
      height: 500px;
      width: 400px;


      table, tr, td {
        border: 0;
      }
    }

    .person-info-img {
      margin-top: 200px;
    }
  }

  .person-info-son > div {
    width: 400px;
    margin-left: 80%;
    margin-top: 10%;
  }

  .person-info-img > div {
    width: 400px;
    margin-left: 40%;
    /*margin-top: 5%;*/
  }

  .image {
    border-radius: 1em;
    width: 200px;
    height: 200px;

  }

  .block {
    display: block;
  }

  .none {
    display: none;
  }
</style>
