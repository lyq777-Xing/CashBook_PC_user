<template>
  <el-container>
    <el-header>
      <el-row :gutter="0">
        <el-col :span="4">
          <img class="logo_header" src="../assets/logo.png" alt="">
        </el-col>
        <el-col class="right_header" :span="6">
          <el-button class="right_btn" @click="gohome">首页</el-button>
          <el-button class="right_btn">记账</el-button>
          <el-button class="right_btn">登录</el-button>
          <el-button class="right_btn">注册</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <swiper class="swiper" :options="swiperOption" >
            <swiper-slide><img class="banner" src="../assets/banner2.png" alt=""></swiper-slide>
            <swiper-slide><img class="banner" src="../assets/banner1.png" alt=""></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </el-main>
    <el-footer style="height: 200px;">Footer</el-footer>
  </el-container>
</template>

<script>
  export default {
    data(){
      return{
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true // 允许点击小圆点跳转
          },
          autoplay: {
            delay: 3000,
            disableOnInteraction: false // 手动切换之后继续自动轮播
          },
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    methods:{
      gohome(){
        this.$router.push("/home")
      }
    }
  }
</script>

<style lang="less" scoped>
  .el-header {
    background-color: #F8FEFF;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-footer{
    background-color: #144871;
    color: #333;
    text-align: center;
    line-height: 60px;
    height: 200px;
  }
  /deep/.el-footer{
    height: 200px;
  }
  .el-main {
    // background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-container{
    height: 100%;
  }
  .logo_header{
    // float: left;
    width: 200px;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .right_header{
    float: right;
  }
  .right_btn{
    border-style:none;
    background-color: #F8FEFF;
  }
  // .swiper{
  //   height: 300px;
  // }
  // .banner{
  //   height: 300px;
  //   // width: 100%;
  // }
</style>