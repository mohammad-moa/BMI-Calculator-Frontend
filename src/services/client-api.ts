import axiosInstance, { AxiosError, AxiosInstance } from 'axios'
import config from './config'
import { LocalStorageService } from './storage'

class ClientApi {
  http: AxiosInstance

  constructor() {
    this.http = axiosInstance.create({
      baseURL: config.apiUrl,
      timeout: config.timeout,
    })

    this.http.interceptors.request.use((request) => {
      const token = LocalStorageService.get<string>('token')
      if (token) {
        request.headers.Authorization = `Bearer ${token}`
      }
      return request
    })
    this.http.interceptors.response.use(
      (response) => response.data,
      (error: AxiosError) => {
        let message = error.message
        if (error.response) {
          switch (error.response.status) {
            case 401:
              LocalStorageService.remove('token')
              return Promise.reject(error)
            default:
              return Promise.reject(error.response.data)
          }
        } else if (message === `timeout of ${config.timeout}ms exceeded`) {
          message = 'Network Error'
        }
        return Promise.reject({ message })
      }
    )
  }
}

const { http: axios } = new ClientApi()
export default axios
