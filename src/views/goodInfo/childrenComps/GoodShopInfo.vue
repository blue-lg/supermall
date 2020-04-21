<template>
 <div class="shop-info">
    <div class="herder">
      <img :src="shop.shopLogo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-center">
      <div class="left">
        <div>
          <span>{{setsales}}</span>
          <p>总销量</p>
        </div>
        <div>
          <span>{{shop.cGoods}}</span>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="right">
        <p v-for="(item,i) in shop.score" :key="i">
          <span class="name">{{item.name}}</span>
          <span :class="[item.isBetter?'red':'green']" class="score">{{item.score}}</span>
          <span class="heig" :class="[item.isBetter?'backred':'backgreen']">{{item.isBetter?'高':'低'}}</span>
        </p>
      </div>
    </div>
 </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {}
  },
  created () {},
  methods: {},
  computed: {
    setsales () {
      return parseFloat(this.shop.cSells / 10000).toFixed(1) + '万'
    }
  }
}
</script>

<style scoped lang = "less">
.shop-info{
  border-top: 5px solid #F2F5F8;
  padding: 20px 0 20px 0;
  .herder{
    margin-left: 10px;
    img{
      width: 70px;
      height: 70px;
      border-radius: 50%;
      border: 1px solid #CCC;
    }
    span{
      font-size: 16px;
      position: relative;
      top: -31px;
      left: 11px
    }
  }
  .shop-center{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .left{
      margin-left: 30px;
      border-right: 1px solid #eee;
      padding-right: 15px;
      div{
        float: left;
        margin-right: 10px;
        text-align: center;
        span{
          font-size: 20px;
          font-weight: bold;
        }
        p{
          font-size: 14px;
          margin-top: 5px;
        }
      }
    }
    .right{
      position: relative;
      top: -8px;
      right: 17px;
      margin-right: 20px;
      p{
        margin-top: 5px;
        .name{
        font-size: 14px;
        margin-right: 5px;
        }
        .score{
          font-size: 13px;
          margin-right: 5px;
        }
        .heig{
          color: white;
          font-size: 12px;
          float: right;
          position: relative;
          padding: 2px;
          top: 3px;
        }
      }
    }
  }
}
.green{
  color: #5EA732;
}
.red{
  color: red;
}
.backgreen{
  background-color: #5EA732;
}
.backred{
  background-color: red;
}
</style>
