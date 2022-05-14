<template >
  <div class="comment" v-for="item in lists" :key="item.id">
    <div class="comment-head">
      <img class="avatar" :src="item.avatar" alt="" />
    </div>
    <div class="comment-body">
      <p class="username">{{ item.username }}</p>
      <p class="date">{{ item.date }}</p>
      <p class="content">{{ item.content }}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import axios from 'axios'
import { ref } from 'vue'

interface IComment {
  avatar: string;
  content: string;
  date: string;
  id: string;
  username: string;
}
const lists = ref<IComment[]>([])
axios({
  url: '/commentsList',
  method: 'get'
}).then(res => {
  lists.value = res.data.result.items
})
</script>
<style lang="less">
.comment {
  display: flex;
  padding: 4vw;
  font-size: 3.5vw;
  line-height: 1.5;

  .comment-head {
    .avatar {
      width: 8vw;
      height: 8vw;
      border-radius: 50%;
      margin-right: 4vw;
    }
  }

  .comment-body {
    flex: 1;

    .username {
      color: #757575;
    }

    .date {
      color: #999;
      font-size: 3.2vw;
    }

    .content {
      color: #212121;
      margin-top: 3vw;
    }
  }
}
</style>
