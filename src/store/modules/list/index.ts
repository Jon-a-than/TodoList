import { ApiGet } from "@/utils/request"
import { defineStore } from "pinia"

export const useListStore = defineStore('list', {
  state: () => {
    return {
      Todo: [],
      Doing: [],
      Done: []
    }
  },
  actions: {
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
    },
    async deleteList(id: number) {
      const res = (await ApiGet(`todo/del:${id}`, {
        headers: {
          token: localStorage.getItem('token')
        },
      }))
      console.log(res)
      if (res.data.code === 2000) {
        this.requireList()
        alert('删除成功')
      }
    },
    sort() {
      this.$state.todo.sort((a, b) => {
        return new Date(a.end_time).getTime - new Date(b.end_time)
      })
      this.$state.doing.sort((a, b) => {
        return new Date(a.end_time).getTime - new Date(b.end_time)
      })
      this.$state.done.sort((a, b) => {
        return  new Date(a.end_time).getTime - new Date(b.end_time)
      })
    }
  }
})