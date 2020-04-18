/* eslint-disable space-before-function-paren */
import axios from 'axios'
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/h8',
    timeout: 5000
  })
  // axios 拦截器
  instance.interceptors.request.use(
    config => {
      return config
    },
    err => {
      console.log(err)
    }
  )
  // 相应拦截器
  instance.interceptors.response.use(
    result => {
      return result.data
    },
    err => {
      console.log(err)
    }
  )

  return instance(config)
}
