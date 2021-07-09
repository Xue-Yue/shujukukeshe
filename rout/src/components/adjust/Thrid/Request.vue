<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="教学周" prop="week">
        <el-select v-model="ruleForm.week" placeholder="请选择周次">
          <el-option label="1" value="1"></el-option>
          <el-option label="2" value="2"></el-option>
          <el-option label="3" value="3"></el-option>
          <el-option label="4" value="4"></el-option>
          <el-option label="5" value="5"></el-option>
          <el-option label="6" value="6"></el-option>
          <el-option label="7" value="7"></el-option>
          <el-option label="8" value="8"></el-option>
          <el-option label="9" value="9"></el-option>
          <el-option label="10" value="10"></el-option>
          <el-option label="11" value="11"></el-option>
          <el-option label="12" value="12"></el-option>
          <el-option label="13" value="13"></el-option>
          <el-option label="14" value="14"></el-option>
          <el-option label="15" value="15"></el-option>
          <el-option label="16" value="16"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="周几" prop="weekday">
        <el-select v-model="ruleForm.weekday" placeholder="请选择周几">
          <el-option label="一" value="1"></el-option>
          <el-option label="二" value="2"></el-option>
          <el-option label="三" value="3"></el-option>
          <el-option label="四" value="4"></el-option>
          <el-option label="五" value="5"></el-option>
          <el-option label="六" value="6"></el-option>
          <el-option label="日" value="7"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="节次" prop="sectionno">
        <el-select v-model="ruleForm.sectionno" placeholder="请选择第几节">
          <el-option label="一二" value="12"></el-option>
          <el-option label="三四" value="34"></el-option>
          <el-option label="五六" value="56"></el-option>
          <el-option label="七八" value="78"></el-option>
          <el-option label="九十" value="91"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">查询</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>


</template>

<script>

export default {
  name:'Request',
  data() {
    return {
      ruleForm: {
        week:'',
        weekday:'',
        sectionno:''
      },
      rules: {
        week: [
          { required: true, message: '请选择教学周', trigger: 'change' }
        ],
        weekday: [
          { required: true, message: '请选择周几', trigger: 'change' }
        ],
        sectionno: [
          { required: true, message: '请选择第几节', trigger: 'change' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        const obje = {}
        this.$store.state.adjust_record.newweekday=this.ruleForm.weekday
        this.$store.state.adjust_record.newweekno=this.ruleForm.week
        this.$store.state.adjust_record.newsectionno=this.ruleForm.sectionno
        if (valid) {
          for (const key in this.ruleForm)
            obje[key]=this.ruleForm[key]
          this.$store.state.adjust_query=obje
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style>


</style>