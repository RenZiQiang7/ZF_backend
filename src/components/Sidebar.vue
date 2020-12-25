<template>
  <div class="sidebar">
    <div class="avatar">
      <el-row class="demo-avatar demo-basic">
        <el-col :span="12">
          <div class="demo-basic--circle">
            <div class="block">
              <el-avatar :size="50" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
            </div>
           
          </div>
          <div class="sub-title">姓名：张三</div>
        </el-col>
      </el-row>
    </div>

    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>会员管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/viplist">会员列表</el-menu-item>
              <el-menu-item index="1-2">充值设置</el-menu-item>
              <el-menu-item index="1-3">积分设置</el-menu-item>
              <el-menu-item index="1-4">充值记录</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">优惠券</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">优惠券管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">商品列表</el-menu-item>
              <el-menu-item index="1-2">商品分类</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">订单管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">商品订单</el-menu-item>
              <el-menu-item index="1-2">客房订单</el-menu-item>
              <el-menu-item index="1-3">住宿记录</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">客房管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">房态管理</el-menu-item>
              <el-menu-item index="1-2">房型管理</el-menu-item>
              <el-menu-item index="1-3">房号管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">投诉建议管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">投诉建议</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">管理员列表</el-menu-item>
              <el-menu-item index="1-2">角色管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="8">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">设置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">微信设置</el-menu-item>
              <el-menu-item index="1-2">酒店设置</el-menu-item>
              <el-menu-item index="1-3">其他设置</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// import "https://unpkg.com/element-ui/lib/theme-chalk/index.css"

// import "https://unpkg.com/element-ui/lib/index.js"

export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    goTicket() {
      this.$router.push("/ticket");
    },
  },
};
</script>
<style lang="scss" scoped>
.sidebar {
  width: 405px;
  float: left;
}
.avatar{
  width: 202px;
  overflow: hidden;
  background-color: rgb(84, 92, 100);
  text-align: center;
}
</style>


