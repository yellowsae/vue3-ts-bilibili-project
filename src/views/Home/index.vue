<template>
  <!-- 头部组件 -->
  <AppHeader />
  <!-- 频道组件 -->
  <HomeChannel />
  <!-- 轮播组件 -->
  <HomeSwipe />
</template>

<script lang="ts" setup>
import AppHeader from "@/components/app-header.vue"
import HomeChannel from './components/home-channel.vue'
import HomeSwipe from './components/home-swipe.vue'
</script>

<style lang="less" scoped>
</style>
