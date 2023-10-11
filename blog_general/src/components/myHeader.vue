<template>
<div class="header">
  <el-row :gutter="20">
    <el-col :span="4"><img src="../assets/logo.png" class="logo"/></el-col>
    <el-col :span="16">
      <el-menu
          :default-active="activeIndex"
          class="blog-menu"
          mode="horizontal"
          @select="handleSelect"
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
        <el-menu-item index="3"><router-link to="/friendsLink">友 链</router-link></el-menu-item>
        <el-menu-item index="4"><router-link to="/friendsLink">关 于</router-link></el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="4">test2</el-col>
  </el-row>
</div>
</template>

<script lang="ts">
import { categoryList } from "@/api/category";
import router from "@/router";
import $bus from "@/utils/mitt";
import {defineComponent, onMounted, ref} from "vue";
import {useRouter} from "vue-router";


export default defineComponent({
  name: "Header",

  setup() {
    const router=useRouter();
    let categories=ref(null);
    // const handleSelect = (key: string, keyPath: string[]) => {
    //   console.log(key, keyPath)
    // }
    function getCategoryArticles(index:number){
      router.push('/articleList/'+index);


    }

    onMounted(()=>{
      categoryList().then((res)=> {
        console.log(res);
        categories.value=res.data;
      })

    })

return {categories,getCategoryArticles};
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
  }
}

</style>
