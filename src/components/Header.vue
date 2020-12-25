<template>
  <div >
    <el-breadcrumb separator="/" class="header">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.header {
  height: 35px;
  border-bottom: 1px solid black;
  background: rgb(233, 232, 232);
  font-size: 25px;
  padding-left: 130px;
}
</style>