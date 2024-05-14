import axios from 'axios';
import { apiResponseSchema } from '../models/apiResponseSchema';

// Manage API calls

const axiosApiInstance = axios.create({
    baseURL: 'api/proxy', // proxy to avoid CORS issues
    // developer environment:
    // baseURL: 'https://api.neds.com.au/rest/v1/racing/',

    headers: { 'Content-Type': 'application/json' },
});

export const fetchRacesData = async () => {
    try {
        const response = await axiosApiInstance.get('/'); // query param handled by proxy
        //developer environment
        //   const response = await axiosApiInstance.get('/?method=nextraces&count=10');

        console.log(response);
        if (response.data && response.data.data) {
            return apiResponseSchema.parse(response.data.data);
        }
        throw new Error('Invalid data format from API');
    } catch (error) {
        console.error('Failed to fetch data:', error);
        throw error;
    }
};
