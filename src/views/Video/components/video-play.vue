<template >
  <div class="video-play">
    <video controls class="video" :poster="videoInfo.poster" :src="videoInfo.videoSrc"></video>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from "vue"
import { IVideoInfo } from "../types"
defineProps({
  videoInfo: {
    type: Object as PropType<IVideoInfo>,
    required: true
  }
})
</script>
<style lang="less">
.video-play {
  background-color: #000;
  .video {
    width: 100%;
    min-width: 210px;
  }
}
</style>
