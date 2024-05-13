/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

export default async (req: any, res: any) => {
    try {
        const apiUrl = 'https://api.neds.com.au/rest/v1/racing/';
        const params = new URLSearchParams({
            method: 'nextraces',
            count: '10',
        });

        // Make the API request
        const response = await axios.get(`${apiUrl}?${params}`);

        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to fetch data',
            error: (error as Error).message,
        });
    }
};
