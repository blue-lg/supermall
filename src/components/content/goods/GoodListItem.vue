<template>
  <div class="goodItem" @click="togoodInfo">
    <img :src="gooditem.show.img" alt="">
    <div class="goodItem_foot">
      <p class="title">{{gooditem.title}}</p>
      <span class="prim">{{gooditem.price}}</span>
      <span class="icon">
        <img src="~assets/images/common/collect.svg" alt="" @load="imgLoad">
      </span>
      <span class="collpace">{{gooditem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gooditem: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {}
  },
  created () { },
  methods: {
    imgLoad () {
      this.$bus.$emit('imgLoad')
    },
    togoodInfo () {
      this.$router.push('/goodInfo/' + this.gooditem.iid)
    }
  }
}
</script>

<style scoped lang = "less">
.goodItem {
  width: 49%;
  position: relative;
  padding-bottom: 40px;
  img {
    width: 100%;
    border-radius: 5px;
  }
  .goodItem_foot {
    position: absolute;
    bottom: 8px;
    left: 0;
    right: 0;
    .title {
      width: 100%;
      font-size: 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .prim {
      color: red;
      font-size: 12px;
      margin-left: 20px;
    }
    .icon {
      display: block;
      width: 14px;
      height: 14px;
      position: absolute;
      left: 58px;
      top: 15px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .collpace {
      margin-left: 24px;
      font-size: 12px;
    }
  }
}
</style>
