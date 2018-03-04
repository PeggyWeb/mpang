import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/goods/goods'
import Ratings from '@/components/ratings/ratings'
import Seller from '@/components/seller/seller'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);
const routes = [{
  path:'/goods',
  name:'Goods',
  component:Goods
},
  {
    path:'/ratings',
    name:'Ratings',
    component:Ratings
  },
  {
    path:'/seller',
    name:'Seller',
    component:Seller
}]
export default new Router({
  linkActiveClass:'active',
  routes
})
