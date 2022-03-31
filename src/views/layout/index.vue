<script lang="ts" setup>
import Header from '@/components/header/index.vue'
import router from '@/router';
import { useUserStore } from '@/store'

const userStore = useUserStore()
if(!userStore.token)
  router.push('/login')
</script>

<template>
  <div class="layout">
    <Header />
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100vh;
}
</style>