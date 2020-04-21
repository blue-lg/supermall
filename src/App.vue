<template>
  <div>
    <!-- include中是需要缓存的组件  exclude中是不需要缓存的组件 -->
    <!-- <keep-alive include="Home">
      <router-view></router-view>
    </keep-alive>
    <keep-alive  exclude="GoodInfo">
      <router-view></router-view>
    </keep-alive> -->
    <keep-alive>
        <!-- 需要缓存的视图组件 -->
        <router-view v-if="$route.meta.keepAlive"></router-view>
     </keep-alive>
      <!-- 不需要缓存的视图组件 -->
     <router-view v-if="!$route.meta.keepAlive"></router-view>

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
