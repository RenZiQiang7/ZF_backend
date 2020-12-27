<template>
  <div class="main">
   
    <div class="order-button">
      <el-button type="primary" class="mybutton">全部订单（1000）</el-button>
      <el-button type="primary" class="mybutton" plain
        >待确认（<span style="color: red">1000</span>）</el-button
      >
      <el-button type="primary" class="mybutton" plain
        >已完成（<span style="color: red">1000</span>）</el-button
      >
      <el-button type="primary" class="mybutton" plain
        >已关闭（<span style="color: red">1000</span>）</el-button
      >
    </div>
    <div class="inputouter">
      <div class="block">
        <div class="block">
          <span class="demonstration"></span>
          <el-date-picker
            v-model="value2"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
          >
          </el-date-picker>
        </div>
      </div>
      <div style="margin-top: 15px" class="second">
        <el-input
          placeholder="请输入内容"
          v-model="input3"
          class="input-with-select head-height"
        >
          <el-select
            v-model="select"
            class="select-left head-height"
            slot="prepend"
            placeholder="订单编号"
          >
            <el-option label="订单编号" value="1"></el-option>
            <el-option label="入住人姓名" value="2"></el-option>
            <el-option label="入住人电话" value="3"></el-option>
          </el-select>
          <el-button
            slot="append"
            icon="el-icon-search"
            class="head-height"
            @click="query"
          ></el-button>
        </el-input>
      </div>
    </div>

    <!-- 表格 -->
    <div class="table">
      <el-table
        :data="
          tableData.filter(
            (data) =>
              !search || data.name.toLowerCase().includes(search.toLowerCase())
          )
        "
        style="width: 100%"
      >
        <el-table-column
          label="订单编号"
          prop="orderId"
          align="center"
          width="140"
        >
        </el-table-column>
        <el-table-column
          label="入离时间"
          prop="orderTime"
          align="center"
          width="100"
        >
        </el-table-column>
        <el-table-column label="房型/房号" prop="roomType" align="center">
        </el-table-column>
        <el-table-column
          label="顾客信息"
          prop="customerInfo"
          align="center"
          width="160"
        >
        </el-table-column>
        <el-table-column label="实付金额" prop="pay" align="center">
        </el-table-column>
        <el-table-column label="订单状态" prop="orderState" align="center">
        </el-table-column>
        <el-table-column align="right" width="160">
          <template slot="header">
            <el-input
              v-model="search"
              size="small"
              placeholder="请输入关键字查询"
            />
          </template>
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >确认入住</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除订单</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      search: "",
      value1: "",
      value2: "",
      input3: "",
      select: "",
      tableData: [],
    };
  },

  methods: {
    handleEdit(index, row) {
      console.log( row);
      if (
        window.confirm(
          "点击“确认入住”后，此订单将变更为已完成，之后不可再更改状态"
        )
      ) {
        this.tableData[index].orderState=1;
      }
    },
    handleDelete(index, row) {
      console.log(index, row);
       if (
        window.confirm(
          "确认删除该订单？"
        )
      ) {
        this.tableData.splice(index,1)
      }
      
    },
    getOrderTime(index) {
      return (
        this.tableData[index].orderStartTime +
        "-" +
        this.tableData[index].orderEndTime
      );
    },
    query(){
      let tmp=[];
      this.tableData.forEach(el=>{
        if(el.orderId==this.input3){
          tmp.push(el);
        }
      })
      this.tableData=tmp;
    }
  },
  created() {
    this.$http.get("/v1/roomorder").then((ret) => {
      console.log(ret);
      this.tableData = ret;
    });
  },
};
</script>
<style lang="scss" scoped>
.main {
  width: 65%;
  float: left;
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.input-with-select {
  width: 380px;
  height: 30px;
  line-height: 30px;
}
.select-left {
  width: 120px;
  height: 30px;
}
.head-height {
  height: 20px;
}
.inputouter {
  height: 60px;
  width: 800px;
  float: left;
  margin-top: 15px;
}
.mybutton {
  height: 30px;
}
.el-button {
  padding: 0 15px;
}
.table {
  margin-top: 125px;
}
</style>

  

