<template>
  <div>
    <Header></Header>
    </div>
  <div class="timelinelist">
    <el-timeline >
      <el-timeline-item v-for="article in articles"
                        placement="top"
                        :timestamp=article.createtime>
        <el-card>
          <h4 @click="getDetail(article.id)"> {{article.title}}</h4>
          <h5><p>{{ article.discription }}</p></h5>
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
        pageSize:1000,
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

<style scoped>

</style>
