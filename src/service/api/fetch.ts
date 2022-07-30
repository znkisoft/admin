import axios from "axios"

axios.defaults.timeout = 100000
axios.defaults.baseURL = "http://localhost:8080"

axios.interceptors.request.use(
  (config) => {
    config.data = JSON.stringify(config.data)
    config.headers = {
      "Content-Type": "application/x-protobuf",
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use()

export function Get(url: string, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
      })
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function Post(url: string, data: unknown) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      (response) => {
        //关闭进度条
        resolve(response.data)
      },
      (err) => {
        reject(err)
      }
    )
  })
}

export function Put(url: string, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(
      (response) => {
        resolve(response.data)
      },
      (err) => {
        reject(err)
      }
    )
  })
}
