<template>
	<div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count>0" @click="decreaseCart">
        <span class="iconfont inner">&#xe62b;</span>
      </div>
    </transition>

    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add" @click="addCart">
      <span class="iconfont">&#xe607;</span>
    </div>
	</div>
</template>
<script>
  import Vue from 'vue'
	export default{
		props:{
			food:{
				type:Object
      }
    },
    created(){

    },
    methods:{
      addCart:function(event){
      	if(!event._constructed){
      		return;
        }
      	if(!this.food.count){
      		Vue.set(this.food,'count',1)
        }else{
      		this.food.count++;
        }
        this.$emit('add-cart',event.target);
      },
      decreaseCart:function(){
        if(!event._constructed){
          return;
        }
        if(this.food.count){
          this.food.count--;
        }
      }
    }
  };
</script>
<style lang="scss" type="text/css" rel="stylesheet/scss">
  .cartcontrol{
    font-size:0;
    .cart-decrease{
      display:inline-block;
      transition:all 0.4s linear;
      &.move-transition{
        opacity:1;
        transform:translate3d(0,0,0);
      }
      .inner{
        display: inline-block;
        line-height:16px;
        font-size:16px;
        color:rgb(0,160,220);
        transition: all 0.4s linear;
        transform:rotate(0)
      }
      &.move-enter,&.move-leave-to{
        opacity:0;
        transform:translate3d(24px,0,0);
        .inner{
          transform:rotate(180deg);
        }
      }
    }
    .cart-count{
      display:inline-block;
      vertical-align: top;
      width:12px;
      padding:2px 8px;
      line-height:12px;
      text-align:center;
      font-size:12px;
      color:rgb(147,153,19)
    }
    .cart-add {
      display: inline-block;
      line-height:16px;
      font-size:16px;
      color:rgb(0,160,220);
    }
  }
</style>
