const increment=function({commit,state}){
	commit("increment",1)
}
const cut=function({commit,state}){
	commit("cut",1)
}
export{
	increment,
	cut
}