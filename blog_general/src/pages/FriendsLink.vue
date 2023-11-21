<template>
<Header></Header>
  <div class="FriendsImage">
    <img src="http://qny.uioku.top/background/AprilLie.png" style="width: 100%" alt="背景图片显示错误">
  </div>
  <div class="Links">
    <friendslink-list></friendslink-list>
  </div>
</template>

<script>
import Header from "@/components/myHeader";
import FriendslinkList from "@/components/friendslinkList";
export default {
  name: "FriendsLink",
  components: {FriendslinkList, Header}
}
</script>

<style lang="scss" scoped>
.Links{
  position: absolute;
  top: 80px;
}
.FriendsImage{
  width:100%;
  height:100%;
  z-index:-1;
  position: fixed;
  left: 0;
  top: 0;
}


</style>
