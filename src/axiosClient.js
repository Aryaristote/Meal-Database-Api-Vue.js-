import axios from 'axios';

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL, // If you are using .env file
    // baseURL: 'https://www.themealdb.com/api/json/v1/1/', // If you put the API directly in AXIO
});

export default axiosClient;