<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners"/>
      <recommend-view :recommends="recommends"></recommend-view>
      <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
      <!-- <home-picture :pictures="pictures"></home-picture> -->
      <goods-list :goods="goods[currentType].list"></goods-list>
      <ul>
        <li>商品1</li>
        <li>商品2</li>
        <li>商品3</li>
        <li>商品4</li>
        <li>商品5</li>
        <li>商品6</li>
        <li>商品7</li>
        <li>商品8</li>
        <li>商品9</li>
        <li>商品10</li>
        <li>商品11</li>
        <li>商品12</li>
        <li>商品13</li>
        <li>商品14</li>
        <li>商品15</li>
        <li>商品16</li>
        <li>商品17</li>
        <li>商品18</li>
        <li>商品19</li>
        <li>商品20</li>
        <li>商品21</li>
        <li>商品22</li>
        <li>商品23</li>
        <li>商品24</li>
        <li>商品25</li>
        <li>商品26</li>
        <li>商品27</li>
        <li>商品28</li>
        <li>商品29</li>
        <li>商品30</li>
        <li>商品31</li>
        <li>商品32</li>
        <li>商品33</li>
        <li>商品34</li>
        <li>商品35</li>
        <li>商品36</li>
        <li>商品37</li>
        <li>商品38</li>
        <li>商品39</li>
        <li>商品40</li>
        <li>商品41</li>
        <li>商品42</li>
        <li>商品43</li>
        <li>商品44</li>
        <li>商品45</li>
        <li>商品46</li>
        <li>商品47</li>
        <li>商品48</li>
        <li>商品49</li>
        <li>商品50</li>
        <li>商品51</li>
        <li>商品52</li>
        <li>商品53</li>
        <li>商品54</li>
        <li>商品55</li>
        <li>商品56</li>
        <li>商品57</li>
        <li>商品58</li>
        <li>商品59</li>
        <li>商品60</li>
        <li>商品61</li>
        <li>商品62</li>
        <li>商品63</li>
        <li>商品64</li>
        <li>商品65</li>
        <li>商品66</li>
        <li>商品67</li>
        <li>商品68</li>
        <li>商品69</li>
        <li>商品70</li>
        <li>商品71</li>
        <li>商品72</li>
        <li>商品73</li>
        <li>商品74</li>
        <li>商品75</li>
        <li>商品76</li>
        <li>商品77</li>
        <li>商品78</li>
        <li>商品79</li>
        <li>商品80</li>
        <li>商品81</li>
        <li>商品82</li>
        <li>商品83</li>
        <li>商品84</li>
        <li>商品85</li>
        <li>商品86</li>
        <li>商品87</li>
        <li>商品88</li>
        <li>商品89</li>
        <li>商品90</li>
        <li>商品91</li>
        <li>商品92</li>
        <li>商品93</li>
        <li>商品94</li>
        <li>商品95</li>
        <li>商品96</li>
        <li>商品97</li>
        <li>商品98</li>
        <li>商品99</li>
        <li>商品100</li>
        <li>商品101</li>
        <li>商品102</li>
        <li>商品103</li>
        <li>商品104</li>
        <li>商品105</li>
        <li>商品106</li>
        <li>商品107</li>
        <li>商品108</li>
        <li>商品109</li>
        <li>商品110</li>
        <li>商品111</li>
        <li>商品112</li>
        <li>商品113</li>
        <li>商品114</li>
        <li>商品115</li>
        <li>商品116</li>
        <li>商品117</li>
        <li>商品118</li>
        <li>商品119</li>
        <li>商品120</li>
        <li>商品121</li>
        <li>商品122</li>
        <li>商品123</li>
        <li>商品124</li>
        <li>商品125</li>
        <li>商品126</li>
        <li>商品127</li>
        <li>商品128</li>
        <li>商品129</li>
        <li>商品130</li>
        <li>商品131</li>
        <li>商品132</li>
        <li>商品133</li>
        <li>商品134</li>
        <li>商品135</li>
        <li>商品136</li>
        <li>商品137</li>
        <li>商品138</li>
        <li>商品139</li>
        <li>商品140</li>
        <li>商品141</li>
        <li>商品142</li>
        <li>商品143</li>
        <li>商品144</li>
        <li>商品145</li>
        <li>商品146</li>
        <li>商品147</li>
        <li>商品148</li>
        <li>商品149</li>
        <li>商品150</li>
        <li>商品151</li>
        <li>商品152</li>
        <li>商品153</li>
        <li>商品154</li>
        <li>商品155</li>
        <li>商品156</li>
        <li>商品157</li>
        <li>商品158</li>
        <li>商品159</li>
        <li>商品160</li>
        <li>商品161</li>
        <li>商品162</li>
        <li>商品163</li>
        <li>商品164</li>
        <li>商品165</li>
        <li>商品166</li>
        <li>商品167</li>
        <li>商品168</li>
        <li>商品169</li>
        <li>商品170</li>
        <li>商品171</li>
        <li>商品172</li>
        <li>商品173</li>
        <li>商品174</li>
        <li>商品175</li>
        <li>商品176</li>
        <li>商品177</li>
        <li>商品178</li>
        <li>商品179</li>
        <li>商品180</li>
        <li>商品181</li>
        <li>商品182</li>
        <li>商品183</li>
        <li>商品184</li>
        <li>商品185</li>
        <li>商品186</li>
        <li>商品187</li>
        <li>商品188</li>
        <li>商品189</li>
        <li>商品190</li>
        <li>商品191</li>
        <li>商品192</li>
        <li>商品193</li>
        <li>商品194</li>
        <li>商品195</li>
        <li>商品196</li>
        <li>商品197</li>
        <li>商品198</li>
        <li>商品199</li>
        <li>商品200</li>
        <li>商品201</li>
        <li>商品202</li>
        <li>商品203</li>
        <li>商品204</li>
        <li>商品205</li>
        <li>商品206</li>
        <li>商品207</li>
        <li>商品208</li>
        <li>商品209</li>
        <li>商品210</li>
        <li>商品211</li>
        <li>商品212</li>
        <li>商品213</li>
        <li>商品214</li>
        <li>商品215</li>
        <li>商品216</li>
        <li>商品217</li>
        <li>商品218</li>
        <li>商品219</li>
        <li>商品220</li>
        <li>商品221</li>
        <li>商品222</li>
        <li>商品223</li>
        <li>商品224</li>
        <li>商品225</li>
        <li>商品226</li>
        <li>商品227</li>
        <li>商品228</li>
        <li>商品229</li>
        <li>商品230</li>
        <li>商品231</li>
        <li>商品232</li>
        <li>商品233</li>
        <li>商品234</li>
        <li>商品235</li>
        <li>商品236</li>
        <li>商品237</li>
        <li>商品238</li>
        <li>商品239</li>
        <li>商品240</li>
        <li>商品241</li>
        <li>商品242</li>
        <li>商品243</li>
        <li>商品244</li>
        <li>商品245</li>
        <li>商品246</li>
        <li>商品247</li>
        <li>商品248</li>
        <li>商品249</li>
        <li>商品250</li>
        <li>商品251</li>
        <li>商品252</li>
        <li>商品253</li>
        <li>商品254</li>
        <li>商品255</li>
        <li>商品256</li>
        <li>商品257</li>
        <li>商品258</li>
        <li>商品259</li>
        <li>商品260</li>
        <li>商品261</li>
        <li>商品262</li>
        <li>商品263</li>
        <li>商品264</li>
        <li>商品265</li>
        <li>商品266</li>
        <li>商品267</li>
        <li>商品268</li>
        <li>商品269</li>
        <li>商品270</li>
        <li>商品271</li>
        <li>商品272</li>
        <li>商品273</li>
        <li>商品274</li>
        <li>商品275</li>
        <li>商品276</li>
        <li>商品277</li>
        <li>商品278</li>
        <li>商品279</li>
        <li>商品280</li>
        <li>商品281</li>
        <li>商品282</li>
        <li>商品283</li>
        <li>商品284</li>
        <li>商品285</li>
        <li>商品286</li>
        <li>商品287</li>
        <li>商品288</li>
        <li>商品289</li>
        <li>商品290</li>
        <li>商品291</li>
        <li>商品292</li>
        <li>商品293</li>
        <li>商品294</li>
        <li>商品295</li>
        <li>商品296</li>
        <li>商品297</li>
        <li>商品298</li>
        <li>商品299</li>
        <li>商品300</li>
      </ul>
    </scroll>
    <back-top @click.native="backClick" v-show="backTopisShow"></back-top>
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
import BackTop from 'components/content/backTop/BackTop'

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
    BackTop
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
      currentType:'pop',
      backTopisShow:false
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
    },
    backClick(){
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    contentScroll(position){
      // console.log(position.y);
      if(position.y<-1000) this.backTopisShow=true
      if(position.y>-1000) this.backTopisShow=false
    },
    loadMore(){
      console.log('上拉加载更多');
      this.$refs.scroll.scroll.finishPullUp()
      // this.$refs.scroll拿到<scroll>组件 调用scroll组件里的data的scroll实例的finishPullUp方法
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