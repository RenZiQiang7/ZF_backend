<template>
  <div class="main">
    <div class="top">
      <div class="top-lef">
        <select name="" id="">
          <option value="">全部类型</option>
          <option value="">代金券</option>
          <option value="">折扣券</option>
        </select>
        <select name="" id="">
          <option value="">全部状态</option>
          <option value="">未过期</option>
          <option value="">已过期</option>
        </select>
        <input type="text" placeholder="优惠券名称" />
      </div>

      <div class="top-rig">
        <button name="btn-query">查询</button>
        <button name="btn-reset">重置</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$http.post("/v1/login").then((ret) => {
      console.log(ret);
    });
  },
};
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
.main{
    float: left;
    width: 1550px;
}
.top {
  height: 100px;
  background: orange;
  padding: 25px;
  .top-lef {
    float: left;
    padding: 10px;
    select {
      height: 30px;
      width: 150px;
      outline: none;
      border: 1px solid rgb(173, 173, 173);
      border-radius: 5px;
    }
    select:focus {
      border: rgb(24, 144, 255) 2px solid;
    }
    input {
      height: 25px;
      border-radius: 5px;
      outline: none;
      width: 150px;
      border: 2px solid rgb(173, 173, 173);
    }
    input:focus {
      border: rgb(24, 144, 255) 2px solid;
    }
  }

  .top-rig{
      float: right;
       padding: 10px;
      button{
          width: 50px;
          height: 30px;
          background: #fff;
          border-radius: 3px;
          border: 1px solid rgb(189, 187, 187);
          outline: none;
      }
      button[name=btn-query]{
          background:  rgb(24, 144, 255);
          color: white;
      }
  }
}
</style> 