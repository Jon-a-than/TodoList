import axios from "axios"

// axios.defaults.baseURL = "http://localhost:3000"
axios.defaults.baseURL = "http://todoapi.mjclouds.com/v1"

export const ApiGet = (url: string, params?: any) => {
  return axios.get(url, params)
}

export const ApiPost = (url: string, params?: any) => {
  return axios.post(url, params)
}

export const ApiDelete = (url: string, params?: any) => {
  return axios.delete(url, params)
}

export const ApiPut = (url: string, data?: any, config?: any) => {
  return axios.put(url, data, config)
}