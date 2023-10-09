<template>
  <el-space wrap>
    <el-card v-for="item in links" class="box-card" style="width: 250px">
      <template #header>
        <div class="card-header">
          <span>{{item.name}}</span>
          <el-button class="button" text>Operation button</el-button>
        </div>
      </template>
      <span>{{item.description}}</span>
      <div class="link-logo">
        {{item.logo}}
      </div>
      <div class="address">
        {{item.address}}
      </div>
    </el-card>
  </el-space>
</template>

<script>
import {defineComponent, onMounted, reactive,toRefs} from "vue";
import {allLink} from "@/api/link";

export default defineComponent({
  name: "friendslinkList",
  setup(){
    const data=reactive({
      links:[],
    })
    onMounted(()=>{
      allLink().then((res)=>{
        // console.log(res.data);
        data.links=res.data
      })
    })
    return{...toRefs(data)}
  }
})
</script>

<style scoped>

</style>
