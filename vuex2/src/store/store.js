import Vue from "vue"
import Vuex from "vuex"
import * as actions from "./actions"
import * as getters from './getters'
Vue.use(Vuex)
console.log(actions)
const state={
	count: 1
}
const mutations={
	increment(state,num){
		if(state.count<6){
			state.count = state.count+num
		}else{
			state.count = state.count
		}
		
		console.log(state.count)
	},
	cut(state,num){
		if(state.count>0){
			state.count = state.count-num
		}else{
			state.count = 0
		}
		
	}
}
 
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})