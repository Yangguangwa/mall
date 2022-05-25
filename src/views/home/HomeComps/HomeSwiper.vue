<template>
  <div>
      <slider class="slider" animation="normal" height="30vh">
      <slider-item v-for="(i, index) in banners" :key="index">
        <a :href="i.link">
          <img :src="i.image">
        </a>
        
      </slider-item>
    </slider>
  </div>
</template>

<script>
import EasySlider from 'vue-easy-slider'
export default {
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
        
    }
}
</script>

<style>
.slider img{
  position: fixed;
  width: 100vw;
  height: 30vh;
}
</style>