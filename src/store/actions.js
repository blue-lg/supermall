import { ADD_COUNT, ADD_TO_CARD } from './mutations_type'

export default {
  addgoodTocard (context, good) {
    let flag = false
    context.state.goodsList.some(item => {
      if (item.iid === good.iid) {
        flag = true
        context.commit(ADD_COUNT, item)
        return true
      }
    })
    if (!flag) {
      context.commit(ADD_TO_CARD, good)
    }
    // 将添加到购物车里的数据保存在内存中防止丢失
    sessionStorage.setItem('goodcar', JSON.stringify(context.state.goodsList))
  }
}
