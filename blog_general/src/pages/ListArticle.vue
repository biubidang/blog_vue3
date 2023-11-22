<template>
  <div>
    <Header></Header>
    <div class="ListImage">
      <img src="http://qny.uioku.top/background/background_2.png" style="width: 100%" alt="背景图片显示错误">
    </div>
    <div class="list-article">
      <article-list></article-list>
    </div>

  </div>
</template>

<script lang ="ts">
import Header from "../components/myHeader.vue";
import articleList from "../components/articleList.vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: "ListArticle",
  components: {Header,articleList}

})
</script>

<style lang="scss" scoped>
.list-article{
  position: absolute;
  top:25%;
  left:38%;
  width:500px;
}
.ListImage{
  width:100%;
  height:100%;
  z-index:-1;
  position: fixed;
  left: 0;
  top: 0;
}

</style>
