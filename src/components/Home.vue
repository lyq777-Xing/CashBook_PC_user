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
        <swiper class="swiper"  effect="fade" :options="swiperOption" >
              <swiper-slide><img class="banner" src="../assets/banner2.png" alt=""></swiper-slide>
              <swiper-slide><img class="banner" src="../assets/banner1.png" alt=""></swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        <div class="first">
          <img class="imgfirst" src="../assets/imgq.png" alt="">
        </div>
        <el-row class="footer"  type="flex" justify="space-between">
          <el-col :span="8">联系我们</el-col>
          <el-col :span="8">客服邮箱：1587973497@qq.com</el-col>
          <el-col :span="8">工作时间：周一至周五 9:00-21:00</el-col>
        </el-row>
      </el-main>
    <canvas id="canvas"></canvas>
    <!-- <el-footer style="height: 100px;">
      <el-row  type="flex" justify="space-between">
        <el-col :span="8">联系我们</el-col>
        <el-col :span="8">客服邮箱：1587973497@qq.com</el-col>
        <el-col :span="8">工作时间：周一至周五 9:00-21:00</el-col>
      </el-row>
    </el-footer> -->
  </el-container>

</template>

<script>
import js from '../../src/script.js'
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
    // z-index:9999;
    position: relative;
    background-color: #F8FEFF;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  // .el-footer{
  //   background-color: #24323D;
  //   color: #fff;
  //   text-align: center;
  //   line-height: 100px;
  //   // height: 200px;
  // }
  .footer{
    background-color: #24323D;
    color: #fff;
    height: 100px;
    line-height: 100px;
  }
  // /deep/.el-footer{
  //   height: 200px;
  // }
  .el-main {
    z-index:2;
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
    height: 60px;
    width: 200px;
  }
  // .el-row {
  //   margin-bottom: 20px;
  //   &:last-child {
  //     margin-bottom: 0;
  //   }
  // }
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
  .first{
    align:"center";
  }
  #canvas {
    background-color: #333;
    // position: fixed;
    position: fixed;
    left: 0;
    top: 0;
    // z-index:-1;
    z-index:-1;
  }
</style>