<template>
  <div>
    <el-card shadow="hover" class="login-box">
      <el-form ref="loginForm" :model="form" :rules="loginRules" label-width="50px"
               v-loading="loading"
               element-loading-text="登录中">

        <img :src="logo" class="sidebar-logo">

        <h3 class="login-title">教室信息管理系统登录</h3>

        <el-form-item label="账号" prop="username">
          <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input ref="password" :type="passwordType" placeholder="请输入密码" v-model="form.password"/>
          <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"/>
        </span>
        </el-form-item>
        <icon-svg icon-class="password"/>
        <div style="margin-top: 20px">
          <el-radio-group v-model="radio" size="medium" fill="#67c23a">
            <el-radio-button label="学生" v-model="form.type"></el-radio-button>
            <el-radio-button label="社团" v-model="form.type"></el-radio-button>
            <el-radio-button label="教师" v-model="form.type"></el-radio-button>
          </el-radio-group>
        </div>
        <el-form-item>

          <el-button class="login-button" type="success" @click="submitForm('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script scoped>
import {post} from '../../network/request'
import router from "../../router";
export default {
  name: 'logincard',
  data() {
    return {
      radio: 4,
      form: {
        username: '92922015',
        password: '123456',
        type:''
      },
      // 加载动画
      loading: false,
      // 密码类型
      passwordType: 'password'
    }
  },
  watch: {},
  methods: {
    submitForm(formName) {      //登录提交
      this.$refs[formName].validate((valid) => {
        if (valid) {
            this.form.type=this.radio;
            post('login',this.form).then(res => {
              if (res.data.data.length!=0)          //处理返回信息
              {
                this.$store.state.person_info.identity=this.form.type;
                this.$store.state.person_info.id=this.form.username;
                this.$store.state.person_info.tel=res.data.data[0].tel;

                if (this.radio=='学生') {
                  this.$store.state.person_info.name = res.data.data[0].sname
                  this.$store.state.person_info.dept = res.data.data[0].dept
                }
                else if (this.radio=='教师') {
                  this.$store.state.person_info.name = res.data.data[0].tname
                  this.$store.state.person_info.dept = res.data.data[0].dept

                }
                else if (this.radio=='社团') {
                  this.$store.state.person_info.name = res.data.data[0].leadername
                  this.$store.state.person_info.dept = res.data.data[0].rentdeptname
                }
                console.log(res)
                console.log(this.$store.state.person_info)
                this.$router.push('/')
              }
            })
        } else {
          return false;
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$black: #000000; //图标颜色
$light_gray: #eee;

.login-box {
  border: 1px solid #DCDFE6;
  width: 360px;
  margin: 0px auto;
  padding: 35px 50px 15px 40px;
  border-radius: 20px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  //box-shadow: 0 0 20px #909399;
}

.login-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;
}

.login-button {
  width: 100%;
  margin: 15px auto 0px auto;
  background-color: #67c23a;
}

.sidebar-logo-link {
  height: 100%;
  width: 100%;
}

.show-pwd {
  position: absolute;
  right: 10px;
  top: 7px;
  font-size: 16px;
  color: $black;
  cursor: pointer;
  user-select: none;
}

</style>