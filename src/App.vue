<script lang="ts" setup>
import router from './router';

// 判断token是否存在且是否过期
let firstTime: string | null = localStorage.getItem('first')
if (!firstTime) {
  localStorage.setItem('token', '')
}
// 24小时候token过期
else if (new Date().getTime() - new Date(firstTime).getTime() > 1000 * 60 * 60 * 24) {
  localStorage.setItem('token', '')
  router.push('/login')
}
</script>

<template>
  <router-view />
</template>

<style lang="scss">
body {
  background: #000;
  margin: 0;
  overflow: hidden;
}
</style>
