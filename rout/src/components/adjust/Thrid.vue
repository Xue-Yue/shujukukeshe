<template>
  <el-container>
    <el-aside width="400px"><Request></Request></el-aside>
    <el-main><Empty></Empty></el-main>
  </el-container>
</template>

<script>
import Request from "./Thrid/Request";
import Empty from "./Thrid/Empty";
export default {
  name: "Thrid",
  components:{
    Request,
    Empty
  }
}
</script>

<style scoped>

</style>