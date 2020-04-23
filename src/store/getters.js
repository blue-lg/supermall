export default {
  goodsLength (state) {
    return state.goodsList.length
  },
  goodsList (state) {
    return state.goodsList
  },
  // allCheck (state) {
  //   if (state.goodsList.length === 0) return false
  //   const a = state.goodsList.filter(item => item.check !== false)
  //   // eslint-disable-next-line no-undef
  //   if (a.length === state.goodsList.length) {
  //     return true
  //   }
  //   return false
  // },
  // 计算购物车总价格
  totalPrice (state) {
    let total = 0
    const checktrue = state.goodsList.filter(item => item.check)
    checktrue.forEach(item => {
      const price1 = item.price * item.count
      total = total + parseInt(price1)
    })
    return total * 100
  },
  // 计算选中多少件商品
  checkLeng (state) {
    let total = 0
    const a = state.goodsList.filter(item => item.check)
    a.forEach(item => {
      total += item.count
    })
    return total
  }
}
