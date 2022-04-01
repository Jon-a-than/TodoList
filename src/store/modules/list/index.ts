import { ApiDelete, ApiGet, ApiPut } from "@/utils/request"
import axios from "axios"
import { defineStore } from "pinia"

export const useListStore = defineStore('list', {
  state: (): any => {
    return {
      Todo: [],
      Doing: [],
      Done: []
    }
  },
  actions: {
    /* 获取todo列表 */
    async requireList() {
      this.$reset()
      const res = (await ApiGet('todo/list', {
        headers: {
          token: localStorage.getItem('token')
        }
      })).data
      if (res.code === 2000) {
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].status === 0) {
            this.$state.Todo.push(res.data[i])
          } else if (res.data[i].status === 1) {
            this.$state.Doing.push(res.data[i])
          } else if (res.data[i].status === 2) {
            this.$state.Done.push(res.data[i])
          }
        }
      }
      else
        alert(res.message)
    },
    /* 删除列表 */
    async deleteList(id: number) {
      const res = (await ApiDelete(`todo/del/${id}`, {
        headers: {
          token: localStorage.getItem('token')
        }
      }))
      if (res.data.code === 2000) {
        this.requireList()
        alert('删除成功')
        this.sort()
      } else alert(res.data.message)
    },
    /* 新增todo项 */
    async addList(data: { todo_name: string; description: string; end_time: number }) {
      const res = await ApiPut('todo/add', data, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      // console.log(res)
      if(res.data.code == 2000)
        alert('添加成功')
      else alert(res.data.message)
    },
    /* 按时间排序 */
    sort() {
      this.$state.Todo.sort((a: any, b: any) => {
        return new Date(a.end_time).getTime() - new Date(b.end_time).getTime()
      })
      this.$state.Doing.sort((a: any, b: any) => {
        return new Date(a.end_time).getTime() - new Date(b.end_time).getTime()
      })
      this.$state.Done.sort((a: any, b: any) => {
        return new Date(a.end_time).getTime() - new Date(b.end_time).getTime()
      })
    },

  }
})