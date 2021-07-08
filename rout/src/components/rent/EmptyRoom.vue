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
        width="200"
    >
    </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
<!--        , dialog = true-->
        <el-button type="success" plain
                   @click="handleEdit(scope.$index, scope.row)"
        >申请教室</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-drawer
      title="郑州大学教室申请表"
      :before-close="handleClose"
      v-model="dialog"
      direction="rtl"
      custom-class="demo-drawer"
      ref="drawer"
  >
    <div class="demo-drawer__content">
      <el-form :model="form"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="申请校区" prop="name">
          <el-tag type="success" >{{form.campus}}</el-tag>
        </el-form-item>
        <el-form-item label="申请教室" prop="region">
          <el-tag type="success" >{{form.classroom}}</el-tag>
        </el-form-item>
        <el-form-item label="申请时间" >
          <el-tag type="success" >{{form.date}}</el-tag>

        </el-form-item>
        <el-form-item label="申请单位" prop="delivery">
          <el-tag type="success" >{{form.depart}}</el-tag>

        </el-form-item>
        <el-form-item label="申请人" prop="type">
          <el-tag type="success" >{{form.requman}}</el-tag>

        </el-form-item>

        <el-form-item label="证件类型" prop="desc">
          <el-tag type="success" >{{form.card}}</el-tag>

        </el-form-item>
        <el-form-item label="证件号" prop="desc">
          <el-tag type="success" >{{form.cardid}}</el-tag>

        </el-form-item>
        <el-form-item label="联系电话" prop="desc">
          <el-tag type="success" >{{form.tel}}</el-tag>

        </el-form-item>
        <el-form-item label="申请原因" prop="申请原因" >
          <el-input
              type="text"
              placeholder="请输入内容"
              v-model="text"
              maxlength="10"
              show-word-limit
          >
          </el-input>
        </el-form-item>
      </el-form>
      <div class="demo-drawer__footer">
        <el-button type="success" @click="$refs.drawer.closeDrawer();submit()" :loading="loading">{{ loading ? '提交中 ...' : '确 定' }}</el-button>
        <el-button @click="cancelForm">取 消</el-button>
      </div>
    </div>
  </el-drawer>
</template>

<script>
import {post} from '../../network/request';
import {ref} from "vue";
import {toRaw} from "@vue/reactivity";

export default {
  name:'EmptyRoom',
  computed: {
    empty_query() {
      return this.$store.state.empty_query;
    },
    tableData(){
      return this.list
    },
    first(){
      return this.row
    }
  },
  //监听执行
  watch: {
    empty_query(val) {
      post('empty',val)
          .then(res => {
            this.list=res.data.data
          })
    },
    first(val){       //拼接教室申请表的内容
      val=toRaw(val)
      console.log(222222222222222222);
      console.log(this.$store.state.empty_query)
      this.form.campus=val.campusname
      this.form.classroom=val.roomno
      this.form.date= '第' + toRaw(this.$store.state.empty_query.week) + '周'
          + '  周' + toRaw(this.$store.state.empty_query.weekday)
          + '  第' + toRaw(this.$store.state.empty_query.csection) + '节'
      this.form.depart=this.$store.state.person_info.dept
      this.form.requman=this.$store.state.person_info.name
      this.form.cardid=this.$store.state.person_info.id
      this.form.tel=this.$store.state.person_info.tel
    }
  },
  data() {
    return {
      text: ref(''),
      row:{},
      list:[],
      table: false,
      dialog: false,
      loading: false,
      form: {
        campus: '',
        classroom: '',
        date: '',
        depart: '',
        requman: '',
        reason: '',
        card: '校园卡',
        cardid: '',
        tel:''
      },
      formLabelWidth: '80px',
      timer: null,
    }

  },
  methods: {
    formatter(row, column) {
      return row.address;
    },
    submit(){
      post('rent',this.form).then(res => {
        console.log(res);
      })
    },
    handleEdit(index, row) {
      if (this.$store.state.person_info.identity=='社团')
        this.dialog=true
      this.row=row
    },
    handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm('确定要提交表单吗？')
          .then(_ => {
            this.loading = true;
            this.timer = setTimeout(() => {
              done();
              // 动画关闭需要一定的时间
              setTimeout(() => {
                this.loading = false;
              }, 400);
            }, 2000);
          })
          .catch(_ => {});
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    }

  }
}
</script>