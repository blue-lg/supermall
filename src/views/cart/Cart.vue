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
    <van-submit-bar :price="totalPrice" :button-text="'提交订单'+'('+checkLeng+')'" >
      <van-checkbox v-model='allCheckto' @click="allClick" checked-color="#EE8EA1">{{allCheckto?'反选':'全选'}}</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'
import Scroll from '../../components/common/scroll/Scroll'

import CartList from './childrenComps/CartList'

import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    ...mapMutations(['editAllCheck']),
    allClick () {
      this.editAllCheck(this.allCheckto)
    }

  },
  computed: {
    ...mapGetters(['goodsLength', 'totalPrice', 'checkLeng', 'goodsList', 'allCheck']),
    ...mapState(['allCheckStatus']),
    // 判断商品是否全部选中
    allCheckto: {
      get () {
        if (this.goodsList.length === 0) return false
        // const a = this.goodsList.filter(item => item.check !== false)
        // // eslint-disable-next-line no-undef
        // if (a.length === this.goodsList.length) {
        //   return true
        // }
        // return false
        return !(this.goodsList.find(item => !item.check))
      },
      set () { return true }
    }
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
.van-submit-bar__button--danger{
  background-color:#EE8EA1 ;
}
</style>
