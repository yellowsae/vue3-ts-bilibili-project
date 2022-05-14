<template>
  <!-- 首页视频 -->
  <div class="list">
    <!-- AppVideoItem 视频的每个项 -->
    <AppVideoItem 
      :key="item.id"
      :video="item"
      v-for="item in VideoLists" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import axios from 'axios'

// 视频的单个项, 封装为公共的组件
import AppVideoItem from '@/components/app-video-item.vue'

interface IVideoItem {
  id: number;
  commentCount: string;
  desc: string;
  imgSrc: string;
  link: string;
  playCount: string;
  videoSrc: string;
}

const VideoLists = ref<IVideoItem[]>([])
axios({
  method: 'get',
  url: '/videosList'
}).then(res => {
  VideoLists.value = res.data.result
})
</script>
<style lang="less">
.list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 1vw;
}
</style>
