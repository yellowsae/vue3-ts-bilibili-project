<template>
  <!-- 视频头部公共组件 -->
  <AppHeader />

  <!-- 视频播放 -->
  <VideoPlay :videoInfo="videoInfo" />

  <!-- 视频信息 -->
  <VideoInfo :videoInfo="videoInfo"/>

  <!-- 视频底部内容 -->
  <VideoButton />
</template>

<script lang="ts" setup>
import AppHeader from "@/components/app-header.vue"
import VideoPlay from "./components/video-play.vue"
import VideoInfo from "./components/video-info.vue"
import VideoButton from "./components/video-bottom.vue"
import { ref } from "vue"
import { useRoute } from "vue-router"  // 引入路由组件
import axios from 'axios'


const route = useRoute()  //拿到路由参数

// console.log(route.params.id)

interface IVideoInfo {
  author?: string
  authorIconSrc?: string
  commentCount?: number
  date?: string
  id?: string
  poster?: string
  playCount?: string
  likeCount?: string
  favCount?: string
  videoSrc?: string
  videoTitle?: string
}

const videoInfo = ref<IVideoInfo>({})
// 视频的详情信息
axios({
  url: '/videoDetail',
  method: 'GET',
  params: { id: route.params.id }
}).then(res => {
  videoInfo.value = res.data.result
})

</script>

<style lang="less" scoped>
</style>
