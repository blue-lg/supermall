<template>
  <div>
    <!-- 公共的轮播图组件 -->
    <van-swipe class="my-swipe" :style="setName" :autoplay="3000">
      <van-swipe-item v-for="item in banners" :key="item.acm">
        <a :href="item.link">
          <img :src="item.constructor===Object?item.image:item" @load="imgLoad">
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  // 从要导入轮播图组件中穿过来的图片数据列表
  props: {
    banners: {
      tyoe: Array,
      default () {
        return []
      }
    },
    name: String,
    default () {
      return ''
    }
  },
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
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    setName () {
      if (this.name === 'home') {
        return 'height:30vh'
      }
      if (this.name === 'good') {
        return 'height:37vh'
      }
    }
  }
}
</script>

<style scoped lang = "less">
.my-swipe {
  width: 100%;
  text-align: center;
  img {
    width: 100%;
  }
}
</style>
