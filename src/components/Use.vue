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
        <el-tabs v-model="activeName" :tab-position="tabPosition" style="height: 100%;" @tab-click="handleClick">
          <el-tab-pane name="mine" label="个人信息" >
            <img style="width:200px" :src="imgurl" alt="">
            <v-form
              style="width:500px;margin:0 auto;"
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                v-model="data.userName"
                :counter="10"
                :rules="nameRules"
                label="Name"
                required
              ></v-text-field>

              <v-text-field
                v-model="data.userEmail"
                label="E-mail"
              ></v-text-field>

              <v-text-field
                disabled
                v-model="data.userPhone"
                :rules="phoneRules"
                label="phone"
                required
              ></v-text-field>

              <!-- <v-select
                v-model="select"
                :items="items"
                :rules="[v => !!v || 'Item is required']"
                label="phone"
                required
              ></v-select> -->

              <!-- <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
              ></v-checkbox> -->

              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4 paa"
                @click="validate"
                style="background-color:#066806;color:#fff"
              >
                Validate
              </v-btn>

              <v-btn
                color="error"
                class="mr-4 pbb"
                @click="loginout"
                style="background-color:#b51c1c;color:#fff"
              >
                退出登录
              </v-btn>

              <!-- <v-btn
                color="error"
                class="mr-4 pbb"
                @click="changePhone"
                style="background-color:#b51c1c;color:#fff"
              >
                更换绑定手机号
              </v-btn> -->

              <!-- <v-btn
                color="warning"
                @click="resetValidation"
                style="background-color:#b51c1c;color:#fff"
                class="pbb"
              >
                Reset Validation
              </v-btn> -->
            </v-form>
          </el-tab-pane>
          <el-tab-pane name="alipay" label="成为会员" >
              <h1 v-if="roleId === 3">9.99永久会员</h1>
              <h1 v-else>您已经是会员啦</h1>
              <h6>注：由于是会员性质充值，付款完成后概不退款，如有问题请联系：1587973497@qq.com</h6>
              <v-btn style="background-color:#FFD5E9;color:#F78CFF" @click="pay" v-if="roleId === 3">确定成为会员</v-btn>
               <div id="payDiv" v-html="conent"></div>
          </el-tab-pane>
          <el-tab-pane name="putbill" label="导出账单" >
            <el-select v-model="value" placeholder="请选择账本">
              <el-option
                v-for="item in billlist"
                :key="item.value"
                :label="item.text"
                :value="item.value">
              </el-option>
            </el-select>
            <v-btn @click="daochu">导出账单</v-btn>
          </el-tab-pane>
          <el-tab-pane name="report" label="查看支出统计" >
            <!-- <div class="app-container">
              <div class="box" > -->
                <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
                <div id="Main" class="Main" style="background-color: ;height:300px;" ></div>
                <div id="main"  class="main" style="background-color: ;height:300px;" ></div>
              <!-- </div>
            </div> -->
          </el-tab-pane>
        </el-tabs>
        <!-- 更新绑定手机号对话框 -->
        <el-dialog
          title="更新绑定手机号"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose">
          <span>
            <el-form :changePhoneData="data" :rules="rules" ref="changePhoneData" label-width="100px" class="demo-ruleForm">
              <!-- <el-form-item label="原手机号">
                <el-input disabled v-model="changePhoneData.userPhone"></el-input>
              </el-form-item> -->
              <el-form-item label="新手机号" style="width:100%">
                <el-row>
                  <el-col span="22">
                    <el-input v-model="changePhoneData.newPhone"></el-input>
                  </el-col>
                  <el-col span="2">
                    <v-btn style="margin-left:15px" @click="sendcode">获取验证码</v-btn>
                  </el-col>   
                </el-row>
              </el-form-item>
              <el-form-item label="验证码" prop="cat" style="width:100%">
                <el-input v-model="changePhoneData.cat"></el-input>
              </el-form-item>
            </el-form>
          </span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
      </el-main>
  </el-container>
</template>

