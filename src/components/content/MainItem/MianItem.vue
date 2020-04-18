<template>
  <div>
    <my-tabbar>
      <my-tabbar-item path="/home" activeColor="red">
        <!-- 此处防止路径引用过长  在weboack-base中配置 -->
        <img slot="item-icon" src="~assets/images/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/images/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </my-tabbar-item>
      <my-tabbar-item path="/category" activeColor="red">
        <img slot="item-icon" src="~assets/images/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/images/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </my-tabbar-item>
      <my-tabbar-item path="/cart" activeColor="red">
        <img slot="item-icon" src="~assets/images/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="~assets/images/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </my-tabbar-item>
      <my-tabbar-item path="/profile" activeColor="red">
        <img slot="item-icon" src="~assets/images/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/images/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </my-tabbar-item>
    </my-tabbar>
  </div>
</template>

<script>
import Tabbar from 'components/common/tabbar/Tabbar'
import TabbarItem from 'components/common/tabbar/TabbarItem'
export default {
  data () {
    return {}
  },
  created () { },
  methods: {},
  components: {
    'my-tabbar-item': TabbarItem,
    'my-tabbar': Tabbar
  }
}
</script>

<style scoped>
</style>
