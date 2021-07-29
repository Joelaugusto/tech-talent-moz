

const axios = require('axios').default;



const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {'Content-Type': 'application/json','Authorization':document.cookie}
});

export default api;



