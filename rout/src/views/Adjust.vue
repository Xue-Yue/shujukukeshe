<template>
  <div>
    <div className="lefft">
      <reli></reli>
    </div>
    <div className="righht">
      <emptyroom></emptyroom>
    </div>
  </div>

  <!--  <router-view></router-view>-->

</template>

<script>
import RequestLimit from "../components/rent/RequestLimit";
import EmptyRoom from "../components/rent/EmptyRoom";

export default {
  name: "Temperament",
  components: {
    'reli': RequestLimit,
    'emptyroom': EmptyRoom
  }
}
</script>

<style scoped>
.lefft {
  float: left;
  width: 30%;
  margin-top: 60px;
}

.righht {
  float: left;
  width: 70%;
}

</style>