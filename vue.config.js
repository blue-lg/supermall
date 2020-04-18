// module.exports = {
//   configureWebpack: {
//     resolve: {
//       alias: {
//         assets: '@/assets',
//         components: '@/components',
//         network: '@/network',
//         common: '@/common',
//         views: '@/views'
//       }
//     }
//   }
// }

// 配置全局路径别名
const path = require('path')
// eslint-disable-next-line space-before-function-paren
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('network', resolve('src/network'))
      .set('common', resolve('src/common'))
      .set('views', resolve('src/views'))
  }
}
