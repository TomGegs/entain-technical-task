import axios from 'axios';
import { apiResponseSchema } from '../models/apiResponseSchema';

//Manage API calls

const axiosApiInstance = axios.create({
    baseURL: 'https://api.neds.com.au/rest/v1/racing/',
    headers: { 'Content-Type': 'application/json' },
});

export const fetchRacesData = async () => {
    const response = await axiosApiInstance.get('?method=nextraces&count=10');
    return apiResponseSchema.parse(response.data.data);
};
