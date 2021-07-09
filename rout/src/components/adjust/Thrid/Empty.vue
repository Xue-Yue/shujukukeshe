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
    <el-table-column
        prop="capacity"
        label="容量"
        sortable
        width="200">
    </el-table-column>
    <el-table-column label="确认调整">
      <template #default="scope">
        <!--        , dialog = true-->
        <el-button type="success" plain
                   @click="handleEdit(scope.$index, scope.row)"
        >确认</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import {post} from '../../../network/request'
export default {
  name:'Empty',
  computed: {
    adjust_query() {
      return this.$store.state.adjust_query;
    },
    tableData(){
      return this.list
    }
  },
  //监听执行
  watch: {
    adjust_query(val) {
      post('adjust/empty',val)
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
    handleEdit(index,row){
      this.$store.state.adjust_record.newroomno=row.roomno
      console.log(this.$store.state.adjust_record);
      post('adjust/record',this.$store.state.adjust_record).then(res => {
        console.log(res)
        console.log('qqweqweqw');
      })
    }
  }
}
</script>