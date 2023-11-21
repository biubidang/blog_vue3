<template>
  <div class="Nav">
    <Header></Header>
    </div>
  <div class="bg-image">
    <img src="http://qny.uioku.top/background/background.png" style="width: 100%" alt="图片由于未知原因无法显示！">
  </div>
  <div class="timeLineList">
    <el-timeline >
      <el-timeline-item  v-for="article in articles"
                        placement="top"
                        size="large"
                        :timestamp=article.createtime>
        <el-card>
          <h4 class="articleTitle" style="cursor:pointer;" @click="getDetail(article.id)">{{article.title}}</h4>
          <h5 class="articleDescription"><p>简介：{{ article.discription }}</p></h5>
        </el-card>
      </el-timeline-item>

    </el-timeline>
  </div>
</template>

<script lang ="ts">
import {defineComponent, onMounted, reactive, toRefs} from "vue";
import {ArticleListData} from "@/types";
import Header from "@/components/myHeader.vue";
import {useRouter} from "vue-router";
import {articleList} from "@/api/article";

export default defineComponent({
  name: "Articles",
  components:{Header},
  setup(){
    const data=reactive({
      articles:[],
      param:{
        pageNum:1,
        pageSize:500,
        categoryId:0
      } as ArticleListData,
    })

    const router=useRouter()
    function getDetail(index:number){
      router.push("/articleDetail/"+index)
    }
    onMounted(()=>{
      articleList(data.param).then((res)=>{
        console.log(res.data)
        data.articles=res.data.rows
      })
    })

    return{...toRefs(data),getDetail}
  }
})


</script>

<style lang="scss" scoped>
.bg-image{
  width:100%;
  height:100%;  /**宽高100%是为了图片铺满屏幕 */
  z-index:-1;
  position: fixed;
  left: 0;
  top: 80px;
}
.timeLineList{
  width: 40%;
  position: absolute;

  left: 30%;
  top: 10%;
  opacity: 0.5;
  .articleTitle{
    font-size: 18px;
    color: dodgerblue;
    margin-bottom: 16px;
  }
  .articleDescription{
    font-size: 12px;
    color: dodgerblue;
  }
}

</style>
