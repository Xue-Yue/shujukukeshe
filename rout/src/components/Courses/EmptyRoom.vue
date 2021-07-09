<template>
  <el-table
      :data="tableData"
      style="width: 100%"
      height="800"
      :row-class-name="success"
      :default-sort = "{prop: 'weekday', order: ' ascending'}">
    <el-table-column
        prop="weekday"
        label="周几"
        sortable
        width="200">
    </el-table-column>
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
        width="200">
    </el-table-column>
    <el-table-column
        prop="tname"
        label="教师"
        sortable
        width="200"
       >
    </el-table-column>
    <el-table-column
        prop="pname"
        label="班级"
        sortable>
    </el-table-column>
  </el-table>
</template>

<script>
import {post} from '../../network/request'
export default {
  name:'EmptyRoom',
  props:['weekno'],
  computed: {
    tableData(){
      return this.list
    }
  },
  //监听执行
  watch: {
    weekno(){
      const params={
        id:this.$store.state.person_info.id,
        weekno:this.weekno
      }
      let url=''
      if (this.$store.state.person_info.identity=='学生')
        url='course/student'
      else if (this.$store.state.person_info.identity=='教师')
        url='course/teacher'
      post(url,params)
          .then(res => {
            this.list=res.data.data
          })
    }
  },
  data() {
    return {
      list:[]
    }
  },
  methods: {
    formatter(row, column) {
      return row.address;
    },
    tableRowClassName({row, rowIndex}) {
      console.log(row);
      if (row.weekday/2==1)
        return 'success-row';
      // if (rowIndex === 1) {
      //   return 'warning-row';
      // } else if (rowIndex === 3) {
      //   return 'success-row';
      // }
      return '';
    }
  }
}
</script>