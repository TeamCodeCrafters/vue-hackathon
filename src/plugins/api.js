import axios from 'axios'

const api = axios.create({
    baseURL: `https://django-hackathon.4.us-1.fl0.io/`,
})

api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`            
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
) 

export default api