<script>
const Highcharts = require('highcharts/highmaps');
import * as echarts from 'echarts';
// let echarts = require('echarts')
// import _ from 'lodash'
//  export function downCustResource () {
//     return request({
//       url: '',
//       method: 'get',
//       headers: {
//         'Content-Type': 'application/json',//设置请求头请求格式为JSON
//         'token': window.sessionStorage.getItem('token') //设置token 其中K名要和后端协调好
//       },
//       responseType: 'blob',
//       contentType: "application/octet-stream;charset=utf-8"
//     })
//   }
export default {
  data(){
    return{
      tabPosition: 'left',
      valid: true,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      emailRules: [
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      phoneRules:[
        v => !!v || 'Phone is required',
      ],
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
      roleId:'',
      imgurl:'',
      data:{

      },
      dialogVisible:false,
      changePhoneData:{
        newPhone:'',
        cat:'',
      },
      rules:{
        cat:[{ required: true, message: '请输入验证码', trigger: 'blur' }],
        newPhone:[{ required: true, message: '请输入新手机号', trigger: 'blur' }],
      },
      userId:'',
      billlist:[],
      value:'',
      // main:'',
      reportone:{
        x:[],
        y:[]
      },
      activeName:'mine',
      reporttwo:[],
    }
  },
  mounted(){
this.getReport()
  },
  methods:{
    async daochu(){
      // downCustResource().then((res) => {
      //   // this.$ry.download(res.msg)
      //   if (!res) {
      //     return;
      //   }
      //   let blob = new Blob([res], {
      //     type: "application/octet-stream",
      //   });
      //   let url = window.URL.createObjectURL(blob);
      //   let link = document.createElement("a");
      //   link.style.display = "none";
      //   link.href = url;
      //   link.download = "客导出.xlsx";
      //   document.body.appendChild(link);
      //   link.click();
      //   document.body.removeChild(link)
      // });

      this.$http.get(`http://localhost:8888/bill/getreportthree/${this.userId}/${this.value}`, {
        headers: {
          'Content-Type': 'application/octet-stream',
          'token': window.sessionStorage.getItem('token') 
          },
        responseType: 'arraybuffer',
      }).then((res) => {

        var b = new Blob([res.data], { type: 'application/vnd.ms-excel' });
        // 根据传入的参数b创建一个指向该参数对象的URL
        var url = URL.createObjectURL(b);
        var link = document.createElement('a');
        // 设置导出的文件名
        link.download = '蓝鲸账本.xlsx';
        link.href = url;
        // 点击获取文件
        link.click();
      })


      // this.$http({
      //   method:'GET',
      //   url:'http://localhost:8888/bill/getreportthree/1/200',
      //   responeType:'blob',
      //   headers: {
      //     'Content-Type': 'application/json',//设置请求头请求格式为JSON
      //     'token': window.sessionStorage.getItem('token') //设置token 其中K名要和后端协调好
      //   },
      //   params:{}
      // })
      // .then(res => res.blob())
      // .then(data => {
      //   let blobUrl = window.URL.createObjectURL(data);
      //   download(blobUrl);
      // });
      // const {data:res} = await this.$http.get('')
      // window.location.href("")
    },
    async getbilllist(){
      const {data:res} = await this.$http.get('/billlist/getall?userId='+ this.userId )
      if(res.meta.status === 200){
        this.billlist = res.data
      }else{
        return this.$message.error('获取您的账本失败，请刷新后重试')
      }
      console.log(res);
    },
    // download(blobUrl) {
    //   const a = document.createElement('a');
    //   a.download = 'a.xsxl';
    //   a.href = blobUrl;
    //   a.click();
    // },
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
    loginout(){
      window.sessionStorage.clear()
      this.$router.push('/home')
    },
    validator(val){
      return /^[1][3,4,5,7,8][0-9]{9}$/.test(val);
    },
    async validate () {
      console.log("validate...");
      this.$refs.form.validate()
      const {data:res} = await this.$http.put('user/upd',this.data);
        console.log(res); 
    },
    reset () {
      this.$refs.form.reset()
    },
    // resetValidation () {
    //   this.$refs.form.resetValidation()
    // },
    gohome(){
      this.$router.push("/home")
      // this.$router.go(0) 
      
    },
    async sendcode(){
      if(!this.validator(this.changePhoneData.newPhone)) return this.$message.error('请输入正确的新手机号')
      // 发送短信
      const {data:res} = await this.$http.get('user/smscodechangephone?phone=' + this.newPhone)
      console.log(res);
    },
    changePhone(){
      this.dialogVisible = true
    },
    handleClose(){
      this.dialogVisible = false
      this.$refs.changePhoneData.resetFields();
    },
    goabout(){
      this.$router.push("/aboutme")
    },
    async getdata(){
      const {data:res} = await this.$http.get('user/getImg')
      if(res.meta.status === 200){
        const data = JSON.parse(res.data)
        this.id = data.id
        this.data = data
        this.roleId = data.roleId
        this.userId = data.id
        this.imgurl = this.managerImg = 'https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/'+data.userHeader
        console.log(data);
        this.getbilllist()
      }else{
        return console.error('很遗憾没有查询到您的消息,请刷新后重试');
      }
      console.log(res);
    },
    handleClick(tab, event) {
      console.log(tab, event);
      if(tab.index === "0"){
        console.log("mine...");
        this.getdata()
      }else if(tab.index === "1"){
        console.log("alipay...");
        this.getdata()
      }else if(tab.index === "2"){
        console.log("putbill...");
        this.getbilllist()
      }else if(tab.index === "3"){
        console.log("report...");
        this.getReport()
      }
    },
    async getReport(){
      const {data:res2} = await this.$http.get('/bill/getreporttwo?userId=' + this.id)
      console.log(res2);
      if(res2.meta.status === 200){
        for (let x = 0; x < res2.data.length; x++) {
          const reporttwod = {}
          reporttwod.name = res2.data[x].name
          reporttwod.y = res2.data[x].value
          this.reporttwo[x] = reporttwod
          reporttwod = {}
        }
        // 构建图表
        var chart = Highcharts.chart('Main',{
          title: {
              text: '本月支出分类占比'
          },
          tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
              pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                      enabled: true,
                      format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                      style: {
                          color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                      },
                      connectorColor: 'silver'
                  }
              }
          },
          series: [{
              type: 'pie',
              name: '分类占比',
              // data: [
              //     ['Firefox',   45.0],
              //     ['IE',       26.8],
              //     {
              //         name: 'Chrome',
              //         y: 12.8,
              //         sliced: true,
              //         selected: true
              //     },
              //     ['Safari',    8.5],
              //     ['Opera',     6.2],
              //     ['其他',   0.7]
              // ]
              data:this.reporttwo
          }]
        });
      }else{
        return this.$message.error('┗|｀O′|┛ 嗷~~，数据出错啦，请刷新重试')
      }

      const {data:res} = await this.$http.get('/bill/getreportone?userId=' + this.id);
      console.log(res);
      if(res.meta.status === 200){
        this.reportone = res.data;
        var chart = Highcharts.chart('main', {
          chart: {
            type: 'spline'
          },
          title: {
            text: '本月每日支出'
          },
          subtitle: {
            text: '数据来源:蓝鲸记账App'
          },
          xAxis: {
            categories: this.reportone.x
          },
          yAxis: {
            title: {
              text: '支出金额'
            },
            labels: {
              formatter: function () {
                return this.value;
              }
            }
          },
          tooltip: {
            crosshairs: true,
            shared: true
          },
          plotOptions: {
            spline: {
              marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
              }
            }
          },
          series: [{
            name: '支出',
            marker: {
              symbol: 'square'
            },
            // data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
            //   y: 26.5,
            //   marker: {
            //     symbol: 'url(https://code.highcharts.com.cn/highcharts/graphics/sun.png)'
            //   }
            // }, 23.3, 18.3, 13.9, 9.6]
            data:this.reportone.y
          }]
        });
      }else{
        return this.$message.error('┗|｀O′|┛ 嗷~~，数据出错啦，请刷新重试')
      }
    },
  },
  created(){
    this.getdata()
  }
}
</script>

<style lang="less" scoped>
// .paa {
//     background-color: #066806;
// }
// .pbb {
//     background-color: #b51c1c;
// }
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