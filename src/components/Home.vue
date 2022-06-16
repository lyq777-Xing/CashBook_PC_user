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
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container">
            <span class="navbar-brand" @click="gohome"><img alt="Image placeholder" src="static/picture/蓝鲸记账 (2).png" id="navbar-logo"> </span><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mt-4 mt-lg-0 ml-auto">
                    <li class="nav-item"><span class="nav-link" >Overview</span></li>
                    <li class="nav-item dropdown dropdown-animate" data-toggle="hover"><a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                        <div class="dropdown-menu dropdown-menu-single">
                          <span @click="gohome" class="dropdown-item">Homepage</span> 
                          <span class="dropdown-item" @click="goabout">About us</span>
                        </div>
                    </li>
                    <li class="nav-item"><span class="nav-link"  @click="godoc">Docs</span></li>
                    <li class="nav-item"><span class="nav-link" @click="gologin">Login</span></li>
                </ul>
                <span class="navbar-btn btn btn-sm btn-primary d-none d-lg-inline-block ml-3" @click="goUse">Use Free</span>
                <!-- <div class="d-lg-none text-center"><a href="javascript:;" class="btn btn-block btn-sm btn-warning">See more details</a></div> -->
                </div>
            </div>
    </nav>
    <section class="slice py-7">
        <div class="container">
            <div class="row row-grid align-items-center">
                <div class="col-12 col-md-5 col-lg-6 order-md-2 text-center">
                    <figure class="w-100"><img alt="Image placeholder" src="static/picture/fangzi.png" class="img-fluid mw-md-120"></figure>
                </div>
                <div class="col-12 col-md-7 col-lg-6 order-md-1 pr-md-5">
                    <h1 class="display-4 text-center text-md-left mb-3">It's time to start <strong class="text-primary">bookkeeping</strong></h1>
                    <p class="lead text-center text-md-left text-muted">是时候开始记账了</p>
                    <!-- <div class="text-center text-md-left mt-5"><a href="javascript:;" class="btn btn-primary btn-icon" target="_blank"><span class="btn-inner--text">Get started</span> <span class="btn-inner--icon"><i data-feather="chevron-right"></i></span> </a><a href="javascript:;" class="btn btn-neutral btn-icon d-none d-lg-inline-block" -->
                    <!-- target="_blank">See Illustrations</a></div> -->
                </div>
            </div>
        </div>
    </section>
    <section class="slice slice-lg pt-lg-6 pb-0 pb-lg-6 bg-section-secondary">
        <div class="container">
            <div class="row mb-5 justify-content-center text-center">
                <div class="col-lg-6"><span class="badge badge-soft-success badge-pill badge-lg">Get started</span>
                    <h2 class="mt-4">不论用户端还是管理端都是精心制作</h2>
                    <div class="mt-2">
                        <p class="lead lh-180">Both the user and the administrator side are carefully crafted.</p>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body pb-5">
                            <div class="pt-4 pb-5"><img src="static/picture/huahua.png" class="img-fluid img-center" style="height:150px" alt="Illustration"></div>
                            <h5 class="h4 lh-130 mb-3">远道而来这世间，想必是因为热爱吧。</h5>
                            <p class="text-muted mb-0">Live today well without being disturbed by regrets and record the little bits of life.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body pb-5">
                            <div class="pt-4 pb-5"><img src="static/picture/zipai.png" class="img-fluid img-center" style="height:150px" alt="Illustration"></div>
                            <h5 class="h4 lh-130 mb-3">自己喜欢的日子，就是最美的日子;适合自己的活法，就是最好的活法。</h5>
                            <p class="text-muted mb-0">Whether what you experience is joy or sorrow, whether the people you meet are good or bad, they can always teach you something and then help you become a better person.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body pb-5">
                            <div class="pt-4 pb-5"><img src="static/picture/boy.png" class="img-fluid img-center" style="height:150px" alt="Illustration"></div>
                            <h5 class="h4 lh-130 mb-3">无论在哪个年龄段，我想我们都应该学会对身边的人温柔一些。</h5>
                            <p class="text-muted mb-0">We all live in the gutters, but there are still people looking up at the stars.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="pt-4 pb-5" style="width: 300px;margin: 0 auto;"><img src="static/picture/xiaokeai.png" class="img-fluid img-center" style="width: 100%;" alt="Illustration"></div>
    </section>
    <section class="slice slice-lg">
        <div class="container">
            <div class="py-6">
                <div class="row row-grid justify-content-between align-items-center">
                    <div class="col-lg-5 order-lg-2">
                        <h5 class="h3">仍然有开在泥泞里的花有明晃晃的夏天</h5>
                        <p class="lead my-4">利用蓝鲸记账记录每天的细小支出与收入，最后收获的将是理财的技巧</p>
                        <ul class="list-unstyled mb-0">
                            <li class="py-2">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <div class="icon icon-shape bg-primary text-white icon-sm rounded-circle mr-3"><i class="fas fa-file-invoice"></i></div>
                                    </div>
                                    <div><span class="h6 mb-0">记录开销与收入</span></div>
                                </div>
                            </li>
                            <li class="py-2">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <div class="icon icon-shape bg-primary text-white icon-sm rounded-circle mr-3"><i class="fas fa-store-alt"></i></div>
                                    </div>
                                    <div><span class="h6 mb-0">记录生活的一点一滴</span></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="card mb-0 mr-lg-5">
                            <div class="card-body p-2"><img alt="Image placeholder" src="static/picture/shihuoliya.png" class="img-fluid shadow rounded paa"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-6">
                <div class="row row-grid justify-content-between align-items-center">
                    <div class="col-lg-5">
                        <h5 class="h3">判定收获并不是每天都有产量还要看你是否种下种子</h5>
                        <p class="lead my-4">或许使用蓝鲸记账就是你埋下的一粒种子.</p>
                        <ul class="list-unstyled mb-0">
                            <li class="py-2">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <div class="icon icon-shape bg-primary text-white icon-sm rounded-circle mr-3"><i class="fas fa-file-invoice"></i></div>
                                    </div>
                                    <div><span class="h6 mb-0">终将会遇到春天发芽</span></div>
                                </div>
                            </li>
                            <li class="py-2">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <div class="icon icon-shape bg-primary text-white icon-sm rounded-circle mr-3"><i class="fas fa-store-alt"></i></div>
                                    </div>
                                    <div><span class="h6 mb-0">也会收获秋天的果实</span></div>
                                </div>
                            </li>
                            <li class="py-2">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <div class="icon icon-shape bg-primary text-white icon-sm rounded-circle mr-3"><i class="fas fa-store-alt"></i></div>
                                    </div>
                                    <div><span class="h6 mb-0">最后成为更好的自己</span></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-6">
                        <div class="card mb-0 ml-lg-5">
                            <div class="card-body p-2"><img alt="Image placeholder" src="static/picture/girl.png" class="img-fluid shadow rounded paa"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="slice slice-lg bg-section-dark pt-5 pt-lg-8">
        <div class="shape-container shape-line shape-position-top shape-orientation-inverse"><svg width="2560px" height="100px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveaspectratio="none" x="0px" y="0px" viewbox="0 0 2560 100" style="enable-background:new 0 0 2560 100" xml:space="preserve"
                class=""><polygon points="2560 0 2560 100 0 100"></polygon></svg></div>
        <div class="container position-relative zindex-100">
            <div class="col">
                <div class="row justify-content-center">
                    <div class="col-md-10 text-center">
                        <div class="mt-4 mb-6">
                            <h2 class="h1 text-white">Are you ready to grow faster?</h2>
                            <h4 class="text-white mt-3">山再高，往上攀，总能登顶；路再长，走下去，定能到达。</h4>
                            <!-- <a href="#" class="btn btn-primary btn-icon mt-4">Learn more</a> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="slice pt-0">
        <div class="container position-relative zindex-100">
            <div class="row">
                <div class="col-xl-4 col-sm-6 mt-n7">
                    <div class="card">
                        <div class="d-flex p-5">
                            <div><span class="badge badge-warning badge-pill">up</span></div>
                            <div class="pl-4">
                                <h5 class="lh-130">梦想奋斗</h5>
                                <p class="text-muted mb-0"> 每次归程，都是为了更好出发；每次停歇，都是为了积攒力量。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-sm-6 mt-sm-n7">
                    <div class="card">
                        <div class="d-flex p-5">
                            <div><span class="badge badge-success badge-pill">up</span></div>
                            <div class="pl-4">
                                <h5 class="lh-130">青春成长</h5>
                                <p class="text-muted mb-0">影响世界，年轻的你我或许都该这样追求。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-12 col-sm-6 mt-xl-n7">
                    <div class="card">
                        <div class="d-flex p-5">
                            <div><span class="badge badge-danger badge-pill">up</span></div>
                            <div class="pl-3">
                                <h5 class="lh-130">责任使命</h5>
                                <p class="text-muted mb-0"> 巨大的用户群体绝不仅意味着金山银山，还意味着责任如山。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-4 col-sm-6">
                    <div class="card">
                        <div class="d-flex p-5">
                            <div><span class="badge badge-warning badge-pill">up</span></div>
                            <div class="pl-4">
                                <h5 class="lh-130">自律自省</h5>
                                <p class="text-muted mb-0">事后的反应再迅疾，也比不上未雨绸缪。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-sm-6">
                    <div class="card">
                        <div class="d-flex p-5">
                            <div><span class="badge badge-success badge-pill">up</span></div>
                            <div class="pl-4">
                                <h5 class="lh-130">道德修养</h5>
                                <p class="text-muted mb-0">即便不与人为善，也别作恶，因为你的无礼拉低你的人品。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-12 col-sm-6">
                    <div class="card">
                        <div class="d-flex p-5">
                            <div><span class="badge badge-danger badge-pill">up</span></div>
                            <div class="pl-3">
                                <h5 class="lh-130">坚持奋进</h5>
                                <p class="text-muted mb-0">择一事，终一生</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer class="position-relative" id="footer-main">
        <div class="footer pt-lg-7 footer-dark bg-dark">
            <div class="shape-container shape-line shape-position-top shape-orientation-inverse"><svg width="2560px" height="100px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveaspectratio="none" x="0px" y="0px" viewbox="0 0 2560 100" style="enable-background:new 0 0 2560 100" xml:space="preserve"
                    class="fill-section-secondary"><polygon points="2560 0 2560 100 0 100"></polygon></svg></div>
            <div class="container pt-4">
                <div class="row">
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <a href=""><img alt="Image placeholder" src="static/picture/蓝鲸记账 (3).png" id="footer-logo"></a>
                        <p class="mt-4 text-sm opacity-8 pr-lg-4">让涓涓细流汇成浪奔之涌、点点滴水聚成澎湃之势，迸发出改造大地、更新山河的洪荒之力。让一点一滴的理财习惯，成就更好的你！</p>
                        <ul class="nav mt-4">
                            <li class="nav-item"><a class="nav-link pl-0" href="javascript:;" target="_blank"><i class="fab fa-dribbble"></i></a></li>
                            <li class="nav-item"><a class="nav-link" href="https://gitee.com/njjlyq/cashbook" target="_blank"><i class="fab fa-github"></i></a></li>
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
  <!-- </el-container> -->
