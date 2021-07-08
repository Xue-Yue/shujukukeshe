<template>
  <el-row :gutter="20">
    <el-col :span="12"><div class="grid-content bg-purple"><BoLangChart autoresize></BoLangChart></div></el-col>
    <el-col :span="10"><div class="grid-content bg-purple"><charone autoresize></charone></div></el-col>


  </el-row>
  <el-row :gutter="20">
    <el-col :span="12"><div class="grid-content bg-purple"></div><ZhuTuChart autosize></ZhuTuChart></el-col>
    <el-col :span="12"><div class="grid-content bg-purple"><PieTu autosize></PieTu></div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  </el-row>

</template>

<script>
import Charone from "../components/chart/Charone";
import Charttest from "../components/Charttest";
import PieTu from "../components/PieTu";
import BoLangChart from "../components/chart/BoLangChart";
import ZhuTuChart from "../components/chart/ZhuTuChart";
export default {
  name: "Home",
  components:{
    'charone':Charone,
    'charttest':Charttest,
    PieTu,
    BoLangChart,
    ZhuTuChart
  }
}
</script>

<style scoped>

</style>
