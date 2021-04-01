

const axios = require('axios').default;



const api = axios.create({
    baseURL: 'http://localhost/tech-talent-back-moz/public/api'
});

export default api;



