<template>
  <div class="cart">
    <!-- 顶部nav栏 -->
    <cart-navbar class="navbar">
      <div slot="conent">购物车({{goodsLength}})</div>
    </cart-navbar>
    <scroll class="scroll" ref="scroll">
      <!-- 购物车数据列表 -->
      <cart-list></cart-list>
    </scroll>
    <!-- 提交区域 -->
    <van-submit-bar :price="3050" button-text="提交订单" >
      <van-checkbox v-model='allCheck' @click="allCheckClick" checked-color="#EE8EA1">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'
import Scroll from '../../components/common/scroll/Scroll'

import CartList from './childrenComps/CartList'

import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {}
  },
  created () {
    console.log(this.allCheck)
  },
  methods: {
    ...mapMutations(['editAllCheck']),
    allCheckClick () {
    }

  },
  computed: {
    ...mapGetters(['goodsLength', 'allCheck'])
  },
  components: {
    'cart-navbar': Navbar,
    Scroll,
    CartList
  },
  activated () {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped lang="less">
.cart {
  height: 100vh;
  .navbar {
    background-color: #ee8ea0;
    color: #fff;
  }
  .scroll {
    height: calc(100% - 138px);
    overflow: hidden;
  }
}
.van-submit-bar{
  position: relative;
  left: 0;
  right: 0;
  bottom: 6px;
  background-color: #eee;
}
</style>
