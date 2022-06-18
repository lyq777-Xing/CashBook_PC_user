<template>
  <div>
    <header class="header" id="header-main">
        <nav class="navbar navbar-main navbar-expand-lg fixed-top navbar-shadow navbar-light bg-white border-bottom" id="navbar-main">
            <div class="container-fluid justify-content-between">
                <div class="navbar-user d-lg-none">
                    <ul class="navbar-nav flex-row align-items-center">
                        <li class="nav-item"><a href="#" class="nav-link nav-link-icon sidenav-toggler" data-action="sidenav-pin" data-target="#sidenav-main"><i data-feather="menu"></i></a></li>
                    </ul>
                </div>
                <span @click="gohome" class="navbar-brand" ><img alt="Image placeholder" src="https://cashbook-1310707740.cos.ap-shanghai.myqcloud.com/logo2%20(2).png" id="navbar-logo">  <sup class="text-muted text-xs text-uppercase">Docs</sup></span>
                <ul class="navbar-nav flex-row align-items-center d-lg-none">
                    <li class="nav-item"><span @click="gohome" class="nav-link nav-link-icon"><i data-feather="eye"></i></span></li>
                </ul>
                <div class="collapse navbar-collapse" id="navbar-main-collapse">
                    <ul class="navbar-nav align-items-center mx-auto">
                        <li class="nav-item"><span class="nav-link" @click="gohome">Getting started</span></li>
                        <!-- <li class="nav-item"><a class="nav-link" href="alerts.html">Components</a></li> -->
                        <!-- <li class="nav-item"><a class="nav-link" href="javascript:;" target="_blank">Support</a></li> -->
                    </ul>
                </div><span @click="gohome" class="btn btn-sm btn-primary ml-4 btn-icon d-none d-lg-inline-flex"><span class="btn-inner--icon"><i data-feather="chevron-left"></i></span> <span @click="gohome" class="btn-inner--text">Back to Blue Whale</span></span></div>
        </nav>
    </header>
    <div class="container-fluid container-docs">
        <nav class="sidenav navbar navbar-vertical navbar-expand-xs navbar-light bg-white" id="sidenav-main">
            <div class="scrollbar-inner px-4">
                <div class="docs-sidebar pt-6 pt-lg-7">
                    <h6 class="mt-4">Getting started</h6>
                    <ul class="nav flex-column">
                        <!-- <li class="nav-item"><a href="quick-start.html" class="nav-link">Quick start</a></li> -->
                        <!-- <li class="nav-item"><a href="build-tools.html" class="nav-link">Build tools</a></li> -->
                    </ul>
                    <!-- <h6 class="mt-4">Styleguide</h6>
                    <ul class="nav flex-column">
                        <li class="nav-item"><a href="colors.html" class="nav-link">Colors</a></li>
                        <li class="nav-item"><a href="typography.html" class="nav-link">Typography</a></li>
                        <li class="nav-item"><a href="icons.html" class="nav-link">Icons</a></li>
                    </ul> -->
                    <!-- <h6 class="mt-4">Components</h6>
                    <ul class="nav flex-column">
                        <li class="nav-item"><a href="alerts.html" class="nav-link">Alerts</a></li>
                        <li class="nav-item"><a href="avatar.html" class="nav-link">Avatar</a></li>
                        <li class="nav-item"><a href="badge.html" class="nav-link">Badge</a></li>
                        <li class="nav-item"><a href="breadcrumb.html" class="nav-link">Breadcrumb</a></li>
                        <li class="nav-item"><a href="buttons.html" class="nav-link">Buttons</a></li>
                        <li class="nav-item"><a href="card.html" class="nav-link">Card</a></li>
                        <li class="nav-item"><a href="collapse.html" class="nav-link">Collapse</a></li>
                        <li class="nav-item"><a href="dropdowns.html" class="nav-link">Dropdowns</a></li>
                        <li class="nav-item"><a href="forms.html" class="nav-link">Forms</a></li>
                        <li class="nav-item"><a href="input-group.html" class="nav-link">Input group</a></li>
                        <li class="nav-item"><a href="modal.html" class="nav-link">Modal</a></li>
                        <li class="nav-item"><a href="navs.html" class="nav-link">Navs</a></li>
                        <li class="nav-item"><a href="navbar.html" class="nav-link">Navbar</a></li>
                        <li class="nav-item"><a href="pagination.html" class="nav-link">Pagination</a></li>
                        <li class="nav-item"><a href="popovers.html" class="nav-link">Popovers</a></li>
                        <li class="nav-item"><a href="progress.html" class="nav-link">Progress</a></li>
                        <li class="nav-item"><a href="spinners.html" class="nav-link">Spinners</a></li>
                        <li class="nav-item"><a href="tables.html" class="nav-link">Tables</a></li>
                        <li class="nav-item"><a href="toasts.html" class="nav-link">Toasts</a></li>
                        <li class="nav-item"><a href="tooltips.html" class="nav-link">Tooltips</a></li>
                    </ul> -->
                    <!-- <h6 class="mt-4">Plugins</h6>
                    <ul class="nav flex-column">
                        <li class="nav-item"><a href="animate.html" class="nav-link">Animate</a></li>
                        <li class="nav-item"><a href="google-maps.html" class="nav-link">Google maps</a></li>
                    </ul> -->
                </div>
            </div>
        </nav>
        <div class="main-content row position-relative pb-5">
            <div class="col-xl-9 docs-content pb-5">
                <div class="docs-title">
                    <h1>Welcome</h1>
                    <p class="lead mb-0"></p>
                </div>
            </div>
            <div class="col-xl-3 docs-sidebar d-none d-xl-block"></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    gohome(){
      this.$router.push("/home")
      // this.$router.go(0) 
      // location.reload()
    },
  }

}
</script>

<style lang="less" scoped>
    // <link rel="stylesheet" href="static/css/all.min.css">
    // <link rel="stylesheet" href="static/css/quick-website.css">
    // <link rel="stylesheet" href="static/css/docs.css">
@import '../../public/static/css/all.min.css';
@import '../../public/static/css/quick-website.css';
@import '../../public/static/css/docs.css';
// @keyframes hidePreloader {
//             0% {
//                 width: 100%;
//                 height: 100%
//             }
//             100% {
//                 width: 0;
//                 height: 0
//             }
//         }
        
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
        
        body:not(.loaded)>div.preloader {
            opacity: 1
        }
        
        body:not(.loaded) {
            overflow: hidden
        }
        
        // body.loaded>div.preloader {
        //     animation: hidePreloader .5s linear .5s forwards
        // }
</style>