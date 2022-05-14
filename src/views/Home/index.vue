<template>
  <!-- 头部组件 -->
  <AppHeader />
  <!-- 频道组件 -->
  <HomeChannel />
  <!-- 轮播组件 -->
  <HomeSwipe />
  <!-- 首页视频项 -->
  <homeVideoListVue />
</template>

<script lang="ts" setup>
import AppHeader from "@/components/app-header.vue"
import HomeChannel from './components/home-channel.vue'
import HomeSwipe from './components/home-swipe.vue'
import homeVideoListVue from "./components/home-video-list.vue";
</script>

<style lang="less" scoped>
</style>
