<template>
  <div class="sidebar">
    <!-- 会员管理项 -->
    <div>
      会员管理
      <ul>
        <li @click="goVip">会员列表</li>
        <li>充值设置</li>
        <li>积分设置</li>
        <li>充值记录</li>
      </ul>
    </div>

    <!-- 优惠券 -->
    <div>
      优惠券
      <ul>
        <li @click="goTicket">优惠券管理</li>
      </ul>
    </div>
    <!-- 商品管理 -->
    <div>
      商品管理
      <ul>
        <li>商品列表</li>
        <li>商品分类</li>
      </ul>
    </div>

    <!-- 商品管理 -->
    <div>
      订单管理
      <ul>
        <li>商品订单</li>
        <li>客房订单</li>
        <li>住宿记录</li>
      </ul>
    </div>

    <!-- 客房管理 -->
    <div>
      客房管理
      <ul>
        <li>房态管理</li>
        <li>房型管理</li>
        <li>房号管理</li>
      </ul>
    </div>

    <!-- 投诉建议管理 -->
    <div>
      投诉建议管理
      <ul>
        <li>投诉建议</li>
      </ul>
    </div>

    <!-- 用户管理 -->
    <div>
      用户管理
      <ul>
        <li>管理员列表</li>
        <li>角色管理</li>
      </ul>
    </div>

    <!-- 设置 -->
    <div>
      设置
      <ul>
        <li>微信设置</li>
        <li>酒店设置</li>
        <li>其他设置</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
    methods:{
        goTicket(){
            this.$router.push('/ticket');
        },
         goVip(){
            this.$router.push('/viplist');
        },
    }
}
</script>
<style lang="scss" scoped>
    .sidebar{
        width: 405px;
        max-height: 910px;
        overflow: scroll;
        float: left;
        border-right: 1px solid rgb(189, 189, 189);
    }
</style>