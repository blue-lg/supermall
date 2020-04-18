<template>
  <div class="box">
    <div v-for="item in recommends" class="recommends" :key="item.sort">
      <a :href="item.link">
        <img class="img" :src="item.image" alt="">
        <div class="title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {}
  },
  created () { },
  methods: {}
}
</script>

<style scoped lang = "less">
.box {
  display: flex;
  justify-content: space-between;
  .recommends {
    margin-top: 10px;
    text-align: center;
    width: 45%;
    .img {
      width: 90%;
    }
    .title {
      font-size: 14px;
      color: #ccc;
      margin-top: 8px;
      padding-bottom: 20px;
      border-bottom: 8px solid #eee;
    }
  }
}
</style>
