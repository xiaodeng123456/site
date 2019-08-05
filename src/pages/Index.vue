<template>
  <div class="index">
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-header style="text-align: right; font-size: 18px; height:90px">
        <div class="index-title">
          <div class="fl" style="margin-left:48px; height:90px">
            <img src="@/assets/cut_logo.png" alt="礼品联盟" style="display: inline-block; vertical-align: middle;">
          </div>
        </div>
        <div class="breadcrumb">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="index-setting">
          <img src="@/assets/home/cut_04_user.png" alt="" style="display: inline-block; vertical-align: middle;">

          <el-dropdown placement=bottom-end>
            <span class="el-dropdown-link">
              <span class="user-name">user</span>
              <img src="@/assets/home/cut_04_packup.png" alt="" style="display: inline-block; vertical-align: middle;">
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

        </div>

      </el-header>
      <el-container style="height: 100%">
        <el-aside width="300px" style="background-color: #1d2938; text-align: left; font-size: 12px;">
          <el-menu :default-active="selectIndex" router background-color="#1d2938" text-color="#85919e"
            active-text-color="#3378fc" @select="handleSelect" @open="handleOpen" @close="handleClose">
            <el-menu-item index="home" class="single-m">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>

            <el-submenu index="2" style="">
              <template slot="title"><i class="el-icon-setting"></i>空包购买</template>
              <el-menu-item-group>
                <template slot="title">独享空包</template>
                <el-menu-item index="user">立刻购买</el-menu-item>
                <el-menu-item index="table">购买记录</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <template slot="title">空闲空包</template>
                <el-menu-item index="1-3">立刻购买</el-menu-item>
                <el-menu-item index="user">购买记录</el-menu-item>
              </el-menu-item-group>
              <el-menu-item index="1-5" class="menu-fahuo">发货地址</el-menu-item>
            </el-submenu>

            <el-menu-item index="3" class="single-m">
              <i class="el-icon-menu"></i>
              <span slot="title">真包业务</span>
            </el-menu-item>

            <el-submenu index="4">
              <template slot="title"><i class="el-icon-setting"></i>底单管理</template>
              <el-menu-item index="4-1">底单管理</el-menu-item>
              <el-menu-item index="4-2">物流查询</el-menu-item>
            </el-submenu>

            <el-submenu index="5">
              <template slot="title"><i class="el-icon-setting"></i>财务管理</template>
              <el-menu-item-group>
                <el-menu-item index="5-1">充值中心</el-menu-item>
                <el-menu-item index="5-2">充值记录</el-menu-item>
                <el-menu-item index="5-3">消费记录</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="6">
              <template slot="title"><i class="el-icon-setting"></i>推广赚钱</template>
              <el-menu-item-group>
                <el-menu-item index="6-1">我要推广</el-menu-item>
                <el-menu-item index="6-2">我的下线</el-menu-item>
                <el-menu-item index="6-3">我的提成</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-menu-item index="7" class="single-m">
              <i class="el-icon-menu"></i>
              <span slot="title">账号管理</span>
            </el-menu-item>

            <el-submenu index="99">
              <template slot="title"><i class="el-icon-setting"></i>导航三</template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="99-1">选项1</el-menu-item>
                <el-menu-item index="99-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="99-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="99-4">
                <template slot="title">选项4</template>
                <el-menu-item index="99-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-aside>



        <el-main width="100%">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
  .index {
    height: 100%;
  }
  .el-main {
    background-color: #f2f2f5;
    padding: 24px;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }

  .el-header {
    padding: 0;
    background-color: #ffffff;
    color: #ffffff;
    line-height: 90px;
    height: 90px;
  }

  .index-titie-content {
    height: 90px;
    line-height: 90px;
  }

  .liping-content {
    height: 50px;
    line-height: 50px;
  }

  .liping-content1 {
    height: 20px;
    line-height: 20px;
  }

  .index-title {
    height: 90px;
    text-align: center;
    background: -webkit-linear-gradient(left, #1774ff, #1e91fc);
    /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #1774ff, #1e91fc);
    /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #1774ff, #1e91fc);
    /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #1774ff, #1e91fc);
    /* 标准的语法（必须放在最后） */
    float: left;
    width: 300px;
  }

  .breadcrumb {
    height: 90px;
    float: left;
    margin-left: 48px;
  }

  .el-breadcrumb {
    line-height: 90px;
    font-size: 20px;
    color: #333333;
  }

  .user-name {
    font-family: 'PingFang SC';
    color: #333333;
    font-size: 18px;
    padding-left: 15px;
    padding-right: 10px;
  }

  .index-setting {
    padding-right: 24px;
    float: right;
    width: 300px;
    height: 90px;
    line-height: 90px;
  }

  /* .el-submenu,
  .single-m {
  } */

  .index .el-submenu__title,
  .single-m {
    height: 61px;
    font-size: 18px;
    padding-left: 48px !important;
    border-bottom: 1px solid #4a5460;
    border-bottom-color: #4a5460
  }

  .index .el-menu-item-group__title {
    padding-left: 20px !important;
  }

  .menu-fahuo {
    padding-left: 20px !important;
  }

</style>

<script>
  export default {
    data() {
      return {
        selectIndex: ''
      }
    },
    mounted() {
      this.selectIndex = this.$route.fullPath
      //console.log(window.localStorage.getItem('token'))
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(keyPath[1])
        //this.selectIndex = keyPath[1]
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };

</script>
