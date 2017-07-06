<template>
  <div class="hello">
     <Increment></Increment>
     <Display></Display>
     <Cut></Cut>
  </div>
</template>

<script>
import Increment from "./increment"
import Display from "./display"
import Cut from './cut'
 
export default {
  name: 'hello',
  data () {
    return {
       
    }
  },
  components: {
    Increment,
    Display,
    Cut
  },
 
  created(){//手动触发的事件
    // console.log(store)
    //  store.commit("add",1)
    //  store.commit("update","hello world")
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
