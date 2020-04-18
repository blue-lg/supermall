/* eslint-disable space-before-function-paren */
import { request } from './request'

// eslint-disable-next-line space-before-function-paren
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
