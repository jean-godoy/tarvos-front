import axios from 'axios';


//define a URL da api
const axiosApi = axios.create({
    baseURL: 'http://localhost:3333',
});

export default axios;