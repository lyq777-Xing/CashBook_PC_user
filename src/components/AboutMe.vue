<template>
  <div>
    <div class="modal fade" tabindex="-1" role="dialog" id="modal-cookies" data-backdrop="false" aria-labelledby="modal-cookies" aria-hidden="true">
        <div class="modal-dialog modal-dialog-aside left-4 right-4 bottom-4">
            <div class="modal-content bg-dark-dark">
                <div class="modal-body">
                    <p class="text-sm text-white mb-3">We use cookies so that our themes work for you. By using our website, you agree to our use of cookies.</p><a href="javascript:;" class="btn btn-sm btn-white" target="_blank">Learn more</a> <button type="button" class="btn btn-sm btn-primary mr-2"
                        data-dismiss="modal">OK</button></div>
            </div>
        </div>
    </div>
    <!-- <a href="javascript:;" class="btn btn-block btn-dark text-truncate rounded-0 py-2 d-none d-lg-block" style="z-index:1000" target="_blank"><strong>This is a free demo.</strong> Click here to browse through 390+ Bootstrap 5 components →</a> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container">
            <span @click="gohome" class="navbar-brand" ><img alt="Image placeholder" src="https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/logo2%20(2).png" id="navbar-logo"> </span><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mt-4 mt-lg-0 ml-auto">
                    <li class="nav-item"><span class="nav-link" click="gohome">Overview</span></li>
                    <li class="nav-item dropdown dropdown-animate" data-toggle="hover"><a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                        <div class="dropdown-menu dropdown-menu-single"><span @click="gohome" class="dropdown-item">Homepage</span> <a href="" class="dropdown-item">About us</a></div>
                    </li>
                    <li class="nav-item"><span class="nav-link" @click="godoc">Docs</span></li>
                    <li class="nav-item"><span class="nav-link" @click="gologin">Login</span></li>
                </ul><span class="navbar-btn btn btn-sm btn-primary d-none d-lg-inline-block ml-3"  @click="goUse">Use Free</span>
                </div>
            </div>
    </nav>
    <section class="slice py-8 bg-dark">
        <div class="container py-5">
            <div class="row row-grid align-items-center">
                <div class="col-lg-8 text-center text-lg-left">
                    <h1 class="text-white mb-4">关于蓝鲸记账</h1>
                    <p class="lead text-white opacity-8">共历时1个半月</p>
                    <!-- <div class="mt-5"><a href="#" class="btn btn-warning btn-lg btn-icon"><span class="btn-inner--icon"><i data-feather="edit-3"></i> </span><span class="btn-inner--text">Contact us</span></a></div> -->
                </div>
            </div>
        </div>
        <div class="shape-container shape-line shape-position-bottom"><svg width="2560px" height="100px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveaspectratio="none" x="0px" y="0px" viewbox="0 0 2560 100" style="enable-background:new 0 0 2560 100" xml:space="preserve"
                class=""><polygon points="2560 0 2560 100 0 100"></polygon></svg></div>
    </section>
    <section class="slice slice-lg">
        <div class="container"><span class="badge badge-primary badge-pill">Our vision</span>
            <div class="row mt-4">
                <div class="col-lg-6 pr-lg-5">
                    <p class="h5 lh-180 mb-3">我们的愿景是设计出一个大家都乐于记账的App，界面简洁有序。</p>
                </div>
                <div class="col-lg-6">
                    <p class="lead lh-180">哪里有什么老天的眷顾，所谓的幸运和成功都源自你自身的努力和付出。请记住，你现在多走的每一步都在拉开着你和别人的差距。要做，就做生活的强者。</p>
                    <p class="lead lh-180">年轻有一万种可能，敢于尝试敢于挑战，努力做最好的自己。</p>
                </div>
            </div>
        </div>
    </section>
    <section class="slice slice-lg">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-6"><img src="static/picture/pople.gif" alt="Image" class="rounded-lg img-fluid">
                    <div class="text-right mt-4"><img src="static/picture/peopletwo.png" alt="Image" class="rounded-lg img-fluid w-50"></div>
                </div>
                <div class="col-lg-7 col-6"><img src="static/picture/people.png" alt="Image" class="rounded-lg img-fluid w-75">
                    <div class="text-right mt-4"><img src="static/picture/peoplethree.png" alt="Image" class="rounded-lg img-fluid"></div>
                </div>
            </div>
        </div>
    </section>
    <!-- <section class="slice slice-lg pt-10 bg-primary">
        <div class="shape-container shape-line shape-position-top shape-orientation-inverse"><svg width="2560px" height="100px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveaspectratio="none" x="0px" y="0px" viewbox="0 0 2560 100" style="enable-background:new 0 0 2560 100" xml:space="preserve"
                class=""><polygon points="2560 0 2560 100 0 100"></polygon></svg></div>
        <div class="container">
            <div class="row row-grid">
                <div class="col-lg-8"><span class="badge badge-warning badge-pill">Made with Bootstrap</span>
                    <h2 class="my-4 text-white">Websites, Dashboards and Web Apps</h2>
                    <p class="lead text-white lh-190">Build one product from the ground up using our dedicated tools. A beautiful ecosystem built to sustain productivity and encourage developers to create modern and professional high-end products.</p>
                </div>
            </div>
            <div class="row mt-6">
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="card shadow-lg rounded-lg border-0 mb-sm-0">
                                <div class="p-4 text-center text-sm-left">
                                    <h3 class="mb-0">10k</h3>
                                    <p class="text-muted mb-0">Customers</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card shadow-lg rounded-lg border-0 mb-sm-0">
                                <div class="p-4 text-center text-sm-left">
                                    <h3 class="mb-0">55k</h3>
                                    <p class="text-muted mb-0">Downloads</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card shadow-lg rounded-lg border-0 mb-sm-0">
                                <div class="p-4 text-center text-sm-left">
                                    <h3 class="mb-0">98%</h3>
                                    <p class="text-muted mb-0">Happy users</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
    <!-- <section class="slice slice-lg pb-5">
        <div class="container">
            <div class="row mb-5 justify-content-center text-center">
                <div class="col-lg-8 col-md-10">
                    <h2 class="mt-4">The amazing team</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-sm-6 mb-5">
                    <div data-animate-hover="2">
                        <div class="animate-this">
                            <a href="#"><img alt="Image placeholder" class="img-fluid rounded shadow" src="static/picture/person-1.jpg"></a>
                        </div>
                        <div class="mt-3">
                            <h5 class="h6 mb-0">Heather Wright</h5>
                            <p class="text-muted text-sm mb-0">Founded &amp; Chairman</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb-5">
                    <div data-animate-hover="2">
                        <div class="animate-this">
                            <a href="#"><img alt="Image placeholder" class="img-fluid rounded shadow" src="static/picture/person-2.jpg"></a>
                        </div>
                        <div class="mt-3">
                            <h5 class="h6 mb-0">Monroe Parker</h5>
                            <p class="text-muted text-sm mb-0">Back End Developer</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb-5">
                    <div data-animate-hover="2">
                        <div class="animate-this">
                            <a href="#"><img alt="Image placeholder" class="img-fluid rounded shadow" src="static/picture/person-3.jpg"></a>
                        </div>
                        <div class="mt-3">
                            <h5 class="h6 mb-0">John Sullivan</h5>
                            <p class="text-muted text-sm mb-0">Front End Developer</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb-5">
                    <div data-animate-hover="2">
                        <div class="animate-this">
                            <a href="#"><img alt="Image placeholder" class="img-fluid rounded shadow" src="static/picture/person-4.jpg"></a>
                        </div>
                        <div class="mt-3">
                            <h5 class="h6 mb-0">James Lewis</h5>
                            <p class="text-muted text-sm mb-0">Vice Chairman</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-sm-6 mb-5 mb-sm-0">
                    <div data-animate-hover="2">
                        <div class="animate-this">
                            <a href="#"><img alt="Image placeholder" class="img-fluid rounded shadow" src="static/picture/person-5.jpg"></a>
                        </div>
                        <div class="mt-3">
                            <h5 class="h6 mb-0">Danielle Levin</h5>
                            <p class="text-muted text-sm mb-0">Sales Manager</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb-5 mb-sm-0">
                    <div data-animate-hover="2">
                        <div class="animate-this">
                            <a href="#"><img alt="Image placeholder" class="img-fluid rounded shadow" src="static/picture/person-6.jpg"></a>
                        </div>
                        <div class="mt-3">
                            <h5 class="h6 mb-0">Martin Gray</h5>
                            <p class="text-muted text-sm mb-0">UI/UX Designer</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb-5 mb-sm-0">
                    <div data-animate-hover="2">
                        <div class="animate-this">
                            <a href="#"><img alt="Image placeholder" class="img-fluid rounded shadow" src="static/picture/person-7.jpg"></a>
                        </div>
                        <div class="mt-3">
                            <h5 class="h6 mb-0">George Squier</h5>
                            <p class="text-muted text-sm mb-0">Marketing Executive</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb-0">
                    <div data-animate-hover="2">
                        <div class="animate-this">
                            <a href="#"><img alt="Image placeholder" class="img-fluid rounded shadow" src="static/picture/person-8.jpg"></a>
                        </div>
                        <div class="mt-3">
                            <h5 class="h6 mb-0">Jesse Stevens</h5>
                            <p class="text-muted text-sm mb-0">Ads Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
    <footer class="position-relative" id="footer-main">
        <div class="footer pt-lg-7 footer-dark bg-dark">
            <div class="shape-container shape-line shape-position-top shape-orientation-inverse"><svg width="2560px" height="100px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveaspectratio="none" x="0px" y="0px" viewbox="0 0 2560 100" style="enable-background:new 0 0 2560 100" xml:space="preserve"
                    class="fill-section-secondary"><polygon points="2560 0 2560 100 0 100"></polygon></svg></div>
            <div class="container pt-4">
                <div class="row">
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <a href=""><img alt="Image placeholder" src="https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/logo3.png" id="footer-logo"></a>
                        <p class="mt-4 text-sm opacity-8 pr-lg-4">让涓涓细流汇成浪奔之涌、点点滴水聚成澎湃之势，迸发出改造大地、更新山河的洪荒之力。让一点一滴的理财习惯，成就更好的你！</p>
                        <ul class="nav mt-4">
                            <li class="nav-item"><a class="nav-link pl-0" href="javascript:;" target="_blank"><i class="fab fa-dribbble"></i></a></li>
                            <li class="nav-item"><a class="nav-link" href="javascript:;" target="_blank"><i class="fab fa-github"></i></a></li>
                            <li class="nav-item"><a class="nav-link" href="javascript:;" target="_blank"><i class="fab fa-instagram"></i></a></li>
                            <li class="nav-item"><a class="nav-link" href="javascript:;" target="_blank"><i class="fab fa-facebook"></i></a></li>
                        </ul>
                    </div>
                    <!-- <div class="col-lg-2 col-6 col-sm-4 ml-lg-auto mb-5 mb-lg-0">
                        <h6 class="heading mb-3">Account</h6>
                        <ul class="list-unstyled">
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Settings</a></li>
                            <li><a href="#">Billing</a></li>
                            <li><a href="#">Notifications</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
                        <h6 class="heading mb-3">About</h6>
                        <ul class="list-unstyled">
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
                        <h6 class="heading mb-3">Company</h6>
                        <ul class="list-unstyled">
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Help center</a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                    </div> -->
                </div>
                <hr class="divider divider-fade divider-dark my-4">
                <div class="row align-items-center justify-content-md-between pb-4">
                    <div class="col-md-6">
                        <div class="copyright text-sm font-weight-bold text-center text-md-left">联系我们 1587973497@qq.com</div>
                        <div class="copyright text-sm font-weight-bold text-center text-md-left">注：以上插图均为本人制作 如果需要请自行去可画寻找素材制作</div>
                    </div>
                    <div class="col-md-6">
                        <ul class="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
                            <li class="nav-item"><a class="nav-link" href="#">Terms</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Privacy</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Cookies</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <let-it-snow
    v-bind="snowConf"
    :show="show">
    </let-it-snow>
  </div>
  <!-- </el-container> -->
