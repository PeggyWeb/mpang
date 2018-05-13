<template>
  <div class="seller" ref="info" >
    <div class="seller-content">
      <div class="overview">
        <h1 class="title">
          {{seller.seller.name}}
        </h1>
        <div class="desc">
          <star :size="24" :score="seller.seller.score"></star>
          <span class="text">{{seller.seller.ratingCount}}</span>
          <span class="text">月售{{seller.seller.sellCount}}笔</span>
        </div>
        <ul class="remark">
          <li class="block">
            <h2>起送价</h2>
            <div class="content">
              <span class="stress">{{seller.seller.minPrice}}元</span>
            </div>
          </li>
          <li class="block">
            <h2>商家配送</h2>
            <div class="content">
              <span class="stress">{{seller.seller.deliveryPrice}}元</span>
            </div>
          </li>
          <li class="block">
            <h2>平均配送时间</h2>
            <div class="content">
              <span class="stress">{{seller.seller.minPrice}}分钟</span>
            </div>
          </li>
        </ul>
        <div class="favorite" @click="toggleFavorite">
          <span class="iconfont" :class="{'active':favorite}" >&#xe6f4;</span>
          <span class="text">{{favoriteText}}</span>
        </div>
      </div>
      <split></split>
      <div class="bulletin">
        <h1 class="title">公告与活动</h1>
        <div class="content-wrapper">
          <p class="content">
            {{seller.seller.bulletin}}
          </p>
        </div>
        <ul class="support">
          <li class="support-item" v-for="(item,index) in seller.seller.supports">
            <span class="icon" :class="classMap[seller.seller.supports[index].type]"></span>
            <span class="text">{{seller.seller.supports[index].description}}</span>
          </li>
        </ul>

      </div>
      <split></split>
      <div class="pics">
        <h1 class="title">商家实景</h1>
        <div class="pic-wrapper" ref="picWrapper">
          <ul class="pic-list" ref="picList" :style="{width:width + 'px'}">
            <li v-for="item in seller.seller.pics" class="pic-item">
              <img :src="item" width="120" height="90">
            </li>
          </ul>
        </div>
      </div>
      <split></split>
      <div class="info">
        <h1 class="title">商家信息</h1>
        <ul>
          <li class="info-item" v-for="info in seller.seller.info">
            {{info}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import star from "@/components/star/star"
  import split from "@/components/split/split"
  export default{
    props: {
      seller: {
        type: Object
      }
    },
    data(){
      return {
        _seller: {},
        classMap: [],
        width:0,
        favorite:false
      }
    },
    computed:{
      favoriteText(){
    		return this.favorite ? '已收藏':'收藏'
      }
    },
    created(){

      this.classMap = ['decrease', 'discount', 'special', 'guarance'];

    },
    watch: {
      seller:function(){
        this.$nextTick(() => {
          this._initScroll();
          this._initPics();
        });
      }
    },
    mounted:function(){
      this.$nextTick(() => {
        this._initScroll();
        this._initPics();
      });
    },
    methods: {
      toggleFavorite(){
      	if(!event._constructed){
      		return;
        }
        this.favorite = !this.favorite;
      },
      _initScroll(){
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.info, {click: true})
        } else {
          this.scroll = new BScroll(this.$refs.info, {click: true})

        }
      },
      _initPics(){
        if(this.seller.seller.pics){
          let picWidth = 120;
          let marginRight = 6;
          this.width = (picWidth + marginRight)*this.seller.seller.pics.length-marginRight;
          this.$nextTick(()=>{
          	if(!this.picScroll){
              this.picScroll = new BScroll(this.$refs.picWrapper, {
              	scrollX:true,
                eventPassthrough: 'vertical'
              });
            }else{
              this.picScroll.refresh();
            }
          })
        }
      }
    },
    components: {
      star,
      split
    }
  }
</script>
<style type="text/css" lang="scss" rel="stylesheet/scss">
  .seller {
    position: absolute;
    top: 174px;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    .overview {
      position:relative;
      padding: 18px;
      .title {
        margin-bottom: 8px;
        line-height: 14px;
        color: rgb(7, 17, 27);
        font-size: 14px;
      }
      .desc {
        padding-bottom: 8px;
        border-bottom: 1px solid #ddd;
        font-size: 0;
        .star {
          display: inline-block;
          margin-right: 8px;
          vertical-align: top;
        }
        .text {
          margin-right: 12px;
          display: inline-block;
          vertical-align: top;
          line-height: 18px;
          font-size: 10px;
          color: rgb(75, 85, 93)
        }
      }
      .remark {
        display: flex;
        padding-top: 18px;
        .block {
          flex: 1;
          text-align: center;
          border-right: 1px solid #ddd;
          &:last-child {
            border: none;
          }
          h2 {
            margin-bottom: 4px;
            line-height: 10px;
            font-size: 10px;
            color: rgb(147, 153, 159)
          }
          .content {
            line-height: 24px;
            font-size: 10px;
            color: rgb(7, 17, 27);
            .stress {
              font-size: 24px;
              color: #555
            }
          }
        }
      }
      .favorite{
        position:absolute;
        width:50px;
        right:5px;
        top:18px;
        text-align:center;
        .iconfont{
          display:block;
          margin-bottom:4px;
          line-height:20px;
          font-size:18px;
          color:#d4d6d9;
          &.active{
            color:rgb(240,20,20);
          }
        }
        .text{
          line-height:10px;
          font-size:12px;
          color:rgb(77,85,93);
        }
      }
    }
    .bulletin {
      padding: 18px 18px 0 18px;
      .title {
        margin-bottom: 8px;
        line-height: 14px;
        font-size: 14px;
        color: rgb(7, 17, 27);
      }
      .content-wrapper {
        padding: 0 12px 16px 12px;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        .content {
          line-height: 24px;
          font-size: 14px;
          color: rgba(7, 17, 27, 0.8);
        }
      }
      .support {
        .support-item {
          padding: 12px 12px;
          border-bottom: 1px solid #eee;
          font-size: 0;
          &:last-child {
            border-bottom: 0;
            margin-bottom: 0
          }
          .icon {
            display: inline-block;
            width: 16px;
            height: 16px;
            vertical-align: top;
            margin-right: 6px;
            background-size: 16px 15px;
            background-repeat: no-repeat;
            .decrease {
              background-image: url('decrease_1@3x.png')
            }
            .discount {
              background-image: url('discount_1@3x.png')
            }
            .special {
              background-image: url('special_1@3x.png')
            }
            .invoice {
              background-image: url('invoice_1@3x.png')
            }
            .gurantee {
              background: url('guarantee_1@3x.png')
            }
          }

        }
      }

    }
    .pics {
      padding: 18px;
      .title {
        margin-bottom: 12px;
        line-height: 14px;
        color: rgb(7, 17, 27);
        font-size: 14px;
      }
      .pic-wrapper {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        .pic-list {
          font-size: 0;
          .pic-item {
            display: inline-block;
            margin-right: 5px;
            width:120px;
            height:90px;
            &:last-child{
              margin-right:0;
            }
          }
        }
      }
    }
    .info{
      padding:18px 18px 0 18px;
      .title{
        padding-bottom:12px;
        line-height:14px;
        border-bottom:1px solid #eee;
        color:rgb(7,17,27);
        font-size: 14px;
      }
      .info-item{
        padding:16px 12px;
        border-bottom:1px solid #eee;
        line-height:14px;
        font-size:12px;


      }
    }
  }
</style>
