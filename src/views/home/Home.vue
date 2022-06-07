<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

    <scroll class="content">
      <home-swiper :banners="banners"/>
      <recommend-view :recommends="recommends"></recommend-view>
      <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
      <!-- <home-picture :pictures="pictures"></home-picture> -->
      <goods-list :goods="goods[currentType].list"></goods-list>
      <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
      <li>32</li>
      <li>33</li>
      <li>34</li>
      <li>35</li>
      <li>36</li>
      <li>37</li>
      <li>38</li>
      <li>39</li>
      <li>40</li>
      <li>41</li>
      <li>42</li>
      <li>43</li>
      <li>44</li>
      <li>45</li>
      <li>46</li>
      <li>47</li>
      <li>48</li>
      <li>49</li>
      <li>50</li>
      </ul>
    </scroll>
      <!-- <ul>
        <li>下拉1</li>
        <li>下拉2</li>
        <li>下拉3</li>
        <li>下拉4</li>
        <li>下拉5</li>
        <li>下拉6</li>
        <li>下拉7</li>
        <li>下拉8</li>
        <li>下拉9</li>
        <li>下拉10</li>
        <li>下拉11</li>
        <li>下拉12</li>
        <li>下拉13</li>
        <li>下拉14</li>
        <li>下拉15</li>
        <li>下拉16</li>
        <li>下拉17</li>
        <li>下拉18</li>
        <li>下拉19</li>
        <li>下拉20</li>
        <li>下拉21</li>
        <li>下拉22</li>
        <li>下拉23</li>
        <li>下拉24</li>
        <li>下拉25</li>
        <li>下拉26</li>
        <li>下拉27</li>
        <li>下拉28</li>
        <li>下拉29</li>
        <li>下拉30</li>
        <li>下拉31</li>
        <li>下拉32</li>
        <li>下拉33</li>
        <li>下拉34</li>
        <li>下拉35</li>
        <li>下拉36</li>
        <li>下拉37</li>
        <li>下拉38</li>
        <li>下拉39</li>
        <li>下拉40</li>
        <li>下拉41</li>
        <li>下拉42</li>
        <li>下拉43</li>
        <li>下拉44</li>
        <li>下拉45</li>
        <li>下拉46</li>
        <li>下拉47</li>
        <li>下拉48</li>
        <li>下拉49</li>
        <li>下拉50</li>
      </ul> -->
  </div>

</template>

<script>
import HomeSwiper from './HomeComps/HomeSwiper.vue'
import recommendView from './HomeComps/RecommendView.vue'
import HomePicture from './HomeComps/Picture.vue'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'

import {getHomeMultidata,getHomeGoods} from 'network/home'




export default {
  components:{
    NavBar,
    HomeSwiper,
    recommendView,
    TabControl,
    HomePicture,
    GoodsList,
    Scroll,
  },
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},

      },
      pictures:[],
      currentType:'pop'
    }
  },
  created(){
    getHomeMultidata().then(res=>{

      this.banners=res.data.banner.list;
      this.recommends=res.data.recommend.list;
    })

    // getHomeGoods().then(res=>{
    //   this.pictures=res.list
    // })
  },
  methods:{
    tabClick(index){
      switch (index) {
        case 0:
          this.currentType='pop'
          break;
        case 1:
          this.currentType='new'
          break;
        case 2:
          this.currentType='sell'
          break;
        default:
          break;
      }
    }
  }
}
</script>

<style scoped>
#home{
  padding-top: 44px;
  height: 100vh;
  background-color: #fff;
}
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control{
  position: sticky;
  top: 44px;
}

.content{
  height: calc(100% - 49px);
  overflow: hidden;
}

</style>