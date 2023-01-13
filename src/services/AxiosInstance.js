import axios from "axios"

const token = localStorage.getItem('token') ? localStorage.getItem('token') : null
const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: '*',
  },
})

export default instance