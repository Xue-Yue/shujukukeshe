<template>
  <el-button @click="downloadExcel" type="success" plain style="float: right">导出表</el-button>
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
import {export_json_to_excel} from '../../excel/export2Excel'
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
      return '';
    },
    //列表下载
    downloadExcel() {
      this.$confirm('确定下载列表文件?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.excelData = this.tableData //你要导出的数据list。
        this.export2Excel()
      }).catch(() => {

      });
    },
    //数据写入excel
    export2Excel() {
      const that = this;
      require.ensure([], () => {
        // const { export_json_to_excel } = require('@/excel/export2Excel'); //这里必须使用绝对路径，使用@/+存放export2Excel的路径
        const tHeader = ['周几','节次','课程','教室','教师','班级']; // 导出的表头名信息
        const filterVal = ['weekday','sectionno', 'cname', 'classroom', 'tname', 'pname']; // 导出的表头字段名，需要导出表格字段名
        const list = that.excelData;
        const data = that.formatJson(filterVal, list);
        export_json_to_excel(tHeader, data, this.$store.state.person_info.identity+'课表');// 导出的表格名称，根据需要自己命名
      })
    },
    //格式转换，直接复制即可
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    },
  }
}
</script>