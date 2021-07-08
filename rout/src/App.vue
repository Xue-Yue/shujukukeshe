<template>
  <div class="app">
    <el-container>
      <el-header><navmenu></navmenu></el-header>
      <el-main class="appMain">
        <router-view></router-view>
        <router-view name="RequestLimit"></router-view>
      </el-main>
    </el-container>
  </div>

</template>

<script>
import NavMenu from "./views/NavMenu";
export default {
  name: "App",
  components:{
    'navmenu': NavMenu
  }
}
</script>

<style lang="scss">
.app {
  /*background-color: aliceblue;*/

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.appMain {
  /*background-color: aliceblue;*/
}

.manage-header {
  background-color: #B3C0D1;
  color: #333;
}

.el-aside {
  color: #333;
}


#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
