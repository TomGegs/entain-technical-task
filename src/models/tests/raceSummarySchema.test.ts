import { describe, it, expect } from 'vitest';
import { raceSummarySchema, raceSummaryData } from '../raceSummarySchema';

describe('raceSummarySchema', () => {
    it('validates correct data structure', () => {
        const validRaceSummary: raceSummaryData = {
            advertised_start: { seconds: 1625072042 },
            category_id: '9daef0d7-bf3c-4f50-921d-8e818c60fe61',
            meeting_name: 'Summer Derby',
            race_id: 'race123',
            race_name: 'Championship Run',
            race_number: 5,
        };
        const result = raceSummarySchema.safeParse(validRaceSummary);
        expect(result.success).toBe(true);
    });

    it('fails validation with incorrect data types', () => {
        const invalidRaceSummary = {
            advertised_start: { seconds: 'not_a_number' }, // Should be a number
            category_id: '9daef0d7-bf3c-4f50-921d-8e818c60fe61',
            meeting_name: 'Summer Derby',
            race_id: 'race123',
            race_name: 'Championship Run',
            race_number: 'five', // Should be a number
        };
        const result = raceSummarySchema.safeParse(invalidRaceSummary);
        expect(result.success).toBe(false);
    });

    it('fails validation with missing required fields', () => {
        const incompleteRaceSummary = {
            advertised_start: { seconds: 1625072042 },
            race_id: 'race123',
            race_name: 'Championship Run',
            race_number: 5,
            // Missing category_id and meeting_name
        };
        const result = raceSummarySchema.safeParse(incompleteRaceSummary);
        expect(result.success).toBe(false);
    });
});
