<script lang="ts" setup>
import { useListStore } from '@/store'
import { reactive } from 'vue';

const type = ['Todo', 'Doing', 'Done']
const props = defineProps({
  btnColor: {
    type: String,
    default: '#c5f3ff'
  },
  title: {
    type: String,
    default: '',
  },
  themeColor: {
    type: String,
    default: '#4fcf2f',
  },
  bgColor: {
    type: String,
    default: '#a6e3ff',
  },
  lists: {
    type: Object,
    default: [],
  },
})

const listStore = useListStore()
const lists = listStore.$state[props.title]

for (let i = 0, j = 0; i < 3; i++) {
  if (type[i] != props.title)
    type[j++] = type[i]
}
type.length = 2


const deleteList = (id: number) => listStore.deleteList(id)

</script>

<template>
  <div class="container">
    <h1>{{ props.title }}</h1>
    <div class="itemBox">
      <div>
        <div class="item" v-for="(item, index) in lists" :key="index">
          <h3>📌{{ index + 1 }}.{{ item.todo_name }}</h3>
          <p>{{ item.description }}</p>
          <time>{{ item.end_time }}</time>
          <div class="buttonBox">
            <button class="btn" type="button" @click="deleteList(item.ID)">Delete</button>
            <button class="btn" type="button" @click="">{{ type[0] }}</button>
            <button class="btn" type="button" @click="">{{ type[1] }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$themeColor: v-bind("props.themeColor");
$bgColor: v-bind("props.bgColor");
$btnColor: v-bind("props.btnColor");
.container {
  border: {
    top: 5px solid;
    color: $themeColor;
    radius: 0 0 15px 15px;
  }
  width: 400px;
  height: 80%;
  &:hover {
    box-shadow: 0 10px 10px #808080;
  }
  h1 {
    color: $themeColor;
    text-align: center;
  }
}

.itemBox {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80%;
  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    overflow: hidden scroll;
    &::-webkit-scrollbar {
      background: #00000000;
    }
  }
}

h3 {
  margin: 2px;
}

.item {
  margin: 10px;
  width: 80%;
  background-color: $bgColor;
  transition: all 0.3s;
  border: {
    left: 3px solid;
    color: $themeColor;
  }
  border-radius: 0 5px 5px 0;
  &:hover {
    border-left: 5px solid $themeColor;
    width: 90%;
    .btn {
      height: 30px;
      opacity: 1;
    }
  }
}

.btn {
  transition: all 0.5s;
  height: 0;
  margin: 0;
  box-sizing: border-box;
  padding: 2px;
  overflow: hidden;
  background-color: $btnColor;
  border: 0 {
    left: 3px solid $themeColor;
  }
  opacity: 0;
  &:hover {
    border-left-width: 5px;
    padding: 2px 10px;
  }
}

.buttonBox {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 3px;
}
</style>