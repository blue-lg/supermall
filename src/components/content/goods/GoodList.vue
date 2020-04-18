<template>
  <div class="goodlistbox">
    <good-list-item class="goodlist" v-for="item in goodlist" :key="item.clientUrl"
      :gooditem="item">
    </good-list-item>
  </div>
</template>

<script>
import GoodListItem from './GoodListItem'
export default {
  data () {
    return {}
  },
  props: {
    goodlist: {
      type: Array,
      default () {
        return []
      }
    }
  },
  created () { },
  methods: {},
  components: {
    GoodListItem
  }
}
</script>

<style scoped lang = "less">
.goodlistbox {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5px;
}
</style>
