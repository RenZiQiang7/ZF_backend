<template>
  <div id="app">
    <Header></Header>
    <Sidebar></Sidebar>
    <router-view/>

  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
export default {
  components:{
    Header,
    Sidebar,
  }
}
</script>

<style lang="scss">

</style>
