<template xmlns="http://www.w3.org/1999/html">
  <div class="HeaderStyle">
<Header></Header>
  </div>
  <div class="VideoPlay">
    <video class="videoStyle" id="video" playsinline="true" autoplay="true" muted="true" loop="true">
      <source src="http://qny.uioku.top/2023/11/1/rainingday.mp4" type="video/mp4" >
    </video>
  </div>
  <div class="hotList">
    <hotArticleList></hotArticleList>
  </div>
  <span class="blogTitle_1"><strong style="font: italic 2em Georgia, serif;">b<br>i<br>u<br>b<br>i<br>d<br>a<br>n<br>g<br>'s</strong></span>
  <span class="blogTitle_2"><strong style="font: italic 2em Georgia, serif;">b<br>l<br>o<br>g</strong></span>
  <div class="block" m="t-5">
    <span class="tips">&#12288; tips:又卷又卷还卷！滚去看番休息</span>
    <span class="demonstration"></span>
    <el-carousel trigger="click" height="450px" >
      <el-carousel-item class="imgInDisplay" v-for="item in imgData" :key="item">
        <img :src="item.url" alt="no image" class="rightulliimg" style="cursor: pointer" @click="goPage('http://www.zzzfun.one/')"/>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="hangingInfo">
  <span><a class="hangingInfoFont" href="https://beian.miit.gov.cn/" target="_blank">备案号：</a></span>
  <span><a class="hangingInfoFont" href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备2023024490号-1</a></span>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import Header from "../components/myHeader.vue";
import HotArticleList from "@/components/hotArticleList.vue";

export default defineComponent({
  name: "Home",
  components: {HotArticleList, Header},
  setup() {
    const imgData = [
      {url: "http://qny.uioku.top/animationRecommend/001.png"},
      {url: "http://qny.uioku.top/animationRecommend/002.png"},
      {url: "http://qny.uioku.top/animationRecommend/003.png"},
      {url: "http://qny.uioku.top/animationRecommend/004.png"},
      {url: "http://qny.uioku.top/animationRecommend/005.png"},
    ]

    function goPage(url:string){
        window.open(url,'_blank')
    }
    onMounted(() => {
    })
    return{imgData,goPage}
  }

})
</script>

<style lang="scss" scoped>
.HeaderStyle{
  color: #333333;
}
.block{
  width: 300px;
  position: absolute;
  left: 0;
  top: 49%;
}
.imgInDisplay{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .rightulliimg {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    opacity: 0.9;
  }
}
.hotArticleList{
  background:darkred;
}
.videoStyle{
  object-fit: cover;
  height: calc(100vh - 80px);
  background-size:100% 100%;
  width: 100%;
  position: fixed;
  //filter: blur(3px);
  top: 80px;
  left: 0;
  z-index: -1;
}

.demonstration {
  color: var(--el-text-color-secondary);

}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}
.tips{
  color: snow;
  font-family: 幼圆,serif;
  font-size: 16px;
}
.blogTitle_1{
  position: absolute;
  left:88%;
  top:15%;
  font-size: 22px;
  color: peru;
}
.blogTitle_2{
  position: absolute;
  left: 80%;
  top:60%;
  font-size: 32px;
  color: peru;
}
.hangingInfo{
  position: absolute;
  top:100%;
  left: 45%;
  .hangingInfoFont{
    color: #8c939d;
    font-size: 10px;

  }
}

</style>
