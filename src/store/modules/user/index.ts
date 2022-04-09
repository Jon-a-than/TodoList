import { defineStore } from "pinia"
import { UserState } from "./types"
import { ApiPost } from "@/utils/request"

export const useUserStore = defineStore('user', {
  state: (): UserState => {
    return {
      name: ''
    }
  },
  actions: {
    // 登录
    async login(user_name: string, passwd: string) {
      const res: any = (await ApiPost('user/login', {
        user_name,
        passwd
      })).data
      console.log(res)
      if (res.code != 2000) {
        alert(res.message)
        return new Promise<boolean>(({}, reject) => reject(false))
      }
      else {
        alert('登录成功')
        this.$state.name = user_name
        localStorage.setItem('token', res.data[0].token)
        localStorage.setItem('first', new Date().toLocaleString())
        return new Promise<boolean>((resolve) => resolve(true))
      }
    }
  },
  persist: {
    enabled: true
  }
})