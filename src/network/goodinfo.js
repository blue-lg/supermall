import { request } from './request'

export function getGoodsInfo (iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function GetRecommend () {
  return request({
    url: '/recommend'
  })
}

// 创建一个 Goods 类 存放商品详情页面轮播图下的详情区域 所需要的全部数据
export class Goods {
  constructor (itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}
export class Shop {
  constructor (shopInfo) {
    this.name = shopInfo.name
    this.shopLogo = shopInfo.shopLogo
    this.cGoods = shopInfo.cGoods
    this.cSells = shopInfo.cSells
    this.score = shopInfo.score
    this.allGoodsUrl = shopInfo.allGoodsUrl
    this.cfans = shopInfo.cFans
  }
}
