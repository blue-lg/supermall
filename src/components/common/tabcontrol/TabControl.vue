<template>
  <div class="Tab-con">
    <div class="tab-control" v-for="(item,index) in tab" :key="index" @click="tabClick(index)">
      <span :class="{active:index===tabactive}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tab: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      tabactive: 0
    }
  },
  created () { },
  methods: {
    tabClick (index) {
      this.tabactive = index
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped lang = "less">
.Tab-con {
  display: flex;
  height: 40px;
  line-height: 40px;
  background-color: white;
  .tab-control {
    flex: 1;
    text-align: center;
    span {
      font-size: 16px;
    }
  }
}
.active {
  color: #ea9fb2;
  border-bottom: 3px solid #ea9fb2;
  padding: 5px;
}
</style>
