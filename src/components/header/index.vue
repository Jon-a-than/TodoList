<script lang="ts" setup>
import { useUserStore } from '@/store'

const userStore = useUserStore()

const sayHi = (): string => {
  const now = new Date().getHours()
  if (now < 3 && now > 18) {
    return '晚上好'
  } else if (now < 9) {
    return '早上好'
  } else if (now < 12) {
    return '上午好'
  } else {
    return '下午好'
  }
}

</script>

<template>
  <header>
    <span>TodoList</span>
    <p v-if="userStore.name">
      <span>Hi!</span>
      {{ userStore.name }}
      <span>,{{ sayHi() }}</span>
    </p>
    <p v-else>
      <span>请登录🍉</span>
    </p>
  </header>
</template>

<style lang="scss" scoped>
header {
  color: #fff;
  padding: 10px;
  background-color: #ffffff2c;
  border-bottom: 5px #7e4fff solid;
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  p {
    padding: 0;
    margin: 0;
    color: #7e4fff;
    span {
      color: #eeeeee;
    }
  }
}
</style>