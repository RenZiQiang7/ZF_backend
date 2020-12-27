<template>
  <div class="main">
    <div>
      筛选条件：
      <select class="lk" v-model="active">
        <option value="mobile">手机号</option>
        <option value="userName">姓名</option>

        <option value="userId">会员号</option>
      </select>
      <input type="text" class="lk1" v-model="iptval" />
      <button class="lk2" @click="sel">查询</button>
      <button class="lk2-1" @click="sel1">刷新</button>
    </div>
    <div class="bs-example" data-example-id="bordered-table">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th><input type="checkbox" />全选</th>
            <th>用户信息</th>
            <th>手机号码</th>
            <th>可用余额</th>
            <th>可用积分</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in list" :key="index">
            <th><input type="checkbox" />点击选中</th>
            <th scope="row">
              {{ item.userName }}
              <div class="l1"><img :src="item.userIcon" alt="" /></div>
              会员号：{{ item.userId }}
            </th>
            <td>{{ item.mobile }}</td>
            <td>{{ item.money }}</td>
            <td>{{ item.integ }}</td>
            <td>
              <button class="lk3">详情</button>
              <button class="lk4">充值</button>
            </td>
          </tr>
        </tbody>
      </table>
      <span>当前共n条信息</span>
      <div class="k1">
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import "../../assets/bootstrap-3.3.7/dist/css/bootstrap.min.css";
import "element-ui/lib/theme-chalk/index.css";

export default {
  data() {
    return {
      list: [],
      configs: [],
      active: "userName",
      iptval: "",
    };
  },
  created() {
    this.$http.post("/v1/viplist").then((ret) => {
      console.log(ret);
      this.list = ret;
    });
  },
  methods: {
    sel() {
      this.$http.post("/v1/viplist").then((ret) => {
        let tmp = [];
        ret.forEach((el) => {
          if (el[this.active] == this.iptval) {
            tmp.push(el);
          }
        });
        this.list = tmp;
      });
    },
    sel1() {
      this.$http.post("/v1/viplist").then((ret) => {
        this.list = ret;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.main {
  width: 60%;
  float: left;
}
.lk {
  margin: 0;
  padding: 0;
  height: 30px;
  outline: none;
  vertical-align: top;
  border-radius: 0;
  border-right: none;
}
.lk1 {
  margin: 0;
  padding: 0;
  height: 30px;
  outline: none;
  border-radius: 0;
  border: 1px solid black;
  vertical-align: middle;
}
.lk2 {
  width: 50px;
  height: 30px;
  background: orangered;
  border: none;
  vertical-align: top;
  outline: none;
  margin-left: 10px;
  border-radius: 10%;
}
.lk3 {
  width: 60px;
  height: 30px;
  margin-right: 20px;
  background: greenyellow;
  border: none;
  outline: none;
}
.lk4 {
  width: 60px;
  height: 30px;
  background: blue;
  border: none;
  outline: none;
}
img {
  width: 90%;
  height: 90%;
}
.l1 {
  width: 60px;
  height: 60px;
}
.k1 {
  float: right;
}
.lk2-1 {
  width: 50px;
  height: 30px;
  background: orangered;
  border: none;
  vertical-align: top;
  outline: none;
  margin-left: 10px;
  border-radius: 10%;
}
</style>