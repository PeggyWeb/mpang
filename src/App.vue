<template>
  <div id="app">
    <v-header :seller="seller">

    </v-header>
    <div class="tab">
      <div class="tab-item">
       <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>

      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>

    </keep-alive>
  </div>
</template>

<script>
  import axios from 'axios'
  import header from './components/header/header'
  import goods from './components/goods/goods'
  import ratings from './components/ratings/ratings'

  const ERR_OK = 0;
export default {
  name: 'app',
  data(){
    return{
        seller:{

        }
    }
  },
  created(){
      this.seller = require('../data.json');

    /*axios.get('api/goods').then((response) => {
      response=response.json();
      if(response.errno === ERR_OK){
         this.seller = response.body;
         console.log(this.seller)
      }
    }).catch(function(){

    })*/
  },
  components:{
    'v-header':header,
    'v-goods':goods
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50
}
  .tab{
    position:relative;
    display:flex;
    width:100%;
    height:40px;
    line-height:40px;
  }
  .tab:after{
    display: block;
    position: absolute;
    left:0;
    bottom:0;
    width:100%;
    border-top:1px solid #eee;
    content:"";
  }
  .tab-item{
    flex:1;
    text-align:center;
  }
  .tab-item a{
    display:block;
  }

</style>
