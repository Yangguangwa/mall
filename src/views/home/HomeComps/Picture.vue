<template>
    <div>
        <div class="HomePicture" v-for="(item,id) in pictures" :key="id">
            <img :src="item.head_img" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props:{
        pictures:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
.HomePicture{
    display: flex;

    height: 550px;
}
</style>