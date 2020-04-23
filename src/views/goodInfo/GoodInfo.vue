<template>
  <div class="goodInfo">
    <!-- 顶部tab栏 -->
    <good-navbar class="good_nav" @activeItem="activeItem" ref="goodsNav"></good-navbar>
    <scroll class="sctoll" ref="scroll" @scroll='scroll' :probe-type="3">
      <!-- 轮播图 -->
      <Carousel class="carousel" :name="'good'" :banners="topImage"></Carousel>
      <!-- 商品详情 -->
      <good-base-info :goods="goods"></good-base-info>
      <!-- 商家详情 -->
      <good-shop-info :shop='shop'></good-shop-info>
      <!-- 商品参数 -->
      <div ref="prams">
        <ul>
          <li>参数1</li>
          <li>参数2</li>
          <li>参数3</li>
          <li>参数4</li>
          <li>参数5</li>
          <li>参数6</li>
          <li>参数7</li>
          <li>参数8</li>
          <li>参数9</li>
          <li>参数10</li>
          <li>参数11</li>
          <li>参数12</li>
          <li>参数13</li>
          <li>参数14</li>
          <li>参数15</li>
          <li>参数16</li>
          <li>参数17</li>
          <li>参数18</li>
          <li>参数19</li>
          <li>参数20</li>
        </ul>
      </div>
      <!-- 商品评论 -->
      <div ref="comment">
        <ul>
          <li>评论1</li>
          <li>评论2</li>
          <li>评论3</li>
          <li>评论4</li>
          <li>评论5</li>
          <li>评论6</li>
          <li>评论7</li>
          <li>评论8</li>
          <li>评论9</li>
          <li>评论10</li>
          <li>评论11</li>
          <li>评论12</li>
          <li>评论13</li>
          <li>评论14</li>
          <li>评论15</li>
          <li>评论16</li>
          <li>评论17</li>
          <li>评论18</li>
          <li>评论19</li>
          <li>评论20</li>
          <li>评论21</li>
          <li>评论22</li>
          <li>评论23</li>
          <li>评论24</li>
          <li>评论25</li>
          <li>评论26</li>
          <li>评论27</li>
          <li>评论28</li>
          <li>评论29</li>
          <li>评论30</li>
        </ul>
      </div>
      <!-- 商品推荐 -->
      <good-list ref="recommend" :goodlist="recommend"></good-list>
    </scroll>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服"  />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="shop-o" text="店铺"  />
      <van-goods-action-button type="warning" @click="addGoodsToCart" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>

    <!-- 点击返回顶部按钮 -->
    <back-top @click.native="backtop" v-show="showBackTop"></back-top>
  </div>

</template>

<script>
import GoodInfoNavbar from './childrenComps/GoodInfoNavbar'
import GoodBaseInfo from './childrenComps/GoodBaseInfo'
import GoodShopInfo from './childrenComps/GoodShopInfo'

import { getGoodsInfo, Goods, Shop, GetRecommend } from 'network/goodinfo'

import GoodList from 'components/content/goods/GoodList'
import BackTop from '../../components/content/backTop/BackTop'

import Carousel from 'components/common/swipe/carousel'
import Scroll from 'components/common/scroll/Scroll'

import { mapMutations, mapActions } from 'vuex'

import { Toast } from 'vant'
export default {
  data () {
    return {
      iid: this.$route.params.iid,
      // 顶部轮播图图片
      topImage: null,
      // 轮播图下方的商品详情需要的数据
      goods: {},
      // 商家信息
      shop: {},
      // 推荐商品
      recommend: [],
      themeTopYs: [],
      themeTop: null,
      currentIndex: 0,
      // 控制返回顶部按钮的显示与隐藏
      showBackTop: false
    }
  },
  created () {
    // console.log(this.iid)
    this.getGoodsInfo()
    this.getRecommend()
  },
  mounted () {
    // 调用防抖函数  防止事件调用过于频繁使用 影响性能
    const refresh = this.debounce(this.$refs.scroll.refresh, 500)
    this.$bus.$on('imgLoad', () => {
      refresh()
      this.themeTop()
    })
    // 在图片加载完成后获取各个模块的offsettop的值 并使用防抖函数
    this.themeTop = this.debounce(() => {
      this.themeTopYs = []
      // 获取每个模块距离顶部的距离
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.prams.offsetTop - 44)
      this.themeTopYs.push(this.$refs.comment.offsetTop - 44)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 44)
      // console.log(this.themeTopYs)
    })
  },
  updated () {
  },
  methods: {
    ...mapMutations([]),
    ...mapActions(['addgoodTocard']),
    getGoodsInfo () {
      getGoodsInfo(this.iid).then(res => {
        const data = res.result
        // console.log(data)

        this.topImage = data.itemInfo.topImages
        // 获取商品详情信息  根据goodsinfo中的 Goods 构造函数 将所需要的数据抽离出来
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        // console.log(this.goods)

        this.shop = new Shop(data.shopInfo)
      })
    },
    async getRecommend () {
      const { data: res } = await GetRecommend()
      this.recommend = res.list
    },
    // 防止事件调用过于频繁使用防抖动函数进行处理
    debounce (fn, wait) {
      let timer = null
      return function (...ages) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          fn.apply(this, ages)
        }, wait)
      }
    },
    // 顶部tab栏的点击事件
    activeItem (index) {
      // console.log(index)
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 300)
    },
    // 监控屏幕滑动事件
    scroll (position) {
      const positiony = Math.abs(position.y)
      const length = this.themeTopYs.length
      for (let i = 0; i < length; i++) {
        // eslint-disable-next-line no-mixed-operators
        if (this.currentIndex !== i && (i < length - 1 && positiony > this.themeTopYs[i] && positiony < this.themeTopYs[i + 1]) || (i === length - 1 && this.themeTopYs[i] < positiony)) {
          this.currentIndex = i
          // console.log(this.currentIndex)
          this.$refs.goodsNav.activeIndex = this.currentIndex
        }
      }
      // 判断屏幕滑动位置是否大于1000 显示返回顶部按钮
      this.showBackTop = positiony > 1000
    },
    backtop () {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    // 点击添加到购物车
    addGoodsToCart () {
      const goods = {}
      goods.img = this.topImage[0]
      goods.price = this.goods.realPrice
      goods.title = this.goods.title
      goods.desc = this.goods.desc
      goods.iid = this.iid
      goods.check = true
      goods.count = 1
      this.addgoodTocard(goods).then(res => {
        Toast.success(res)
      }).catch(res => {
        Toast.fail(res)
      })
    }
  },
  components: {
    'good-navbar': GoodInfoNavbar,
    Carousel,
    GoodBaseInfo,
    GoodShopInfo,
    Scroll,
    GoodList,
    BackTop
  }
}
</script>

<style scoped lang = "less">
.goodInfo {
  height: 100vh;
  position: relative;
  z-index: 9;
  background-color: #fff;
  .good_nav {
    position: relative;
    z-index: 9;
    background-color: white;
  }
  .sctoll {
    height: calc(100% - 94px);
    overflow: hidden;
  }
}
</style>
