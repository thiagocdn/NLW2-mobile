import Axios from 'axios';

const api = Axios.create({
  baseURL: 'http://192.168.15.13:3333',
})

export default api;