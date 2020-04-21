import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex)

// 将保存在内存中的购物车里的数据 赋值给status中
const goodsList = JSON.parse(sessionStorage.getItem('goodcar') || '[]')

// 将vuex的状态抽离出去 方便以后管理
const state = {
  goodsList
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {}
})
