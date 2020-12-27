<template>
<div>
  <h1>消费详情</h1>
    <div class="hj">
       <div class="block">
    <span class="demonstration"></span>
    <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  </div>
  
  <div class="z1">
      <select class="mn"><option>全部类型</option><option>商品购买</option><option>订房</option></select>
      </div>
      <div class="z5">
      <select class="lk" v-model="active">
        <option value="mobile">手机号</option>
        <option value="userName">姓名</option>

        <option value="userId">会员号</option>
      </select>
      <input type="text" class="lk1" v-model="iptval" />
      </div>
    <div class="z">
  <el-row class="nb">
    <el-button type="primary" @click="sel">查询</el-button>
    <el-button type="success" @click="sel1">重置</el-button>
    </el-row>
    </div>
  
<div class="bs-example" data-example-id="bordered-table">
      <table class="table table-bordered" >
        <thead>
          <tr>
            <th>订单编号</th>
            <th>用户信息</th>
            <th>联系方式</th>
            <th>可用余额</th>
            <th>可用积分</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody >
          <tr v-for="(item, index) in list" :key="index" class="j1">
            <th>{{item.reference}}</th>
            <th scope="row">{{item.userName}}
            <div class="l1"><img :src="item.userIcon" alt="" /></div>
              会员号：{{item.userId}}
            </th>
            <td>{{item.mobile}}</td>
            <td>{{item.conmoney}}</td>
            <td>{{item.integ}}</td>
            <td><button class="z6">详情</button></td>
          </tr>
        </tbody>
      </table>
      </div>
      <span>当前共n条信息</span>
      <div class="k1">
      <el-pagination
  background
  layout="prev, pager, next"  
  :total="1000">
</el-pagination>
      </div>
    </div>
    </div>
</template>

<script>
import "element-ui/lib/theme-chalk/index.css";
import "../../assets/bootstrap-3.3.7/dist/css/bootstrap.min.css";
import "element-ui/lib/theme-chalk/index.css";
  export default {
    data() {
      return {
          pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        value2: '',
        list:[],
      active: "mobile",
      iptval: "",   
      };
    },
    created(){
      this.$http.post("/v1/consume").then((ret) => {
      console.log(ret);
      this.list = ret;
    });
    },
    methods: {
    sel() {
      this.$http.post("/v1/consume").then((ret) => {
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
    this.$http.post("/v1/consume").then((ret) => {
      this.list = ret;
    });
    },
  }
  
  };
</script>

<style lang="scss" scoped>

.hj{

    width:60% ;
    position: relative;
    float: left;
   margin-top: 10px;
}
.z{
  float: right;
  position: absolute;
  top: 0;
  right: 0;
}
.z1{
  
  float: left;
  position: absolute;
  top: 0;
  right: 465px;
  outline: none;
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
.z5{
  float: left;
  position: absolute;
  top: 0;
  left: 500px;
}
.z6{
  width: 50px;
  outline: none;
  border: none;
  color: #ffffff;
  background: #1890ff;
}
img {
  width: 90%;
  height: 90%;
}
.l1 {
  width: 60px;
  height: 60px;
}
td{
  text-align: center;
}
.k1 {
  float: right;
}
</style>