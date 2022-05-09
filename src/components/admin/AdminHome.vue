<template>
  <el-container>
    <el-header>
      <el-row :gutter="0">
        <el-col :span="4">
          <img class="logo_header" src="../assets/logo.png" alt="">
        </el-col>
        <el-col class="right_header" :span="6">
          <el-button class="right_btn" @click="gohome">首页</el-button>
          <el-button class="right_btn" >记账</el-button>
          <el-button class="right_btn"  @click="GoAboutMe">关于我们</el-button>
          <el-button class="right_btn" @click="GoLogin">登录</el-button>
          <el-button class="right_btn">注册</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
    </el-main>
  </el-container>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>

</style>