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

<style scoped>

</style>
