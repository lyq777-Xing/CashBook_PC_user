<template>
   <el-container>
      <el-header>
        <el-row :gutter="0">
          <el-col :span="4">
            <img class="logo_header" src="../assets/logo.png" alt="">
          </el-col>
          <el-col class="right_header" :span="6">
            <el-button class="right_btn" @click="gohome">首页</el-button>
            <el-button class="right_btn" @click="GoLogin">登录</el-button>
            <el-button class="right_btn">注册</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <div>
          <img src="../assets/aboutme.gif" class="headerImg" alt="">
        </div>
        <div class="first">
          <div class="mofang">
            <div class="main">
              <i class="el-icon-sunset"></i>
              <i class="el-icon-sunset"></i>
              <i class="el-icon-sunset"></i>
              <i class="el-icon-sunset"></i>
              <div class="u"></div>
              <div class="d"></div>
              <div class="f"></div>
              <div class="b"></div>
              <div class="l"></div>
              <div class="r"></div>
            </div>
          </div>
          <div class="firstRight">
            在一切变好之前，<br>
            我们总要经历一些不开心的日子，<br>
            这段日子也许很长，<br>
            也许只是一觉醒来，<br>
            所以耐心点，<br>
            给好运一点时间。<br>
          </div>
        </div>
      </el-main>
  </el-container>
</template>

<script>
export default {
  methods:{
    GoLogin(){
      this.$router.push("/login")
    },
    gohome(){
      this.$router.push("/home")
      // this.$router.go(0) 
      location.reload()
    },
  }
}
</script>

<style lang="less" scoped>
  .headerImg{
    width: 100%;
  }
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
    // background-color: pink;
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
  .first{
    // left: 50%;
    // transform: translate("-50%");
    margin: 0 auto;
    width: 60%;
    height: 300px;
  }
  .firstRight{
    float: right;
    width: 50%;
    line-height: 50px;
  }
  .mofang {
      float: left;
      // background: #333;
      display: flex;
      width: 50%;
      height: 300px;
      justify-content: center;
      align-items: center;
  }

  .main {
      // float:right;
      // margin-right: 0px;
      width: 200px;
      height: 200px;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      animation: roll 5s linear infinite;
      transform-style: preserve-3d;
      transform: rotateX(-15deg);
  }

  .main i {
      font-size: 100px;
      text-shadow: 0 0 10px white, 0 0 20px blue;
      position: absolute;
      color: white;
  }

  .main i:nth-child(2) {
      transform: rotateY(90deg);
  }

  .main i:nth-child(3) {
      transform: rotateY(45deg);
  }

  .main i:nth-child(4) {
      transform: rotateY(-45deg);
  }

  @keyframes roll {
      100% {
          transform: rotateX(-15deg) rotateY(360deg);
      }
  }

  .main div {
      position: absolute;
      width: 100%;
      height: 100%;
      border: 2px solid white;
  }

  .u {
      transform: rotateY(90deg) translateZ(100px);
      background: rgba(255, 171, 171 , 0.3);
  }

  .d {
      transform: rotateY(-90deg) translateZ(100px);
      background: rgba(255, 210, 171  , 0.3)
  }

  .f {
      transform: rotateY(0deg) translateZ(100px);
      background: rgba(255, 237, 171 , 0.3)
  }

  .b {
      transform: rotateY(180deg) translateZ(100px);
      background: rgba(171, 255, 177 , 0.3);
  }

  .l {
      transform: rotateX(90deg) translateZ(100px);
      background: rgba(171, 229, 255 , 0.3);
  }

  .r {
      transform: rotateX(-90deg) translateZ(100px);
      background: rgba(191, 171, 255 , 0.3);
  }
</style>