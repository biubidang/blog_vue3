<template>

  <div class="article-collapse">
    <el-collapse accordion>
        <el-collapse-item v-for="item in articles">
        <template #title>
          {{item.title}}<el-icon class="header-icon">
          <info-filled />
        </el-icon>
          <div class="time">
            创建时间:&#12288;{{item.createtime}}&#12288;&#12288;
          </div>
          <div class="viewcount">
            &#12288;有{{item.viewcounts}}人看过啦
          </div>
          <div class="category">
            &#12288;{{item.category}}
          </div>
        </template>
        <div class="description">
          {{item.discription}}
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>

</template>

<script lang="ts">
import {defineComponent, reactive, ref, toRefs} from "vue";
import {ArticleListData} from "@/types";
import { articleList } from "@/api/article";

export default defineComponent({
  name: "article-list",
  setup(){
    const data=reactive({
      param:{
        pageNum:1,
        pageSize:10,
        categoryId:0
      } as ArticleListData,
      articles:[]
    });

    articleList(data.param).then((res)=>{
      // console.log(res.data);
      data.articles=res.data.rows;
      // console.log(data.articles);

    })
    return {...toRefs(data)};
  },

})
</script>

<style scoped>

</style>
