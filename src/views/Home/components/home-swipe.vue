<template >
  <!-- 轮播图 -->
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="item in swipeList" :key="item.imgSrc">
      <img :src="item.imgSrc" />
    </van-swipe-item>
  </van-swipe>
</template>
<script lang="ts" setup>
import axios from 'axios'
import { ref } from 'vue'

interface swipeItem {
  imgSrc: string;
  link: string;
}

const swipeList = ref<swipeItem[]>([])
axios({
  url: '/swiperList',
  method: 'get'
}).then(res => {
  swipeList.value = res.data.result
})
</script>
<style lang="less">
.my-swipe {
  img { 
    width: 100%;
  }
}
</style>
