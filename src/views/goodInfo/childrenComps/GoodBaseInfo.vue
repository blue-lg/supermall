<template>
 <div v-if="Object.keys(goods).length!==0" class="goodinfo">
   <div class="goodtitle">{{goods.title}}</div>
   <div class="price">
     <span class="n-price">{{goods.newPrice}}</span>
     <span class="o-price">{{goods.oldPrice}}</span>
     <span class="discout" v-if="goods.discount">{{goods.discount}}</span>
   </div>
   <div class="info-other">
     <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
   </div>
   <div class="indo-serve">
     <span v-for="index in goods.services.length" :key="index">
       <img class="icon" :src="goods.services[index-1].icon" alt="">
       <span class="span">{{goods.services[index-1].name}}</span>
     </span>
   </div>
 </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {}
  },
  created () {
  },
  methods: {}
}
</script>

<style scoped lang = "less">
.goodinfo{
  padding: 5px;
  margin-top: 10px;
  .goodtitle{
  font-size: 16px;
}
.price{
  margin-top: 15px;
  .n-price{
    color: #EA6197;
    font-size: 24px;
  }
  .o-price{
    font-size: 12px;
    color: #ccc;
    text-decoration: line-through;
    margin-left: 5px;
  }
  .discout{
    font-size: 14px;
    color: honeydew;
    width: 40px;
    height: 20xp;
    background-color: #EA5275;
    border-radius: 8px;
    padding: 2px;
    position: relative;
    top: -10px;
    margin-left: 10px;
  }
}
.info-other{
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
}
.indo-serve{
  margin-top: 10px;
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
  .icon{
    width: 15px;
    height: 15px;
    position: relative;
    top: 3px;
  }
  .span{
    font-size: 13px;
  }
}
}

</style>
