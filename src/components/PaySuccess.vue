<template>
  <div>
    <div>恭喜您支付成功！</div>
    <v-btn @click="gohome">点击返回首页</v-btn>
  </div>
</template>

<script>
export default {
  data(){
    return{
      data:{
        id:0,
      },
      id:''
    }
  },
  methods:{
    gohome(){
      this.$router.push("/home")
      swal("hhh!", {
        icon: "success",
        text:'恭喜成为蓝鲸会员的一员',
        buttons: false,
        timer: 2000,
      });
      // this.$router.go(0) 
    },
    async change(){
      const {data:res2} = await this.$http.get('user/getImg')
      if(res2.meta.status === 200){
        this.data = JSON.parse(res2.data)
        this.id = this.data.id
      }else{
        return console.error('很遗憾没有查询到您的消息,请刷新后重试');
      }
      const {data:res} = await this.$http.post('user/changemem?userId='+this.id) 
      console.log(res);
    },
    async AlipayCheck(){
      const {data:res2} = await this.$http.get('user/getImg')
      if(res2.meta.status === 200){
        this.data = JSON.parse(res2.data)
        this.id = this.data.id
      }else{
        return console.error('很遗憾没有查询到您的消息,请刷新后重试');
      }
      console.log(res);
      const{data:res}=await this.$http.post(`alipay/paycheck/${this.id}`,this.aliPayCheckBean)
      console.log(res);
    },
    getquery(name){
      var url=window.location.href
      var query=url.substring(url.indexOf("?")+1)
      var vars=query.split("&")
      console.log("vars",query);
      for (let index = 0; index < vars.length; index++) {
        var pay=vars[index].split("=");
        if(pay[0]==name){return pay[1]}
        
      }
    },
  },
  created(){
    this.change()
    let oid=this.getquery("out_trade_no")
    this.aliPayCheckBean.out_trade_no=oid
    this.AlipayCheck()
  }
}
</script>

<style lang="less" scoped>

</style>