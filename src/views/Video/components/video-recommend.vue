<template >
  <div class="list">
    <VideoItem 
      :video="item"
      v-for="item in lists" 
      :key="item.id"/>
  </div>
</template>
<script lang="ts" setup>
import VideoItem from "@/components/app-video-item.vue"
import { ref } from "vue"
import axios from 'axios'


interface IVideoItem {
  commentCount: string;
  desc: string;
  id: string;
  imgSrc: string;
  link: string;
  playCount: string;
  videoSrc: string;
}
const lists = ref<IVideoItem[]>([])

axios({
  url: '/recommendList',
  method: 'get'
}).then(res => {
  lists.value = res.data.result
})

</script>
<style lang="less">
.list {
  display: flex;
  flex-wrap: wrap;
  padding: 0 1vw;
}
</style>
