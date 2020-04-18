<template>
  <div>
    <div id="tabbar">
      <slot></slot>
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

<style scoped>
#tabbar {
  display: flex;
  background-color: #ccc;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0 -1px 3px rgba(17, 16, 16, 0.1);
}
</style>
