import axios from "axios"

axios.defaults.timeout = 20 * 1000
axios.defaults.baseURL = "http://localhost:4000"

axios.interceptors.request.use(
    (config) => {
        config.headers = {
            "Content-Type": "application/json",
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

export function Delete(url: string, data = {}) {
    return new Promise((resolve, reject) => {
        axios.delete(url, data).then(
            (response) => {
                resolve(response.data)
            },
            (err) => {
                reject(err)
            }
        )
    })
}
