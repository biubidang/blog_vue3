<template>
<Header></Header>
  <div>
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

<style scoped>

</style>
