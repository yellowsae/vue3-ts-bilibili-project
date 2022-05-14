<template >
  <!-- 轮播图 -->
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>
      <img src="">
    </van-swipe-item>
  </van-swipe>
</template>
<script lang="ts" setup>
import axios from 'axios'
import {ref} from 'vue'

axios({
  url: '/swiperList',
  method: 'get'
}).then(res => {
  console.log(res)
})
</script>
<style lang="less">
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
