import axios from 'axios'


const instance = axios.create({
    baseURL: `https://api.alquran.cloud/v1/quran`
})

export { instance }