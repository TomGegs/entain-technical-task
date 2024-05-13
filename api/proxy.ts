import axios from 'axios';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async (_req: VercelRequest, res: VercelResponse) => {
    try {
        const response = await axios.get(
            'https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10'
        );
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};
