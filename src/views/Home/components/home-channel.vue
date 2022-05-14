<template >
  <van-tabs v-model:active="active">
    <van-tab 
      v-for="item of lists" 
      :key="item.id" 
      :title="item.text"></van-tab>
  </van-tabs>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import axios from "axios"

// 使用接口来约束得到的数据，是什么类型；
// 这样在循环时候才不会警告
interface INavItem {
  id: string,
  text: string,
}


const active = ref(0)
//  ref<INavItem[]>([]); 泛型
// 表示list 数据为数组，数组的每一项需要符合 INavItem 接口的类型
// TypeScript 好处： 模板中使用 list 时，有数据类型的提醒
const lists = ref<INavItem[]>([]);
axios({
  url: '/navList',
  method: 'get'
}).then(res => {
  // 赋值
  lists.value = res.data.result
})
</script>
<style lang="less">
</style>
