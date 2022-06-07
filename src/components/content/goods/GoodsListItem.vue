<template>
  <div>
      <img :src="goodsItem.show.img" alt="">
  </div>
</template>

<script>
export default {
    props:{
        goodsItem:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style>

</style>