<template>
  <el-space wrap>
    <el-card v-for="item in links" class="box-card" style="width: 300px;height: 200px">
      <template #header>
        <div class="card-header">
          <img :src="item.logo" class="link-logo" alt="">
          <span class="link-name">{{item.name}}</span>
          </div>
      </template>
      <span class="link-description">{{item.description}}</span>
      <div class="link-address" style="cursor: pointer" @click="goPage(item.address)">
        {{item.address}}
      </div>
    </el-card>
  </el-space>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive,toRefs} from "vue";
import {allLink} from "@/api/link";

export default defineComponent({
  name: "friendslinkList",
  setup(){
    const data=reactive({
      links:[],
    })
    function goPage(url:string){
      window.open(url,'_blank')
    }
    onMounted(()=>{
      allLink().then((res)=>{
        // console.log(res.data);
        data.links=res.data
      })
    })
    return{...toRefs(data),goPage}
  }
})
</script>

<style scoped>
.link-logo{
  width:25px;
  height: 25px;
}
.link-name{
  position: relative;
  left:60%
}
.box-card {
  border: 1px solid transparent;
  border-radius: 15px;
  background-color: rgba(255,255,255,0.1);
  box-shadow: 5px 5px 0 0 rgba(0,0,0,0.2);
}
.link-name{
  color: snow;
}
.link-address{
  color: snow;
}
.link-description{
  color: snow;
}
</style>
