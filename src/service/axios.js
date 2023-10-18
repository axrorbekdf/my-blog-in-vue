import axios from 'axios'
import {apiPoint} from '@/constants'

axios.defaults.baseURL = apiPoint;

export default axios;