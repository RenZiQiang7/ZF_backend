<template>
    <div>
        <div class="top">
          <div class="top1">
              输入搜索: <input type="text" placeholder="商品名称/商品货号">
          </div>
          <div class="top2">
              商品分类：<select><option>银色星芒</option></select>
          </div>
          <div>
              <div>
                  上下架：<select><option>全部</option></select>
                  <button class="f1">查询</button>
                  <button class="f2">+添加商品</button>
              </div>
              
          </div>
        </div>
          <div class="min">
    <div class="bs-example" data-example-id="bordered-table">
      <table class="table table-bordered" >
        <thead>
          <tr>
            <th>商品图片</th>
            <th>商品信息</th>
            <th>价格/货号</th>
            <th>标签</th>
            <th>排序</th>
            <th>销量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody >
          <tr>
              <th scope="row">
                  暂无图片
            <div class="l1"><img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180802%2F02%2F1533147979-unQiDaSMYv.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611453844&t=eece690f7c283cce99f89fcdb55da553" alt="" /></div>
            </th>
            <th>银色星芒刺绣网纱底裤</th>
            <td>
                价格：¥100.00
                <br>
                 货号：No86577
                 </td>
            <td>上架：
                <el-switch
                v-model="value"
                active-color="#13ce66"
                inactive-color="#ff4949">
                </el-switch>
            </td>
            <td><input type="text" placeholder="999" class="f3"></td>
            <td>100</td>
            <td>
                <button class="z6">编辑</button>
                <button class="z7">删除</button>
                </td>
          </tr>
        </tbody>
        <tbody >
          <tr>
              <th scope="row">
                  暂无图片
            <div class="l1"><img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180802%2F02%2F1533147979-unQiDaSMYv.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611453844&t=eece690f7c283cce99f89fcdb55da553" alt="" /></div>
            </th>
            <th>银色星芒刺绣网纱底裤</th>
            <td>
                价格：¥100.00
                <br>
                 货号：No86577
                 </td>
            <td>上架：
                <el-switch
                v-model="value1"
                active-color="#13ce66"
                inactive-color="#ff4949">
                </el-switch>
            </td>
            <td><input type="text" placeholder="1" class="f3"></td>
            <td>100</td>
            <td>
                <button class="z6">编辑</button>
                <button class="z7">删除</button>
                </td>
          </tr>
        </tbody>
        <tbody >
          <tr>
              <th scope="row">
                  暂无图片
            <div class="l1"><img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180802%2F02%2F1533147979-unQiDaSMYv.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611453844&t=eece690f7c283cce99f89fcdb55da553" alt="" /></div>
            </th>
            <th>银色星芒刺绣网纱底裤</th>
            <td>
                价格：¥100.00
                <br>
                 货号：No86577
                 </td>
            <td>上架：
                <el-switch
                v-model="value2"
                active-color="#13ce66"
                inactive-color="#ff4949">
                </el-switch>
            </td>
            <td><input type="text" placeholder="1" class="f3"></td>
            <td>100</td>
            <td>
                <button class="z6">编辑</button>
                <button class="z7">删除</button>
                </td>
          </tr>
        </tbody>
        <tbody >
          <tr>
              <th scope="row">
                  暂无图片
            <div class="l1"><img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180802%2F02%2F1533147979-unQiDaSMYv.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611453844&t=eece690f7c283cce99f89fcdb55da553" alt="" /></div>
            </th>
            <th>银色星芒刺绣网纱底裤</th>
            <td>
                价格：¥100.00
                <br>
                 货号：No86577
                 </td>
            <td>上架：
                <el-switch
                v-model="value3"
                active-color="#13ce66"
                inactive-color="#ff4949">
                </el-switch>
            </td>
            <td><input type="text" placeholder="1" class="f3"></td>
            <td>100</td>
            <td >
                <button class="z6">编辑</button>
                <button class="z7">删除</button>
                </td>
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
import "../../assets/bootstrap-3.3.7/dist/css/bootstrap.min.css";
export default {
    data() {
      return {
        value: true,
        value1: true,
        value2: true,
        value3: true,
      }
    }
}
</script>

<style lang="scss" scoped>
.top{
    float: left;
    width: 60%;
    background: #f3f3f3;
    height: 110px;
    margin-top: 20px;
   
}
.top1{
    float: left;
    outline: none;
}
.top2{
    float: left;
    outline: none;
   
}
.f1{
    width: 60px;
    border-radius: 0;
    border: none;
    outline: none;
    background: #ffffff;;
    margin-left: 20px;
}
.f2{
    width: 100px;
    height: 30px;
    background: #1890ff;
    border: none;
    outline: none;
    float: right;
    margin-right: 50px;
}
.min{
    width: 60%;
    float: left;
}
img {
  width: 90%;
  height: 90%;
}
.l1 {
  width: 60px;
  height: 60px;
}
.f3{
    width: 60px;
    outline: none;
}
.k1{
    float: right;
}
.z6{
    outline: none;
    border: none;
    float: left;
}
.z7{
    outline: none;
    border: none;
    float: right;
}
td{
    vertical-align: middle;
}
</style>