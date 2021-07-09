<template>
  <el-table
      :data="tableData"
      style="width: 100%"
      height="800"
      :row-class-name="success"
      :default-sort = "{prop: 'weekday', order: ' ascending'}">
    <el-table-column
        prop="sectionno"
        label="节次"
        sortable
        width="200">
    </el-table-column>
    <el-table-column
        prop="cname"
        label="课程"
        sortable
        width="400">
    </el-table-column>
    <el-table-column
        prop="classroom"
        label="教室"
        sortable
        width="300">
    </el-table-column>
    <el-table-column
        prop="pname"
        label="班级"
        width="300"
        sortable>
    </el-table-column>
    <el-table-column
        prop="weekday"
        label="操作"
        sortable
        >
      <el-button type="success" plain
                 @click="handleEdit(scope.$index, scope.row)"
      >调整</el-button>
    </el-table-column>
  </el-table>
</template>

<script>
import {post} from '../../network/request'
export default {
  name: "Second",
  props:['list'],
  data(){
    return{
      tem:[]
    }
  },
  computed: {
    tableData(){
      console.log('tabledata内容')
      const a=this.tbdata
      return this.tem
    },
    tbdata(){
      console.log(this.list);
      let params={
        weekno:this.list.weekno,
        weekday:this.list.weekday,
        id:this.$store.state.person_info.id,
      }
      post('adjust/class',params)
          .then(res => {
            this.tem=res.data.data
            console.log('11111111111111111');
            console.log(this.tem);
          })
    }
  },
  mounted() {

  },
  //监听执行
  watch: {

  },
  methods: {
    formatter(row, column) {
      return row.address;
    },
    handleEdit(index,row){
      console.log(row)

      
      this.$emit('secondfunc','')
    }
  }
}

</script>

<style scoped>

</style>