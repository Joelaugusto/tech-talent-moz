import {getAccessToken} from './cookies';

const axios = require('axios').default;



const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {'Content-Type': 'application/json','Authorization':getAccessToken()}
});

export default api;



