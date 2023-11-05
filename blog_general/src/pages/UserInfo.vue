<template>
  <div>
    <Header></Header>
  </div>
  <div class="UserInfo">
    <!-- 用户中心 -->
        <div class="container">
          <div v-show="isEdit" class="tcommonBox">
            <header>
              <h1>
                编辑个人资料
              </h1>
            </header>
            <section>
              <ul class="userInfoBox">
                <li class="avatarlist">
                  <span class="leftTitle">头像</span>
                  <el-upload
                      class="avatar-uploader"
                      name="img"
                      :action='uploadURL'
                      :auto-upload="true"
                      :http-request="handleAvatarUpload"
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload">
                    <img   v-if="userInfoObj.avatar" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    <div slot="tip" class="el-upload__tip">点击上传头像，只能上传png文件，且不超过3mb</div>
                  </el-upload>
                </li>
                <li class="username">
                  <span class="leftTitle">昵称</span>
                  <el-input v-model="userInfoObj.nickName" placeholder="昵称"></el-input> <i  class="fa fa-wa fa-asterisk"></i>
                </li>
                <li>
                  <span class="leftTitle">电子邮件</span>
                  <span>{{userInfoObj.e_mail}}</span>
                </li>

              </ul>
              <div class=" saveInfobtn">
                <a class="tcolors-bg"  href="javascript:void(0);" @click="isEdit=!isEdit">返 回</a>
                <a class="tcolors-bg" href="javascript:void(0);" @click="saveInfoFun">保 存</a>
              </div>
            </section>
          </div>
          <div v-show="!isEdit" class="tcommonBox">
            <header>
              <h1>
                个人中心
                <span class="gotoEdit" @click="isEdit=!isEdit"><i class="fa fa-wa fa-edit"></i>编辑</span>
              </h1>

            </header>
            <section>
              <ul class="userInfoBox">
                <li class="avatarlist">
                  <span class="leftTitle">头像</span>
                  <div class="avatar-uploader">
                    <img :src="imageUrl" class="avatar" >
                  </div>
                </li>
                <li class="username">
                  <span class="leftTitle">昵称</span>
                  <span>{{userInfoObj.nickName?userInfoObj.nickName:"无"}}</span>

                </li>
                <li>
                  <span class="leftTitle">电子邮件</span>
                  <span>{{userInfoObj.e_mail?userInfoObj.e_mail:"无"}}</span>
                </li>
              </ul>

            </section>
          </div>
        </div>
  </div>

</template>

<script lang ="ts">
import Header from "@/components/myHeader.vue";
import {defineComponent, onMounted, onUpdated, reactive, toRefs} from "vue";
import {getUserInfo, updateUserInfo, uploadimg} from "@/api/user";
import {UserInfoData} from "@/types";
import {ElMessage, UploadProps} from "element-plus";
import {useRouter} from "vue-router";
import service from "@/utils/request";

