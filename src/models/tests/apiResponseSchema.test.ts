import { describe, it, expect } from 'vitest';
import { apiResponseSchema, apiResponseData } from '../apiResponseSchema';

describe('apiResponseSchema', () => {
    it('validates correct data structure', () => {
        const validData: apiResponseData = {
            next_to_go_ids: ['id1', 'id2'],
            race_summaries: {
                id1: {
                    advertised_start: { seconds: 1234567890 },
                    category_id: 'category1',
                    meeting_name: 'Meeting 1',
                    race_id: 'id1',
                    race_name: 'Race 1',
                    race_number: 1,
                },
                id2: {
                    advertised_start: { seconds: 1234567891 },
                    category_id: 'category2',
                    meeting_name: 'Meeting 2',
                    race_id: 'id2',
                    race_name: 'Race 2',
                    race_number: 2,
                },
            },
        };
        const result = apiResponseSchema.safeParse(validData);
        expect(result.success).toBe(true);
    });

    it('fails validation with incorrect data types', () => {
        const invalidData = {
            next_to_go_ids: [123, 'id2'], // Incorrect type in array
            race_summaries: {
                id1: {
                    advertised_start: { seconds: 'incorrect_type' }, // Should be a number
                    category_id: 'category1',
                    meeting_name: 'Meeting 1',
                    race_id: 'id1',
                    race_name: 'Race 1',
                    race_number: 1,
                },
            },
        };
        const result = apiResponseSchema.safeParse(invalidData);
        expect(result.success).toBe(false);
    });
});