</div>
</template>

<script>

// import js from '../plugins/script.js'
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
      // // 监听窗口大小是否发生变化，发生变化则进行刷新
      // window.onresize = () => {
      // return (() => {
      //   this.$nextTick(() => {
      //     location.reload()
      //   });
      // })();
    // };
    },
    created(){
      // location.reload()
    },
    methods:{
      gohome(){
        this.$router.push("/home")
      },
      godoc(){
        this.$router.push("/doc")
      },
      gologin(){
        this.$router.push("/login")
      },
      goabout(){
        this.$router.push("/aboutme")
      },
      goUse(){
        const tokenstr = window.sessionStorage.getItem('token')
        if (!tokenstr) return this.$message.error('请先登录！')
        this.$router.push("/use")
        swal("hhh!", {
          icon: "success",
          text:'你好呀',
          buttons: false,
          timer: 2000,
        });
      }
    }
  }
</script>

<style lang="less" scoped>
@import '../../public/static/css/all.min.css';
@import '../../public/static/css/quick-website.css';

.paa{
  width: 100% !important;
}
    // @keyframes hidePreloader {
    //     0% {
    //         width: 100%;
    //         height: 100%
    //     }
    //     100% {
    //         width: 0;
    //         height: 0
    //     }
    // }
    
    body {
        overflow-x: hidden;
        overflow-y: hidden;
    }
    
    body>div.preloader {
        position: fixed;
        background: #fff;
        width: 100%;
        height: 100%;
        z-index: 1071;
        opacity: 0;
        transition: opacity .5s ease;
        overflow: hidden;
        pointer-events: none;
        display: flex;
        align-items: center;
        justify-content: center
    }
    
    body:not(.loaded)>div.preloader {
        opacity: 1
    }
    
    body:not(.loaded) {
        overflow: hidden
    }
    
    // body.loaded>div.preloader {
    //     animation: hidePreloader .5s linear .5s forwards
    // }

    .fa,
