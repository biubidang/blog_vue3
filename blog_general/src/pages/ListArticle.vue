<template>
  <div>
    <Header></Header>
    <div>
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

<style scoped>

</style>
