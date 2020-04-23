/* eslint-disable prefer-promise-reject-errors */
import { ADD_COUNT, ADD_TO_CARD } from './mutations_type'

export default {
  addgoodTocard (context, good) {
    return new Promise((resolve, reject) => {
      let flag = false
      context.state.goodsList.some(item => {
        if (item.iid === good.iid) {
          flag = true
          context.commit(ADD_COUNT, item)
          resolve('商品数量加一')
          reject('添加失败')
          return true
        }
      })
      if (!flag) {
        context.commit(ADD_TO_CARD, good)
        resolve('成功加入购物车')
        reject('添加失败')
      }
      // 将添加到购物车里的数据保存在内存中防止丢失
      sessionStorage.setItem('goodcar', JSON.stringify(context.state.goodsList))
    })
  }
}
