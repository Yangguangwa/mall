<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">购物车</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  components:{
    NavBar
  }
}
</script>

<style>
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
</style>