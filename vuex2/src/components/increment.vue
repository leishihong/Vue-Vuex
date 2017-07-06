<template>
	<div>
		<button @click="increment">increment+1</button>
	</div>
</template>
<script>
import {mapActions} from "vuex"
export default{
	created(){
		console.log(mapActions)
	},
	methods:{
		...mapActions([
			"increment" 
			]) 
	}
}
</script>
<style>
	
</style>