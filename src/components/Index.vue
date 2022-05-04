<template>
  <div class="index">
    <span style="--r:0;--l:-5px;--t:-5px;"></span>
    <span style="--r:1;--l:5px;--t:-5px;"></span>
    <span style="--r:2;--l:5px;--t:5px;"></span>
    <span style="--r:3;--l:-5px;--t:5px;"></span>
    <i class="fas fa-power-off"  @click="GoHome">点击跳转主页</i>
    <!-- <el-button @click="GoHome">点击跳转主页</el-button> -->

  </div>
</template>

<script>
export default {
  methods:{
    GoHome(){
      this.$router.push("/home")
      location.reload()
    }
  }
}
</script>

<style lang="less" scoped>
  .index{
      background: #333;
      display: flex;
      width: 100%;
      height: 100vh;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 80px;
      text-shadow: 0 0 10px var(--g), 0 0 20px var(--g);
  }
  * {
      margin: 0;
      padding: 0;
      --g: #2ed573;
      /* RROD-The Red Ring of Death */
      /* --g: #ff4757; */
  }

  span {
      position: absolute;
      width: 200px;
      height: 200px;
      /* background: green; */
  }

  span::after,
  span::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      border-style: solid;
      border-width: 15px;
      box-sizing: border-box;
      border-radius: 50%;
      transform: translate(var(--l), var(--t)) rotate(calc(var(--r) * 90deg - 45deg));
      opacity: 0;
      animation: roll 4s linear infinite calc(var(--r) * 0.2s);
      transition: 0.2s linear;
  }

  span::before {
      border-color: white transparent transparent transparent;
      filter: blur(5px);
  }

  span::after {
      border-color: var(--g) transparent transparent transparent;
      filter: blur(2px);
  }

  i {
      opacity: 0.2;
      animation: roll 4s linear infinite;
  }

  @keyframes roll {
      50% {
          opacity: 1;
      }
  }


  /* RROD-The Red Ring of Death */


  /* span:nth-child(2)::before,
  span:nth-child(2)::after {
      animation-play-state: paused;
  } */
</style>