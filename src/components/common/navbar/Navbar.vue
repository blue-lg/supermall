<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="conent">
      <slot name="conent"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () { },
  methods: {}
}
</script>

<style scoped lang = "less">
.navbar {
  text-align: center;
  height: 44px;
  width: 100%;
  line-height: 44px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  .left,
  .right {
    width: 60px;
  }
  .conent {
    flex: 1;
  }
}
</style>
