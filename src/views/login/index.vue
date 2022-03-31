<script lang="ts" setup>
import { useUserStore } from '@/store'
import { reactive } from 'vue'
import router from '@/router'


const userStore = useUserStore()

const loginMessage = reactive({
  user_name: '',
  passwd: ''
})

if (localStorage.getItem('token') != '')
  router.push('/list')
const login = async () => {
  if (loginMessage.user_name && loginMessage.passwd) {
    userStore.login(loginMessage.user_name, loginMessage.passwd)
    setTimeout(() => {
      if (localStorage.getItem('token') != '')
        router.push('/list')
    }, 1000)
  } else alert('请输入用户名和密码')
}
</script>

<template>
  <div class="container">
    <form>
      <p>
        <span>ID:</span>
        <input type="text" placeholder="请输入用户名" v-model="loginMessage.user_name" />
      </p>
      <p>
        <span>KEY:</span>
        <input type="password" placeholder="请输入密码" v-model="loginMessage.passwd" />
      </p>
      <div class="button">
        <button type="button" @click="login">登录</button>
        <button>注册</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

form {
  margin-top: 30px;
  width: 40%;
  border-top: 5px solid #fff01a;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 0 0 15px 15px;
  max-height: 70%;
  &:hover {
    box-shadow: 0 10px 10px #6d6d6d;
  }
  @media (max-width: 768px) {
    width: 80%;
    @media (max-width: 480px) {
      width: 100%;
    }
  }
}

input {
  text-align: center;
  transition: all 0.5s;
  flex-grow: 1;
  padding: 0;
  padding-left: 20px;
  border: 0;
  border-radius: 0;
  font-size: 1.2rem;
  background: #000;
  color: #fff;
  outline: none !important;
  &:hover {
    border-bottom: 3px solid #fff01a;
  }
}
span {
  width: 100px;
}

p {
  width: 100%;
  margin: 10px;
  height: 30px;
  color: #fff;
  font-size: 1.2rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  overflow-x: hidden;
}

.button {
  display: flex;
  justify-content: space-around;
}

button {
  transition: all 0.5;
  flex-grow: 1;
  margin: 20px;
  border-radius: 0;
  border: 1px dotted #fff01a;
  background: #00000000;
  color: #fff;
  font-size: 1.2rem;
  &:hover {
    border-style: solid;
  }
}
</style>