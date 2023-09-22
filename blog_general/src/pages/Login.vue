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
    <el-form-item label="password" prop="password">
      <el-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
      />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"
      >Submit</el-button
      >
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from "vue";

export default defineComponent({

    name: "Login",
    setup(){
      const data=reactive({
        ruleForm:{
          username:"",
          password:""
        },
        rules:{
          username: [
            { required: true, message: '', trigger: 'blur' },
            { min: 3, max: 5, message: 'Length should be 3 to 10', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '', trigger: 'blur' },
            { min: 3, max: 5, message: 'Length should be 3 to 10', trigger: 'blur' },
          ],
        }
      });
      return {...toRefs(data)};
  }
})

</script>

<style lang="scss" scoped>


</style>
