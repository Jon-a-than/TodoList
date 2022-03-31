<script lang="ts" setup>
import { ref } from 'vue';


const title = ref('')

const addList = () => {

}
</script>

<template>
  <div class="container">
    <form>
      <p>
        <span>📌</span>
        <input type="text" v-model="title" placeholder="List to do" />
      </p>
      <p>
        <select name="type">
          <option value="0">todo</option>
          <option value="1">doing</option>
          <option value="2">done</option>
        </select>
        <span>
          截止时间:
          <input type="datetime-local" />
        </span>
        <button type="button" @click="addList">🎁添加</button>
      </p>
    </form>
  </div>
</template>

<style lang="scss" scoped>
$hover: #ff69b4;

.container {
  margin-bottom: 40vh;
  width: 50%;
  @media (max-width: 920px) {
    min-width: 500px;
    @media (max-width: 600px) {
      width: 100%;
    }
  }
}
p {
  width: 100%;
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
select {
  outline: none !important;
  background-color: #000;
  color: #fff;
  font-size: 1.5rem;
  border: 0;
  option {
    border: 0 !important;
  }
}
button {
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
      border-radius: 20px;
      margin-bottom: 0;
    }
  }
}

.container form {
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
}
</style>