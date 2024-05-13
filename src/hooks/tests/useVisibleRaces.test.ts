import { describe, it, expect, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import useVisibleRaces from '../useVisibleRaces';
import { raceSummaryData } from '../../models/raceSummarySchema';

vi.mock('../useVisibleRaces', () => ({
    default: vi.fn(() => [
        {
            race_id: '1',
            category_id: '101',
            meeting_name: 'Race 1',
            race_number: 1,
            advertised_start: { seconds: 123456789 },
        },
    ]),
}));
describe('useVisibleRaces', () => {
    it('should correctly filter races that are within 60 seconds of starting', () => {
        const mockNow = new Date();
        vi.useFakeTimers();
        vi.setSystemTime(mockNow);

        const sortedRaces: raceSummaryData[] = [
            {
                advertised_start: {
                    seconds: (mockNow.getTime() + 30000) / 1000,
                },
                category_id: '1',
                meeting_name: 'Meeting A',
                race_id: 'R1',
                race_name: 'Race 1',
                race_number: 1,
            },
            {
                advertised_start: {
                    seconds: (mockNow.getTime() + 90000) / 1000,
                },
                category_id: '2',
                meeting_name: 'Meeting B',
                race_id: 'R2',
                race_name: 'Race 2',
                race_number: 2,
            },
            {
                advertised_start: {
                    seconds: (mockNow.getTime() - 7000) / 1000,
                },
                category_id: '3',
                meeting_name: 'Meeting C',
                race_id: 'R3',
                race_name: 'Race 3',
                race_number: 3,
            },
        ];

        const { result } = renderHook(() => useVisibleRaces(sortedRaces));

        expect(result.current.length).toBe(1);
        expect(result.current[0]).toEqual(sortedRaces[0]);
    });

    it('should ensure there are always 5 visible races, padding with null if necessary', () => {
        const mockNow = new Date();
        vi.useFakeTimers();
        vi.setSystemTime(mockNow);

        const sortedRaces: raceSummaryData[] = [
            {
                advertised_start: {
                    seconds: (mockNow.getTime() + 30000) / 1000,
                },
                category_id: '1',
                meeting_name: 'Meeting A',
                race_id: 'R1',
                race_name: 'Race 1',
                race_number: 1,
            },
            {
                advertised_start: {
                    seconds: (mockNow.getTime() + 45000) / 1000,
                },
                category_id: '2',
                meeting_name: 'Meeting B',
                race_id: 'R2',
                race_name: 'Race 2',
                race_number: 2,
            },
        ];

        const { result } = renderHook(() => useVisibleRaces(sortedRaces));

        expect(result.current.length).toBe(5);
        expect(result.current.slice(0, 2)).toEqual(sortedRaces);
        expect(result.current.slice(2)).toEqual([null, null, null]); // Check for padding with nulls
    });
});
