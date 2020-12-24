<template>
  <div id="app">
<<<<<<< HEAD
    <div id="nav">
      <router-link to="/"></router-link> |
      <router-link to="/about"></router-link>
    </div>
=======
    <Header></Header>
    <Sidebar></Sidebar>
>>>>>>> 5a1f3e5e45d100e643311d45545b299a7de50e02
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
