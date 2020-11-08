import axios from 'axios';
import { API_URL } from './constants'

// const token = ''

const instance = axios.create({
    baseURL: API_URL,
    // headers: { Authorization: `Bearer ${token}` }
});

export default instance;