</template>

<script>
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
    }
  },
  mounted(){
    this.show = true
  },
  methods:{
    gologin(){
      this.$router.push("/login")
    },
    gohome(){
      this.$router.push("/home")
      // this.$router.go(0) 
      // location.reload()
    },
    godoc(){
      this.$router.push("/doc")
      console.log("doc...");
    },
    goUse(){
      const tokenstr = window.sessionStorage.getItem('token')
      if (!tokenstr) return this.$message.error('请先登录！')
      this.$router.push("/use")
    }
  }
}
</script>

<style lang="less" scoped>
    // <link rel="stylesheet" href="static/css/all.min.css">
    // <link rel="stylesheet" href="static/css/quick-website.css" id="stylesheet">
    @import '../../public/static/css/quick-website.css';
    @import '../../public/static/css/all.min.css';

  .iframe_box{
    width: 100%;
    // height: 15000px;
  }
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
    // width: 100%;
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
  // @keyframes hidePreloader {
  //           0% {
  //               width: 100%;
  //               height: 100%
  //           }
  //           100% {
  //               width: 0;
  //               height: 0
  //           }
  //       }
        
        // body>div.preloader {
        //     position: fixed;
        //     background: #fff;
        //     width: 100%;
        //     height: 100%;
        //     z-index: 1071;
        //     opacity: 0;
        //     transition: opacity .5s ease;
        //     overflow: hidden;
        //     pointer-events: none;
        //     display: flex;
        //     align-items: center;
        //     justify-content: center
        // }
        
        // body:not(.loaded)>div.preloader {
        //     opacity: 1
        // }
        
        body:not(.loaded) {
            overflow: hidden
        }
        
        // body.loaded>div.preloader {
        //     animation: hidePreloader .5s linear .5s forwards
        // }
</style>