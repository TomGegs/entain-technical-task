import axios from 'axios';
import { apiResponseSchema } from '../models/apiResponseSchema';

// Manage API calls

const axiosApiInstance = axios.create({
    baseURL: 'api/proxy', // local proxy endpoint
    headers: { 'Content-Type': 'application/json' },
});

export const fetchRacesData = async () => {
    try {
        const response = await axiosApiInstance.get('/'); // query param handled by proxy
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
