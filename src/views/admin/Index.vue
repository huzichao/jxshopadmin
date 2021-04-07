<template>
    <div class="admin">
        <!-- this is an admin -->

        <!-- 左侧 -->
        <div class="menu " v-bind:style="{ width: menuWidth }">
            <!-- <el-radio-group v-model="isHiddenMenu" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group> -->

            <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                :collapse="isHiddenMenu" background-color="#263445" text-color="rgb(191,203,217)"
                :collapse-transition="false">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="iconfont icon-xiazai45"></i>
                        <span slot="title">后台首页</span>
                    </template>
                    <el-menu-item-group>
                        <router-link to="/">
                            <el-menu-item index="1-1"><span class="iconfont icon-shezhi"></span>欢迎页</el-menu-item>
                        </router-link>
                        <router-link to="visiter">
                            <el-menu-item index="1-2"><span class="iconfont icon-shezhi"></span>访客记录</el-menu-item>
                        </router-link>
                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="2">
                    <template slot="title">
                        <i class="iconfont icon-caidan"></i>
                        <span slot="title">商品分类</span>
                    </template>
                    <el-menu-item-group>
                        <router-link to="catelist">
                            <el-menu-item index="2-1"><span class="iconfont icon-shezhi"></span>分类列表</el-menu-item>
                        </router-link>
                        <router-link to="listcreate">
                            <el-menu-item index="2-2"><span class="iconfont icon-shezhi"></span>分类创建</el-menu-item>
                        </router-link>
                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="3">
                    <template slot="title">
                        <i class="iconfont icon-shuxing"></i>
                        <span slot="title">商品属性</span>
                    </template>
                    <el-menu-item-group>
                        <router-link to="goodtype">
                            <el-menu-item index="3-1"><span class="iconfont icon-shezhi"></span>商品类型</el-menu-item>
                        </router-link>
                        <router-link to="goodcreate">
                            <el-menu-item index="3-2"><span class="iconfont icon-shezhi"></span>商品创建</el-menu-item>
                        </router-link>
                        <router-link to="goodattr">
                            <el-menu-item index="3-3"><span class="iconfont icon-shezhi"></span>商品属性</el-menu-item>
                        </router-link>
                        <router-link to="attrcreate">
                            <el-menu-item index="3-4"><span class="iconfont icon-shezhi"></span>属性创建</el-menu-item>
                        </router-link>
                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="4">
                    <template slot="title">
                        <i class="iconfont icon-shangpin"></i>
                        <span slot="title">商品管理</span>
                    </template>
                    <el-menu-item-group>
                        <router-link to="goods">
                            <el-menu-item index="4-1"><span class="iconfont icon-shezhi"></span>商品列表</el-menu-item>
                        </router-link>
                        <router-link to="create">
                            <el-menu-item index="4-2"><span class="iconfont icon-shezhi"></span>商品创建</el-menu-item>
                        </router-link>
                        <router-link to="recycle">
                            <el-menu-item index="4-3"><span class="iconfont icon-shezhi"></span>商品回收站</el-menu-item>
                        </router-link>
                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="5">
                    <template slot="title">
                        <i class="iconfont icon-dingdan"></i>
                        <span slot="title">订单管理</span>
                    </template>
                    <el-menu-item-group>
                        <router-link to="recycles">
                            <el-menu-item index="5-2"><span class="iconfont icon-shezhi"></span>订单管理</el-menu-item>
                        </router-link>
                        <router-link to="orders">
                            <el-menu-item index="5-3"><span class="iconfont icon-shezhi"></span>订单回收站</el-menu-item>
                        </router-link>

                        <router-link to="/">
                            <el-menu-item index="5-4"><span class="iconfont icon-shezhi"></span>订单统计</el-menu-item>
                        </router-link>
                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="6">
                    <template slot="title">
                        <i class="iconfont icon-yonghu"></i>
                        <span slot="title">用户管理</span>
                    </template>
                    <el-menu-item-group>
                        <router-link to="users">
                            <el-menu-item index="6-1"><span class="iconfont icon-shezhi"></span>用户列表</el-menu-item>
                        </router-link>
                        <router-link to="userscreate">
                            <el-menu-item index="6-2"><span class="iconfont icon-shezhi"></span>用户创建</el-menu-item>
                        </router-link>
                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="7">
                    <template slot="title">
                        <i class="iconfont icon-fenghuangxiangmutubiao_quanxian"></i>
                        <span slot="title">角色管理</span>
                    </template>
                    <el-menu-item-group>
                        <router-link to="rolelist">
                            <el-menu-item index="7-1"><span class="iconfont icon-shezhi"></span>角色列表</el-menu-item>
                        </router-link>
                        <router-link to="rolecreate">
                            <el-menu-item index="7-2"><span class="iconfont icon-shezhi"></span>角色创建</el-menu-item>
                        </router-link>
                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="8">
                    <template slot="title">
                        <i class="iconfont icon-quanxian"></i>
                        <span slot="title">权限管理</span>
                    </template>
                    <el-menu-item-group>
                        <router-link to="power">
                            <el-menu-item index="8-1"><span class="iconfont icon-shezhi"></span>权限列表</el-menu-item>
                        </router-link>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </div>
        <!-- 右侧 -->
        <div class="main">
            <div class="top">
                <div class="l">
                    <div class="btn" @click="handleMenu">
                        <!-- <i class="el-icon-s-fold"></i> -->
                        <i v-bind:class="menuIcon"></i>
                    </div>
                    <div class="bread_crumb">
                        <el-breadcrumb separator="/">
                            <el-breadcrumb-item :to="{ path: '/' }">后台首页</el-breadcrumb-item>
                            <el-breadcrumb-item>欢迎页</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                </div>

                <div class="r">
                    <span>admin（超级管理员）</span>
                    <i class="el-icon-switch-button tb"></i>
                    <i class="el-icon-full-screen tb" @click=" handleFullScreen"></i>
                </div>

            </div>
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            //是否隐藏菜单
            isHiddenMenu: false,
            menuWidth: "200px",
            menuIcon: "el-icon-s-fold",
        };
    },
    methods: {
        // 全屏事件
        handleFullScreen () {
            let element = document.documentElement;
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
            }
            this.fullscreen = !this.fullscreen;
        },
        handleChangevalue () { },
        handleMenu () {
            this.isHiddenMenu = !this.isHiddenMenu;
            this.menuWidth = this.isHiddenMenu ? "64px" : "200px";
            this.menuIcon = this.isHiddenMenu ? "el-icon-s-unfold" : "el-icon-s-fold";
        },
        handleOpen (key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose (key, keyPath) {
            console.log(key, keyPath);
        },
    },
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
.admin {
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    .menu {
        a {
            text-decoration: none;
            color: rgb(191, 203, 217);
        }
        .el-menu {
            width: 100%;
            height: 100%;
        }
        width: 200px;
        height: 100%;
        background: #263445;
        transition: width 0.28s;
        ul {
            border: none;
        }
        .iconfont {
            margin-right: 5px;
            font-size: 16px;
        }
    }
    .main {
        flex: 1;
        // background: red;
        overflow-y: scroll;

        .top {
            width: 100%;
            height: 50px;
            margin-bottom: 30px;
            // background: blue;
            box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
            display: flex;
            justify-content: space-between;
            .l {
                width: 300px;
                height: 100%;
                // background: yellow;
                overflow: hidden;
                line-height: 50px;
                .btn {
                    width: 50px;
                    height: 50px;
                    text-align: center;
                    float: left;
                    line-height: 50px;
                    cursor: pointer;
                    i {
                        font-size: 20px;
                    }
                }
                .btn:hover {
                    background: #ccc;
                    cursor: pointer;
                }
                .bread_crumb {
                    width: 250px;
                    height: 50px;
                    float: left;
                    line-height: 50px;
                    // background: green;
                    .el-breadcrumb {
                        line-height: 50px;
                    }
                }
            }
            .r {
                width: 240px;
                height: 100%;
                // background: pink;
                line-height: 50px;
                text-align: center;
                font-size: 16px;
                span {
                    margin-bottom: 3px;
                    display: inline-block;
                    vertical-align: middle;
                    cursor: pointer;
                }
                .tb {
                    font-size: 20px;
                    margin: 0 5px;
                    display: inline-block;
                    cursor: pointer;
                    vertical-align: middle;
                }
            }
        }

        .content {
            width: 96%;
            height: 80%;
            min-height: 100px;
            margin: auto;

            .bac {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
}
</style>
