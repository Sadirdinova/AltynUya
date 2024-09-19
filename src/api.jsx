import axios from 'axios'

export const Api = axios.create({
    baseURL: 'https://edu.altynuya.kg/api'
})