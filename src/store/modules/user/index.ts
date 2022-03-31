import { defineStore } from "pinia"
import { UserState } from "./types"
import { ApiPost } from "@/utils/request"

export const useUserStore = defineStore('user', {
  state: (): UserState => {
    return {
      name: 'Jonathan',
      token: ''
    }
  },
  actions: {
    async login(user_name: string, passwd: string) {
      const res: any = (await ApiPost('user/login', {
        user_name,
        passwd
      })).data
      console.log(res)
      if (res.code != 2000) {
        alert(res.message)
      }
      else {
        alert('登录成功')
        this.$state.token = res.data[0].token
        this.$state.name = user_name
        localStorage.setItem('token', res.data[0].token);
      }
    }
  }
})