import axios from 'axios'
import {apiPoint, localApiPoint} from '@/constants'
import {getItem} from '@/helpers/persistaneStorage'


axios.defaults.baseURL = localApiPoint;

axios.interceptors.request.use(config => {
    const token = getItem('token')
    const authorization = token ? `Token ${token}` : ''
    config.headers.Authorization = authorization
    return config
})
export default axios;