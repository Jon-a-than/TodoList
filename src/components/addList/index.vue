<script lang="ts" setup>
import router from '@/router';
import { useListStore } from '@/store';
import { reactive } from 'vue';

const listStore = useListStore()

// 新增list表单数据
const data = reactive({
  todo_name: '',
  description: '',
  end_time: ''
})

// 调用新增数据
const addList = async () => {
  if (data.todo_name && data.description && data.end_time) {
    await listStore.addList({
      todo_name: data.todo_name,
      description: data.description,
      end_time: Math.floor(new Date(data.end_time).getTime() / 1000)
    })
    router.push('/list')
  } else alert('请完善任务信息')
}

// 取消新增并返回主页
const cancle = () => router.push('/list')
</script>

<template>
  <div class="container">
    <p>
      <span>📌</span>
      <input type="text" v-model="data.todo_name" placeholder="任务标题" />
    </p>
    <p>
      <span>📝</span>
      <input type="text" v-model="data.description" placeholder="任务描述" />
    </p>
    <p>
      <span>
        ⏱
        <input type="datetime-local" v-model="data.end_time" />
      </span>
    </p>
    <div class="btn">
      <button type="button" @click="addList">📤添加</button>
      <button type="button" @click="cancle">🧷取消</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$hover: #ff69b4;

.container {
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
p {
  width: 100%;
  max-width: 800px;
  margin: 10px;
  transition: all 1s;
  flex-grow: 1;
  font-size: 1.5rem;
  border: 0px {
    bottom: 3px #fff solid;
  }
  &:hover {
    border-bottom: $hover 3px solid;
  }
  &:last-child {
    display: flex;
    justify-content: space-between;
  }
}
input[type="text"] {
  width: 90%;
  background-color: #000;
  color: #fff;
  font-size: 1.5rem;
  box-sizing: border-box;
  border: 0;
}
input:focus {
  outline: none;
  border-color: $hover;
}

button {
  width: 100%;
  transition: all 1s;
  background-color: #000;
  color: #fff;
  font-size: 1.5rem;
  border: 0;
  &:hover {
    color: #ffe07a;
  }
}

span {
  color: #fff;
  input {
    transition: all 1s;
    border: 0;
    font-size: 1.5rem;
    color: #fff;
    background-color: #000;
    user-select: none;
    &:hover {
      background-color: $hover;
      border-radius: 10px 0;
      margin-bottom: 0;
    }
  }
}
.btn {
  width: 80%;
  display: flex;
  justify-content: space-around;
}
</style>