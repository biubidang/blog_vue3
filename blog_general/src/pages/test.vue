<template>
<Header></Header>
  <div class="hotArticleList">
    <hot-article-list></hot-article-list>
  </div>
</template>

<script>
import Header from "@/components/myHeader";
import HotArticleList from "@/components/hotArticleList";
export default {
  name: "test",
  components: {HotArticleList, Header},

}
</script>

<style scoped>

</style>
