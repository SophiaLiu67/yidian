
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
Vue.use(Vuex)

const state = {
	username:''
}

const getters = {
	
}

const mutations = {
	changeUsername(state,userID){
		state.username = userID
	},
	exitLogin(state){
		state.username=''
	}
}

const store = new Vuex.Store({
	state,getters,mutations,actions
})

export default store