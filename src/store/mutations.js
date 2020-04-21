import { ADD_COUNT, ADD_TO_CARD } from './mutations_type'

export default {
  // 不建议在mutations中执行太复杂的操作 将太复杂的操作放在actions中

  [ADD_COUNT] (state, item) {
    item.count++
  },

  [ADD_TO_CARD] (state, good) {
    state.goodsList.push(good)
  },

  editCheck (state, iid) {
    const index = state.goodsList.findIndex(item => item.iid === iid)
    console.log(index)
    if (index !== -1) {
      state.goodsList[index].check = !state.goodsList[index].check
    }
    sessionStorage.setItem('goodcar', JSON.stringify(state.goodsList))
  }
}
