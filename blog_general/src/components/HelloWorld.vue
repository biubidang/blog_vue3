<template>
  <div class ="home">
    <Header></Header>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from "./myHeader.vue"

export default {
  name:"HelloWorld",
  components: {Header}
  ,

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
