<template>
  <el-menu router :default-active="'/home'" class="el-menu-demo" mode="horizontal" active-text-color="green">
    <el-menu-item class="menu-item">
      <img src="../assets/zzu.png" height="55" width="55">
    </el-menu-item>
    <el-menu-item index="/home" class="menu-item">首页</el-menu-item>
    <el-menu-item index="/adjust" class="menu-item">调课</el-menu-item>
    <el-menu-item index="/temper" class="menu-item" >教室申请</el-menu-item>
    <el-menu-item index="/empty" class="menu-item">空教室查询</el-menu-item>
    <el-menu-item index="/course" class="menu-item">课表</el-menu-item>

    <el-menu-item index="/Login" class="menu-item right-menu-item" v-if="this.$store.state.person_info.name==''"
                  style="float: right" @click="show = !show">
      <el-button type="success">Login</el-button>
    </el-menu-item>

    <el-menu-item class="menu-item right-menu-item" v-if="this.$store.state.person_info.name!=''"
                  style="float: right" >
      <el-button type="success">{{this.$store.state.person_info.name}}</el-button>
    </el-menu-item>

  </el-menu>
</template>

<script>

export default {
  name: 'NavMenu',
  data() {
    return {
      show: true
    }
  }
}
</script>

<style>

.right-menu-item {
  display: inline-block;
  float: right;
}
</style>
