<template>
  <el-card class="box-card">
    <template #header>
      <div  v-for="item in articles" class="card-header">
        <span>{{ item.title }}</span>
        <div class="viewCounts">有{{ item.viewcounts }}人看过啦</div>
      </div>
    </template>
  </el-card>
</template>

<script lang="ts">
import { hotArticleList } from "@/api/article";
import {defineComponent, onMounted, reactive, toRefs} from "vue";

export default defineComponent({
  name: "hotArticleList",
  setup(){
    const data=reactive({
      articles:[]
    })
    onMounted(()=>{
      hotArticleList().then((res)=>{
        // console.log(res.data);
        data.articles=res.data
        //console.log(data.articles)
      })
    })
    return{...toRefs(data),}
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
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>
