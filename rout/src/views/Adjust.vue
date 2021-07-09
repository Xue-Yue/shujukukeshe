<template>
  <el-steps :active="active" simple>
    <el-step title="步骤 1" icon="el-icon-edit"></el-step>
    <el-step title="步骤 2" icon="el-icon-upload"></el-step>
    <el-step title="步骤 3" icon="el-icon-picture"></el-step>
  </el-steps>
  <div style="margin-top: 50px">
    <First v-if="active==1"></First>
    <Second v-else-if="active==2"></Second>
    <Thrid v-else-if="active==3"></Thrid>
  </div>
  <div>
    <el-button type="success" @click="active++">下一步</el-button>
  </div>
</template>

<script>
import First from "../components/adjust/First";
import Second from "../components/adjust/Second";
import Thrid from "../components/adjust/Thrid";
export default {
  name: "Temperament",
  data(){
    return{
      active:1
    }
  },
  components: {
    First,
    Second,
    Thrid
  }
}
</script>

<style scoped>

</style>