import axios from 'axios';


const baseurl = import.meta.env.VITE_API_URL 

const Api = axios.create({
    baseURL: baseurl
});

export default Api;
