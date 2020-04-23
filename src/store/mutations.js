import { ADD_COUNT, ADD_TO_CARD } from './mutations_type'

export default {
  // 不建议在mutations中执行太复杂的操作 将太复杂的操作放在actions中

  [ADD_COUNT] (state, item) {
    item.count++
  },

  [ADD_TO_CARD] (state, good) {
    state.goodsList.push(good)
  },
  // 修改商品选中状态
  editCheck (state, iid) {
    const index = state.goodsList.findIndex(item => item.iid === iid)
    console.log(index)
    if (index !== -1) {
      state.goodsList[index].check = !state.goodsList[index].check
    }
    sessionStorage.setItem('goodcar', JSON.stringify(state.goodsList))
  },
  // 点击全选按钮
  editAllCheck (state, all) {
    // const i = state.goodsList.findIndex(item => !item.check)
    // console.log(i)

    // if (i !== -1) {
    //   state.goodsList.forEach(item => {
    //     item.check = false
    //   })
    // } else {
    //   state.goodsList.forEach(item => {
    //     item.check = true
    //   })
    // }
    // state.goodsList.forEach(item => item.check === !all)

    if (all) {
      state.goodsList.forEach(item => (item.check = false))
    } else {
      state.goodsList.forEach(item => (item.check = true))
    }

    sessionStorage.setItem('goodcar', JSON.stringify(state.goodsList))
  }
}
