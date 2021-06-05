//Configuration data for Unsplash API in customized Axious instance
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID <apiAccessKey>'
    }
});
