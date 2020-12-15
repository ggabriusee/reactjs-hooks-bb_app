import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-dc031-default-rtdb.firebaseio.com/'
});

export default instance;