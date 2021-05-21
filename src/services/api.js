

const axios = require('axios').default;



const api = axios.create({
    baseURL: 'http://192.168.22.176:8083/api'
});

export default api;



