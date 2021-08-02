
const axios = require('axios').default;



const api = axios.create({
    baseURL: 'http://localhost:8080',
});

api.interceptors.request.use(config => {
    config.headers['Authorization'] = localStorage.getItem('access-token');
    return config;
})


export default api;



