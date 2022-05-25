<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './HomeComps/HomeSwiper.vue'
import recommendView from './HomeComps/RecommendView.vue'

import {getHomeMultidata} from 'network/home'


export default {
  components:{
    NavBar,
    HomeSwiper,
    recommendView
  },
  data(){
    return{
      banners:[],
      recommends:[]
    }
  },
  created(){
    getHomeMultidata().then(res=>{

      this.banners=res.data.banner.list;
      this.recommends=res.data.recommend.list;
    })
  }
}
</script>

<style>
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
}



</style>