<template>
  <div>
    <!-- 购物车数据列表 -->
    <div v-for="item in goodsList" :key="item.iid">
      <van-checkbox v-model="item.check" @click="checkClick(item.iid)" checked-color="#EE8EA1"></van-checkbox>
      <van-card :num="item.count" :price="item.price" :desc="item.desc" :title="item.title"
        :thumb="item.img">
        <template #footer>
          <van-stepper v-model="item.count" />
        </template>
      </van-card>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
    }
  },
  created () { },
  computed: {
    ...mapState(['goodsList'])
  },
  methods: {
    ...mapMutations(['editCheck']),
    checkClick (iid) {
      this.editCheck(iid)
    }
  }
}
</script>

<style scoped lang = "less">
.van-card__price {
  color: red;
}
.van-card__title {
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.van-card__bottom {
  position: relative;
  right: 0;
  left: 0;
  top: -20px;
}
.van-stepper {
  position: relative;
  top: -20px;
}
.van-card__footer {
  height: 0px;
}
.van-checkbox{
  position: relative;
  top: 37px;
  left: 5px;
  right: 0;
  z-index: 9;
  float: left;
}
.van-card__header{
  margin-left: 14px;
}
.van-card{
  margin: 0;
}
</style>
