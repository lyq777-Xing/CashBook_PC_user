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
            <!-- <el-button class="right_btn">注册</el-button> -->
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <div class="big">
          <div class="login">
            <img class="left" src="../assets/login3.gif" alt="">
            <div class="right">
              <div class="form">
                 <el-tabs v-model="activeName" @tab-click="handleClick">
                  <el-tab-pane label="账号密码登录" name="first">
                    <el-form :model="dataForm" :rules="loginRules" ref="dataForm" label-width="70px" class="demo-ruleForm">
                      <el-form-item label="用户名" prop="username">
                        <el-input v-model="dataForm.username"></el-input>
                      </el-form-item>
                      <el-form-item label="密码" prop="password">
                        <el-input v-model="dataForm.password"></el-input>
                      </el-form-item>
                      <el-form-item>
                        <div ref="demo" style="margin:0 auto"></div>
                      </el-form-item>
                      <el-form-item>
                        <v-btn type="primary" @click="submitForm('dataForm')" style="background-color:#FFD5E9;color:#F78CFF">登录</v-btn>
                      </el-form-item>
                    </el-form>
                  </el-tab-pane>
                  <!-- <el-tab-pane label="手机号登录" name="second">
                    <el-form :model="LoginPhoneForm" :rules="LoginPhoneFormRules" ref="LoginPhoneForm" label-width="70px" class="demo-ruleForm">
                      <el-form-item label="手机号" prop="phone">
                        <el-input v-model="LoginPhoneForm.phone"></el-input>
                      </el-form-item>
                      <el-form-item label="验证码" prop="code">
                        <el-input class="codeInput" v-model="LoginPhoneForm.code"></el-input>
                        <v-btn class="codeBtn">获取验证码</v-btn>
                      </el-form-item>
                      <el-form-item>
                        <v-btn type="primary" @click="submitForm('LoginPhoneForm')" style="background-color:#FFD5E9;color:#F78CFF">登录</v-btn>
                      </el-form-item>
                    </el-form>
                  </el-tab-pane> -->
                </el-tabs>
                <!-- <el-row :gutter="10" class="forgetAndAdminLoginBtn"> -->
                  <!-- <el-col :span="12"> 
                    <v-btn class="forgetBtn" outlined style="opacity: 0.9;background-color:#fffffd;color:#37546D">忘记密码？</v-btn>
                  </el-col> -->
                  <!-- <el-col :span="12">
                    <v-btn class="adminLogin" outlined style="opacity: 0.9;background-color:#fffffd;color:#37546D" @click="GoAdminLogin">管理员登录</v-btn>
                  </el-col> -->
                <!-- </el-row> -->
                <!-- <v-btn class="forgetBtn" outlined style="opacity: 0.9;background-color:#fffffd;color:#37546D">忘记密码？</v-btn> -->
                <!-- <v-btn class="adminLogin" outlined style="opacity: 0.9;background-color:#fffffd;color:#37546D">管理员登录</v-btn> -->
              </div>
            </div>
          </div>
          <div class="loginFooter">
          </div>
        </div>
      </el-main>
      <let-it-snow
      v-bind="snowConf"
      :show="show">
      </let-it-snow>
  </el-container>
</template>

<script>
import qs from 'qs'
export default {
  
  data(){
    return{
      snowConf: {
        windPower : 1,  
        speed : 3,
        count : 12,
        size : 10,
        opacity : 1,
        images: [
          'https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/8.png',
          'https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/7.png',
          'https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/6.png',
          'https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/5.png',
          'https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/4.png',
          'https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/3.png',
          'https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/2.png',
          'https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/1.png',
        ]
      },
      show: false,
      dataForm:{
        username:'',
        password:'',
      },
      loginRules:{
        username:[{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password:[{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
      LoginPhoneForm:{
        phone:'',
        code:''
      },
      LoginPhoneFormRules:{
        phone:[{ required: true, message: '请输入手机号', trigger: 'blur' }],
        code:[{ required: true, message: '请输入手机号', trigger: 'blur' }],
      },
      activeName:'first',
      codetoken:'',
    }
  },
  mounted() {
    // 展示飘点
    this.show = true

    // 无感验证码
    _dx.Captcha(this.$refs.demo, {
      // appId, 在控制台应用管理或应用配置模块获取
      appId: "40ba323954dfade3e33c299a192faa40",
      apiServer: 'https://dxvip.dingxiang-inc.com',  
      // apiServer域名地址在控制台页面->无感验证->应用管页面左上角获取，必须填写完整包括https://。
      success: token => {
        // 获取验证码token，用于后端校验，注意获取token若是sl开头的字符串，则是前端网络不通生成的降级token,请检查前端网络及apiServer地址。
        this.codetoken = token
        console.log(token);
      }
    });
  },
  methods:{
    gohome(){
      this.$router.push("/home")
      // this.$router.go(0) 
      
    },
    submitForm(){
      this.$refs.dataForm.validate(async valid=>{
        if(!valid) return
        if(!this.codetoken){
          return this.$message.error('请完成验证码验证')
        }
        const{data:res}=await this.$http.post('users/oauth/token?client_id=c2&client_secret=secret&grant_type=password&username=' +this.dataForm.username+"&password="+this.dataForm.password)
        // console.log(this.LoginForm);
        console.log(res);

        if(res.access_token != null && res.access_token != ""){
          window.sessionStorage.setItem("token","bearer " + res.access_token);
          this.$router.push("/home")
          this.$message.success('登录成功')
          swal("hhh!", {
            icon: "success",
            text:'欢迎登录蓝鲸App',
            buttons: false,
            timer: 2000,
          });
        }

        // if(res.meta.status === 200){
          // window.sessionStorage.setItem("token",res.data.token);
        //   this.$router.push("/home")
        // }

      })
    },
    GoAboutMe(){
      this.$router.push("/aboutme")
    },
    handleClick(){

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
  /deep/.el-tabs__nav-scroll {
    overflow: hidden;
    height: 120px;
  }
  .codeInput{
    width: 170px;
  }
  .codeBtn{
    margin-left: 10px;
    width: 90px;
  }
</style>