<template>
	<div>
		<button @click="cut">increnment -1</button>
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
			"cut" 
			]) 
	}
}
</script>