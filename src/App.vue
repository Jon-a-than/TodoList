<script lang="ts" setup>

if(!localStorage.getItem('first')) {
  localStorage.setItem('token', '')
  localStorage.setItem('first', 'true')
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
