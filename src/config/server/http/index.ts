import axios from 'axios'
const { API_BASE_PATH } = process.env
console.log(API_BASE_PATH)
export const instance = axios.create({
  baseURL: API_BASE_PATH,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
})

const get = (path: string, params: any) => instance.get(path, { params })
const post = (path: string, params: any, body: object) => instance.post(path, body, { params })
const methodDelete = (path: string, params: any) => instance.delete(path, { params })

export {
  get,
  post,
  methodDelete
}
