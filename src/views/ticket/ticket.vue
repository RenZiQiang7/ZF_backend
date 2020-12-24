<template>
  <div>优惠券页面</div>
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