.fab,
.fad,
.fal,
.far,
.fas {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
}

.fa-lg {
    font-size: 1.33333em;
    line-height: .75em;
    vertical-align: -.0667em;
}

.fa-xs {
    font-size: .75em;
}

.fa-sm {
    font-size: .875em;
}

.fa-1x {
    font-size: 1em;
}

.fa-2x {
    font-size: 2em;
}

.fa-3x {
    font-size: 3em;
}

.fa-4x {
    font-size: 4em;
}

.fa-5x {
    font-size: 5em;
}

.fa-6x {
    font-size: 6em;
}

.fa-7x {
    font-size: 7em;
}

.fa-8x {
    font-size: 8em;
}

.fa-9x {
    font-size: 9em;
}

.fa-10x {
    font-size: 10em;
}

.fa-fw {
    text-align: center;
    width: 1.25em;
}

.fa-ul {
    list-style-type: none;
    margin-left: 2.5em;
    padding-left: 0;
}

.fa-ul>li {
    position: relative;
}

.fa-li {
    left: -2em;
    position: absolute;
    text-align: center;
    width: 2em;
    line-height: inherit;
}

.fa-border {
    border: .08em solid #eee;
    border-radius: .1em;
    padding: .2em .25em .15em;
}

.fa-pull-left {
    float: left;
}

