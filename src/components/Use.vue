<template>
  <el-container>
      <el-header>
        <el-row :gutter="0">
          <el-col :span="4">
            <img class="logo_header" src="../assets/logo.png" alt="">
          </el-col>
          <el-col class="right_header" :span="6">
            <el-button class="right_btn" @click="gohome">首页</el-button>
            <el-button class="right_btn" @click="goabout">关于我们</el-button>
            <!-- <el-button class="right_btn" @click="GoLogin">登录</el-button> -->
            <!-- <el-button class="right_btn">注册</el-button> -->
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-tabs :tab-position="tabPosition" style="height: 200px;">
          <el-tab-pane label="个人信息">
            <el-card>
              个人信息
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="成为会员">
            <el-card>
              <h1>9.99永久会员</h1>
              <h6>注：由于是会员性质充值，付款完成后概不退款，如有问题请联系：1587973497@qq.com</h6>
              <v-btn style="background-color:#FFD5E9;color:#F78CFF" @click="pay">确定成为会员</v-btn>
               <div id="payDiv" v-html="conent"></div>
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="导出账单">导出账单</el-tab-pane>
          <el-tab-pane label="查看支出统计">查看支出统计</el-tab-pane>
        </el-tabs>
      </el-main>
  </el-container>
</template>

<script>
export default {
  data(){
    return{
      tabPosition: 'left',
      data:{
        id:0,
        roleId:0,
        userCreatedate:'',
        userEmail:'',
        userHeader:'',
        userName:'',
        userPhone:'',
        userPassword:''
      },
      aliPayCheckBean:{
        out_trade_no:''
      },
      conent:'',
      list:{
        subject:'充值会员',
        total_amount:'9.99',
        body:'alipay'
      },
      id:'',
    }
  },
  methods:{
    async pay(){
      const{data:res}=await this.$http.post('/alipay/pay',this.list)
      this.conent=res.data
      console.log(res);
      this.$nextTick(()=>{
        let form=document.getElementsByName("punchout_form")[0]
        form.submit()
        console.log(res);
      })
    },
    gohome(){
      this.$router.push("/home")
      // this.$router.go(0) 
      
    },
    goabout(){
      this.$router.push("/aboutme")
    },
    async getdata(){
      const {data:res} = await this.$http.get('user/getImg')
      if(res.meta.status === 200){
        this.data = JSON.parse(res.data)
        this.id = this.data.id
        console.log(this.data);
      }else{
        return console.error('很遗憾没有查询到您的消息,请刷新后重试');
      }
      console.log(res);
    },
   
  },
  created(){
    this.getdata()
    
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