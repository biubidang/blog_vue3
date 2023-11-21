<template>
<div>登录页面</div>
  <div class="loginImage">
  <img src="http://qny.uioku.top/background/background_1.png" style="width: 100%" alt="背景图片显示错误">
  </div>
  <div class="login-box">
  <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
  >
    <el-form-item label="username" prop="username" class="loginLabel">
      <el-input  v-model="ruleForm.username" type="username" autocomplete="off" class="transparent-input"  />
    </el-form-item>
    <el-form-item label="password" prop="password">
      <el-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
          class="transparent-input"
      />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      <router-link to="/register" class="toRegisterButton"> 注册 </router-link>
    </el-form-item>

  </el-form>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref, toRefs} from "vue";
import {LoginData} from "@/types";
import { FormInstance } from "element-plus";
import {login} from "@/api/user";
import {useRouter} from "vue-router";

export default defineComponent({

    name: "Login",
    setup(){
      // localStorage.setItem("token","");
      const data=reactive({
        ruleForm: {
          username: "",
          password: ""
        } as LoginData,
      });
        const rules={
          username: [
            { required: true, message: '', trigger: 'blur' },
            { min: 3, max: 10, message: 'Length should be 3 to 10', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '', trigger: 'blur' },
            { min: 3, max: 10, message: 'Length should be 3 to 10', trigger: 'blur' },
          ],
        };

      const ruleFormRef=ref<FormInstance>();
      const router=useRouter();
      //重置账号密码
      const submitForm = async (formEl: FormInstance | undefined) => {
        if (!formEl) return
        await formEl.validate((valid, fields) => {
          if (valid) {
            // console.log('submit!')
            login(data.ruleForm).then((res)=>{
              console.log(res);
            localStorage.setItem("token",res.data.token);
            localStorage.setItem("userInfo",JSON.stringify(res.data.userInfo))
            router.push('/');
            }).catch(()=>{

            })
          } else {
            console.log('error submit!', fields)
          }
        })
      };
        const resetForm = () => {
             data.ruleForm.username=""
             data.ruleForm.password=""
        };

      return {...toRefs(data),rules,resetForm,ruleFormRef,submitForm};
  }
})

</script>

<style lang="scss" scoped>

.login-box{
  height: 150px;
  width: 400px;
  position: absolute;
  left: 35%;
  top:40%;
  ::v-deep .transparent-input .el-input__wrapper{
    background-color: transparent !important;
    .el-input__inner{
      background-color: transparent;
      color: snow;
    }
  }
  ::v-deep .loginLabel{
    color: snow;
  }
  .toRegisterButton{
    position: relative;
    left: 20px;
  }
}
.loginImage{
  width:100%;
  height:100%;
  z-index:-1;
  position: fixed;
  left: 0;
  top: 0;
}

</style>

