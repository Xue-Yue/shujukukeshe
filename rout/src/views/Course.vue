<template>
  <el-container>
    <el-aside width="200px">
      <h1>请选择教学周</h1>
      <el-select v-model="value" placeholder="请选择" @change="weekchange()">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
    </el-aside>
    <el-main>
      <EmptyRoom :weekno="week"></EmptyRoom>
    </el-main>
  </el-container>

</template>

<script>
import EmptyRoom from "../components/Courses/EmptyRoom";
export default {
  data() {
    return {
      options: [{
        value: '1',
        label: '1'
      }, {
        value: '2',
        label: '2'
      }, {
        value: '3',
        label: '3'
      }, {
        value: '4',
        label: '4'
      }, {
        value: '5',
        label: '5'
      }, {
        value: '6',
        label: '6'
      }, {
        value: '7',
        label: '7'
      }, {
        value: '8',
        label: '8'
      }, {
        value: '9',
        label: '9'
      }, {
        value: '10',
        label: '10'
      }, {
        value: '11',
        label: '11'
      }, {
        value: '12',
        label: '12'
      }, {
        value: '13',
        label: '13'
      }, {
        value: '14',
        label: '14'
      }, {
        value: '15',
        label: '15'
      }, {
        value: '16',
        label: '16'
      }],
      value: '',
      week:''
    }

  },
  components:{
    EmptyRoom
  },
  methods:{
    weekchange(){
      this.week=this.value
    }
  }

}
</script>

<style>

</style>
