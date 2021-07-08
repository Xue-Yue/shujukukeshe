<!-- index.vue -->
<template>
  <div>
    <div v-for="(chardata,index) in msg" :key="index" class="test">
      <piechart :chartData="chardata" />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import piechart from "./chart/piechart";
export default {
  name:'PieTu',
  data() {
    return {
      msg:{
        chartData1: [
          {value: 0.92, name: '北2'},
          {value: 0.87, name: '北3'},
          {value: 0.83, name: '南3'},
          {value: 0.79, name: '水环'},
          {value: 0.73, name: '物理学院'},
          {value: 0.66, name: '北4'},
          {value: 0.58, name: '南1'},
          {value: 0.56, name: '南2'}
        ]
      }
    };
  },
  methods: {
  },
  mounted() {},
  components: {
    piechart
  }
};
</script>

<style>
.test{
  float: left;
}
</style>