<template>
  <el-button @click="downloadExcel" type="success" plain style="float: right">导出表</el-button>
  <el-table
      :data="tableData"
      style="width: 100%"
      height="800"
      :default-sort = "{prop: 'roomno', order: ' ascending'}">
    <el-table-column
        prop="campusname"
        label="校区"
        sortable
        width="200">
    </el-table-column>
    <el-table-column
        prop="buildname"
        label="教学楼"
        sortable
        width="200">
    </el-table-column>
    <el-table-column
        prop="roomno"
        label="教室"
        sortable
        width="200">
    </el-table-column>
    <el-table-column
        prop="capacity"
        label="容量"
        sortable
       >
    </el-table-column>
  </el-table>
</template>

<script>
import {post} from '../network/request'
import {export_json_to_excel} from "../excel/export2Excel";
export default {
  name:'EmptyRoom',
  computed: {
    empty_query() {
      return this.$store.state.empty_query;
    },
    tableData(){
      return this.list
    }
  },
  //监听执行
  watch: {
    empty_query(val) {
      post('empty',val)
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
        const tHeader = ['校区','教学楼','教室','容量']; // 导出的表头名信息
        const filterVal = ['campusname','buildname', 'roomno', 'capacity']; // 导出的表头字段名，需要导出表格字段名
        const list = that.excelData;
        const data = that.formatJson(filterVal, list);
        export_json_to_excel(tHeader, data, '空教室查询');// 导出的表格名称，根据需要自己命名
      })
    },
    //格式转换，直接复制即可
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    },
  }
}
</script>