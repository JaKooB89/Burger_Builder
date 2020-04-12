import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL: 'https://burger-builder-f185f.firebaseio.com/'
});

export default AxiosInstance;