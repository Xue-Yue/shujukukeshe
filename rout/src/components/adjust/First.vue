<template>
  <el-row :gutter="20">
    <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple">
      <el-select v-model="value" placeholder="请选择">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </div></el-col>
    <el-col :span="3"><div class="grid-content bg-purple">
      <el-select v-model="value2" placeholder="请选择">
        <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </div></el-col>
    <el-col :span="4"><div class="grid-content bg-purple">
      <el-button type="success" @click="func1">下一步</el-button>
    </div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  </el-row>



</template>

<script>
export default {
  name: "First",
  data(){
    return{
      options: [
          {
        value: '1',
        label: '第1周'
      }, {
        value: '2',
        label: '第2周'
      }, {
        value: '3',
        label: '第3周'
      }, {
        value: '4',
        label: '第4周'
      }, {
        value: '5',
        label: '第5周'
      }, {
        value: '6',
        label: '第6周'
      }, {
        value: '7',
        label: '第7周'
      }, {
        value: '8',
        label: '第8周'
      }, {
        value: '9',
        label: '第9周'
      }, {
        value: '10',
        label: '第10周'
      }, {
        value: '11',
        label: '第11周'
      }, {
        value: '12',
        label: '第12周'
      }, {
        value: '13',
        label: '第13周'
      }, {
          value: '14',
          label: '第14周'
        }, {
        value: '15',
        label: '第15周'
      }, {
        value: '16',
        label: '第16周'
      }
      ],
      options2:[
        {
          value:'1',
          label:'周一'
        },
        {
          value:'2',
          label:'周二'
        },
        {
          value:'3',
          label:'周三'
        },
        {
          value:'4',
          label:'周四'
        },
        {
          value:'5',
          label:'周五'
        },
        {
          value:'6',
          label:'周六'
        },
        {
          value:'7',
          label:'周日'
        }
      ],
      value: '',
      value2:''
    }

  },
  methods:{
    func1(){
      let data1={
        weekno:'',
        weekday:''
      }

      data1.weekno=this.value
      data1.weekday=this.value2
      this.$emit('firstfunc',data1)
    }
  },
  computed:{

  },
  watch:{

  }
}
</script>

<style scoped>

</style>