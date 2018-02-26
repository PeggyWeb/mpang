<template>
  <div class="ratingSelect">
    <div class="rating-type">
      <span @click="select(2,$event)" class="block positive" :class="{'active':selectType === 2}">{{desc.all}}
      <span class="count">{{ratings.length}}</span></span>
      <span @click="select(0,$event)" class="block positive" :class="{'active':selectType === 0}">{{desc.positive}}
      <span class="count">{{positives.length}}</span></span>
      <span @click="select(1,$event)" class="block negitive" :class="{'active':selectType === 1}">{{desc.negative}}
      <span class="count">{{negatives.length}}</span></span>
    </div>
    <div @click="toggleContent" class="switch" :class="{'on':onlyContent}">
      <span class="iconfont">&#xe605;</span>
      <span class="text">只看有内容的评价</span>
    </div>
  </div>
</template>
<script>
  const POSITIVE = 0;
  const NEGATIVE = 1;
  const ALL = 2;

  export default{
    props: {
      ratings: {
        type: Array,
        default(){
          return [];
        }
      },
      selectType: {
        type: Number,
        default: ALL
      },
      onlyContent: {
        type: Boolean,
        default: false
      },
      desc: {
        type: Object,
        default(){
          return {
            all: '全部',
            positive: '满意',
            negative: '不满意'
          }
        }
      }
    },
    computed:{
      positives(){
        return this.ratings.filter((rating)=>{
          return rating.rateType === POSITIVE;
        })
      },
      negatives(){
         return this.ratings.filter((rating)=>{
          return rating.rateType === NEGATIVE;
        })
      }
    },
    methods: {
      select(type, event){
        if (!event._constructed) {
          return false;
        }
        //this.selectType = type;传过去父组件了就不用在这里更改，否则报错
        this.$emit('select', type);
      },
      toggleContent(event){
        if (!event._constructed) {
          return false;
        }

        this.$emit('toggle');
      }
    }
  }
</script>
<style lang="scss" type="text/css" rel="stylesheet/scss">

  .ratingSelect {
    .rating-type {
      padding: 18px 0;
      margin: 0 18px;
      border-bottom: 1px solid #ddd;
      .block {
        display: inline-block;
        padding: 8px 12px;
        margin-right: 8px;
        border-radius: 1px;
        font-size: 12px;
        color: rgb(77, 85, 93);
        &.active {
          color: #fff;
        }
        .count {
          margin-left: 2px;
          line-height: 16px;
          font-size: 8px;
        }
        &.positive {
          background-color: rgba(0, 160, 220, 0.2);
          &.active {
            background-color: rgb(0, 160, 220);
          }
        }
        &.negitive {
          background-color: rgba(77, 85, 93, 0.3);
          &.active {
            background-color: rgb(77, 85, 93);
          }
        }
      }
    }
    .switch {
      padding: 12px 18px;
      line-height: 24px;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      color: rgb(147, 153, 159);
      font-size: 0;
      &.on {
        .iconfont {
          color: #1296db;
        }
      }
      .iconfont {
        display: inline-block;
        vertical-align: middle;
        margin-top:-8px;
        margin-right: 4px;
        font-size: 24px;
      }
      .text {
        font-size: 14px;
        line-height:26px;
      }
    }
  }
</style>
