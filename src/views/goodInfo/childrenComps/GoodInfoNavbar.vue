<template>
  <div class="goodNavBar">
    <nav-bar>
      <div class="goBack" @click="goback" slot="left"><img src="~assets/images/common/back.svg"
          alt=""></div>
      <div slot="conent" class="titelBox">
        <span class="title" :class="{active:index===activeIndex}" v-for="(item,index) in title"
          @click="activeItem(index)" :key="index">{{item}}
        </span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/Navbar'
export default {
  data () {
    return {
      title: ['商品', '参数', '评论', '推荐'],
      activeIndex: 0
    }
  },
  created () { },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    activeItem (index) {
      this.activeIndex = index
    }
  },
  components: {
    NavBar
  }
}
</script>

<style scoped lang = "less">
.goodNavBar {
  .goBack {
    width: 20px;
    height: 20px;
    margin: 5px 0 0 14px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .titelBox {
    display: flex;
    .title {
      flex: 1;
      font-size: 14px;
    }
  }
}

.active {
  color: #eba1b3;
  border-bottom: 3px solid #eba1b3;
}
</style>
