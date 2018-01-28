<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.seller.name}}</span>
        </div>
        <div class="description">
          {{seller.seller.description}}/{{seller.seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.seller.supports" class="support">
          <span class="icon" :class="classMap[seller.seller.supports[0].type]"></span>
          <span class="text">
           {{seller.seller.supports[0].description}}
          </span>
        </div>
        <div class="support-count" @click="show_detail">
          <span class="count">78</span>
          <i class="iconfont">&#xe600;</i>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="show_detail">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.seller.bulletin}}</span>
      <i class="arrow iconfont">&#xe600;</i>
    </div>
    <div class="background">
      <img :src="seller.seller.avatar" width="100%" height="100%"/>
    </div>
    <transition name="fade">
      <div v-show="detail_show" class="detail" >
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="name">{{seller.seller.name}}</h1>
            <div class="star-wrapper">
              <star :size="48" :score="seller.seller.score"></star>
            </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul class="support">
              <li class="support-item" v-for="(item,index) in seller.seller.supports">
                <span class="icon" :class="classMap[seller.seller.supports[index].type]"></span>
                <span class="text">{{seller.seller.supports[index].description}}</span>
              </li>
            </ul>
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="bulletin">
              <div class="content">{{seller.seller.bulletin}}</div>
            </div>
          </div>
        </div>
        <div class="detail-close iconfont" @click="hideDetail">&#xe849;</div>
      </div>
    </transition>

  </div>
</template>
<style>
  .header {
    position: relative;
    color: #fff;
    background: rgba(7, 17, 27, .5);
    overflow: hidden;
  }

  .content-wrapper {
    position: relative;
    padding: 24px 12px 18px 24px;
    font-size: 0;
  }

  .avatar {
    display: inline-block;
    vertical-align: top;

  }

  .avatar img {
    border-radius: 2px
  }

  .content-wrapper .content {
    display: inline-block;
    margin-left: 16px;
    font-size: 14px;
  }

  .title {
    margin: 2px 0 8px 0;
  }

  .brand {
    display: inline-block;
    vertical-align: top;
    width: 30px;
    height: 18px;
    background: url("./brand@2x.png") no-repeat;
    background-size: 30px 18px;
  }

  .name {
    margin-left: 6px;
    font-size: 16px;
    line-height: 18px;
    font-weight: bold;
  }

  .description {
    display: inline-block;
    line-height: 12px;
    font-size: 12px;
  }

  .support .icon {
    display: inline-block;
    vertical-align: top;
    width: 12px;
    height: 12px;
    margin-right: 4px;
    background-size: 12px 12px;
    background-repeat: no-repeat;
  }
  .support .icon.decrease {
    background-image: url('decrease_1@3x.png')
  }

  .support .icon.discount {
    background-image: url('discount_1@3x.png')
  }

  .support .icon.special {
    background-image: url('special_1@3x.png')
  }

  .support .icon.invoice {
    background-image: url('invoice_1@3x.png')
  }

  .support .icon.gurantee {
    background: url('guarantee_1@3x.png')
  }


  .support .text {
    line-height: 12px;
    font-size: 10px;
  }

  .support-count {
    position: absolute;
    right: 12px;
    bottom: 18px;
    padding: 0 8px;
    height: 24px;
    line-height: 24px;
    border-radius: 14px;
    background: rgba(0, 0, 0, 0.2);
    text-align: center;
  }

  .count {
    font-size: 10px
  }
  .support-count .iconfont{
    font-size:4px
  }
  .bulletin-wrapper {
    position: relative;
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    background-color: rgba(7, 17, 27, 0.2)
  }

  .bulletin-title {
    display: inline-block;
    margin-top: 8px;
    width: 22px;
    height: 12px;
    vertical-align: top;
    background-image: url(bulletin@2x.png);
    -webkit-background-size: 22px 12px;
    background-size: 22px 12px;
    background-repeat: no-repeat;
  }

  .bulletin-text {
    vertical-align: top;
    margin: 0 4px;
    font-size: 10px;
  }

  .bulletin-wrapper .arrow {
    position: absolute;
    right: 12px;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(10px)
  }

  .header .detail {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 110;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(7, 17, 27, 0.8);
    background-filter:blur(10px);
  }
  .detail .detail-wrapper{
    min-height:96%;
    width:100%;
  }
  .detail-main{
    margin-top:64px;
    padding-bottom:64px;
  }
  .detail-main .name{
    line-height:16px;
    text-align:center;
    font-size:16px;
    font-weight:700;
  }
  .detail-main .star-wrapper{
    margin-top:18px;
    padding:2px 0;
    text-align: center;
  }
  .detail-main .title{
    display:flex;
    width:80%;
    margin:20px auto 20px;
  }
  .detail-main .title .line{
    flex:1;
    position:relative;
    top:-6px;
    border-bottom:1px solid rgba(255,255,255,0.2);
  }
  .detail-main .title .text{
    padding:0 12px;
    font-weight:600;
    font-size:14px;
  }
  .detail-main .supports{
    width:80%;
    margin:0 auto;
  }
  .detail-main .supports .support-item{
    padding:0 12px;
    margin-bottom:12px;
    font-size:0;
  }
  .detail-main .supports .support-item:last-child{
    margin-bottom:0;
  }
  .detail-main .supports .support-item .icon{
    display: inline-block;
    width:16px;
    height: 16px;
    vertical-align: top;
    margin-right:6px;
    background-size:16px 16px;
    background-repeat: no-repeat;
  }
  .detail-main .supports .support-item .icon.decrease {
    background-image: url('decrease_1@3x.png')
  }

  .detail-main .supports .support-item .icon.discount {
    background-image: url('discount_1@3x.png')
  }

  .detail-main .supports .support-item .icon.special {
    background-image: url('special_1@3x.png')
  }

  .detail-main .supports .support-item .icon.invoice {
    background-image: url('invoice_1@3x.png')
  }

  .detail-main .supports .support-item .icon.guarantee {
    background: url('guarantee_1@3x.png')
  }
  .detail-main .bulletin{
    width:80%;
    margin:0 auto;
  }
  .detail-main .bulletin .content{
    padding:0 12px;
    line-height:24px;
    font-size:12px
  }
  .detail-close{
    position:relative;
    text-align:center;
    z-index: 5;
  }
  .fade-enter-active,.fade-leave-active{
    transition:opacity .3s;
  }
  .fade-enter,.fade-leave-to{
    opacity:0
  }
</style>
<script>
  import star from '../star/star';
  export default{
    props: {
      seller: {
        type: Object
      }
    },
    data(){
      return {
        detail_show: false
      }
    },
    methods: {
      show_detail(){
        this.detail_show = true;
      },
      hideDetail(){
      	this.detail_show = false;
      }
    },
    created(){
      this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"];
    },
    components:{
    	star:star
    }
  }
</script>