.fa-pull-right {
    float: right;
}

.fa.fa-pull-left,
.fab.fa-pull-left,
.fal.fa-pull-left,
.far.fa-pull-left,
.fas.fa-pull-left {
    margin-right: .3em;
}

.fa.fa-pull-right,
.fab.fa-pull-right,
.fal.fa-pull-right,
.far.fa-pull-right,
.fas.fa-pull-right {
    margin-left: .3em;
}

.fa-spin {
    -webkit-animation: fa-spin 2s linear infinite;
    animation: fa-spin 2s linear infinite;
}

.fa-pulse {
    -webkit-animation: fa-spin 1s steps(8) infinite;
    animation: fa-spin 1s steps(8) infinite;
}

@-webkit-keyframes fa-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn);
    }
}

@keyframes fa-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn);
    }
}

.fa-rotate-90 {
    -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
}

.fa-rotate-180 {
    -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}

.fa-rotate-270 {
    -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
}

.fa-flip-horizontal {
    -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
}

.fa-flip-vertical {
    -webkit-transform: scaleY(-1);
    transform: scaleY(-1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical,
.fa-flip-vertical {
    -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
    -webkit-transform: scale(-1);
    transform: scale(-1);
}

:root .fa-flip-both,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270 {
    -webkit-filter: none;
    filter: none;
}

.fa-stack {
    display: inline-block;
    height: 2em;
    line-height: 2em;
    position: relative;
    vertical-align: middle;
    width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
    left: 0;
    position: absolute;
    text-align: center;
    width: 100%;
}

.fa-stack-1x {
    line-height: inherit;
}

.fa-stack-2x {
    font-size: 2em;
}

.fa-inverse {
    color: #fff;
}

.fa-500px:before {
    content: "\f26e";
}

.fa-accessible-icon:before {
    content: "\f368";
}

.fa-accusoft:before {
    content: "\f369";
}

.fa-acquisitions-incorporated:before {
    content: "\f6af";
}

.fa-ad:before {
    content: "\f641";
}

.fa-address-book:before {
    content: "\f2b9";
}

.fa-address-card:before {
    content: "\f2bb";
}

.fa-adjust:before {
    content: "\f042";
}

.fa-adn:before {
    content: "\f170";
}

.fa-adobe:before {
    content: "\f778";
}

.fa-adversal:before {
    content: "\f36a";
}

.fa-affiliatetheme:before {
    content: "\f36b";
}

.fa-air-freshener:before {
    content: "\f5d0";
}

.fa-airbnb:before {
    content: "\f834";
}

.fa-algolia:before {
    content: "\f36c";
}

.fa-align-center:before {
    content: "\f037";
}

.fa-align-justify:before {
    content: "\f039";
}

.fa-align-left:before {
    content: "\f036";
}

.fa-align-right:before {
    content: "\f038";
}

.fa-alipay:before {
    content: "\f642";
}

.fa-allergies:before {
    content: "\f461";
}

.fa-amazon:before {
    content: "\f270";
}

.fa-amazon-pay:before {
    content: "\f42c";
}

.fa-ambulance:before {
    content: "\f0f9";
}

.fa-american-sign-language-interpreting:before {
    content: "\f2a3";
}

.fa-amilia:before {
    content: "\f36d";
}

.fa-anchor:before {
    content: "\f13d";
}

.fa-android:before {
    content: "\f17b";
}

.fa-angellist:before {
    content: "\f209";
}

.fa-angle-double-down:before {
    content: "\f103";
}

.fa-angle-double-left:before {
    content: "\f100";
}

.fa-angle-double-right:before {
    content: "\f101";
}

.fa-angle-double-up:before {
    content: "\f102";
}

.fa-angle-down:before {
    content: "\f107";
}

.fa-angle-left:before {
    content: "\f104";
}

.fa-angle-right:before {
    content: "\f105";
}

.fa-angle-up:before {
    content: "\f106";
}

.fa-angry:before {
    content: "\f556";
}

.fa-angrycreative:before {
    content: "\f36e";
}

.fa-angular:before {
    content: "\f420";
}

.fa-ankh:before {
    content: "\f644";
}

.fa-app-store:before {
    content: "\f36f";
}

.fa-app-store-ios:before {
    content: "\f370";
}

.fa-apper:before {
    content: "\f371";
}

.fa-apple:before {
    content: "\f179";
}

.fa-apple-alt:before {
    content: "\f5d1";
}

.fa-apple-pay:before {
    content: "\f415";
}

.fa-archive:before {
    content: "\f187";
}

.fa-archway:before {
    content: "\f557";
}

.fa-arrow-alt-circle-down:before {
    content: "\f358";
}

.fa-arrow-alt-circle-left:before {
    content: "\f359";
}

.fa-arrow-alt-circle-right:before {
    content: "\f35a";
}

.fa-arrow-alt-circle-up:before {
    content: "\f35b";
}

.fa-arrow-circle-down:before {
    content: "\f0ab";
}

.fa-arrow-circle-left:before {
    content: "\f0a8";
}

.fa-arrow-circle-right:before {
    content: "\f0a9";
}

.fa-arrow-circle-up:before {
    content: "\f0aa";
}

.fa-arrow-down:before {
    content: "\f063";
}

.fa-arrow-left:before {
    content: "\f060";
}

.fa-arrow-right:before {
    content: "\f061";
}

.fa-arrow-up:before {
    content: "\f062";
}

.fa-arrows-alt:before {
    content: "\f0b2";
}

.fa-arrows-alt-h:before {
    content: "\f337";
}

.fa-arrows-alt-v:before {
    content: "\f338";
}

.fa-artstation:before {
    content: "\f77a";
}

.fa-assistive-listening-systems:before {
    content: "\f2a2";
}

.fa-asterisk:before {
    content: "\f069";
}

.fa-asymmetrik:before {
    content: "\f372";
}

.fa-at:before {
    content: "\f1fa";
}

.fa-atlas:before {
    content: "\f558";
}

.fa-atlassian:before {
    content: "\f77b";
}

.fa-atom:before {
    content: "\f5d2";
}

.fa-audible:before {
    content: "\f373";
}

.fa-audio-description:before {
    content: "\f29e";
}

.fa-autoprefixer:before {
    content: "\f41c";
}

.fa-avianex:before {
    content: "\f374";
}

.fa-aviato:before {
    content: "\f421";
}

.fa-award:before {
    content: "\f559";
}

.fa-aws:before {
    content: "\f375";
}

.fa-baby:before {
    content: "\f77c";
}


        // .el-container{
        //   width: 100%;
        //   height: 100%;
        // }
        </style>