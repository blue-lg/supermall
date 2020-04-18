<template>
  <div>
    <!-- 公共的轮播图组件 -->
    <van-swipe class="my-swipe" :autoplay="3000">
      <van-swipe-item v-for="item in banners" :key="item.acm">
        <a :href="item.link">
          <img :src="item.image" @load="imgLoad">
        </a>
      </van-swipe-item>
    </van-swipe>

  </div>
</template>

<script>
export default {
  // 从要导入轮播图组件中穿过来的图片数据列表
  props: ['banners'],
  data () {
    return {
      flag: true
    }
  },
  created () { },
  methods: {
    imgLoad () {
      if (this.flag) {
        this.$emit('swipeImgLoad')
        this.flag = false
      }
    }
  }
}
</script>

<style scoped lang = "less">
.my-swipe {
  width: 100%;
  height: 30%;
  text-align: center;
  img {
    width: 100%;
  }
}
</style>