export default defineComponent({
  name: "UserInfo",
  components: {Header},
  setup() {
    const data = reactive({
      uploadURL: '',
      imageUrl:'',
      isEdit: false,
      userId:0,
      userInfo: {},//本地存储的用户信息
      userInfoObj: {
        id:0,
        nickName:"",
        e_mail:"",
        avatar:"",
      }as UserInfoData,//用户的信息
    })
    data.uploadURL="http://localhost:8088/"+'upload'
    console.log(data.uploadURL)
    const router=useRouter();
    let result={}
    // function handleAvatarUpload (file:any) {
    //   // data.imageUrl = URL.createObjectURL(file.raw)
    //   console.log(data.imageUrl)
    //   console.log(file)
    //   const fileSize = file.size
    //   if (!fileSize) {
    //     // 是否为空
    //     ElMessage({
    //       type: 'error',
    //       showClose: true,
    //       message: '无效的文件，请重新选择！',
    //     })
    //     logoPicRemove()
    //     return
    //   }
    //   let formData=new FormData();
    //   formData.append('file',file);
    //   console.log(formData)
    //   uploadimg(formData).then((res)=>{
    //     console.log(res.data)
    //   })
    // }

    function logoPicRemove() { // 清空内容
      data.imageUrl = ''
    }
    async function handleAvatarUpload(file:any){
      let img=new FormData()
      img.append('img',file.file)
      console.log(file)
      console.log(img.get('img'))
      await uploadimg(img).then((res)=>{
        console.log(res)
        data.userInfoObj.avatar = res.data;
          // data.userInfoObj.head_start = 1;
        console.log(data.userInfoObj.avatar)
      })
    }

    const handleAvatarSuccess: UploadProps['onSuccess'] = (
        res,
        file
    ) =>  {//上传头像
      console.log(file)
      console.log("avatar"+res)
      res=JSON.stringify(result)
      console.log("code"+res.code)
      // if (res.code == 200) {
      //   data.userInfoObj.avatar = res.data;
      //   // data.userInfoObj.head_start = 1;
      // } else {
      //   ElMessage.error("图片上传失败")
      // }
    }

    const beforeAvatarUpload: UploadProps['beforeUpload'] = (file) => {//判断头像大小
      const isJPG = file.type === 'image/png'
      const isLt3M = file.size / 1024 / 1024 < 3;
      // console.log(file);
      if (!isJPG) {
        ElMessage.warning('上传头像图片只能是 PNG 格式!');
      }
      if (!isLt3M) {
        ElMessage.warning('上传头像图片大小不能超过 3MB!');
      }
      return isJPG && isLt3M;
    }

    function saveInfoFun() {//保存编辑的用户信息

      if (!data.userInfoObj.nickName) { //昵称为必填
         ElMessage.warning('昵称为必填项，请填写昵称');
        return;
      }
      updateUserInfo(data.userInfoObj).then((response) => {//保存信息接口，返回展示页
        ElMessage.success( '保存成功！');
        data.isEdit = false;
      })
    }
    onUpdated(()=>{

    })
    onMounted(()=>{
      // console.log(this.$router,this.$route);
      if(localStorage.getItem('userInfo')){
        // that.haslogin = true;
        data.userInfo = JSON.parse(localStorage.getItem('userInfo') as string);
        getUserInfo().then((res)=>{
          console.log(res)
          data.userInfoObj.id= res.data.id;
          data.userInfoObj.nickName = res.data.nickName;
          data.userInfoObj.e_mail = res.data.email;
          data.userInfoObj.avatar = res.data.avatar;
          // data.userInfoObj.head_start = 0;
          data.imageUrl='http://'+data.userInfoObj.avatar
        })
      }else{
        // that.haslogin = false;
        ElMessage.warning("登录已失效！")
        router.push('/login')
      }
    })

    return {...toRefs(data),saveInfoFun,beforeAvatarUpload,handleAvatarSuccess,handleAvatarUpload}
  }
})
</script>

<style>
.userInfoBox .avatarlist{
  position: relative;
}

.avatar-uploader {
  display: inline-block;
  vertical-align: top;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 120px;
  height: 120px;
}
.avatar-uploader .el-upload:hover {
  border-color: #20a0ff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
  position: absolute;
  top:0;
  left:0;
}
.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: block;
  object-fit: cover;
}
.gotoEdit{
  font-size: 15px;
  float:right;
  cursor: pointer;
  color:#999;
}
.gotoEdit:hover {
  color:#333;
}
/*个人设置*/
.userInfoBox .leftTitle{
  display: inline-block;
  width:100px;
  padding: 10px 0;
}
.userInfoBox .rightInner{
  display: inline-block;
  max-width: calc(100% - 140px);
  vertical-align: top;
}
.userInfoBox li{
  padding:20px;
  border-bottom: 1px solid #ddd;
}
.userInfoBox li:last-child{
  border-bottom: 1px solid transparent;
}
.userInfoBox  .el-input,.userInfoBox  .el-textarea{
  max-width:300px;
  min-width: 100px;
}

.userInfoBox .el-input__inner{
  border-radius: 4px;
}
.userInfoBox  .el-textarea{
  vertical-align: top;
}
.saveInfobtn{
  margin: 20px 0;
  text-align: center;
}
.saveInfobtn a{
  color:black;
  padding:6px 20px;
  margin:5px 10px;
  border-radius: 5px;
  font-size: 14px;
}
.userInfoBox .fa-asterisk{
  color: #DF2050;
}
</style>
