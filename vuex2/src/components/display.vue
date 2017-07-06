<template>
	<div>
		<h4>Count  is  {{count}}</h4>
	</div>
</template>
<script>
import {mapGetters} from "vuex"
export default{
	computed:{
		...mapGetters([
			'count'
		])
	}
	
}
</script>
<style>
	
</style>