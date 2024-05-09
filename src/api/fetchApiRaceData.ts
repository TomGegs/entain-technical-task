// Greyhound:category_id: '9daef0d7-bf3c-4f50-921d-8e818c60fe61'
// Harness: category_id: '161d9be2-e909-4326-8c2c-35ed71fb460b'
// Horse : category_id: '4a2788f8-e825-4d36-9894-efd4baf1cfae'

// GET https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10

import axios from 'axios';
import { apiResponseSchema } from '../models/apiResponseSchema';

const fetchApiRaceData = async () => {
    try {
        const response = await axios.get(
            'https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10'
        );

        // Logging the whole response object for debugging purposes
        console.log('Response received:', response);

        if (response.data && response.data.data) {
            const apiResponse = apiResponseSchema.parse(response.data.data);
            console.log('Validated API response:', apiResponse);
            // Returning the validated data if needed elsewhere or just logging it
            return apiResponse;
        } else {
            throw new Error('Invalid API response structure');
        }
    } catch (error) {
        console.error(
            'Failed to fetch or parse API data:',
            (error as Error).message || error
        );
    }
};

export default fetchApiRaceData;
