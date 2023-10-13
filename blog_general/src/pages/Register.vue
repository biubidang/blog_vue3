<template>
  <div>登录页面</div>
  <div class="login-box">
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
    >
      <el-form-item label="username" prop="username">
        <el-input v-model="ruleForm.username" type="username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="nickname" prop="nickname">
        <el-input
            v-model="ruleForm.nickname"
            type="nickname"
            autocomplete="off"
        />
      </el-form-item>
        <el-form-item label="password" prop="password">
          <el-input
              v-model="ruleForm.password"
              type="password"
              autocomplete="off"
          />
        </el-form-item>
      <el-form-item label="e_mail" prop="e_mail">
        <el-input
            v-model="ruleForm.e_mail"
            type="e_mail"
            autocomplete="off"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
        >注册</el-button
        >
        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        <router-link to="/login"> 登录 </router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref, toRefs} from "vue";
import {RegisterData} from "@/types";
import {FormInstance} from "element-plus";
import {login, register} from "@/api/user";
import {useRouter} from "vue-router";

export default defineComponent({

  name: "Register",
  setup(){
    // localStorage.setItem("token","");
    const data=reactive({
      ruleForm: {
        username: "",
        nickname:"",
        password: "",
        e_mail:""
      } as RegisterData,
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
      nickname: [
        { required: true, message: '', trigger: 'blur' },
        { min: 1, max: 20, message: 'Length should be 1 to 20', trigger: 'blur' },
      ],
      e_mail: [
        { required: false, message: '', trigger: 'blur' },
        {},
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
          register(data.ruleForm).then((res)=>{
            console.log(res);
            router.push('/login');
          })
        } else {
          console.log('error submit!', fields)
        }
      })
    };
    const resetForm = () => {
      data.ruleForm.username=""
      data.ruleForm.password=""
      data.ruleForm.nickname=""
      data.ruleForm.e_mail=""
    };

    return {...toRefs(data),rules,resetForm,ruleFormRef,submitForm};
  }
})

</script>

<style lang="scss" scoped>


</style>
