<template>
  <el-container>
      <el-header>
        <el-row :gutter="0">
          <el-col :span="4">
            <img class="logo_header" src="../assets/logo.png" alt="">
          </el-col>
          <el-col class="right_header" :span="6">
            <el-button class="right_btn" @click="gohome">首页</el-button>
            <el-button class="right_btn" @click="GoAboutMe">关于我们</el-button>
            <!-- <el-button class="right_btn" @click="GoLogin">登录</el-button> -->
            <el-button class="right_btn">注册</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <div class="big">
          <div class="login">
            <img class="left" src="../assets/login3.gif" alt="">
            <div class="right">
              <div class="form">
                <el-form :model="dataForm" :rules="loginRules" ref="dataForm" label-width="70px" class="demo-ruleForm">
                  <el-form-item label="用户名" prop="username">
                    <el-input v-model="dataForm.name"></el-input>
                  </el-form-item>
                  <el-form-item label="密码" prop="password">
                    <el-input v-model="dataForm.password"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <v-btn type="primary" @click="submitForm('dataForm')" style="background-color:#FFD5E9;color:#F78CFF">登录</v-btn>
                  </el-form-item>
                </el-form>
                <el-row :gutter="10" class="forgetAndAdminLoginBtn">
                  <el-col :span="12"> 
                    <v-btn class="forgetBtn" outlined style="opacity: 0.9;background-color:#fffffd;color:#37546D">忘记密码？</v-btn>
                  </el-col>
                  <el-col :span="12">
                    <v-btn class="adminLogin" outlined style="opacity: 0.9;background-color:#fffffd;color:#37546D">管理员登录</v-btn>
                  </el-col>
                </el-row>
                <!-- <v-btn class="forgetBtn" outlined style="opacity: 0.9;background-color:#fffffd;color:#37546D">忘记密码？</v-btn> -->
                <!-- <v-btn class="adminLogin" outlined style="opacity: 0.9;background-color:#fffffd;color:#37546D">管理员登录</v-btn> -->
              </div>
            </div>
          </div>
          <div class="loginFooter">
          </div>
        </div>
      </el-main>
  </el-container>
</template>

<script>
export default {
  data(){
    return{
      dataForm:{
        name:'',
        password:'',
      },
      loginRules:{
        username:[{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password:[{ required: true, message: '请输入密码', trigger: 'blur' }],
      }
    }
  },
  methods:{
    gohome(){
      this.$router.push("/home")
      // this.$router.go(0) 
      location.reload()
    },
    submitForm(){

    },
    GoAboutMe(){
      this.$router.push("/aboutme")
    }
  }
}
</script>

<style lang="less" scoped>

  .el-header {
    // z-index:9999;
    position: relative;
    background-color: #F8FEFF;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    z-index:2;
    position: relative;
    background-color: #fffffd;
    // background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-container{
    height: 100%;
    width: 100%;
  }
  .logo_header{
    // float: left;
    height: 60px;
    width: 200px;
  }
  .right_header{
    float: right;
  }
  .right_btn{
    border-style:none;
    background-color: #F8FEFF;
  }
  .login{
    // align:center;
    width: 900px;
    height: 500px;
    margin: 0 auto;
    // position: absolute;
    // left: 50%;
    // top: 50%;
    // transform: translate(-50%,-50%);
  }
  .left{
    // position: absolute;
    float: left;
  }
  .right{
    width: 400px;
    position: relative;
    // position: absolute;
    float: right;
    height: 500px;
    // left: 50%;
    // top: 50%;
    // transform: translate(-50%,-50%);
  }
  .form{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .el-form{
    width: 350px;
  }
  .forgetBtn{
    border-style: none;
    // float: right;
  }
  .adminLogin{
    border-style: none;
    // float: right;
  }
  .loginFooter{
    // position: absolute;
    width: 900px;
    margin: 0 auto;
    // left: 50%;
    // top: 80%;
    // transform: translate(-50%,-50%);
    // margin-top: 100%;
    // margin-bottom: 0%;
    // background-color: pink;
    height: 150px;
    // position: absolute;
    // left: 50%;
    // transform: translate(0,0,0,-50%);
    // top: 80%;
    // transform: translate(50%,0,0%,0);
    border-top: 1px solid #e7e7e7;
  }
  .forgetAndAdminLoginBtn{
    float: right;
  }
  .big{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
</style>