<template>
  <el-card class="box-card" title="热门文章">
    <template #header class="card-header">
      <span><h2>热门文章</h2></span>
      <div  v-for="item in articles" class="text item">
        <span @click="getDetail(item.id)">{{ item.title }}</span>
        <div class="viewCounts">有{{ item.viewcounts }}人看过啦</div>
      </div>
    </template>
  </el-card>
</template>

<script lang="ts">
import { hotArticleList } from "@/api/article";
import {defineComponent, onMounted, reactive, toRefs} from "vue";
import {useRouter} from "vue-router";

export default defineComponent({
  name: "hotArticleList",
  setup(){
    const data=reactive({
      articles:[]
    })
    const router=useRouter();
    function getDetail(index:number) {
      router.push("/articleDetail/"+index)
    }
    onMounted(()=>{
      hotArticleList().then((res)=>{
        // console.log(res.data);
        data.articles=res.data
        //console.log(data.articles)
      })
    })
    return{...toRefs(data),getDetail}
  }
})



</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 16px;
}

.box-card {
  width: 300px;
  opacity: 0.5;
  position: absolute;
  top:80px
}
</style>
