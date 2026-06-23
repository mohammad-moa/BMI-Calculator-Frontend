import axiosInstance, { AxiosError, AxiosInstance } from 'axios'
import config from './config'
import { LocalStorageService } from './storage'
import { generateUUID } from '@utils'

class ClientApi {
  http: AxiosInstance

  constructor() {
    this.http = axiosInstance.create({
      baseURL: config.apiUrl,
      timeout: config.timeout,
    })

    this.http.interceptors.request.use((request) => {
      const token = LocalStorageService.get<string>(config.token)
      if (token) {
        request.headers.Authorization = `Bearer ${token}`
      } else {
        const guestId = this.generateGuestId()
        console.log(guestId)

        request.headers['x-guest-id'] = guestId
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
              LocalStorageService.remove(config.token)
              return Promise.reject(error.response.data)
            default:
              return Promise.reject(error.response.data)
          }
        } else if (message.includes('timeout')) {
          message = 'Network Error'
        }
        return Promise.reject({ message })
      }
    )
  }

  private generateGuestId() {
    let guestId = LocalStorageService.get<string>(config.guestId)
    if (!guestId) {
      guestId = generateUUID()
      LocalStorageService.set(config.guestId, guestId)
    }
    return guestId
  }
}

const { http: axios } = new ClientApi()
export default axios
