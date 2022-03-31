<script lang="ts" setup>
import AddList from '@/components/addList/index.vue'
import List from '@/components/list/index.vue'
import { useListStore } from '@/store';

useListStore().requireList()
const listType = [{
  btnColor: '#c5f3ff',
  bgColor: '#a6e3ff',
  title: 'Todo',
  themeColor: '#2b5dff',
}, {
  btnColor: '#aeffa3',
  bgColor: '#e0fae2',
  title: 'Doing',
  themeColor: '#7ec96c',
}, {
  btnColor: '#ff9582',
  bgColor: '#ffe9e9',
  title: 'Done',
  themeColor: '#c42943',
}]
</script>

<template>
  <main>
    <AddList v-if="0" />
    <section v-else>
      <List
        v-for="item in listType"
        :title="item.title"
        :themeColor="item.themeColor"
        :bgColor="item.bgColor"
        :btnColor="item.btnColor"
      />
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 90%;
  width: 100%;
}
section {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>