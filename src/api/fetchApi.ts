// Greyhound:category_id: '9daef0d7-bf3c-4f50-921d-8e818c60fe61'
// Harness: category_id: '161d9be2-e909-4326-8c2c-35ed71fb460b'
// Horse : category_id: '4a2788f8-e825-4d36-9894-efd4baf1cfae'

// GET https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10

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
