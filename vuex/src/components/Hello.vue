<template>
  <div class="hello">
    <h3>welcom vuex-dome</h3>
    <input type="button" value="增加" @click="increment">
    <input type="button" value="减少" @click="decrement">
    <input type="button" value="偶数才能点击" @click="clickold">
      <input type="button" value="点击异步" @click="clickasync">
    <div>
      现在的数字是：{{count}} 是{{getold}}
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default{
  computed: mapGetters([
    'count',
    'getold'
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'clickold',
    'clickasync'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
