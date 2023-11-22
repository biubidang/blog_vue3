<template>
  <Header></Header>
  <div class="articleDetail">
    <article-detail></article-detail>
  </div>
</template>

<script>
import Header from "@/components/myHeader";
import ArticleDetail from "@/components/articleDetail";
export default {
  name: "DetailArticle",
  components: {ArticleDetail, Header}
}
</script>

<style lang="scss" scoped>
.article-detail{
  position: absolute;
  top:80px;
}
</style>
