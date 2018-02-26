<template>
  <div class="ratings" ref="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{_seller.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{_seller.rank}}</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">
              服务态度</span>
              <star :size="24" :score="_seller.serviceScore"></star>
              <span class="score">{{_seller.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <star :size="24" :score="_seller.foodScore"></star>
            <span class="score">{{_seller.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{_seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <split></split>
      <ratingSelect :selectType="selectType" :onlyContent="onlyContent"  :ratings="ratings" v-on:select="selectRating" v-on:toggle="toggleContent">

      </ratingSelect>
      <div class="rating-wrapper">
        <ul>
          <li v-show="needShow(rating.rateType,rating.text)" class="rating-item" v-for="rating in ratings" >
            <div class="avatat">
              <img width="28" height="28" :src="rating.avatar">
            </div>
            <div class="content">
              <h1 class="name">{{rating.username}}</h1>
              <div class="star-wrapper">
                <star :size="24" :score="rating.score"></star>
                <span class="delivery" v-show="rating.delivery">
                  {{rating.deliveryTime}}
                </span>
              </div>
              <p class="text">
                {{rating.text}}
              </p>
              <div class="recommend" v-show="rating.recommend.length">
                <span class="iconfont">&#xe84c;</span>
                <span v-for="item in rating.recommend" class="item">
                  {{item}}
                </span>
              </div>
              <div class="time">
                {{rating.rateTime | formatDate}}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll';
  import star from '../star/star';
  import ratingSelect from '../ratingSelect/ratingSelect'
  import split from  '../split/split'
  import {formatDate} from '../../common/js/date.js';


  const POSITIVE = 0;
  const NEGATIVE = 1;
  const ALL = 2;
  export default{
    props: {
      seller: {
        type: Object
      }
    },
    data(){
      return {
        _seller: {},
        ratings:[],
        selectType: ALL,
        onlyContent: true
      }
    },
    components: {
      star:star,
      split:split,
      ratingSelect:ratingSelect
    },
    created(){
      this._seller = this.seller.seller;
      this.$http("../../data.json").then((result)=>{
       this.ratings = result.data.ratings;
       this.$nextTick(()=>{
         this.scroll = new BScroll(this.$refs.ratings,{click:true});
       })
      });
    },
    filters: {
      formatDate(time){
        let date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm')
      }
    },
    methods: {
      toggleContent() {
        this.onlyContent = !this.onlyContent;
        this.$nextTick(() => {
          this.scroll.refresh();
        });
      },
      selectRating(type){
        this.selectType = type;
        this.$nextTick(() => {
          this.scroll.refresh();
        });
      },
      needShow(type, text){
        if (this.onlyContent && !text) {
          return false;
        }
        if (this.selectType === ALL) {
          return true;
        } else {
          return type === this.selectType;
        }
      }
    }
  }
</script>


<style lang="scss" rel="stylesheet/scss" type="text/css">
  .ratings {
    position: absolute;
    top: 174px;
    left: 0;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    .overview {
      display: flex;
      padding: 18px 0;

      .overview-left {
        flex: 0 0 137px;
        padding-bottom: 6px;
        width: 137px;
        border-right: 1px solid #ddd;
        text-align: center;

        .score {
          margin-bottom: 6px;
          line-height: 28px;
          font-size: 24px;
          color: rgb(255, 153, 0)
        }
        .title {
          margin-bottom: 8px;
          line-height: 12px;
          font-size: 12px;
          color: rgb(7, 17, 27)
        }
        .rank {
          line-height: 10px;
          font-size: 10px;
          color: #aaa;
        }

      }
      @media only screen and (max-width: 320px) {
        .overview-left {
          flex: 0 0 120px;
          width: 120px
        }
      }
      .overview-right {
        flex: 1;
        padding: 6px 0 6px 24px;
        .score-wrapper {
          margin-bottom: 8px;

          font-size: 0;
          .title {
            display: inline-block;
            line-height: 18px;
            vertical-align: top;
            font-size: 12px;
            color: rgb(7, 17, 27);
          }
          .star {
            display: inline-block;
            margin: 0 12px;
            vertical-align: top;
          }
          .score {
            display: inline-block;
            line-height: 18px;
            vertical-align: top;
            font-size: 12px;
            color: rgb(255, 153, 0);
          }
        }
        .delivery-wrapper {
          font-size: 0;
          .title {
            line-height: 18px;
            font-size: 12px;
            color: rgb(7, 17, 27);
          }
          .delivery {
            margin-left: 12px;
            font-size: 12px;
            color: rgb(147, 153, 192)
          }
        }
      }
      @media only screen and (max-width: 320px) {
        .overview-right {
          padding-left: 6px;
        }
      }
    }
    .rating-wrapper{
      padding:0 18px;
      .rating-item{
        display: flex;
        padding:18px 0;
        border-bottom:1px solid #ddd;
        .avatar{
          flex:0 0 28px;
          width:28px;
          margin-right:12px;
          img{
            border-radius:50%;
          }
        }
        .content{
          position:relative;
          flex:1;
          .name{
            margin-bottom:4px;
            line-height:12px;
            font-size: 10px;
            color:rgb(7,17,27);
          }
          .star-wrapper{
            margin-bottom:6px;
            font-size: 0;
            .star{
              display: inline-block;
              margin-right:6px;
              vertical-align: top;
            }
            .delivery{
              display:inline-block;
            }
          }
          .text{
            line-height: 18px;
            margin-bottom:18px;
            color:rgb(7,17,27);
            font-size: 12px;
          }
          .recommend{
            line-height: 16px;
            .iconfont,.item{
              display: inline-block;
              margin:0 8px 4px 0;
              vertical-align:top;
            }
            .active{
              color:rgb(0,160,220)
            }
            .item{
              padding:0 6px;
              border:1px solid rgba(7,17,27,.1);
              border-radius: 1px;
              font-size:9px;
              color:#888;
              background-color:#fff;
            }
          }
          .time{
            position:absolute;
            top:0;
            right:0;
            font-size: 10px;
            color:#888;
          }
        }
      }
    }
  }
</style>

