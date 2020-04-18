<template>

  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="ActiveColor">
      <slot name="item-text"></slot>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data () {
    return {
      // isActive: true
    }
  },
  created () { },
  methods: {
    itemClick () {
      this.$router.push(this.path).catch(err => err)
    }
  },
  computed: {
    isActive () {
      // if (this.$route.path === this.path) {
      //   return true
      // }
      // return false
      return this.$route.path === this.path
    },
    ActiveColor () {
      return this.isActive ? { color: this.activeColor } : {}
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  align-items: center;
  text-align: center;
  height: 49px;
  font-size: 12px;
}
#tabbar img {
  width: 20px;
  height: 20px;
  margin: 0;
  margin-top: 5px;
  vertical-align: middle;
  margin-bottom: 5px;
}
</style>
