<template>
  <div>
    <!-- include中是需要缓存的组件  exclude中是不需要缓存的组件 -->
    <keep-alive include="Home" exclude="GoodInfo">
      <router-view></router-view>
    </keep-alive>
    <my-tabbaritem></my-tabbaritem>
  </div>
</template>

<script>
import MainItem from 'components/content/MainItem/MianItem'
export default {
  data () {
    return {}
  },
  created () { },
  methods: {},
  components: {
    'my-tabbaritem': MainItem
  }
}
</script>

<style scoped lang = "less">
@import url('assets/css/base.css');
</style>
