import { request } from './request'

export function getGoodsInfo (iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
