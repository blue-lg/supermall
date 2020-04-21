export default {
  goodsLength (state) {
    return state.goodsList.length
  },
  allCheck (state) {
    const a = state.goodsList.filter(item => item.check !== false)

    // eslint-disable-next-line no-undef
    if (a.length === state.goodsList.length) {
      return true
    }
    return false
  }
}
