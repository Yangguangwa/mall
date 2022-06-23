<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
      
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    data(){
        return {
            scroll:null
        }
    },
    props:{
        probeType:{
            Type:Number,
            default(){
                return 0
            }
        },
        pullUpLoad:{
            Type:Boolean,
            default(){
                return false
            }
        }
    },
    mounted(){

        this.scroll=new BScroll(this.$refs.wrapper,{
            observeDom:true,
            click:true,
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad
        })

        this.scroll.on('scroll',(position)=>{
            // console.log(position);
            this.$emit('scroll',position)
        })

        this.scroll.on('pullingUp',()=>{
            // console.log('上拉加载');
            this.$emit('pullingUp')
        })
    }
}
</script>

<style>

</style>