<template>
  <div id="app">
    <Header v-show="$store.state.showHeader"></Header>
    <Sidebar v-show="$store.state.showSidebar"></Sidebar>
    <router-view/>

  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
export default {
  data:function(){
    return{
      
    }
  },
  components:{
    Header,
    Sidebar,
  },
  created(){
    
  }
}
</script>

<style lang="scss">

</style>
