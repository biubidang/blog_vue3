<template>

  <div class="article-collapse">
    <el-collapse accordion>
        <el-collapse-item v-for="item in articles">
        <template #title >
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
        <div class="description" @click="getDetailfromCategory(item.id)">
          {{item.discription}}
        </div>
      </el-collapse-item>
    </el-collapse>
    <div class="example-pagination-block">
      <div class="example-demonstration">When you have few pages</div>
      <el-pagination v-model:current-page="param.pageNum"
                     :page-size="param.pageSize"
          layout="prev, pager, next, jumper" :total="total" @current-change="handleCurrentChange"/>
    </div>
  </div>

</template>

<script lang="ts">
import {defineComponent, onUnmounted, reactive, ref, toRefs, watch} from "vue";
import {ArticleListData} from "@/types";
import { articleList } from "@/api/article";
import $bus from "@/utils/mitt";
import {onBeforeRouteUpdate, useRouter} from "vue-router";

export default defineComponent({
  name: "article-list",
  setup(){
    const data=reactive({
      param:{
        pageNum:1,
        pageSize:10,
        categoryId:0
      } as ArticleListData,
      articles:[],
      total:0
    });

    const router=useRouter();
    data.param.categoryId=router.currentRoute.value.params.id as unknown as number
    // data.param.categoryId=router.currentRoute.value.params.id as unknown as number;
    const handleCurrentChange=(val:number)=>{
      // console.log(val)
      data.param.pageNum=val;
      data.param.categoryId=router.currentRoute.value.params.id as unknown as number
      getArticleList()
        // console.log(data.articles);
      }
    function getDetailfromCategory(index:number){
      router.push("/articleDetail/"+index)
    }


    //处理Header中的点击具体分类跳转对应类的文章列表事件
    getArticleList()
      // console.log(data.param);
    function getArticleList(){
      console.log(data.param)
      articleList(data.param).then((res)=>{
        // console.log(res.data);
        data.articles=res.data.rows;
        data.total=res.data.total;
        // console.log(data.articles);
      })
    }
    onBeforeRouteUpdate((to,from,next) => {
      // console.log('onBeforeRouteUpdate',to.path);
      if(to.fullPath!=from.fullPath){
        data.param.categoryId=to.params.id as unknown as number
        next()
        getArticleList()
      }

    });


    return {...toRefs(data),handleCurrentChange,getDetailfromCategory}
  },


})
</script>

<style scoped>
.example-pagination-block + .example-pagination-block {
  margin-top: 10px;
}
</style>
