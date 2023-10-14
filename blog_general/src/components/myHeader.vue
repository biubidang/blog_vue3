<template>
<div class="header">
  <el-row :gutter="20">
    <el-col :span="4"><img src="../assets/logo.png" class="logo"/></el-col>
    <el-col :span="16">
      <el-menu
          class="blog-menu"
          mode="horizontal"
      >
        <el-menu-item index="1"><router-link to="/">首 页</router-link></el-menu-item>
        <el-sub-menu index="2">
          <template #title>分 类</template>
          <el-menu-item index="2-1" v-for="category in categories" @click="getCategoryArticles(category.id)">{{category.name}}</el-menu-item>
<!--          <el-menu-item index="2-2">item two</el-menu-item>-->
<!--          <el-menu-item index="2-3">item three</el-menu-item>-->
<!--          <el-sub-menu index="2-4">-->
<!--            <template #title>item four</template>-->
<!--            <el-menu-item index="2-4-1">item one</el-menu-item>-->
<!--            <el-menu-item index="2-4-2">item two</el-menu-item>-->
<!--            <el-menu-item index="2-4-3">item three</el-menu-item>-->
<!--          </el-sub-menu>-->
        </el-sub-menu>
        <el-menu-item index="3"><router-link to="/articles">归 档</router-link></el-menu-item>
        <el-menu-item index="4"><router-link to="/friendsLink">友 链</router-link></el-menu-item>
        <el-menu-item index="5"><router-link to="/friendsLink">关 于</router-link></el-menu-item>
        <div class="userInfo">
          <div v-show="!haslogin" class="nologin">
            <a href="javascript:void(0);" @click="loginFun(0)">登录&nbsp;</a> | <a href="javascript:void(0);" @click="loginFun(1)">&nbsp;注册</a>
          </div>
          <div v-show="haslogin" class="haslogin">
            <el-row>
            <i class="fa fa-fw fa-user-circle userImg">
              <div class="block">
                <el-avatar :size="45" :src="circleUrl" />&#12288;&#12288;
              </div>
            </i>

            <ul class="haslogin-info">
              <li>
                <a href="/userInfo">个人中心</a>
              </li>
              <li>
                <a href="javascript:void(0);" @click="userlogout">退出登录</a>
              </li>
            </ul>
            </el-row>
          </div>
        </div>
      </el-menu>

    </el-col>
    <el-col :span="4"></el-col>
  </el-row>
</div>
</template>

<script lang="ts">
import { categoryList } from "@/api/category";
import { logout } from "@/api/user";
import router from "@/router";
import $bus from "@/utils/mitt";
import {defineComponent, onMounted, reactive, ref, toRefs} from "vue";
import {onBeforeRouteUpdate, useRouter} from "vue-router";


export default defineComponent({
  name: "Header",

  setup() {
    const router=useRouter();
    const data=reactive({
      haslogin:false,
      userInfo:""

    })
    let categories=ref(null);
    // const handleSelect = (key: string, keyPath: string[]) => {
    //   console.log(key, keyPath)
    // }
    function getCategoryArticles(index:number){
      router.push('/articleList/'+index);
    }

    function loginFun(msg:number){
       if (msg==0){
         router.push('/login')
       }
       else{
         router.push('/register')
       }
    }
    function userlogout(){
      logout().then((res)=>{
        localStorage.removeItem('userInfo');
        localStorage.removeItem('token')
        data.haslogin = false;
        window.location.reload();
        // that.$message({
        //   type: 'success',
        //   message: '退出成功!'
        // });
        if (router.currentRoute.value.path == '/userInfo') {
          router.push({
            path: '/'
          });
        }
      }).catch(() => {
      //
    });
    }

    onMounted(()=>{
      if (localStorage.getItem('userInfo')) { //存储用户信息
        data.haslogin = true;
        data.userInfo = JSON.parse(localStorage.getItem('userInfo') as string);
        // console.log(that.userInfo);
      } else {
        data.haslogin = false;
      }

      categoryList().then((res)=> {
        console.log(res);
        categories.value=res.data;
      })

    })
    onBeforeRouteUpdate(()=>{

    })

return {categories,getCategoryArticles,...toRefs(data),loginFun, userlogout};
  },


})
</script>

<style lang="scss" scoped>
.header{
  height: 80px;
  .logo{
    height: 80px;
  }
  .blog-menu{
    height: 80px;
    .userInfo{
      color:black;
      .nologin {
        margin-left: 500px;
        margin-top: 25px;
        position: relative;
        min-width: 80px;
        color: #000000;
      }
      .haslogin {
        margin-left: 500px;
        margin-top: 25px;
        position: relative;
        min-width: 80px;
        cursor: pointer;
        .haslogin-info{

        }
      }
    }
  }
}




</style>
