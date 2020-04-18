<template>
  <div>
    <good-navbar></good-navbar>
  </div>
</template>

<script>
import GoodInfoNavbar from './childrenComps/GoodInfoNavbar'

import { getGoodsInfo } from 'network/goodinfo'
export default {
  data () {
    return {
      iid: this.$route.params.iid
    }
  },
  created () {
    console.log(this.iid)
    this.getGoodsInfo()
  },
  methods: {
    getGoodsInfo () {
      getGoodsInfo(this.iid).then(res => {
        console.log(res)
      })
    }
  },
  components: {
    'good-navbar': GoodInfoNavbar
  }
}
</script>

<style scoped lang = "less">
</style>
