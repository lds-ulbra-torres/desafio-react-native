import Axios from 'axios';

const api = Axios.create({
    baseURL: 'https://swapi.co/api'
});

export default api;