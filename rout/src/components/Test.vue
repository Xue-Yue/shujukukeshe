
<template>
  <el-select v-model="value" placeholder="请选择" @change="wuhu">
    <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>
  <el-select v-model="value2" placeholder="请选择" @change="aha">
    <el-option
        v-for="item in options2"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
export default {
  name:'Test',
  data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      options2: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      options3: [{
        value: '选项1',
        label: '11111'
      }, {
        value: '选项2',
        label: '22222'
      }, {
        value: '选项3',
        label: '33333'
      }, {
        value: '选项4',
        label: '44444'
      }, {
        value: '选项5',
        label: '55555'
      }],
      value: '',
      value2: ''
    }
  },
  methods:{
    wuhu(){
      if (this.value=='选项2'){
        this.options2=this.options3
      }
    }
  }
}
</script>

<style>

</style>
