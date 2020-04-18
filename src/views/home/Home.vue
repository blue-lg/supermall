<template>
  <div class="home">
    <!-- 上方导航栏 -->
    <my-navbar class="home-nav">
      <div slot="conent">购物街</div>
    </my-navbar>
    <!-- tab吸顶效果 -->
    <my-tabcontrol @tabClick='tabClick' class="tabcontol" v-show="tabConIsFlex" ref="tabControlRef1" :tab="['流行','新款','精选']">
    </my-tabcontrol>

    <scroll class="content" ref="backtop" :probeType="3" @scroll="scrollConent" :pullUpLoad="true">
      <!-- 轮播图区域 -->
      <my-carousel :banners="banners" @swipeImgLoad="swipeImgLoad"></my-carousel>
      <!-- 分类区域 -->
      <my-remcomment :recommends="recommends"></my-remcomment>
      <!-- 本周流行 -->
      <my-feature></my-feature>
      <!-- tab栏 -->
      <my-tabcontrol @tabClick='tabClick' ref="tabControlRef" :tab="['流行','新款','精选']">
      </my-tabcontrol>
      <good-list :goodlist="showGood"></good-list>
    </scroll>

    <!-- 返回首页按钮的组件 -->
    <back-top @click.native="backtop" v-show="showBackTop"></back-top>
  </div>
</template>

<script>
import { getHomeMultidata, getHomeGoods } from 'network/home'

import GoodList from 'components/content/goods/GoodList'
// 点击返回顶部的组件
import BackTop from 'components/content/backTop/BackTop'

import Navbar from 'components/common/navbar/Navbar'
// 导入轮播图组件
import carousel from 'components/common/swipe/carousel'
import TabControl from 'components/common/tabcontrol/TabControl'
// 导入better-scroll 组件
import Scroll from 'components/common/scroll/Scroll'

// 导入轮播图下方分类组件
import RemcommendView from './childrenComps/recommendView'
import FeatureView from './childrenComps/FeatureView'
export default {
  data () {
    return {
      // 首页所需要的全部数据对象
      // result: {}
      // 轮播图数据
      banners: [],
      recommends: [],
      keywords: [],
      dKeywords: [],
      // 首页商品所有数据
      goodList: {
        pop: { pages: 0, list: [] },
        new: { pages: 0, list: [] },
        sell: { pages: 0, list: [] }
      },
      currenttype: 'pop',
      showBackTop: false,
      tabControlRefoffsetTop: 0,
      tabConIsFlex: false
    }
  },
  created () {
    // 调用network 中home.js 中 getHomeMultidata 方法 获取到首页需要的全部数据
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted () {
    // 使用防抖动函数防止事件调用过去频繁
    const refresh = this.debounce(this.$refs.backtop.refresh, 500)
    this.$bus.$on('imgLoad', () => {
      // this.$refs.backtop.refresh()
      refresh()
    })
  },
  methods: {
    // 获取首页轮播图与其他数据
    getHomeMultidata () {
      getHomeMultidata().then(res => {
        // this.result = res.data
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
        this.keywords = res.data.keywords.list
        this.dKeywords = res.data.dKeyword.list
      }).catch(err => err)
    },
    // 根据type和pages获取首页商品所有数据
    getHomeGoods (type) {
      const page = this.goodList[type].pages + 1
      getHomeGoods(type, page).then(res => {
        // this.goodList[type].list = res.data.list
        this.goodList[type].list = this.goodList[type].list.concat(res.data.list)
        this.goodList[type].pages += 1
      })
    },
    // tab栏的点击事件 传递索引值
    tabClick (index) {
      switch (index) {
        case 0: this.currenttype = 'pop'
          break
        case 1: this.currenttype = 'new'
          break
        case 2: this.currenttype = 'sell'
          break
      }
      this.$refs.tabControlRef1.tabactive = index
      this.$refs.tabControlRef.tabactive = index
    },
    // 点击按钮返回顶部
    backtop () {
      // 根据$refs 拿到 scroll组件中de scroll 的数据对象 使用scrolltop 可返回顶部
      this.$refs.backtop.scrollTo(0, 0, 500)
    },
    // scroll组件传递过来的屏幕滑动事件
    scrollConent (position) {
      this.showBackTop = Math.abs(position.y) > 1000
      this.tabConIsFlex = Math.abs(position.y) >= this.tabControlRefoffsetTop
      console.log(this.tabConIsFlex)
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
    // 轮播图组件传过来的事件  监听轮播图图片加载完毕时触发
    swipeImgLoad () {
      this.tabControlRefoffsetTop = this.$refs.tabControlRef.$el.offsetTop
      console.log(this.tabControlRefoffsetTop)
    }
  },
  components: {
    'my-navbar': Navbar,
    'my-tabcontrol': TabControl,
    'my-carousel': carousel,
    'my-remcomment': RemcommendView,
    'my-feature': FeatureView,
    GoodList,
    Scroll,
    BackTop
  },
  computed: {
    showGood () {
      return this.goodList[this.currenttype].list
    }
  }
}
</script>

<style scoped>
.home {
  height: 100vh;
  padding: 44px 0 44px 0;
  position: relative;
}
.home-nav {
  background-color: #ee8ea0;
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
}

.tabcontol {
  /* position: sticky;
  top: 44px;
  z-index: 99999; */
  /* position: fixed;
  top: 44px;
  left: 0;right: 0; */
  position: relative;
  z-index: 99;
}
/* .content {
  height: calc(100% - 92px);
  overflow: hidden;
  margin-top: 44px;
} */
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;

}
</style>
