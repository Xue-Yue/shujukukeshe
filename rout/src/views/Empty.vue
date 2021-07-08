<template>
  <div class="lefft">
    <reli ></reli>
  </div>
  <div class="righht">
    <emptyroom ></emptyroom>
  </div>
<!--  <router-view></router-view>-->

</template>

<script>
import RequestLimit from "../components/RequestLimit";
import EmptyRoom from "../components/EmptyRoom";
export default {
  name: "Empty",
  components:{
    'reli':RequestLimit,
    'emptyroom':EmptyRoom
  }
}
</script>

<style scoped>
.lefft{
  float: left;
  width: 30%;
  margin-top: 60px;
}

.righht{
  float: left;
  width: 70%;
}

</style>