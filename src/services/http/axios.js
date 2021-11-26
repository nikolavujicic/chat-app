import axios from 'axios'
const { REACT_APP_BASE_URL, REACT_APP_TOKEN } = process.env

export const http = axios.create({
    baseURL: REACT_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'token': REACT_APP_TOKEN
    }
})