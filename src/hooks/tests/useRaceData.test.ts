import { describe, it, expect, vi, Mock } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useQuery } from 'react-query';
import useRaceData from '../useRaceData';

// Mock the react-query module
vi.mock('react-query', () => ({
    useQuery: vi.fn(),
}));

describe('useRaceData', () => {
    it('correctly processes and sorts race data', async () => {
        const mockData = {
            race_summaries: {
                '1': {
                    advertised_start: { seconds: Date.now() / 1000 + 120 },
                    race_id: '1',
                },
                '2': {
                    advertised_start: { seconds: Date.now() / 1000 + 300 },
                    race_id: '2',
                },
                '3': {
                    advertised_start: { seconds: Date.now() / 1000 - 150 },
                    race_id: '3',
                },
            },
        };

        // Configure the mock to return the expected data
        (useQuery as Mock).mockReturnValue({
            data: mockData,
            isLoading: false,
            error: null,
        });

        const { result } = renderHook(() => useRaceData());

        // Expect the hook to return sorted races by the advertised start time
        expect(result.current.sortedRaces).toHaveLength(3);
        expect(result.current.sortedRaces[0].race_id).toBe('3'); // Soonest past
        expect(result.current.isLoading).toBe(false);
    });

    it('handles the loading state correctly', () => {
        (useQuery as Mock).mockReturnValue({
            data: null,
            isLoading: true,
            error: null,
        });

        const { result } = renderHook(() => useRaceData());
        expect(result.current.sortedRaces).toEqual([]);
        expect(result.current.isLoading).toBe(true);
    });

    it('handles errors correctly', () => {
        const mockError = new Error('An error occurred');
        (useQuery as Mock).mockReturnValue({
            data: null,
            isLoading: false,
            error: mockError,
        });

        const { result } = renderHook(() => useRaceData());
        expect(result.current.error).toBe(mockError);
    });
});
