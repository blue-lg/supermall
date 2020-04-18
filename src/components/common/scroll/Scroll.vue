<template>
  <div ref="warpper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BeScroll from 'better-scroll'
export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      scroll: null
    }
  },
  created () { },
  mounted () {
    this.scroll = new BeScroll(this.$refs.warpper, {
      click: true,
      // 监听屏幕滑动事件
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    // 屏幕滑动监听位置
    this.scroll.on('scroll', (position) => {
      // console.log(position)
      this.$emit('scroll', position)
    })
    this.scroll.on('pullingUp', () => {
      // console.log(1111)
      this.$emit('pullingUp')
    })
  },
  methods: {
    scrollTo (x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    refresh () {
      this.scroll && this.scroll.refresh()
    }
  }
}
</script>

<style scoped lang = "less">
</style>
