<template>
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
<!--    <el-table-column-->
<!--        prop="type"-->
<!--        label="教室类型"-->
<!--        sortable-->
<!--        width="200">-->
<!--    </el-table-column>-->
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

  }
}
</script>