<template>
  <div>
    <form class="form-horizontal">
      <div class="input-outer"  >
        <div>
          <img
            id="u24_img"
            class="img"
            src="http://cloud.axureshop.com/gsc/TIQ0AB/69/6f/10/696f1013c84347a5b631f42f4f41f1a6/images/登录/u24.png?token=247288d8a33465c88625f881112f2fe3b3761e64454ec202fd8a706064c0ce8f"
          />
        </div>
        <div class="form-group">
          <div class="col-sm-10 col-posi">
            <div class="img-yh">
              <img
                id="u38_img"
                class="img"
                src="http://cloud.axureshop.com/gsc/TIQ0AB/69/6f/10/696f1013c84347a5b631f42f4f41f1a6/images/登录/u38.png?token=ca8c08d1a9c3f3b8e4933892b5f2af65e80f66d2fbe300db9970d8f28f2347cc"
              />
            </div>
            <div class="input-yh">
              <input
                v-model="mobile"
                type="mobile"
                class="form-control input-size"
                id="inputEmail3"
                placeholder="请输入用户名称"
              />
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-10 col-posi">
            <div class="img-yh">
              <img
                id="u39_img"
                class="img"
                src="http://cloud.axureshop.com/gsc/TIQ0AB/69/6f/10/696f1013c84347a5b631f42f4f41f1a6/images/登录/u39.png?token=f5053723a134d78cc939d5ca280cbb0113705cad100b9b1df0ebef8462507e1e"
              />
            </div>
            <div class="input-yh">
              <input
                v-model="password"
                type="password"
                class="form-control input-size"
                id="inputPassword3"
                placeholder="请输入登录密码"
              />
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-10">
            <button type="button" class="btn btn-default input-size" @click="submit">
              登录
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import Vue from "vue";
// import "../assets/bootstrap-3.3.7/dist/css/bootstrap.min.css";
export default {
  data: function () {
    return {
      mobile: "",
      password: "",
    };
  },
  methods:{
      submit(values) {
            // values就是表单的数据
            // ajax
            this.$http.post("/user/login", {mobile:this.mobile,password:this.password}).then((ret) => {
              console.log(ret);
                if (ret.code == 0) {
                   
                    // 存储jwt
                    this.$store.commit("setJwt", ret.jwt);
                    window.alert(ret.msg)
                        // 判断是否是指定登录成功返回的页面
                        if (this.$route.query.toUrl) {
                            // 使用指定的地址
                            this.$router.push(this.$route.query.toUrl);
                        } else {
                            // 使用默认地址
                            this.$router.push("/");
                        }
                   
                } else {
                    window.alert(ret.msg)
                }
            });
            // console.log("submit", values);
        },
  },
  created() {
    this.$store.commit("hideHeader", false);
    this.$store.commit("hideSidebar", false);
  },
  destroyed(){
    this.$store.commit("hideHeader", true);
    this.$store.commit("hideSidebar", true);
  }
};
</script>


<style lang="scss" scoped>
.input-outer {
  margin: 180px auto;
  height: 200px;
  width: 310px;
}
.input-size {
  width: 268px;
  height: 40px;
  margin-top: 15px;
  padding-left: 35px;
}
.col-posi {
  position: relative;
}
#u24_img {
  border-width: 0px;
  width: 215px;
  height: 44px;
  margin-left: 33px;
  margin-bottom: 50px;
}
.btn-default {
  width: 309px;
  height: 46px;
  box-shadow: none;
  font-family: 微软雅黑;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  color: rgb(255, 255, 255);
  background: rgb(26, 188, 156);
  border-radius: 3px;
  text-align: center;
  line-height: normal;
  border: none;
}
.img-yh {
  border-width: 0px;
  position: absolute;
  left: 23px;
  top: 23px;
  width: 24px;
  height: 24px;
}
</style>