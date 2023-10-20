import axios from 'axios'
import {apiPoint} from '@/constants'
import {getItem} from '@/helpers/persistaneStorage'

axios.defaults.baseURL = apiPoint;

axios.interceptors.request.use(config => {
    const token = getItem('token')
    const authorization = token ? `Token ${token}` : ''
    config.headers.Authorization = authorization
    return config
})
export default axios;